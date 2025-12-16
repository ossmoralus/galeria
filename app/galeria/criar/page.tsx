'use client';

import { useState } from 'react';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

interface SVGConfig {
  leftText: string;
  rightText: string;
  leftColor: string;
  rightColor: string;
  textColor: string;
  bgColor: string;
  width: number;
  height: number;
  fontSize: number;
  borderRadius: number;
  useGradient: boolean;
}

export default function SVGGenerator(): React.ReactElement {
  const [config, setConfig] = useState<SVGConfig>({
    leftText: 'BUILD',
    rightText: 'PASSING',
    leftColor: '#1a4d5c',
    rightColor: '#2d7d6e',
    textColor: '#ffffff',
    bgColor: '#0a0a0a',
    width: 120,
    height: 20,
    fontSize: 11,
    borderRadius: 3,
    useGradient: true
  });

  const [copied, setCopied] = useState(false);

  const leftWidth = Math.ceil(config.width * 0.4);
  const rightWidth = config.width - leftWidth;

  const generateSVG = (): string => {
    const gradient = config.useGradient
      ? `  <defs>
    <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${config.leftColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.rightColor};stop-opacity:1" />
    </linearGradient>
  </defs>`
      : '';

    const leftFill = config.useGradient ? 'url(#leftGrad)' : config.leftColor;

    return `<svg width="${config.width}" height="${config.height}" xmlns="http://www.w3.org/2000/svg">
${gradient}
  <rect width="${config.width}" height="${config.height}" fill="${config.bgColor}" rx="${config.borderRadius}"/>
  <rect x="0" y="0" width="${leftWidth}" height="${config.height}" fill="${leftFill}" rx="${config.borderRadius}"/>
  <text x="${leftWidth / 2}" y="${config.height - 6}" font-family="Verdana,sans-serif" font-size="${config.fontSize}" font-weight="600" fill="${config.textColor}" text-anchor="middle">${config.leftText}</text>
  <text x="${leftWidth + rightWidth / 2}" y="${config.height - 6}" font-family="Verdana,sans-serif" font-size="${config.fontSize}" font-weight="500" fill="${config.textColor}" text-anchor="middle">${config.rightText}</text>
</svg>`;
  };

  const svgCode = generateSVG();

  const copySVG = (): void => {
    void navigator.clipboard.writeText(svgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSVG = (): void => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `badge-${config.leftText.toLowerCase()}-${config.rightText.toLowerCase()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const presets = [
    {
      name: 'Build Passing',
      left: 'BUILD',
      right: 'PASSING',
      leftColor: '#1a4d5c',
      rightColor: '#2d7d6e'
    },
    {
      name: 'Tests OK',
      left: 'TESTS',
      right: '125 PASSED',
      leftColor: '#1f5f5a',
      rightColor: '#3a8a7f'
    },
    {
      name: 'Coverage',
      left: 'COVERAGE',
      right: '98%',
      leftColor: '#1a4d5c',
      rightColor: '#4ea89a'
    },
    {
      name: 'License MIT',
      left: 'LICENSE',
      right: 'MIT',
      leftColor: '#1f5f5a',
      rightColor: '#2d7d6e'
    },
    {
      name: 'TypeScript',
      left: 'TYPESCRIPT',
      right: '100%',
      leftColor: '#2d7d6e',
      rightColor: '#4ea89a'
    }
  ];

  const applyPreset = (preset: (typeof presets)[0]): void => {
    setConfig({
      ...config,
      leftText: preset.left,
      rightText: preset.right,
      leftColor: preset.leftColor,
      rightColor: preset.rightColor
    });
  };

  return (
    <Container max="xl" className="py-10">
      <div className="criarHeading mb-14 text-center">
        <h1 className="criarTitle mb-4 flex items-center justify-center gap-4 bg-gradient-to-br from-[var(--accent-teal)] to-[var(--accent-cyan)] bg-clip-text text-5xl font-bold">
          <i className="fas fa-magic" /> Gerador de SVG Badges
        </h1>
        <p className="criarDescription text-[1.2rem] text-[var(--text-secondary)]">
          Crie badges SVG personalizados para seus projetos com preview em tempo real
        </p>
      </div>

      <div className="criarGrid grid grid-cols-1 gap-8">
        <div className="criarForm order-2 flex w-full flex-col gap-7">
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-text-width" /> Textos
            </h2>
            <div className="mb-4">
              <label>Texto Esquerda</label>
              <Input
                type="text"
                value={config.leftText}
                onChange={(e) => setConfig({ ...config, leftText: e.target.value })}
                placeholder="BUILD"
              />
            </div>
            <div className="mb-4">
              <label>Texto Direita</label>
              <Input
                type="text"
                value={config.rightText}
                onChange={(e) => setConfig({ ...config, rightText: e.target.value })}
                placeholder="PASSING"
              />
            </div>
          </Card>

          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-palette" /> Cores
            </h2>
            <div className="mb-4">
              <label>Cor Esquerda</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={config.leftColor}
                  onChange={(e) => setConfig({ ...config, leftColor: e.target.value })}
                  className="h-10 w-[50px] cursor-pointer rounded-md border border-[var(--vscode-border)] bg-transparent"
                />
                <Input
                  type="text"
                  value={config.leftColor}
                  onChange={(e) => setConfig({ ...config, leftColor: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label>Cor Direita</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={config.rightColor}
                  onChange={(e) => setConfig({ ...config, rightColor: e.target.value })}
                  className="h-10 w-[50px] cursor-pointer rounded-md border border-[var(--vscode-border)] bg-transparent"
                />
                <Input
                  type="text"
                  value={config.rightColor}
                  onChange={(e) => setConfig({ ...config, rightColor: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label>Cor do Texto</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={config.textColor}
                  onChange={(e) => setConfig({ ...config, textColor: e.target.value })}
                  className="h-10 w-[50px] cursor-pointer rounded-md border border-[var(--vscode-border)] bg-transparent"
                />
                <Input
                  type="text"
                  value={config.textColor}
                  onChange={(e) => setConfig({ ...config, textColor: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label>Cor de Fundo</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={config.bgColor}
                  onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                  className="h-10 w-[50px] cursor-pointer rounded-md border border-[var(--vscode-border)] bg-transparent"
                />
                <Input
                  type="text"
                  value={config.bgColor}
                  onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="flex cursor-pointer select-none items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={config.useGradient}
                  onChange={(e) => setConfig({ ...config, useGradient: e.target.checked })}
                  className="size-[18px] cursor-pointer accent-[var(--accent-cyan)]"
                />
                <span className="font-medium text-[var(--text-primary)]">Usar Gradiente</span>
              </label>
            </div>
          </Card>

          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-ruler-combined" /> Dimensões
            </h2>
            <div className="mb-4">
              <label>Largura (px)</label>
              <Input
                type="number"
                value={config.width}
                onChange={(e) => setConfig({ ...config, width: Number(e.target.value) })}
                min={80}
                max={300}
              />
            </div>
            <div className="mb-4">
              <label>Altura (px)</label>
              <Input
                type="number"
                value={config.height}
                onChange={(e) => setConfig({ ...config, height: Number(e.target.value) })}
                min={16}
                max={40}
              />
            </div>
            <div className="mb-4">
              <label>Tamanho da Fonte (px)</label>
              <Input
                type="number"
                value={config.fontSize}
                onChange={(e) => setConfig({ ...config, fontSize: Number(e.target.value) })}
                min={8}
                max={16}
              />
            </div>
            <div className="mb-4">
              <label>Border Radius (px)</label>
              <Input
                type="number"
                value={config.borderRadius}
                onChange={(e) => setConfig({ ...config, borderRadius: Number(e.target.value) })}
                min={0}
                max={10}
              />
            </div>
          </Card>

          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-star" /> Presets
            </h2>
            <div className="flex flex-col gap-2">
              {presets.map((preset) => (
                <Button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  variant="primary"
                  size="sm"
                  className="text-left"
                  type="button"
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        <div className="criarPreviewSection order-1 flex w-full flex-col gap-7">
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-eye" /> Preview
            </h2>
            <div
              className="criarPreview p-15 flex min-h-[200px] items-center justify-center overflow-auto rounded-lg border border-[var(--vscode-border)] bg-[var(--vscode-bg)]"
              dangerouslySetInnerHTML={{ __html: svgCode }}
            />
          </Card>

          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-code" /> Código SVG
            </h2>
            <pre className="criarCode max-h-[400px] overflow-auto rounded-lg border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5 font-mono text-[0.9rem] leading-relaxed text-[var(--accent-light)]">
              {svgCode}
            </pre>
          </Card>

          <div className="criarActions flex gap-3">
            <Button onClick={copySVG} variant="primary" size="lg" className="flex-1" type="button">
              <i className={copied ? 'fas fa-check' : 'fas fa-copy'} />
              {copied ? 'Copiado!' : 'Copiar SVG'}
            </Button>

            <Button
              onClick={downloadSVG}
              variant="primary"
              size="lg"
              className="flex-1"
              type="button"
            >
              <i className="fas fa-download" />
              Download SVG
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
