import React from "react";
import "./Events.css";

import cyber from "../assets/e2fb14e9-5eca-4579-9504-b1047207e8d1.JPG";
import vibe from "../assets/IMG_1482.JPG";
import meet from "../assets/Vibe.JPG";
import advent from "../assets/48831daf-53e4-44b0-9682-a3bbed3714a4.JPG";

export default function Events() {
  const events = [
    {
      title: "Cybersecurity Workshop",
      description:
        "A hands-on workshop focused on online safety, secure passwords, phishing awareness, and ethical hacking basics.",
      image: cyber,
    },
    {
      title: "Vibe Coding Session",
      description:
        "A fun collaborative coding session where GDG members solve challenges and learn new programming skills.",
      image: vibe,
    },
    {
      title: "Meet & Greet",
      description:
        "Our introductory community meetup where students connect, discuss ideas, and join upcoming GDG activities.",
      image: meet,
    },
    {
      title: "Advent of Code",
      description:
        "A December coding challenge where participants solve daily puzzles and compete on the GDG leaderboard.",
      image: advent,
    },
  ];

  return (
    <div className="events-wrapper">
      <h2 className="events-title">Events</h2>

      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-row" key={index}>
            <img src={event.image} className="event-img" />

            <div className="event-text">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
