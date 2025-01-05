import Sidebar from "../Sidebar/Sidebar";
import "./SpayNeuter.css";

function SpayNeuter() {
  return (
    <main className="spay-neuter">
      <section className="spay-neuter__content">
        <h2 className="spay-neuter__title">Spay and Neuter Program</h2>
        <h3 className="spay-neuter__subtitle">
          Affordable Spay and Neuter Services for Pets
        </h3>
        <p className="spay-neuter__description">
          This program offers spay and neuter surgery plus selected vaccines to
          animal guardians at affordable rates. All services are performed by a
          licensed veterinarian and his professional staff in a state-of-the-art
          veterinary clinic. To book your surgery, please review the information
          below and then call
          <span className="green-text">
            <strong> 847-960-8689 </strong>
          </span>
          and leave your name and number. A program volunteer will call you back
          to book your surgery.
          <span className="red-text">
            <strong>
              {" "}
              Please note that demand for our services is very high; while we do
              our best to return calls promptly, you may not hear from us for a
              few days. Thank you for your patience as we work to serve you!
            </strong>
          </span>
        </p>
        <h4 className="spay-neuter__section-title">General Information</h4>
        <ul className="spay-neuter__general-info">
          <li>
            <strong>Drop-off time varies.</strong> You will be given your
            drop-off time when your appointment is confirmed.
          </li>
          <li>
            You will need to complete some simplee paperwork, so please plan to
            arrivea few minutes early.
            <strong> All cats must be in carriers.</strong>
          </li>
        </ul>
        <h4 className="spay-neuter__section-title">Pricing - Cats</h4>
        <em className="red-text">Feline Spay/Neuter: $140</em>
        <p>
          The service includes spay or neuter surgery, rabies and distemper
          vaccines, and pain medication injection.
        </p>
        <ul>
          <li>
            Optional microchip (on day of surgery only) is available for a small
            fee.
          </li>
        </ul>
        <p className="maroon-text">
          For help with feral cat spay and neuter, please see the Feral Cat
          category on our Resources page.
        </p>
      </section>
      <section className="spay-neuter__sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default SpayNeuter;
