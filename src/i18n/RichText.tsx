// Renderiza texto do dicionário com **negrito** convertido em <strong>,
// evitando duplicar cada frase como JSX manual nos componentes.

export function renderRichText(text: string, boldClassName = 'font-medium') {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={index} className={boldClassName}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}
