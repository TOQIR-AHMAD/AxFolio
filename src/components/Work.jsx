import SectionHead from './SectionHead'
import { work } from '../data/portfolio'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead num="03" title="Selected Work" />
        <div className="work-list">
          {work.map((p, i) => (
            <a
              className="work-item reveal"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={p.title}
            >
              <span className="work-idx">{String(i + 1).padStart(3, '0')}</span>
              <div className="work-main">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <span className="work-tags">
                {p.lang}
                <br />
                {p.kind}
              </span>
              <span className="work-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
