import cat from '../images/little cat.avif';
import '../css/card-style.css';

function Modal_Cat () {
    return (
        <div className="modal fade" id="modalCat" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{padding: '10px'}}> 
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Котёнок</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div classname="modal-body">
                        <div className="info-img">
                            <img src={cat} className="card-img-bottom info-img-img" alt="Котенок" />
                        </div>
                        <p><strong>Место находки:</strong> район ул. Пушкина</p>
                        <p><strong>Описание:</strong> Маленький белый котенок. Очень игривый и ласковый.</p>
                        <p><strong>Возраст:</strong> примерно 2 месяца</p>
                        <p><strong>Пол:</strong> мужской</p>
                        <p><strong>Особенности:</strong> Приучен к лотку, обработан от паразитов</p>
                        <p><strong>Контакты для связи:</strong> +7 (999) 999-99-99</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-primary">Забрать</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal_Cat;