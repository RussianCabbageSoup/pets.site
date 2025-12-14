function Exit() {
    return ( 
        <div className="modal fade" id="Exit" tabIndex={-1}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Подтверждение выхода</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
                Вы уверены, что хотите выйти из личного кабинета?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                <button type="button" className="btn btn-primary" id="confirmLogout">Выйти</button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Exit;