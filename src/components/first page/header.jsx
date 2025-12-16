import img from '../images/logo.png'
import '../css/myStyle.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {

  const [personalAccD, setPersonalAccD] = useState('none');
  const [loginD, setLoginD] = useState('flex');
  const [exit, setExit] = useState('none');

  const [req, setReq] = useState('');

  useEffect(() => {
    if (localStorage.token && localStorage.token !== ''){
      setPersonalAccD('flex');
      setExit('flex')
      setLoginD('none');
    }
  }, []);

  function searchFun(e) {
    e.preventDefault();

    const myHeaders = new Headers();

        const requestOptions = {
            method: 'GET',
        };

        fetch(`https://pets.xn--80ahdri7a.site/api/search?query=${req}`, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result);

            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
            });
  }

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
            {/* <li className="nav-item me-3">
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#contacts">
                Контакты
              </button>
            </li> */}
            <li className="nav-item me-3" style={{display: loginD}}>
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#Enter"/*"#exampleModal"*/>
                Войти
              </button>
            </li>
            <li className="nav-item me-3" style={{display: personalAccD}}>
              <Link to={'/myPage'} className="nav-link">Личный кабинет</Link>
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#newPost">
                Сообщить о находке
              </button>
            </li>
            <li className="nav-item me-3" style={{display: exit}}>
              <button type="button" className="btn btn-primary h-100" style={{background: 'red'}} data-bs-toggle="modal" data-bs-target="#Exit"/*"#exampleModal"*/>
                Выйти
              </button>
            </li>
            <li>
              <form className="d-flex me-3" role="search" onSubmit={(e) => searchFun(e)}>
                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" onChange={(e) => setReq(e.target.value)}/>
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
