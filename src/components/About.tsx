import './About.css';
import headshot from '../resources/boy.jpg';

export default function About() {
  return (
    <section id="about">
      <div>
        <div>
          <h1>
            Melker Henriksson.
          </h1>
          <div>
          <img id='headshot' src={headshot} alt="It's me, in a nice suit!"/>
        </div>
          <p>
            Tredje årets student inom Civilingenjörs utbildningen <a href="http://interaktion.nu/">Interaktion & Design</a> på Umeå Universitet
          </p>
        </div>
      </div>
    </section>
  );
}