import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="github-calendar-container">
        <iframe
          src="https://github-readme-stats.vercel.app/api?username=pujabharti&show_icons=true&theme=radical"
          frameBorder="0"
          scrolling="0"
          width="100%"
          height="200"
          title="GitHub Stats"
        ></iframe>
        <iframe
          src="https://github-readme-streak-stats.herokuapp.com/?user=pujabharti&theme=radical"
          frameBorder="0"
          scrolling="0"
          width="100%"
          height="200"
          title="GitHub Streak Stats"
        ></iframe>
      </div>
    </Row>
  );
}

export default Github;
