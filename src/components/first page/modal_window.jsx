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
            myHeaders.append("Authorization", "Bearer "+localStorage.token);
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
                    <input type="text" className="form-control" placeholder="helpAnimal@mail.ru" aria-label="helpAnimal@mail.ru" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Сообщение:</label>
                    <textarea className="form-control" id="message-text" defaultValue={""} />
                    </div>
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
                <button type="button" className="btn btn-primary">Отправить</button>
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
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><img src={icon_human} /></span>
                    <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" />
                </div>
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><img src={icon_phone} /></span>
                    <input type="text" className="form-control" placeholder="phone" aria-label="phone" aria-describedby="addon-wrapping" />
                </div>
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><img src={icon_mail} /></span>
                    <input type="text" className="form-control" placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                </div>
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><img src={icon_lock} /></span>
                    <input type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                </div>
                <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="addon-wrapping"><img src={icon_lock} /></span>
                    <input type="text" className="form-control" placeholder="Подтвердите пароль" aria-label="Подтвердите пароль" aria-describedby="addon-wrapping" />
                </div>
                <div className="input-group flex-nowrap mb-2">
                    <input className="me-1" type="checkbox" />Я даю согласие на обработку персоналных данных
                </div>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" className="btn btn-primary">Войти</button>
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
                        Вы успешно сменили e-mail
                    </div>
                    <div className="alert alert-danger" role="alert" style={{display: error}}>
                        {message}
                    </div>

                     <ul className="list-group">
                    <h5>{props.data.first_name} {props.data.last_name}</h5>
                    <li className="list-group-item">
                    {props.data.email}
                    <input type="email" className="form-control" placeholder="Сменить почту" aria-label="Сменить почту" aria-describedby="addon-wrapping" onChange={(e)=>setEmail(e.target.value)}/>
                    </li>
                    <li className="list-group-item">
                    {props.data.phone}
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
                <form>
                    <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Введите описание найденного зверька и место, где вы его нашли:</label>
                    <textarea className="form-control" id="message-text" defaultValue={""} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="file" className="col-form-label">Добавьте фото</label><br />
                    <input type="file" id="file" />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" className="btn btn-primary">Отправить сообщение</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Modal;