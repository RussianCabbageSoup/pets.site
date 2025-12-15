import { useState } from "react";

function ModalNewPost() {

    function validationCheck(event) {
        'use strict';
        const form = document.getElementById('form');
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
    }

    return ( 
        <div className="modal fade" id="newPost" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Сообщить о находке</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div className="modal-body">
                        <form className="row g-3 needs-validation" noValidate id='form' onSubmit={(e)=>validationCheck(e)} >
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">Тип животного</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="например: кот" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>

                            <div className="col-md-4">
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationCustom03" className="form-label">Место находки</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder='укажите район' required />
                                <div className="invalid-feedback">
                                    Укажите место находки
                                </div>
                                <label htmlFor="validationCustom03" className="form-label">Описание</label>
                                <textarea type="text" className="form-control" id="validationCustom03" placeholder='' required/>
                                <label htmlFor="validationCustom03" className="form-label">Фото найденного животного</label>
                                <input type="file" className="form-control" id="validationCustom03" placeholder='' required/>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Я даю разрешение на обработку персональных данных
                                    </label>
                                    <div className="invalid-feedback">
                                        Обязательно
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Отправить</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalNewPost;