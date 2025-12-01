import article_card_cat from '../images/little cat.avif';
import article_card_dog from '../images/husky.jpg';
import article_card_parrot from '../images/card-parrot.jpg';
import '../css/myStyle.css';

function Article() {
    return (
        <div className="container mt-5">
        <div className="row mb-5">
            <div className="col-12 text-center">
            <h2>Помогите найти хозяев для этих животных</h2>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 mb-4">
            <div className="card animal-card h-100">
                <img src={article_card_cat} className="card-img-top" alt="Котенок" />
                <div className="card-body">
                <h5 className="card-title">Котенок, найден 12 октября</h5>
                <p className="card-text">Маленький белый котенок, найден в районе ул. Пушкина. Очень игривый и ласковый.</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCat">
                            Узнать больше
                </button>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card animal-card h-100">
                <img src={article_card_dog} className="card-img-top" alt="Собака" />
                <div className="card-body">
                <h5 className="card-title">Собака породы хаски, найдена 8 октября</h5>
                <p className="card-text">Дружелюбная собака, найдена в пригороде. Знает основные команды, приучена к поводку.</p>
                <a href="#" className="btn btn-primary">Узнать больше</a>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card animal-card h-100">
                <img src={article_card_parrot} className="card-img-top" alt="Попугай" />
                <div className="card-body">
                <h5 className="card-title">Попугай, найден 5 октября</h5>
                <p className="card-text">Красивый зеленый попугай, найден в центре города. Очень общительный, умеет говорить несколько слов.</p>
                <a href="#" className="btn btn-primary">Узнать больше</a>
                </div>
            </div>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-12">
            <div className="jumbotron jumbotron-fluid text-center rounded">
                <div className="container">
                <h1 className="display-4">Помогите животным найти дом!</h1>
                <p className="lead">Если вы потеряли своего питомца или готовы приютить одного из найденных животных, свяжитесь с нами.</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contacts">
                    Связаться с нами
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default Article;