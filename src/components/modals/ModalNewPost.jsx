import { useState } from "react";

function ModalNewPost() {
    const [passwordBlock, setPasswordBlock] = useState('none');
    const [formData, setFormData] = useState({
        "name": '',
        "phone": '',
        "email": '',
        "password": '',
        "password_confirmation": '',
        "confirm": true,
        "kind": '',
        "photo1": null,
        "photo2": null,
        "photo3": null,
        "mark": '',
        "district": '',
        "description": '',
        "confirm": true
    });
      
    function handleCheckboxChange(e) {
        if (e.target.checked) {
            setPasswordBlock('flex');
        } else {
            setPasswordBlock('none');
        }
    };

    function handleInputChange(e) {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    function submitData(event) {
        event.preventDefault();
        event.stopPropagation();
        
        const form = document.getElementById('form');
        form.classList.add('was-validated');

        const formDataToSend = new FormData();
        
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null && formData[key] !== '') {
                formDataToSend.append(key, formData[key]);
            }
        });

        fetch(`https://pets.xn--80ahdri7a.site/api/pets`, {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => response.json())
        .then(result => {
            console.log("details:", result);

            if (result.data.status == 'OK') {
                window.location.reload();
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки:', error);
        });
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
                        <form className="row g-3 needs-validation" noValidate id='form' onSubmit={(e) => submitData(e)}>
                            <div className="col-4-md-4">

                                <label htmlFor="validationCustom01" className="form-label">Ваше имя</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustom01" 
                                    name="name"
                                    required 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Укажите ваше имя
                                </div>

                                <label htmlFor="validationCustom02" className="form-label">Ваш номер телефона</label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="validationCustom02" 
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Укажите ваш номер телефона
                                </div>

                                <label htmlFor="validationCustom03" className="form-label">Ваш email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="validationCustom03" 
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Укажите ваш email
                                </div>

                                <div className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="invalidCheck" 
                                        onChange={handleCheckboxChange} 
                                    />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Прикрепить аккаунт / зарегистироваться
                                    </label>
                                </div>
                                
                                <label htmlFor="validationCustom04" className="form-label" style={{display: passwordBlock}}>Пароль</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="validationCustom04" 
                                    name="password"
                                    style={{display: passwordBlock}} 
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom05" className="form-label" style={{display: passwordBlock}}>Подтвердите пароль</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="validationCustom05" 
                                    name="password_confirmation"
                                    style={{display: passwordBlock}} 
                                    required
                                    value={formData.password_confirmation}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom06" className="form-label">Тип животного</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustom06" 
                                    name="kind"
                                    placeholder="например: кот" 
                                    required
                                    value={formData.kind}
                                    onChange={handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Укажите тип животного
                                </div>

                                <label htmlFor="validationCustom07" className="form-label">Место находки</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustom07" 
                                    name="district"
                                    placeholder='укажите район' 
                                    required
                                    value={formData.district}
                                    onChange={handleInputChange}
                                />
                                <div className="invalid-feedback">
                                    Укажите место находки
                                </div>

                                <label htmlFor="validationCustom08" className="form-label">Метка (необязательно)</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="validationCustom08" 
                                    name="mark"
                                    placeholder=''
                                    value={formData.mark}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom09" className="form-label">Описание</label>
                                <textarea 
                                    className="form-control mb-4" 
                                    id="validationCustom09" 
                                    name="description"
                                    placeholder='' 
                                    required
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom10" className="form-label">Фото найденного животного 1 (только png)</label>
                                <input 
                                    type="file"
                                    accept=".png, image/png" 
                                    className="form-control mb-3" 
                                    id="validationCustom10" 
                                    name="photo1"
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom11" className="form-label">Фото найденного животного 2 (только png)</label>
                                <input 
                                    type="file" 
                                    accept=".png, image/png" 
                                    className="form-control mb-3" 
                                    id="validationCustom11" 
                                    name="photo2"
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="validationCustom12" className="form-label">Фото найденного животного 3 (только png)</label>
                                <input 
                                    type="file" 
                                    accept=".png, image/png" 
                                    className="form-control mb-3" 
                                    id="validationCustom12" 
                                    name="photo3"
                                    onChange={handleInputChange}
                                />

                            </div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="invalidCheck1" required />
                                    <label className="form-check-label" htmlFor="invalidCheck1">
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