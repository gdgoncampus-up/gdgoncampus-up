import "./ContactPage.css";
import gdgLogo from "./assets/logo.svg";

export default function ContactPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-logo">
            <img src={gdgLogo} alt="Google Developer Groups" />
          </div>

          <nav className="header-nav">
            <a href="#" className="header-nav-active">Projects</a>
            <a href="#">About us</a>
            <a href="#">Community</a>
            <a href="#">Resources</a>
            <a href="#">Partners</a>
            <a href="#">Contact</a>
            <a href="#">Link</a>
          </nav>

          <button className="header-signin">Sign in</button>
        </div>
      </header>

      <main className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Contact us</h1>

        <div className="contact-grid">
          {/* LEFT SIDE – icons + info */}
          <section className="contact-left">
            {/* Phone */}
            <div className="contact-info-block">
              <div className="contact-icon-circle" aria-hidden="true">
                <span>📞</span>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-block">
              <div className="contact-icon-circle" aria-hidden="true">
                <span>✉️</span>
              </div>
              <div className="contact-text">
                <p>gdgoncampus.up@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact-info-block">
              <div className="contact-icon-circle" aria-hidden="true">
                <span>🏠</span>
              </div>
              <div className="contact-text">
                <p>Glagoljaška 8</p>
                <p>6000 Koper</p>
                <p>Slovenia</p>
              </div>
            </div>

            {/* Social icons row */}
            <div className="contact-social-row">
              <button className="social-circle">X</button>
              <button className="social-circle">IG</button>
              <button className="social-circle">YT</button>
              <button className="social-circle">in</button>
            </div>
          </section>

          {/* RIGHT SIDE – form */}
          <section className="contact-right">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("This Contact form is a demo for the workshop");
              }}
            >
              <label className="contact-label">
                <span>Name</span>
                <input type="text" placeholder="Value" />
              </label>

              <label className="contact-label">
                <span>Surname</span>
                <input type="text" placeholder="Value" />
              </label>

              <label className="contact-label">
                <span>Email</span>
                <input type="email" placeholder="Value" />
              </label>

              <label className="contact-label">
                <span>Message</span>
                <textarea rows="4" placeholder="Value" />
              </label>

              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </section>
        </div>
        
        <footer className="contact-footer">
          <div className="footer-column">
            <h4>About us</h4>
            <p>Team collaboration</p>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <p>Events & projects</p>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <p>Slides, links & photos</p>
          </div>
        </footer>

      </div>
     </main>
    </>
  );
}
