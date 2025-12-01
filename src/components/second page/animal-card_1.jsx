import cat from '../images/little cat.avif';

function Card_1 () {
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
            </div>
        </div>
    );
}

export default Card_1;