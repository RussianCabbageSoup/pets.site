function ModalContact() {
    return ( 
        <div className="modal fade" id="contacts" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Контакты</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Получатель:</label>
                    <input type="email" className="form-control" placeholder="helpAnimal@mail.ru" aria-label="helpAnimal@mail.ru" aria-describedby="addon-wrapping" required/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Сообщение:</label>
                    <textarea className="form-control" id="message-text" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>
                </div>
                <ul className="list-group">
                <h5><li className="list-group-item">Вы также можете позвонить нам в любое время</li></h5>
                <li className="list-group-item">+7 (912) 742-21-42</li>
                <li className="list-group-item">+7 (909) 742-21-42</li>
                <li className="list-group-item">+7 (969) 742-21-42</li>
                </ul>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
            </div>
        </div>
     );
}

export default ModalContact;