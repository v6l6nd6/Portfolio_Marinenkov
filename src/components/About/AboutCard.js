import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import YandexSVG from "../../Assets/yandexSVG.svg"
import FinnFlarePNG from "../../Assets/finnFlare.jpg"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I am a full stack developer
            from <span className="purple">Russia</span>
            <br />
            
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Worked in a large international technology company in Europe - Yandex <img src={YandexSVG} width="20px"/>
            </li>
            <li className="about-activity">
              <ImPointRight /> Participated in the app launch with IMSHOP.IO in July 2022 from Finn Flare company <img src={FinnFlarePNG} width="20px"/>
            </li>
            <li className="about-activity">
              <ImPointRight /> Previously I created methodological manuals in the field of DAF (Deutsch als Fremdsprache)
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          "I strive to publish something that changes people's lives!"{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
