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
                            <div className="col-4-md-4">

                                <label htmlFor="validationCustom01" className="form-label">Ваше имя</label>
                                <input type="text" className="form-control" id="validationCustom01" required />
                                <div className="invalid-feedback">
                                    Укажите ваше имя
                                </div>

                                <label htmlFor="validationCustom02" className="form-label">Ваш номер телефона</label>
                                <input type="text" className="form-control" id="validationCustom02" required />
                                <div className="invalid-feedback">
                                    Укажите ваш номер телефона
                                </div>

                                <label htmlFor="validationCustom03" className="form-label">Ваш email</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                    Укажите ваш email
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Прикрепить аккаунт / зарегистироваться
                                    </label>
                                    <div className="invalid-feedback">
                                        Обязательно
                                    </div>
                                </div>

                                <label htmlFor="validationCustom04" className="form-label">Пароль</label>
                                <input type="text" className="form-control" id="validationCustom04" required />
                                <div className="invalid-feedback">
                                    Укажите пароль
                                </div>

                                <label htmlFor="validationCustom05" className="form-label">Подтвердите пароль</label>
                                <input type="text" className="form-control" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                    Подтвердите пароль
                                </div>

                                <label htmlFor="validationCustom06" className="form-label">Тип животного</label>
                                <input type="text" className="form-control" id="validationCustom06" placeholder="например: кот" required />
                                <div className="invalid-feedback">
                                    Укажите тип животного
                                </div>

                                <label htmlFor="validationCustom07" className="form-label">Место находки</label>
                                <input type="text" className="form-control" id="validationCustom07" placeholder='укажите район' required />
                                <div className="invalid-feedback">
                                    Укажите место находки
                                </div>

                                <label htmlFor="validationCustom08" className="form-label">Метка (необязательно)</label>
                                <input type="text" className="form-control" id="validationCustom08" placeholder='' />

                                <label htmlFor="validationCustom09" className="form-label">Описание</label>
                                <textarea type="text" className="form-control mb-4" id="validationCustom09" placeholder='' required/>

                                <label htmlFor="validationCustom10" className="form-label">Фото найденного животного 1 (необязательно)</label>
                                <input type="file" className="form-control mb-3" id="validationCustom10" placeholder='' required/>

                                <label htmlFor="validationCustom11" className="form-label">Фото найденного животного 2 (необязательно)</label>
                                <input type="file" className="form-control mb-3" id="validationCustom11" placeholder='' />

                                <label htmlFor="validationCustom12" className="form-label">Фото найденного животного 3 (необязательно)</label>
                                <input type="file" className="form-control mb-3" id="validationCustom12" placeholder='' />

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