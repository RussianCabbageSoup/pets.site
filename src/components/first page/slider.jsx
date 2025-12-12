import '../css/myStyle.css';
import { useState } from 'react';

function Slider() {

  const [dogImg, setDogImg] = useState('');
  const [dogDescr, setDogDescr] = useState('');

  const [catImg, setCatImg] = useState('');
  const [catDescr, setCatDescr] = useState('');

  const [zebraImg, setZebraImg] = useState('');
  const [zebraDzebraescr, setZebraDescr] = useState('');

  const [crocodileImg, setCrocodileImg] = useState('');
  const [crocodileDescr, setCrocodileDescr] = useState('');

  const [kangarooImg, setKangarooImg] = useState('');
  const [kangarooDescr, setKangarooDescr] = useState('');

  function getSliderData(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("https://pets.xn--80ahdri7a.site/api/pets/slider", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        console.log(result.data.pets[1].description);
        
        setCatDescr(result.data.pets[0].description);
        setCatImg("https://pets.xn--80ahdri7a.site" + result.data.pets[0].image);

        setDogDescr(result.data.pets[1].description);
        setDogImg("https://pets.xn--80ahdri7a.site" + result.data.pets[1].image);

        setZebraDescr(result.data.pets[2].description);
        setZebraImg("https://pets.xn--80ahdri7a.site" + result.data.pets[2].image);

        setCrocodileDescr(result.data.pets[3].description);
        setCrocodileImg("https://pets.xn--80ahdri7a.site" + result.data.pets[3].image);

        setKangarooDescr(result.data.pets[4].description);
        setKangarooImg("https://pets.xn--80ahdri7a.site" + result.data.pets[4].image);
    })
    .catch(error => console.log('error', error));
  }

  return (
    <div id="animalCarousel" className="carousel slide" data-bs-ride="carousel" onLoad={(e) => getSliderData(e)}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Слайд 1" />
        <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={1} aria-label="Слайд 2" />
        <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={2} aria-label="Слайд 3" />
        <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={3} aria-label="Слайд 4" />
        <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={4} aria-label="Слайд 5" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={catImg} className="d-block w-100" alt="Найденный кот" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{catDescr}</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={dogImg} className="d-block w-100" alt="Найденная собака" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{dogDescr}</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={zebraImg} className="d-block w-100" alt="Найденная зебра" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{zebraDzebraescr}</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={crocodileImg} className="d-block w-100" alt="Найденный крокодил" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{crocodileDescr}</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={kangarooImg} className="d-block w-100" alt="Найденный кенгуру" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>{kangarooDescr}</h5>
            <p></p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#animalCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#animalCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
}

export default Slider;