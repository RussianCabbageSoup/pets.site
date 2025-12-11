import { useState } from "react";

function ModalLog() {

    const [phone, setPhon]=useState('');
    const [email, setEmail]=useState('');

    return ( 
        <div className="modal fade" id="Enter" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Вход</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>
            <div className="modal-body">
            <form>
                <ul className="list-group">
                <li className="list-group-item">
                Введите вашу почту
                <input type="email" className="form-control" aria-describedby="addon-wrapping" onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li className="list-group-item">
                Введите пароль
                <input type="text" className="form-control" aria-describedby="addon-wrapping" onChange={(e)=>setPhon(e.target.value)}/>
                </li>
                </ul>
                <div className="modal-footer d-flex flex-column align-items-end">
                    <button type="button" className="btn btn-primary mb-5">Войти</button>
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