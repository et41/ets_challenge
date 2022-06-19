import "./styles.css";

export default function App() {
  return (
    <div>
    <div className="hero">
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
      <div className="header">
        <h1>Her Etkinlik İçin</h1>
        <h3>İstediğiniz bilete anında ulaşın!!</h3>
      </div>
     <div className="searchbar--main">
       <span class="search--icon">🔎︎</span>
       <input class="searchbar" type="search" name="Search" placeholder="İstediğiniz etkinliği arayın..." />

      </div>
      
      </div>
      <div className="browse">
        <p>Etkinlikler </p>
        <p>Şehir</p>
        <div className="browse--buttons">
          <button >Şehir Değiştir</button>
          <button>Tarihe Göre Ara</button>
        </div>
      </div>
      </div>
  );
}

