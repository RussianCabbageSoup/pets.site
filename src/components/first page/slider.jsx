import slider_cat from '../images/cat.png';
import slider_dog from '../images/dog.webp';
import slider_parrot from '../images/parrot.jfif';
import '../css/myStyle.css';

function Slider() {
    return (
      <div id="animalCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Слайд 1" />
          <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={1} aria-label="Слайд 2" />
          <button type="button" data-bs-target="#animalCarousel" data-bs-slide-to={2} aria-label="Слайд 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider_cat} className="d-block w-100" alt="Найденный кот" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Найден кот в районе парка</h5>
              <p>Полосатый кот, найден 15 октября в Центральном парке. Очень ласковый, ищет хозяев.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider_dog} className="d-block w-100" alt="Найденная собака" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Найдена собака породы джек-рассел</h5>
              <p>Собака найдена в районе ул. Ленина, 12 октября. Очень активная, знает команды.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider_parrot} className="d-block w-100" alt="Найденный попугай" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Найден попугай в центре города</h5>
              <p>Яркий попугай ара, найден 10 октября в центре города. Говорит несколько слов.</p>
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