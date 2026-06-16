/**
 * BlogContent — renders structured blog post data as designed React components.
 * Blog content is stored as structured JSON blocks, not raw HTML, so we control
 * the visual presentation fully.
 */

const h2 = "text-2xl font-bold text-zinc-900 mt-10 mb-4 font-display tracking-tight";
const h3 = "text-lg font-bold text-zinc-800 mt-8 mb-3 font-display";
const p = "text-zinc-600 leading-[1.8] mb-5";
const strong = "text-zinc-900 font-semibold";
const ul = "mb-6 space-y-2.5";
const li = "text-zinc-600 leading-relaxed flex items-start gap-2.5";
const liDot = "w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2.5 shrink-0";

export function BlogContent({ blocks }) {
  if (!blocks) return null;

  return (
    <div className="space-y-1">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} className={p}>
                {renderInline(block.text)}
              </p>
            );

          case 'h2':
            return <h2 key={i} className={h2}>{block.text}</h2>;

          case 'h3':
            return <h3 key={i} className={h3}>{block.text}</h3>;

          case 'list':
            return (
              <ul key={i} className={ul}>
                {block.items.map((item, j) => (
                  <li key={j} className={li}>
                    <span className={liDot} />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'price-table':
            return (
              <div key={i} className="my-8 rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-zinc-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-100">
                  <span>Service</span>
                  <span className="text-right">Price</span>
                  <span className="text-right">Turnaround</span>
                </div>
                {block.rows.map((row, j) => (
                  <div
                    key={j}
                    className="grid grid-cols-3 px-5 py-3.5 border-b border-zinc-50 last:border-b-0 hover:bg-purple-50/30 transition-colors"
                  >
                    <span className={`font-semibold text-sm ${row.highlight ? 'text-[#8B5CF6]' : 'text-zinc-800'}`}>
                      {row.name}
                    </span>
                    <span className="text-right text-sm font-bold text-zinc-900">{row.price}</span>
                    <span className="text-right text-sm text-zinc-500">{row.time}</span>
                  </div>
                ))}
              </div>
            );

          case 'price-cards':
            return (
              <div key={i} className="grid grid-cols-2 gap-3 my-8">
                {block.cards.map((card, j) => (
                  <div key={j} className="rounded-2xl border border-zinc-100 bg-white p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">{card.label}</p>
                    <p className="text-2xl font-extrabold text-zinc-900">{card.price}</p>
                    <p className="text-xs text-zinc-500 mt-1">{card.note}</p>
                  </div>
                ))}
              </div>
            );

          case 'callout':
            return (
              <div key={i} className={`my-8 rounded-2xl p-5 border ${
                block.variant === 'tip'
                  ? 'bg-blue-50/50 border-blue-100'
                  : block.variant === 'warning'
                  ? 'bg-amber-50/50 border-amber-100'
                  : 'bg-purple-50/50 border-purple-100'
              }`}>
                <div className="flex items-start gap-3">
                  <span className={`text-lg ${
                    block.variant === 'tip' ? 'text-blue-500' : 'text-[#8B5CF6]'
                  }`}>
                    {block.variant === 'tip' ? '💡' : block.variant === 'warning' ? '⚠️' : '✨'}
                  </span>
                  <div>
                    {block.title && (
                      <p className={`font-bold text-sm mb-1 ${
                        block.variant === 'tip' ? 'text-blue-800' : 'text-zinc-900'
                      }`}>{block.title}</p>
                    )}
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {renderInline(block.text)}
                    </p>
                  </div>
                </div>
              </div>
            );

          case 'step-card':
            return (
              <div key={i} className="my-8 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#8B5CF6] text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {block.number}
                  </span>
                  <h4 className="font-bold text-zinc-900 font-display">{block.title}</h4>
                </div>
                <p className="text-zinc-600 leading-relaxed ml-11">{renderInline(block.text)}</p>
              </div>
            );

          case 'steps':
            return (
              <div key={i} className="space-y-4 my-8">
                {block.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5CF6] to-purple-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {j + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-bold text-zinc-900 text-sm font-display">{step.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed mt-1">{renderInline(step.text)}</p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case 'hero-stat':
            return (
              <div key={i} className="grid grid-cols-3 gap-4 my-10">
                {block.stats.map((stat, j) => (
                  <div key={j} className="text-center rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50 p-4">
                    <p className="text-2xl md:text-3xl font-extrabold text-[#8B5CF6]">{stat.value}</p>
                    <p className="text-xs text-zinc-500 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            );

          case 'area-links':
            return (
              <div key={i} className="my-8">
                <div className="flex flex-wrap gap-2">
                  {block.areas.map((area) => (
                    <a
                      key={area.slug}
                      href={`/locations/${area.slug}`}
                      className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-100/50 hover:bg-purple-100 transition-colors"
                    >
                      {area.name}
                    </a>
                  ))}
                </div>
              </div>
            );

          case 'cta':
            return (
              <div key={i} className="my-10 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-center">
                <p className="text-white font-bold text-lg font-display mb-2">{block.title}</p>
                <p className="text-zinc-400 text-sm mb-5">{block.text}</p>
                <a
                  href={block.url}
                  target={block.external ? '_blank' : undefined}
                  rel={block.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex px-6 py-3 bg-[#8B5CF6] text-white rounded-full font-semibold text-sm hover:bg-purple-500 transition-colors shadow-lg shadow-purple-500/20"
                >
                  {block.button}
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

function renderInline(text) {
  if (!text) return null;
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    let nextMatch = null;
    let nextType = null;

    if (boldMatch && remaining.indexOf(boldMatch[0]) < (remaining.indexOf(linkMatch?.[0] ?? Infinity))) {
      nextMatch = boldMatch;
      nextType = 'bold';
    } else if (linkMatch) {
      nextMatch = linkMatch;
      nextType = 'link';
    }

    if (!nextMatch) {
      parts.push(remaining);
      break;
    }

    const before = remaining.substring(0, remaining.indexOf(nextMatch[0]));
    if (before) parts.push(before);

    if (nextType === 'bold') {
      parts.push(<strong key={key++} className={strong}>{nextMatch[1]}</strong>);
    } else {
      parts.push(
        <a key={key++} href={nextMatch[2]} className="text-[#8B5CF6] hover:underline font-medium">
          {nextMatch[1]}
        </a>
      );
    }

    remaining = remaining.substring(remaining.indexOf(nextMatch[0]) + nextMatch[0].length);
  }

  return parts;
}
