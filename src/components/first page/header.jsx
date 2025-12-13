import img from '../images/logo.png'
import '../css/myStyle.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {

  // const [isLog, setIsLog] = useState(true);
  // const [log, setLog] = useState('');
  // const [personalAcc, setPersonalAcc] = useState('none');

  return ( 
    <nav className="navbar navbar-nav navbar-expand-lg navbar-light bg-light mb-2">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          <img src={img} alt="Логотип" width={30} height={30} className="d-inline-block align-text-top" />
          Найденные животные
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключить навигацию">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item me-3">
              <Link to={'/'} className="nav-link active" aria-current="page">Главная</Link>
            </li>
            <li className="nav-item me-3">
              <Link to={'/foundAnimal'} className="nav-link">Найти животное</Link>
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#newPost">
                Сообщить о находке
              </button>
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#contacts">
                Контакты
              </button>
            </li>
            <li className="nav-item me-3" style={{display: 'flex'}}>
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#Enter"/*"#exampleModal"*/>
                Войти
              </button>
            </li>
            <li className="nav-item me-3" style={{display: 'flex'}}>
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#myPage">
                Личный кабинет
              </button>
            </li>
            <li>
              <form className="d-flex me-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" />
                <button className="btn btn-outline-success" type="submit">Поиск</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);
}

export default Header;
