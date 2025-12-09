import icon_human from '../images/icon/v.ico';
import icon_phone from '../images/icon/phone.ico';
import icon_mail from '../images/icon/mail.ico';
import icon_lock from '../images/icon/z.ico';
import { useState } from 'react';


function Reg() {

    let [user_name, setUser_name] = useState('');
    let [user_email, setUser_email] = useState('');
    let [user_phone, setUser_phone] = useState('');
    let [user_password, setUser_password] = useState('');

    function registation(e) {
        e.preventDefault();

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
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields

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
                            <input type="text" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required onChange={(e)=>setUser_name(e.target.value)} />
                            <div className="invalid-feedback">
                            Укажите имя
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Адрес электронной почты</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_mail} /></span>
                            <input type="email" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required onChange={(e)=>setUser_email(e.target.value)}/>
                            <div className="invalid-feedback">
                            Укажите почту
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Номер телефона</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_phone} /></span>
                            <input type="tel" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required onChange={(e)=>setUser_phone(e.target.value)}/>
                            <div className="invalid-feedback">
                            Укажите номер телефона
                            </div>
                        </div>
                    <label htmlFor="validationCustom03" className="form-label"><h5>Пароль</h5></label>
                        <div className="input-group col-md-6">
                            <span className="input-group-text" id="addon-wrapping"><img src={icon_lock} /></span>
                            <input type="password" className="form-control" id="validationCustom03" placeholder='' aria-describedby="addon-wrapping" required onChange={(e)=>setUser_password(e.target.value)}/>
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
                            <button className="btn btn-primary" type="submit" >Отправить</button>
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

export default Reg;