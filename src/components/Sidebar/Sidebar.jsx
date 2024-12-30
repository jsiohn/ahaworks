import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="sidebar__widget sidebar__donation">
        <h4 className="sidebar__widget-title">Donate Now</h4>
      </section>
      <section className="sidebar__widget sidebar__spayneuter">
        <h4 className="sidebar__widget-title">Spay Neuter Program Contact</h4>
        <p className="sidebar__spayneuter-text">
          To schedule and appointment for spaying or neutering, please call
          <strong> 847-960-8689</strong> (extension #1).
          <br />
          <br />
          We are a volunteer organization and will return calls as quickly as
          possible. Please allow us a few days to return your call.
          <i>Thank you!</i>
        </p>
      </section>
      <section className="sidebar__widget sidebar__resale">
        <h4 className="sidebar__widget-title">Resale Shop Location</h4>
        <p className="sidebar__resale-text">
          <strong>IMPORTANT:</strong> Do not call the Resale Shop for
          spay/neuter appointments.
          <strong> Use the phone number above.</strong>
          <br />
          <br />
          Resale Shop Address: 2048 Grand Avenue, Lindenhurst, IL, 60046 <br />
          Phone: 847-245-3188
          <br />
          <br />
          Mailing Address: PO Box 267, Lake Villa, IL 60046
          <br />
          <br />
          <a href="mailto:info@ahaworks.org">info@ahaworks.org</a>
        </p>
      </section>
    </aside>
  );
}

export default Sidebar;
