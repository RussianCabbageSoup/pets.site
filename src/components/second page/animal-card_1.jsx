import cat from '../images/little cat.avif';
import { useState, useEffect } from 'react';

function Card_1() {
    const [animalCards, setAnimalCards] = useState([]);

    useEffect(() => {
        getCards();
    }, []);

    function getCards() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.xn--80ahdri7a.site/api/pets", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("API Response:", result);

                if (result.data && result.data.orders) {
                    const petsData = result.data.orders.map(pet => ({
                        id: pet.id,
                        phone: pet.phone,
                        kind: pet.kind,
                        photo: "https://pets.xn--80ahdri7a.site/" + pet.photo,
                        date: pet.date
                    }));

                    setAnimalCards(petsData);
                } else {
                    console.error("Некорректная структура ответа:", result);
                }
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2>Помогите найти хозяев для этих животных</h2>
                    <p className="lead">На этой странице представлены животные, которые были найдены на улице и ищут своих хозяев или новых любящих семей.</p>
                </div>
            </div>
                <div className="row mb-5">
                    <div className="col-md-4 mb-4">
                        <div className="card animal-card h-100">
                            <img src={cat} className="card-img-top" alt="Котенок" />
                            <div className="card-body">
                                <h5 className="card-title">Котенок, найден 12 октября</h5>
                                <p className="card-text">Маленький белый котенок, найден в районе ул. Пушкина. Очень игривый и ласковый.</p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCat">
                                    Узнать больше
                                </button>
                            </div>
                        </div>
                    </div>

                    {animalCards.map(pet => (
                        <div className="col-md-4 mb-4" key={pet.id}>
                            <div className="card animal-card h-100">
                                <img 
                                    src={pet.photo} 
                                    className="card-img-top" 
                                    alt={(pet.kind)} 
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {(pet.kind)}, найден {(pet.date)}
                                    </h5>
                                    <p className="card-text">
                                        <strong>Контактный телефон:</strong> {pet.phone}
                                    </p>
                                    <p className="card-text text-muted small">
                                        ID: {pet.id}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Card_1;