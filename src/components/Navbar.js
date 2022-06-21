import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const concertPage = () => {
    navigate("/concerts", {replace: true});
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
            <li>Tiyatro</li>
            <li>Fazlası...</li>
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
