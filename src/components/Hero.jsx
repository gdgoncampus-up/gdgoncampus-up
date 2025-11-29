import React from "react";
import "./Hero.css";


export default function Hero() {
  return (
    <div className="page">


      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <p className="welcome">Welcome to</p>
          <h1 className="gdg-title">Google Developer Groups <br /> On Campus</h1>
          <p className="subtitle">
            Join developers, innovators, student leaders, designers, and tech
            enthusiasts to grow your skills, meet like-minded people, and build
            solutions for real-world problems.
          </p>


          <div className="hero-btns">
            <button className="btn-primary">Join Us</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>


        <div className="hero-image">
          <img src="/assets/hero.jpg" alt="hero" />
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="about">
        <h2>ABOUT GDG ON CAMPUS</h2>
        <p className="about-sub">Learn. Connect. Grow.</p>


        <div className="about-cards">
          <div className="about-card">
            <div className="icon blue"></div>
            <h3>Learn</h3>
            <p>Workshops, speaker sessions, and hands-on training with Google technologies.</p>
          </div>


          <div className="about-card">
            <div className="icon red"></div>
            <h3>Connect</h3>
            <p>Meet developers, industry leaders, and professionals for collaboration.</p>
          </div>


          <div className="about-card">
            <div className="icon green"></div>
            <h3>Grow</h3>
            <p>Develop skills and participate in hackathons and competitions.</p>
          </div>
        </div>
      </section>


      {/* TECHNOLOGIES */}
      <section className="tech-section">
        <h2>Explore Google Technologies</h2>
        <p className="tech-sub">
          Gain hands-on experience exploring industry-relevant technologies used in real projects.
        </p>


        <div className="tech-grid">
          {["Android", "Cloud", "Flutter", "Web", "AI/ML", "Firebase"].map((t) => (
            <button key={t} className="tech-btn">{t}</button>
          ))}
        </div>


        <div className="tech-image">
          <img src="/assets/workshop.jpg" alt="workshop" />
        </div>
      </section>


      {/* EVENTS */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <p className="events-sub">
          Hands-on workshops, study jams, and networking events.
        </p>


        <div className="event-grid">


          <div className="event-card">
            <img src="/assets/gallery1.jpg" alt="session" />
            <div className="event-info">
              <h3>Android Development Workshop</h3>
              <p>December 14, 2025</p>
              <button className="status green">Register</button>
            </div>
          </div>


          <div className="event-card">
            <div className="event-info">
              <h3>Cloud Study Jam</h3>
              <p>December 21, 2025</p>
              <button className="status blue">Join</button>
            </div>
          </div>


          <div className="event-card">
            <div className="event-info">
              <h3>Web Development Bootcamp</h3>
              <p>January 5, 2026</p>
              <button className="status red">Register</button>
            </div>
          </div>


        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-gradient">
          <div className="footer-actions">
            <h2>Ready to dive in?</h2>
            <p>Become part of our developer community today.</p>
            <div className="footer-btns">
              <button className="btn-white">Get Started</button>
              <button className="btn-outline">Contact Us</button>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="footer-columns">
            <div className="column">
              <h4>🌐 GDG On Campus</h4>
              <p>
                A community of students building and growing with Google technologies.
              </p>
            </div>
            <div className="column">
              <h4>Quick Links</h4>
              <a href="#">About</a>
              <a href="#">Events</a>
              <a href="#">Contact</a>
            </div>
            <div className="column">
              <h4>Connect</h4>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>


          <p className="copyright">
            © 2025 Google Developer Groups On Campus. All rights reserved.
          </p>
        </div>
      </footer>


    </div>
  );
}