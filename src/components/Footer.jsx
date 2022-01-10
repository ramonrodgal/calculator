import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-center text-cyan-200">
      <div>
        <p className="text-lg">
          <FontAwesomeIcon icon={faCode} /> Made by Ramon Rodriguez
        </p>
      </div>
      <div>
        <a href="https://github.com/ramonrodgal">
          <FontAwesomeIcon
            className="m-2 p-2 h-12 w-12 hover:text-cyan-400"
            icon={faGithub}
          />
        </a>
        <a href="https://www.linkedin.com/in/ramon-rodriguez-galvez/">
          <FontAwesomeIcon
            className="m-2 p-2 h-12 w-12 hover:text-cyan-400"
            icon={faLinkedin}
          />
        </a>
      </div>
    </footer>
  );
}
