import { Link } from 'react-router-dom'
import './Steam.css'

export default function Steam() {
  const gameInfo = {
    price: '$49.99',
    reviews: '98% Positive',
    totalReviews: '15.2K Reviews',
    platform: 'Windows, macOS, Linux',
    release: '2025'
  }

  const features = [
    'Single-player Campaign',
    'Multiplayer Co-op',
    'Competitive PvP Modes',
    'NFT Character Trading',
    'Cross-platform Play',
    'Regular Content Updates'
  ]

  const screenshots = [1, 2, 3, 4, 5, 6, 7, 8]
  const videos = [1, 2]

  return (
    <div className="steam-page">
      {/* Steam Header */}
      <header className="steam-header">
        <Link to="/" className="steam-logo">NEXUS: Chronicles</Link>
        <Link to="/" className="back-btn">← Back to Official Site</Link>
      </header>

      {/* Game Hero */}
      <section className="steam-hero">
        <div className="steam-hero-content">
          <h1>NEXUS: Chronicles</h1>
          <div className="steam-rating">
            <span className="stars">★★★★★</span>
            <span className="reviews">{gameInfo.reviews} ({gameInfo.totalReviews})</span>
          </div>
        </div>
      </section>

      {/* Game Info Panel */}
      <section className="steam-container">
        <div className="game-info-panel">
          {/* Left Column */}
          <div className="game-main">
            <div className="tabs-section">
              <button className="tab active">Overview</button>
              <button className="tab">Reviews</button>
              <button className="tab">Screenshots</button>
              <button className="tab">Community</button>
            </div>

            {/* Description */}
            <div className="game-description">
              <h2>About This Game</h2>
              <p>
                Welcome to NEXUS: Chronicles, a revolutionary cyberpunk RPG that will transport you to a neon-soaked 
                world of endless possibilities. In a future where the line between reality and the digital realm has 
                blurred, you are humanity's last hope.
              </p>
              <p>
                Engage in thrilling battles across futuristic environments, forge alliances with unforgettable characters, 
                and uncover the mysteries that threaten to consume both worlds. Your choices matter, and every decision 
                will shape the fate of the NEXUS.
              </p>

              {/* Features List */}
              <h3>Key Features:</h3>
              <ul className="features-list">
                {features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              {/* Requirements */}
              <div className="requirements">
                <h3>System Requirements</h3>
                <div className="requirements-grid">
                  <div className="requirement-section">
                    <h4>MINIMUM:</h4>
                    <ul>
                      <li>OS: Windows 10 64-bit</li>
                      <li>Processor: Intel i5-8400</li>
                      <li>Memory: 8 GB RAM</li>
                      <li>Graphics: GTX 1660</li>
                      <li>Storage: 80 GB</li>
                    </ul>
                  </div>
                  <div className="requirement-section">
                    <h4>RECOMMENDED:</h4>
                    <ul>
                      <li>OS: Windows 10/11 64-bit</li>
                      <li>Processor: Intel i7-10700K</li>
                      <li>Memory: 16 GB RAM</li>
                      <li>Graphics: RTX 3080</li>
                      <li>Storage: 100 GB SSD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="screenshots-section">
              <h3>Screenshots</h3>
              <div className="screenshots-grid">
                {screenshots.map((num) => (
                  <div key={num} className="screenshot">
                    <div className="screenshot-placeholder">Screenshot {num}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div className="videos-section">
              <h3>Videos</h3>
              <div className="videos-grid">
                {videos.map((num) => (
                  <div key={num} className="video">
                    <div className="video-placeholder">
                      <span>▶ Video {num}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="game-sidebar">
            <div className="purchase-box">
              <div className="game-poster">
                <div className="poster-placeholder">GAME POSTER</div>
              </div>
              <div className="price-section">
                <span className="price">{gameInfo.price}</span>
                <button className="btn-buy">Add to Cart</button>
                <button className="btn-wishlist">♡ Add to Wishlist</button>
              </div>
              <div className="info-box">
                <div className="info-item">
                  <span>Release Date:</span>
                  <strong>{gameInfo.release}</strong>
                </div>
                <div className="info-item">
                  <span>Platform:</span>
                  <strong>{gameInfo.platform}</strong>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-box">
              <h4>Game Stats</h4>
              <div className="stat">
                <span>Players Online</span>
                <strong>127.4K</strong>
              </div>
              <div className="stat">
                <span>Peak Players</span>
                <strong>486.2K</strong>
              </div>
              <div className="stat">
                <span>Achievements</span>
                <strong>156</strong>
              </div>
            </div>

            {/* Languages */}
            <div className="languages-box">
              <h4>Languages Supported</h4>
              <p>English, Spanish, French, German, Italian, Japanese, Chinese, Russian, and more.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="steam-footer">
        <p>© 2026 NEXUS Entertainment. All rights reserved. Steam is a trademark of Valve Corporation.</p>
      </footer>
    </div>
  )
}
