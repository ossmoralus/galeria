'use client';

import { useState } from 'react';
import Container from '../app/components/ui/Container';
import Card from '../app/components/ui/Card';
import Input from '../app/components/ui/Input';
import Button from '../app/components/ui/Button';

type ShapeType = 'rect' | 'circle' | 'triangle' | 'star' | 'polygon';

interface Shape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  opacity: number;
  rotation: number;
  blur: number;
  shadow: boolean;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

interface TextElement {
  id: string;
  x: number;
  y: number;
  content: string;
  fontSize: number;
  fontFamily: string;
  fill: string;
  fontWeight: 'normal' | 'bold' | '600' | '700';
  opacity: number;
  rotation: number;
}

interface SVGCanvas {
  width: number;
  height: number;
  bgColor: string;
  bgOpacity: number;
  shapes: Shape[];
  texts: TextElement[];
}

const defaultShape: Shape = {
  id: '',
  type: 'rect',
  x: 50,
  y: 50,
  width: 100,
  height: 60,
  fill: '#1a4d5c',
  stroke: '#000000',
  strokeWidth: 2,
  opacity: 1,
  rotation: 0,
  blur: 0,
  shadow: false,
  shadowColor: '#000000',
  shadowBlur: 4,
  shadowOffsetX: 2,
  shadowOffsetY: 2
};

const defaultText: TextElement = {
  id: '',
  x: 50,
  y: 50,
  content: 'TEXT',
  fontSize: 16,
  fontFamily: 'Arial',
  fill: '#ffffff',
  fontWeight: '600',
  opacity: 1,
  rotation: 0
};

