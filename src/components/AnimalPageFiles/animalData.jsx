import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import '../css/an-page.css';

function AnimalData() {
    const { id } = useParams();
    const [animal, setAnimal] = useState('');

    useEffect(() => {
        getAnimalDetails();
    }, [id]);

    function getAnimalDetails() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch(`https://pets.xn--80ahdri7a.site/api/pets/${id}`, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.log("Animal details:", result);
                
                if (result.data.pet) {
                    const petData = result.data.pet;
                    setAnimal({
                        id: petData.id,
                        district: petData.district,
                        kind: petData.kind,
                        photos: "https://pets.xn--80ahdri7a.site/" + petData.photos,
                        date: petData.date,
                        description: petData.description,
                        mark: petData.mark
                    });
                }
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
            });
    }

    return (
        <div className="container mt-4 animal-page">
            <div className="card mb-4">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img 
                            src={animal.photos} 
                            className="img-fluid rounded-start animal-photo"
                            alt={animal.kind}
                            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title mb-3">{animal.kind}</h1>
                            <div className="animal-info mb-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><strong>Дата:</strong> {animal.date}</p>
                                        <p><strong>Район:</strong> {animal.district}</p>
                                        <p><strong>Маркер:</strong> {animal.mark}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>ID:</strong> {animal.id}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="animal-description mb-4">
                                <h5>Описание:</h5>
                                <p className="card-text">{animal.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimalData;