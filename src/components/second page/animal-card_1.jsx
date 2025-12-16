import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom'; // Добавлены useLocation и useSearchParams

function Card_1() {
    const [animalCards, setAnimalCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(6);
    const [filters, setFilters] = useState({
        district: '',
        kind: '',
        description: ''
    });

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setFilters(prev => ({
                ...prev,
                description: searchQuery
            }));
        }
    }, [location, searchParams]);

    useEffect(() => {
        applyFilters();
    }, [animalCards, filters]);

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
                    setFilteredCards(petsData);
                } else {
                    console.error("Некорректная структура ответа:", result);
                }
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
            });
    }

    const applyFilters = () => {
        let filtered = [...animalCards];

        if (filters.district.trim() !== '') {
            filtered = filtered.filter(card => 
                card.district.toLowerCase() === filters.district.toLowerCase().trim()
            );
        }

        if (filters.kind.trim() !== '') {
            filtered = filtered.filter(card => 
                card.kind.toLowerCase().includes(filters.kind.toLowerCase().trim())
            );
        }

        if (filters.description.trim() !== '') {
            filtered = filtered.filter(card => 
                card.description.toLowerCase().includes(filters.description.toLowerCase().trim())
            );
        }

        setFilteredCards(filtered);
        setCurrentPage(1);
    };

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [id.replace('Search', '').toLowerCase()]: value
        }));
        
        if (id === 'descriptionSearch') {
            if (value.trim()) {
                setSearchParams({ search: value.trim() });
            } else {
                setSearchParams({});
            }
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        applyFilters();
    };

    const clearSearch = () => {
        setFilters(prev => ({
            ...prev,
            description: ''
        }));
        setSearchParams({});
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

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

            <div className="col-8 mb-4 mx-auto">
                <form onSubmit={handleSearchSubmit} className="d-flex flex-column" role="search">
                    <div className="mb-3">
                        <label htmlFor="districtSearch" className="form-label">
                            Название района (точно)
                        </label>
                        <div className="input-group">
                            <input 
                                id="districtSearch" 
                                className="form-control" 
                                type="search" 
                                placeholder="Введите название района полностью" 
                                aria-label="Поиск по району"
                                value={filters.district}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="kindSearch" className="form-label">
                            Тип животного
                        </label>
                        <div className="input-group">
                            <input 
                                id="kindSearch" 
                                className="form-control" 
                                type="search" 
                                placeholder="Введите тип животного (кошка, собака, и т.д.)" 
                                aria-label="Поиск по типу животного"
                                value={filters.kind}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>
                    
                </form>
            </div>

            {filteredCards.length === 0 ? (
                <div className="alert alert-warning text-center">
                    <h4>Нет совпадений</h4>
                    <p>По вашему запросу "{filters.description}" ничего не найдено.</p>
                    <button 
                        className="btn btn-primary" 
                        onClick={clearSearch}
                    >
                        Показать всех животных
                    </button>
                </div>
            ) : (
                <>
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="alert alert-success">
                                Найдено животных: <strong>{filteredCards.length}</strong>
                                {filters.description && (
                                    <span> по запросу: <strong>"{filters.description}"</strong></span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        {currentCards.map(pet => (
                            <div className="col-md-4 mb-4" key={pet.id}>
                                <Link to={`/animal/${pet.id}`}>
                                    <div className="card animal-card h-100">
                                        <img src={pet.photos} className="card-img-top" alt={pet.kind} style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {pet.kind}, от {pet.date}
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
                                </Link>
                            </div>
                        ))}
                    </div>

                    {filteredCards.length > cardsPerPage && (
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={prevPage} aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>

                                {getPageNumbers().map((number, index) => (
                                    <li key={index} className={`page-item ${number === currentPage ? 'active' : ''} ${number === '...' ? 'disabled' : ''}`}>
                                        {number === '...' ? (
                                            <span className="page-link">...</span>
                                        ) : (
                                            <button className="page-link" onClick={() => paginate(number)}>
                                                {number}
                                            </button>
                                        )}
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={nextPage} aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>

                            <div className="text-center mt-2">
                                <small className="text-muted">
                                    Страница {currentPage} из {totalPages} (всего {filteredCards.length} животных)
                                </small>
                            </div>
                        </nav>
                    )}
                </>
            )}
        </div>
    );
}

export default Card_1;