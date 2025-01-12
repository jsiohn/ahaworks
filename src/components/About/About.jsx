import "./About.css";
import Sidebar from "../Sidebar/Sidebar";

function About() {
  return (
    <main className="about">
      <section className="about__content">
        <h2 className="about__title">About AHA!</h2>
        <p className="about__description">
          We offer our community a convenient low cost spay and neuter program
          for cats. Spaying and neutering spares your beloved pets from the
          constant stress of breeding cycles and the hormonal drives that can
          cause pets to dart outside and become lost. We have helped thousands
          of people get their pets safely sterilized and vaccinated at our
          modern, conveniently located clinic.
          <br />
          <br />
          Our beautiful and friendly resale shop in Lindenhurst helps us fund
          our program. The shop is also where we offer our community periodic
          education events about nature, wildlife, holistic health, and pet
          care. Visit us today to shop or to learn about our natural world.
        </p>
        <h3 className="about__video-title">AHA! Spay Neuter Video</h3>
        <p className="about__video-description">
          Share our unique spay neuter video with all of your animal-loving
          friends.
        </p>
        <img
          className="about__video"
          src="https://placehold.co/600x400"
          alt="AHA! Spay Neuter Video"
        />
        <h3 className="about__goal-title">AHA! Goal</h3>
        <p className="about__goal-description">
          Our goal is to engage humans in innovative learning programs to help
          them to better understand and live in harmony with the many
          magnificent creatures with whom we share out planet. After all:
        </p>
        <br />
        <blockquote className="about__quote">
          Humans aren't the only species on Earth. We just act like it.
        </blockquote>
        <br />
        <p>
          We also connect people with the resources they need to understand,
          enjoy, and aid animals; domestic or wild.
        </p>
      </section>
      <section className="about__sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default About;
