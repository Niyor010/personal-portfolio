import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">NIYOR</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">Full Stack Developer</span>
            
          </h2>
          <p className="hero-description">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered websites.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button primary">Get in Touch</a>
            <a href="#work" className="cta-button secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape"></div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 