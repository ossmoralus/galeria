export function isValidDimension(input: string | null): { ok: boolean; isPercent: boolean } {
  if (input === null) return { ok: false, isPercent: false };
  if (/^\d+%$/.test(input)) return { ok: true, isPercent: true };
  if (/^\d+$/.test(input)) return { ok: parseInt(input, 10) > 0, isPercent: false };
  return { ok: false, isPercent: false };
}

export function manipulateSvgDimensions(
  svgContent: string,
  widthParam: string | null,
  heightParam: string | null
): string {
  const widthInfo = isValidDimension(widthParam);
  const heightInfo = isValidDimension(heightParam);

  if (widthParam !== null && widthInfo.ok === false) return svgContent;
  if (heightParam !== null && heightInfo.ok === false) return svgContent;

  let resultContent = svgContent;
  const viewBoxMatch = resultContent.match(/viewBox=["']([^"']+)["']/);
  let viewBoxStr = viewBoxMatch?.[1] ?? '';

  const widthMatch = resultContent.match(/width=["']([^"']+)["']/);
  const heightMatch = resultContent.match(/height=["']([^"']+)["']/);
  const originalWidth = widthMatch?.[1] ?? '100%';
  const originalHeight = heightMatch?.[1] ?? '100%';

  if (viewBoxStr === '') {
    const parsedW = parseFloat(originalWidth.replace(/[^\d.]/g, ''));
    const parsedH = parseFloat(originalHeight.replace(/[^\d.]/g, ''));
    const origW = !Number.isNaN(parsedW) && parsedW !== 0 ? parsedW : 1000;
    const origH = !Number.isNaN(parsedH) && parsedH !== 0 ? parsedH : 1000;
    viewBoxStr = `0 0 ${origW} ${origH}`;
    resultContent = resultContent.replace(/<svg/, `<svg viewBox="${viewBoxStr}"`);
  }

  let newWidth = widthParam ?? originalWidth;
  let newHeight = heightParam ?? originalHeight;

  const vbValues = viewBoxStr.split(' ').map(Number);
  if (vbValues.length === 4) {
    const [, , vbWRaw, vbHRaw] = vbValues;
    const vbW = Number.isFinite(vbWRaw) ? vbWRaw : undefined;
    const vbH = Number.isFinite(vbHRaw) ? vbHRaw : undefined;
    if (vbW !== undefined && vbH !== undefined && vbW !== 0 && vbH !== 0) {
      if (widthParam !== null && heightParam === null && !widthInfo.isPercent) {
        const widthValue = parseInt(widthParam, 10);
        if (Number.isFinite(widthValue) && widthValue > 0) {
          const ratio = vbH / vbW;
          newHeight = `${Math.round(widthValue * ratio)}`;
        }
      }
      if (heightParam !== null && widthParam === null && !heightInfo.isPercent) {
        const heightValue = parseInt(heightParam, 10);
        if (Number.isFinite(heightValue) && heightValue > 0) {
          const ratio = vbW / vbH;
          newWidth = `${Math.round(heightValue * ratio)}`;
        }
      }
    }
  }

  if (!resultContent.includes('preserveAspectRatio')) {
    resultContent = resultContent.replace(/<svg/, '<svg preserveAspectRatio="xMidYMid meet"');
  }

  if (/width=["'][^"']+["']/.test(resultContent)) {
    resultContent = resultContent.replace(/width=["'][^"']+["']/, `width="${newWidth}"`);
  } else {
    resultContent = resultContent.replace(/<svg([^>]*)>/, `<svg$1 width="${newWidth}">`);
  }

  if (/height=["'][^"']+["']/.test(resultContent)) {
    resultContent = resultContent.replace(/height=["'][^"']+["']/, `height="${newHeight}"`);
  } else {
    resultContent = resultContent.replace(/<svg([^>]*)>/, `<svg$1 height="${newHeight}">`);
  }

  return resultContent;
}
