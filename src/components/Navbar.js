
export default function Navbar() {

	return (
	<div className="navbar">
        <div className="navbar--left">
          <ul>
            <img
              className="logo"
              src="https://www.etstur.com/resources_t/img/webpush-logo.png"
            />
            <li>Konser</li>
            <li>Tiyatro</li>
            <li>Fazlası...</li>
          </ul>
        </div>
        <div className="navbar--right">
          <ul>
            <li>Kayıt Ol</li>
          </ul>
        </div>
      </div>		
	)
}
