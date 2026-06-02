import { profile, lede } from '../data/portfolio'

export default function Hero({ onNavigate }) {
  const [first, ...rest] = profile.name.split(' ')
  const last = rest.join(' ')
  const initials = (first[0] || '') + (last[0] || '')

  return (
    <header>
      <div className="glow" />
      <div className="glow glow-2" />
      <div className="wrap">
        <div className="hero-id reveal">
          <span className="hero-avatar">{initials}</span>
          <span className="eyebrow">Software Engineer — {profile.location}</span>
        </div>
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
          {profile.resume && (
            <a className="btn btn-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Download CV ↓
            </a>
          )}
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
