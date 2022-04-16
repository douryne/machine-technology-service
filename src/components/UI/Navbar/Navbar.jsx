import './Navbar.css';
import './Navbar-media.css';
import logo from '../../../assets/img/logo.jpg';

function Navbar() {
  return (
    <header className="head-section">
    <div className="navbar navbar-default navbar-static-top container">
        <div className="navbar-header">
            <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html"><img src={logo} align='left' alt='logo' /></a>
        </div>
        <div id="lang">
          <ul>
              <li id="langruactive"><a href="index.html"></a></li>
              <li id="languz"><a href="indexuz.html"></a></li>
              <li id="langen"><a href="indexen.html"></a></li>
          </ul>
        </div>

        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="index.html">Главная</a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" href="folio.html">Портфолио</a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" href="equipment.html">Оборудование завода</a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" href="practice.html">Применение</a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" href="info.html">Наши референсы</a>
                </li>
                <li>
                    <a href="contact.html">Контакты</a>
                </li>
            </ul>
        </div>
    </div>
  </header>
  )
}

export default Navbar