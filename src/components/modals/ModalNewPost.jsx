import { useState } from "react";

function ModalNewPost() {

    const [user_name, setUser_name] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_phone, setUser_phone] = useState('');
    const [user_password, setUser_password] = useState('');

    function reg(event) {
        'use strict'
        const form = document.getElementById('form')
        event.preventDefault()
        event.stopPropagation()    
        form.classList.add('was-validated')    

        if (
            user_name !== '' &&
            user_email !== '' &&
            user_phone !== '' &&
            user_password !== ''
        ) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "name": user_name,
                "phone": user_phone,
                "email": user_email,
                "password": user_password,
                "password_confirmation": user_password,
                "confirm": 1
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/register", requestOptions)
            .then(response => response.status)
            .then(
                result => {console.log(result)
                switch (result) {
                    case 204:
                        console.log('success');
                        
                        break;
                    case 422:
                        console.log("ER 422");
                        
                        break;
                }
        })
        .catch(error => console.log('error', error));
        }
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
                        <form className="row g-3 needs-validation" noValidate id='form' onSubmit={(e)=>reg(e)} >
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">Тип животного</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="например: кот" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustom02" className="form-label">Имя (при наличие)</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder='например: Барсик' required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationCustomUsername" className="form-label">Пол</label>
                                <div className="input-group has-validation">
                                    <select required>
                                        <option value="null">не определен</option>
                                        <option value="male">мальчик</option>
                                        <option value="female">девочка</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validationCustom03" className="form-label">Место находки</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder='укажите район' required />
                                <div className="invalid-feedback">
                                    Укажите место находки
                                </div>
                                <label htmlFor="validationCustom03" className="form-label">Примерный возраст</label>
                                <input type="text" className="form-control" id="validationCustom03" placeholder='например: 5 месяцев'  />
                                <label htmlFor="validationCustom03" className="form-label">Описание</label>
                                <textarea type="text" className="form-control" id="validationCustom03" placeholder=''  />
                                <label htmlFor="validationCustom03" className="form-label">Укажите ваш номер телефона</label>
                                <input type="tel" className="form-control" id="validationCustom03" placeholder='' required/>
                                <div className="invalid-feedback">
                                    введите ваш номер телефона
                                </div>
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