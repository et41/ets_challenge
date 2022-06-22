import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const concertPage = () => {
    navigate("/konser", {replace: true});
  }
  const theatrePage = () => {
    navigate("/tiyatro", {replace: true})
  }

	return (
	<div className="navbar">
        <div className="navbar--left">
          <ul className="navbar--ul">
            <img
              className="logo"
              src="https://www.etstur.com/resources_t/img/webpush-logo.png"
            />
            <li onClick={concertPage}>Konser</li>
            <li onClick={theatrePage}>Tiyatro</li>
          </ul>
        </div>
        <div className="navbar--right">
          <ul className="navbar--ul">
            <li>Kayıt Ol</li>
          </ul>
        </div>
      </div>		
	)
}
