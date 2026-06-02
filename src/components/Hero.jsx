import { profile, lede } from '../data/portfolio'

export default function Hero({ onNavigate }) {
  const [first, ...rest] = profile.name.split(' ')
  const last = rest.join(' ')

  return (
    <header>
      <div className="glow" />
      <div className="wrap">
        <div className="eyebrow reveal">Software Engineer — {profile.location}</div>
        <h1 className="reveal">
          {first} <em>{last}</em>
        </h1>
        <div className="hero-role reveal">{profile.role}</div>
        <p className="hero-lede reveal" dangerouslySetInnerHTML={{ __html: lede }} />
        <div className="hero-cta reveal">
          <button type="button" className="btn btn-solid" onClick={() => onNavigate('work')}>
            View selected work →
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => onNavigate('contact')}>
            Let's talk
          </button>
        </div>
        <div className="hero-meta reveal">
          <div>
            <span className="status-dot" />
            Available for senior &amp; freelance roles
          </div>
          <div>
            Full-stack · <span>JS / TS · PHP · React · Laravel</span>
          </div>
          <div>
            Est. <span>{profile.since}</span> · {profile.repoCount} public repos
          </div>
        </div>
      </div>
    </header>
  )
}
