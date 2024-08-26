// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-8 footercurve">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="font-bold text-lg">KPI</h2>
          <p>Important Documents</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Rezept einlösen</h2>
          <h2  className="text-white-400">Videosprechstunde</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">Live Bestand</h2>
          <p>FAQs</p>
          <p>(Kontakt)</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Started on</h2>
          {/* <p>08/25/2022</p> */}
          <p>Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">Today</h2>
          <p>09:00 - 11:00 AM</p>
          <p>By Appointment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
