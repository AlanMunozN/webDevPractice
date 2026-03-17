import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span> NEXUS: Chronicles
          </Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#gameplay">Gameplay</a>
            <a href="#media">Media</a>
            <Link to="/steam" className="steam-btn">View on Steam</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">NEXUS: Chronicles</h1>
          <p className="hero-subtitle">Dive into the digital abyss. Where every choice echoes through eternity.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Play Now</button>
            <button className="btn btn-secondary">Watch Trailer</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glitch-box">
            <div className="glitch-content">
              <span>█ N3XUS</span>
              <span>SYSTEM READY</span>
              <span>&gt; INITIALIZING...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Core Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Dynamic Cyberpunk World</h3>
            <p>Explore a living, breathing metacomverse packed with secrets and possibilities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Revolutionary Gameplay</h3>
            <p>Master cutting-edge combat mechanics blending strategy with real-time action.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Multiplayer Nexus</h3>
            <p>Connect with players worldwide in cooperative and competitive modes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔮</div>
            <h3>Customization Unleashed</h3>
            <p>Create your own character with unlimited cybernetic enhancements.</p>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="gameplay">
        <h2>Immersive Gameplay</h2>
        <div className="gameplay-content">
          <div className="gameplay-text">
            <h3>Experience the Future</h3>
            <p>NEXUS: Chronicles combines the best of sci-fi storytelling with cutting-edge game mechanics. Engage in intense battles, unravel deep mysteries, and make choices that matter.</p>
            <ul>
              <li>✓ 50+ hours of engaging campaign</li>
              <li>✓ 100+ side quests and mysteries</li>
              <li>✓ Full character customization</li>
              <li>✓ Real-time multiplayer raids</li>
            </ul>
          </div>
          <div className="gameplay-preview">
            <div className="preview-box">
              <div className="preview-scanlines"></div>
              <div className="preview-text">
                NEXUS INTERFACE v3.2.1<br/>
                Loading Game Preview...<br/>
                Connection Established ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section id="media" className="media">
        <h2>Media Gallery</h2>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="gallery-item">
              <div className="gallery-placeholder">
                <span>Screenshot {i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Enter NEXUS?</h2>
        <p>Join millions of players in the most immersive cyberpunk experience</p>
        <Link to="/steam" className="btn btn-primary btn-large">Get on Steam</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 NEXUS Entertainment. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}