export default function AdvancedSVGGenerator(): React.ReactElement {
  const [canvas, setCanvas] = useState<SVGCanvas>({
    width: 300,
    height: 200,
    bgColor: '#0a0a0a',
    bgOpacity: 1,
    shapes: [],
    texts: []
  });

  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [history, setHistory] = useState<SVGCanvas[]>([canvas]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const generateId = (): string => `${Date.now()}-${Math.random()}`;

  const addShape = (type: ShapeType): void => {
    const newShape: Shape = {
      ...defaultShape,
      id: generateId(),
      type
    };
    const newCanvas = {
      ...canvas,
      shapes: [...canvas.shapes, newShape]
    };
    updateCanvas(newCanvas);
    setSelectedShapeId(newShape.id);
  };

  const addText = (): void => {
    const newText: TextElement = {
      ...defaultText,
      id: generateId()
    };
    const newCanvas = {
      ...canvas,
      texts: [...canvas.texts, newText]
    };
    updateCanvas(newCanvas);
    setSelectedTextId(newText.id);
  };

  const removeShape = (id: string): void => {
    const newCanvas = {
      ...canvas,
      shapes: canvas.shapes.filter((s) => s.id !== id)
    };
    updateCanvas(newCanvas);
    setSelectedShapeId(null);
  };

  const removeText = (id: string): void => {
    const newCanvas = {
      ...canvas,
      texts: canvas.texts.filter((t) => t.id !== id)
    };
    updateCanvas(newCanvas);
    setSelectedTextId(null);
  };

  const updateShape = (id: string, updates: Partial<Shape>): void => {
    const newCanvas = {
      ...canvas,
      shapes: canvas.shapes.map((s) => (s.id === id ? { ...s, ...updates } : s))
    };
    updateCanvas(newCanvas);
  };

  const updateText = (id: string, updates: Partial<TextElement>): void => {
    const newCanvas = {
      ...canvas,
      texts: canvas.texts.map((t) => (t.id === id ? { ...t, ...updates } : t))
    };
    updateCanvas(newCanvas);
  };

  const updateCanvas = (newCanvas: SVGCanvas): void => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newCanvas);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCanvas(newCanvas);
  };

  const undo = (): void => {
    if (historyIndex > 0) {
      const prevCanvas = history[historyIndex - 1];
      if (prevCanvas !== undefined) {
        setHistoryIndex(historyIndex - 1);
        setCanvas(prevCanvas);
      }
    }
  };

  const redo = (): void => {
    if (historyIndex < history.length - 1) {
      const nextCanvas = history[historyIndex + 1];
      if (nextCanvas !== undefined) {
        setHistoryIndex(historyIndex + 1);
        setCanvas(nextCanvas);
      }
    }
  };

  const renderShapeToSVG = (shape: Shape): string => {
    const baseAttrs = `fill="${shape.fill}" stroke="${shape.stroke}" stroke-width="${shape.strokeWidth}" opacity="${shape.opacity}"`;

    switch (shape.type) {
      case 'rect':
        return `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" ${baseAttrs} rx="4" transform="rotate(${shape.rotation} ${shape.x + shape.width / 2} ${shape.y + shape.height / 2})"/>`;
      case 'circle':
        return `<circle cx="${shape.x + shape.width / 2}" cy="${shape.y + shape.height / 2}" r="${shape.width / 2}" ${baseAttrs}/>`;
      case 'triangle': {
        const cX = shape.x + shape.width / 2;
        const cY = shape.y + shape.height / 2;
        const pathData = `M ${cX} ${shape.y} L ${shape.x + shape.width} ${shape.y + shape.height} L ${shape.x} ${shape.y + shape.height} Z`;
        return `<path d="${pathData}" ${baseAttrs} transform="rotate(${shape.rotation} ${cX} ${cY})"/>`;
      }
      case 'star':
        return generateStarPath(shape, baseAttrs);
      case 'polygon':
        return `<polygon points="${generatePolygonPoints(shape)}" ${baseAttrs}/>`;
      default:
        return '';
    }
  };

  const generateStarPath = (shape: Shape, attrs: string): string => {
    const cX = shape.x + shape.width / 2;
    const cY = shape.y + shape.height / 2;
    const outerR = shape.width / 2;
    const innerR = outerR / 2;
    let points = '';

    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const px = cX + r * Math.cos(angle);
      const py = cY + r * Math.sin(angle);
      points += `${px},${py} `;
    }

    return `<polygon points="${points}" ${attrs}/>`;
  };

  const generatePolygonPoints = (shape: Shape): string => {
    const cX = shape.x + shape.width / 2;
    const cY = shape.y + shape.height / 2;
    const r = shape.width / 2;
    const sides = 6;
    let points = '';

    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides;
      const px = cX + r * Math.cos(angle);
      const py = cY + r * Math.sin(angle);
      points += `${px},${py} `;
    }

    return points;
  };

  const generateSVG = (): string => {
    const defs: string[] = [];
    let svgContent = '';

    // Adicionar filtros de sombra se necessário
    const hasShadow = canvas.shapes.some((s) => s.shadow);
    if (hasShadow) {
      defs.push(`
    <defs>
      <filter id="shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
      `);
    }

    // Renderizar fundo
    svgContent += `<rect width="${canvas.width}" height="${canvas.height}" fill="${canvas.bgColor}" opacity="${canvas.bgOpacity}"/>\n`;

    // Renderizar shapes
    svgContent += canvas.shapes.map((shape) => `  ${renderShapeToSVG(shape)}\n`).join('');

    // Renderizar textos
    svgContent += canvas.texts
      .map((text) => {
        const textAttrs = `x="${text.x}" y="${text.y}" font-family="${text.fontFamily}" font-size="${text.fontSize}" font-weight="${text.fontWeight}" fill="${text.fill}" opacity="${text.opacity}" text-anchor="middle"`;
        return `  <text ${textAttrs} transform="rotate(${text.rotation} ${text.x} ${text.y})">${text.content}</text>\n`;
      })
      .join('');

    return `<svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg">\n${defs.join('\n')}  ${svgContent}</svg>`;
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
    link.download = `custom-svg-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const selectedShape =
    selectedShapeId !== null ? canvas.shapes.find((s) => s.id === selectedShapeId) : null;
  const selectedText =
    selectedTextId !== null ? canvas.texts.find((t) => t.id === selectedTextId) : null;

  return (
    <Container max="xl" className="py-10">
      <div className="criarHeading mb-14 text-center">
        <h1 className="criarTitle textGradientTealCyan mb-4 flex items-center justify-center gap-4 text-5xl font-bold">
          <i className="fas fa-wand-magic-sparkles" /> Gerador SVG Avançado
        </h1>
        <p className="criarDescription text2xl text-[var(--text-secondary)]">
          Crie SVGs ricos com múltiplas formas, efeitos e camadas personalizáveis
        </p>
      </div>

      <div className="criarGrid grid grid-cols-1 gap-8">
        {/* PAINEL DE CONTROLE */}
        <div className="criarForm order-2 flex w-full flex-col gap-7">
          {/* Canvas Settings */}
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-canvas" /> Tela
            </h2>
            <div className="mb-4">
              <label>Largura (px)</label>
              <Input
                type="number"
                value={canvas.width}
                onChange={(e) => setCanvas({ ...canvas, width: Number(e.target.value) })}
                min={100}
                max={800}
              />
            </div>
            <div className="mb-4">
              <label>Altura (px)</label>
              <Input
                type="number"
                value={canvas.height}
                onChange={(e) => setCanvas({ ...canvas, height: Number(e.target.value) })}
                min={100}
                max={600}
              />
            </div>
            <div className="mb-4">
              <label>Cor de Fundo</label>
              <div className="flex items-center gap-2.5">
                <input
                  type="color"
                  value={canvas.bgColor}
                  onChange={(e) => setCanvas({ ...canvas, bgColor: e.target.value })}
                  className="colorPickerInput"
                />
                <Input
                  type="text"
                  value={canvas.bgColor}
                  onChange={(e) => setCanvas({ ...canvas, bgColor: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label>Opacidade do Fundo</label>
              <Input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={canvas.bgOpacity}
                onChange={(e) => setCanvas({ ...canvas, bgOpacity: Number(e.target.value) })}
              />
            </div>
          </Card>

          {/* Add Shapes */}
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-shapes" /> Adicionar Formas
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => addShape('rect')} variant="primary" size="sm" type="button">
                <i className="fas fa-rectangle" /> Retângulo
              </Button>
              <Button onClick={() => addShape('circle')} variant="primary" size="sm" type="button">
                <i className="fas fa-circle" /> Círculo
              </Button>
              <Button
                onClick={() => addShape('triangle')}
                variant="primary"
                size="sm"
                type="button"
              >
                <i className="fas fa-play" /> Triângulo
              </Button>
              <Button onClick={() => addShape('star')} variant="primary" size="sm" type="button">
                <i className="fas fa-star" /> Estrela
              </Button>
              <Button onClick={() => addShape('polygon')} variant="primary" size="sm" type="button">
                <i className="fas fa-hexagon" /> Hexágono
              </Button>
              <Button onClick={() => addText()} variant="primary" size="sm" type="button">
                <i className="fas fa-font" /> Texto
              </Button>
            </div>
          </Card>

          {/* Shape Properties */}
          {selectedShape !== null && selectedShape !== undefined && (
            <Card>
              <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
                <i className="fas fa-sliders" /> Propriedades da Forma
              </h2>

              <div className="mb-4">
                <label>Posição X</label>
                <Input
                  type="number"
                  value={selectedShape.x}
                  onChange={(e) => updateShape(selectedShape.id, { x: Number(e.target.value) })}
                />
              </div>

              <div className="mb-4">
                <label>Posição Y</label>
                <Input
                  type="number"
                  value={selectedShape.y}
                  onChange={(e) => updateShape(selectedShape.id, { y: Number(e.target.value) })}
                />
              </div>

              <div className="mb-4">
                <label>Largura</label>
                <Input
                  type="number"
                  value={selectedShape.width}
                  onChange={(e) => updateShape(selectedShape.id, { width: Number(e.target.value) })}
                />
              </div>

              <div className="mb-4">
                <label>Altura</label>
                <Input
                  type="number"
                  value={selectedShape.height}
                  onChange={(e) =>
                    updateShape(selectedShape.id, { height: Number(e.target.value) })
                  }
                />
              </div>

              <div className="mb-4">
                <label>Cor de Preenchimento</label>
                <div className="flex items-center gap-2.5">
                  <input
                    type="color"
                    value={selectedShape.fill}
                    onChange={(e) => updateShape(selectedShape.id, { fill: e.target.value })}
                    className="colorPickerInput"
                  />
                  <Input
                    type="text"
                    value={selectedShape.fill}
                    onChange={(e) => updateShape(selectedShape.id, { fill: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label>Cor da Borda</label>
                <div className="flex items-center gap-2.5">
                  <input
                    type="color"
                    value={selectedShape.stroke}
                    onChange={(e) => updateShape(selectedShape.id, { stroke: e.target.value })}
                    className="colorPickerInput"
                  />
                  <Input
                    type="text"
                    value={selectedShape.stroke}
                    onChange={(e) => updateShape(selectedShape.id, { stroke: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label>Espessura da Borda</label>
                <Input
                  type="number"
                  value={selectedShape.strokeWidth}
                  onChange={(e) =>
                    updateShape(selectedShape.id, { strokeWidth: Number(e.target.value) })
                  }
                  min={0}
                  max={10}
                />
              </div>

              <div className="mb-4">
                <label>Opacidade</label>
                <Input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={selectedShape.opacity}
                  onChange={(e) =>
                    updateShape(selectedShape.id, { opacity: Number(e.target.value) })
                  }
                />
              </div>

              <div className="mb-4">
                <label>Rotação (graus)</label>
                <Input
                  type="number"
                  value={selectedShape.rotation}
                  onChange={(e) =>
                    updateShape(selectedShape.id, { rotation: Number(e.target.value) })
                  }
                  min={0}
                  max={360}
                />
              </div>

              <div className="mb-4">
                <label className="flex cursor-pointer select-none items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={selectedShape.shadow}
                    onChange={(e) => updateShape(selectedShape.id, { shadow: e.target.checked })}
                    className="size-[18px] cursor-pointer accent-[var(--accent-cyan)]"
                  />
                  <span className="font-medium">Adicionar Sombra</span>
                </label>
              </div>

              {selectedShape.shadow && (
                <div className="mb-4">
                  <label>Desfoque da Sombra</label>
                  <Input
                    type="number"
                    value={selectedShape.shadowBlur}
                    onChange={(e) =>
                      updateShape(selectedShape.id, { shadowBlur: Number(e.target.value) })
                    }
                    min={0}
                    max={20}
                  />
                </div>
              )}

              <Button
                onClick={() => removeShape(selectedShape.id)}
                variant="primary"
                size="sm"
                className="w-full text-red-400"
                type="button"
              >
                <i className="fas fa-trash" /> Remover Forma
              </Button>
            </Card>
          )}

          {/* Text Properties */}
          {selectedText !== null && selectedText !== undefined && (
            <Card>
              <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
                <i className="fas fa-font" /> Propriedades do Texto
              </h2>

              <div className="mb-4">
                <label>Conteúdo</label>
                <Input
                  type="text"
                  value={selectedText.content}
                  onChange={(e) => updateText(selectedText.id, { content: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label>Tamanho da Fonte</label>
                <Input
                  type="number"
                  value={selectedText.fontSize}
                  onChange={(e) =>
                    updateText(selectedText.id, { fontSize: Number(e.target.value) })
                  }
                  min={8}
                  max={72}
                />
              </div>

              <div className="mb-4">
                <label>Cor</label>
                <div className="flex items-center gap-2.5">
                  <input
                    type="color"
                    value={selectedText.fill}
                    onChange={(e) => updateText(selectedText.id, { fill: e.target.value })}
                    className="colorPickerInput"
                  />
                  <Input
                    type="text"
                    value={selectedText.fill}
                    onChange={(e) => updateText(selectedText.id, { fill: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label>Peso da Fonte</label>
                <select
                  value={selectedText.fontWeight}
                  onChange={(e) =>
                    updateText(selectedText.id, {
                      fontWeight: e.target.value as TextElement['fontWeight']
                    })
                  }
                  className="w-full rounded border border-[var(--vscode-border)] bg-[var(--vscode-bg)] px-3 py-2 text-[var(--text-primary)]"
                >
                  <option value="normal">Normal</option>
                  <option value="600">600</option>
                  <option value="700">700 (Bold)</option>
                </select>
              </div>

              <Button
                onClick={() => removeText(selectedText.id)}
                variant="primary"
                size="sm"
                className="w-full text-red-400"
                type="button"
              >
                <i className="fas fa-trash" /> Remover Texto
              </Button>
            </Card>
          )}

          {/* History Controls */}
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-history" /> Histórico
            </h2>
            <div className="flex gap-2">
              <Button
                onClick={undo}
                disabled={historyIndex === 0}
                variant="primary"
                size="sm"
                className="flex-1"
                type="button"
              >
                <i className="fas fa-undo" /> Desfazer
              </Button>
              <Button
                onClick={redo}
                disabled={historyIndex === history.length - 1}
                variant="primary"
                size="sm"
                className="flex-1"
                type="button"
              >
                <i className="fas fa-redo" /> Refazer
              </Button>
            </div>
          </Card>
        </div>

        {/* PREVIEW E EXPORTAÇÃO */}
        <div className="criarPreviewSection order-1 flex w-full flex-col gap-7">
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-eye" /> Preview
            </h2>
            <div
              className="minH400 p-15 flex items-center justify-center overflow-auto rounded-lg border border-[var(--vscode-border)] bg-[var(--vscode-bg)]"
              dangerouslySetInnerHTML={{ __html: svgCode }}
            />
          </Card>

          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-code" /> Código SVG
            </h2>
            <pre className="criarCode maxH300 textMd overflow-auto rounded-lg border border-[var(--vscode-border)] bg-[var(--vscode-bg)] p-5 font-mono leading-relaxed text-[var(--accent-light)]">
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

          {/* Layers List */}
          <Card>
            <h2 className="mb-5 flex items-center gap-2 text-[1.2rem] font-semibold text-[var(--text-bright)]">
              <i className="fas fa-layer-group" /> Camadas
            </h2>
            <div className="maxH250 space-y-2 overflow-auto">
              {canvas.shapes.map((shape) => (
                <div
                  key={shape.id}
                  onClick={() => setSelectedShapeId(shape.id)}
                  className={`cursor-pointer rounded-lg border px-3 py-2 transition ${
                    selectedShapeId === shape.id
                      ? 'border-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)]'
                      : 'border-[var(--vscode-border)] bg-[var(--vscode-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>
                      <i className="fas fa-shapes mr-2" />
                      {shape.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {Math.round(shape.opacity * 100)}%
                    </span>
                  </div>
                </div>
              ))}
              {canvas.texts.map((text) => (
                <div
                  key={text.id}
                  onClick={() => setSelectedTextId(text.id)}
                  className={`cursor-pointer rounded-lg border px-3 py-2 transition ${
                    selectedTextId === text.id
                      ? 'border-[var(--accent-cyan)] bg-[var(--accent-cyan-dim)]'
                      : 'border-[var(--vscode-border)] bg-[var(--vscode-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>
                      <i className="fas fa-font mr-2" />
                      {text.content.slice(0, 20)}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">{text.fontSize}px</span>
                  </div>
                </div>
              ))}
              {canvas.shapes.length === 0 && canvas.texts.length === 0 && (
                <p className="text-center text-sm text-[var(--text-secondary)]">Nenhuma camada</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
