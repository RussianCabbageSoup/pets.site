import icon_human from '../images/icon/v.ico';
import icon_phone from '../images/icon/phone.ico';
import icon_mail from '../images/icon/mail.ico';
import icon_lock from '../images/icon/z.ico';
import { useState } from 'react';

function Modal (props) {

    let [phone, setPhon]=useState('');
    let [email, setEmail]=useState('');
    let [success, setSuccess]=useState('none');
    let [error, setError]=useState('none');
    let [message, setMessage]=useState();

    

    function changeData(e) {

        e.preventDefault();

        if (email != '') {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"email": email});

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/users/email", requestOptions)
                .then(response => response.status)
                .then(
                    result => {console.log(result)
                    switch (result) {
                        case 200:
                            setSuccess('block');
                            setError('none')
                            break;
                        case 401:
                            setError('block');
                            setSuccess('none');
                            setMessage('Пожалуйста авторизуйтесь')
                            break;
                        case 422:
                            setError('block');
                            setSuccess('none');
                            setMessage('Пожалуйста введите корректный e-mail')
                            break;
                    }
            })
            .catch(error => console.log('error', error));
        }

        if (phone != '') {

            var myHeaders = new Headers();
            // localStorage.token = "AN0WTsypnJpAyKgVeCaQMBLXkIWJXRNQzN7ZE3ZakYLMKbHNdaUsEg4V9hq580JUKjKwRNHU1Gp7btyj";
            myHeaders.append("Authorization", "Bearer " + localStorage.token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"phone": phone});

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/users/phone", requestOptions)
                .then(response => response.status)
                .then(
                    result => {console.log(result)
                    switch (result) {
                        case 200:
                            setSuccess('block');
                            setError('none')
                            break;
                        case 401:
                            setError('block');
                            setSuccess('none');
                            setMessage('Пожалуйста авторизуйтесь')
                            break;
                        case 422:
                            setError('block');
                            setSuccess('none');
                            setMessage('Пожалуйста введите корректный номер телефона')
                            break;
                    }
            })
            .catch(error => console.log('error', error));
        }
    }

    function registation(e) {
        e.preventDefault();

    }
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    function reg(event) {
        'use strict'
    
        const form = document.getElementById('form')

        event.preventDefault()
        event.stopPropagation()
    
        form.classList.add('was-validated')    
    }
    
    return (
        <div>
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


        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Регистрация</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                <form className="row g-3 needs-validation" noValidate id='form' onSubmit={(e)=>reg(e)} >
                    <label htmlFor="validationCustom03" className="form-label"><h5>Имя</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_human} /></span>
                            <input type="text" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required />
                            <div className="invalid-feedback">
                            Укажите имя
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Адрес электронной почты</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_mail} /></span>
                            <input type="email" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required />
                            <div className="invalid-feedback">
                            Укажите почту
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Номер телефона</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_phone} /></span>
                            <input type="tel" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required />
                            <div className="invalid-feedback">
                            Укажите номер телефона
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Пароль</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_lock} /></span>
                            <input type="password" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required />
                            <div className="invalid-feedback">
                            укажите пароль
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Подтвердите пароль</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_lock} /></span>
                            <input type="password" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required />
                            <div className="invalid-feedback">
                            Подтвердите пароль
                            </div>
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
                            <button className="btn btn-primary" type="submit" onClick={(e)=>registation(e)}>Отправить</button>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
            </div>
        </div>


        <div className="modal fade" id="myPage" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Личный кабинет</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                    <div className="alert alert-success" role="alert" style={{display: success}}>
                        Вы успешно изменили данные
                    </div>
                    <div className="alert alert-danger" role="alert" style={{display: error}}>
                        {message}
                    </div>

                    <ul className="list-group">
                    <h5>{props.data.first_name} {props.data.last_name}</h5>
                    <li className="list-group-item">
                    email
                    <input type="email" className="form-control" placeholder="Сменить почту" aria-label="Сменить почту" aria-describedby="addon-wrapping" onChange={(e)=>setEmail(e.target.value)}/>
                    </li>
                    <li className="list-group-item">
                    phone
                    <input type="text" className="form-control" placeholder="Сменить телефон" aria-label="Сменить телефон" aria-describedby="addon-wrapping" onChange={(e)=>setPhon(e.target.value)}/>
                    </li>
                </ul>
                <div>
                    <h5>Мои посты</h5>
                </div>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" onClick={(e)=>changeData(e)} className="btn btn-primary">Сохранить изменения</button>
                </div>
            </div>
            </div>
        </div>


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
                                <div className="invalid-feedback">
                                </div>
                                <label htmlFor="validationCustom03" className="form-label">Описание</label>
                                <textarea type="text" className="form-control" id="validationCustom03" placeholder=''  />
                                <div className="invalid-feedback">
                                </div>
                                <label htmlFor="validationCustom03" className="form-label">Укажите ваш номер телефона</label>
                                <input type="tel" className="form-control" id="validationCustom03" placeholder='' required/>
                                <div className="invalid-feedback">
                                введите ваш номер телефона
                                </div>
                                <label htmlFor="validationCustom03" className="form-label">Фото найденного животного</label>
                                <input type="file" className="form-control" id="validationCustom03" placeholder='' required/>
                                <div className="invalid-feedback">
                                </div>
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
        </div>
    );
}

export default Modal;