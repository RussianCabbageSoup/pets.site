import '../css/myStyle.css';
import { useState, useEffect } from 'react';

function Slider() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSliderData();
  }, []);

  function getSliderData() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch("https://pets.xn--80ahdri7a.site/api/pets/slider", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("API Response:", result);
        
        if (result.data && result.data.pets) {
          const petsData = result.data.pets.map(pet => ({
            image: "https://pets.xn--80ahdri7a.site" + pet.image,
            description: pet.description,
            kind: pet.kind
          }));
          
          setAnimals(petsData);
        } else {
          console.error("Некорректная структура ответа:", result);
        }
        
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки:', error);
        setLoading(false);
      });
  }

  return (
    <div id="animalCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {animals.map((_, index) => (
          <button 
            key={index}
            type="button" 
            data-bs-target="#animalCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? "active" : ""} 
            aria-label={`Слайд ${index + 1}`}/>
        ))}
      </div>
      
      <div className="carousel-inner">
        {animals.map((animal, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={animal.image} className="d-block w-100" alt={animal.title} style={{ height: "400px", objectFit: "cover" }}/>
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>{animal.title}</h5>
              <p>{animal.description}</p>
            </div>
          </div>
        ))}
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