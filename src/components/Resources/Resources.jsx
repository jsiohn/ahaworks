import "./Resources.css";
import Sidebar from "../Sidebar/Sidebar";

function Resources() {
  return (
    <main className="resources">
      <section className="resources__content">
        <h2 className="resources__title">Resources</h2>
        <h3 className="resources__subtitle">AHA! Resource List</h3>
        <p className="resources__description">
          AHA! maintains a comprehensive list of humane resources in our region.
          To find a referral to an organization or individual that can help you
          with your animal issue (domestic or wildlife), call us at
          <strong>847-960-8689.</strong>
          <br />
          <br />
          If you know of a resource you’d like to recommend—be it an individual,
          a spay/neuter clinic, a subject matter expert, a website, an
          organization, a book, or other resource—please contact us to tell us
          about it.
          <br />
          <br />
          Here are a few of our favorite resources for you to check out.
        </p>
        <h3 className="resources__subtitle">Feral Cat Information</h3>
        <h4 className="resources__subtitle">
          TNR (Trap-Neuter-Release) Assistance
        </h4>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h4 className="resources__subtitle">Shelter Ideas</h4>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h4 className="resources__subtitle">Feral Cat Reference</h4>
        <ul className="resources__list">
          <li></li>
        </ul>
        <h3 className="resources__subtitle">Holistic Pet Care</h3>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3 className="resources__subtitle">
          Wildlife Rescue, Rehab, and Information
        </h3>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3 className="resources__subtitle">Pet Food Resources</h3>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3 className="resources__subtitle">Animal Advocacy and Connections</h3>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h3 className="resources__subtitle">Pet Care and Pet Behavior</h3>
        <ul className="resources__list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="resources__sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default Resources;
