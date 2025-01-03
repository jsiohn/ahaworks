import "./Resale.css";
import Sidebar from "../Sidebar/Sidebar";

function Resale() {
  return (
    <main className="resale">
      <section className="resale__content">
        <h2 className="resale__title">AHA! Resale Shop</h2>
        <h3 className="resale__subtitle">
          AHA! Resale Shop Helps Fund our Programs
        </h3>
        <p className="resale__description">
          AHA!’s resale shop is at 2048 Grand Avenue in Lindenhurst, in Linden
          Plaza. You’ll find hundreds of quality items (including some
          consignment) at the right prices! Items include furniture, housewares,
          shoes and handbags, select clothing, beautiful vintage linens, current
          books, new pet beds and pet toys, home decor items, and more.
          <br />
          <br />
          <strong>All profits fund AHA!’s animal welfare programs.</strong>
        </p>
        <h3 className="resale__subtitle">Resale Shop Donations</h3>
        <p className="resale__description">
          Have gently used items to donate? Drop by any time during the store’s
          open hours, which are:
        </p>
        <ul className="resale__donation-list">
          <li>Monday through Friday, 10 a.m. until 6 p.m.</li>
          <li>Saturday 10 a.m. until 5 p.m.</li>
          <li>Sunday noon to 4 p.m.</li>
        </ul>
        <p className="resale__description">
          Donors receive an immediate donation receipt. Donations are
          tax-deductible to the extend allowed by law.
        </p>
      </section>
      <section className="resale__sidebar">
        <Sidebar />
      </section>
    </main>
  );
}

export default Resale;
