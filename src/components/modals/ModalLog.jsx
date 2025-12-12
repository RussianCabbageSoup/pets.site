import { useState } from "react";

function ModalLog() {

    const [email, setEmail]=useState('');
    const [password, setPassword] = useState('');
    
    localStorage.token = '';

    function logIn(event) {
        event.preventDefault();

        if (password !== '' && email !== '') {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": email,
                "password": password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                localStorage.token = result.data.token;
                console.log('Токен сохранен в localStorage');
                
                const modal = document.getElementById('Enter');
            })
            .catch(error => console.log('error', error));
        }
    }

    return ( 
        <div className="modal fade" id="Enter" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Вход</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                        <div className="modal-body">
                            <form onSubmit={(e)=>logIn(e)}>
                                <ul className="list-group">
                                <li className="list-group-item">
                                Введите вашу почту
                                <input type="email" className="form-control" aria-describedby="addon-wrapping" required onChange={(e)=>setEmail(e.target.value)}/>
                                </li>
                                <li className="list-group-item">
                                Введите пароль
                                <input type="text" className="form-control" aria-describedby="addon-wrapping" required onChange={(e)=>setPassword(e.target.value)}/>
                                </li>
                                </ul>
                                <div className="modal-footer d-flex flex-column align-items-end">
                                    <button type="submit" className="btn btn-primary mb-5">Войти</button>
                                    <div className='d-flex w-100 justify-content-center'>
                                    <p style={{textAlign: 'center'}}>Нет аккаунта? <button type="button" className='btn btn-link' data-bs-toggle="modal" data-bs-target="#exampleModal">Регистрация</button></p>
                                    </div>
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

export default ModalLog;