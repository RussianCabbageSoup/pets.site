import cat from '../images/little cat.avif';
import { useState, useEffect } from 'react';

function Card_1() {
    const [animalCards, setAnimalCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6);

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

        fetch("https://pets.xn--80ahdri7a.site/api/search", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("API Response:", result);

                if (result.data && result.data.orders) {
                    const petsData = result.data.orders.map(pet => ({
                        id: pet.id,
                        district: pet.district,
                        kind: pet.kind,
                        photos: "https://pets.xn--80ahdri7a.site/" + pet.photos,
                        date: pet.date,
                        description: pet.description
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

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = animalCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(animalCards.length / cardsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; 
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= maxVisiblePages - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                pageNumbers.push(currentPage - 1);
                pageNumbers.push(currentPage);
                pageNumbers.push(currentPage + 1);
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        
        return pageNumbers;
    };

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
                        <img src={cat} className="card-img-top" alt="Котенок" style={{ height: '200px', objectFit: 'cover' }}/>
                        <div className="card-body">
                            <h5 className="card-title">Котенок, от 12-03-05</h5>
                            <p className="card-text">
                                <strong>Район:</strong> Приморский
                            </p>
                            <p className="card-text text-muted small">
                                ID: 0
                            </p>
                            <p className="card-text">Маленький белый котенок, найден в районе ул. Пушкина. Очень игривый и ласковый.</p>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCat">
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>

                {currentCards.map(pet => (
                    <div className="col-md-4 mb-4" key={pet.id}>
                        <div className="card animal-card h-100">
                            <img 
                                src={pet.photos} 
                                className="card-img-top" 
                                alt={(pet.kind)} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {(pet.kind)}, от {(pet.date)}
                                </h5>
                                <p className="card-text">
                                    <strong>Район:</strong> {pet.district}
                                </p>
                                <p className="card-text text-muted small">
                                    ID: {pet.id}
                                </p>
                                <p>
                                    {pet.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {animalCards.length > cardsPerPage && (
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={prevPage}
                                aria-label="Previous"
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        
                        {getPageNumbers().map((number, index) => (
                            <li 
                                key={index} 
                                className={`page-item ${number === currentPage ? 'active' : ''} ${number === '...' ? 'disabled' : ''}`}
                            >
                                {number === '...' ? (
                                    <span className="page-link">...</span>
                                ) : (
                                    <button 
                                        className="page-link" 
                                        onClick={() => paginate(number)}
                                    >
                                        {number}
                                    </button>
                                )}
                            </li>
                        ))}
                        
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={nextPage}
                                aria-label="Next"
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                    
                    <div className="text-center mt-2">
                        <small className="text-muted">
                            Страница {currentPage} из {totalPages} (всего {animalCards.length} животных)
                        </small>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Card_1;