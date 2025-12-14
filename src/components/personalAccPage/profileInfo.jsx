function ProfileInfo() {
    return ( 
        <div>
            <div>
            <div className="profile-header">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                    <div className="rounded-circle bg-white d-inline-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                        <i className="bi bi-person-fill text-primary" style={{fontSize: '2.5rem'}} />
                    </div>
                    </div>
                    <div className="col-md-10">
                    <h1 className="h3 mb-1">Иван Петров</h1>
                    <p className="mb-0">Пользователь с <span id="registrationDays">15</span> апреля 2024 года</p>
                    <p className="mb-0 opacity-75" id="daysSinceRegistration" />
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                {/* Левая колонка - информация и настройки */}
                <div className="col-lg-4">
                    {/* Карточка с информацией */}
                    <div className="card stats-card">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-info-circle text-primary me-2" />Информация о пользователе</h5>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Зарегистрирован:</span>
                            <span id="registrationDateDisplay">15 апреля 2024</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Дней на сайте:</span>
                            <span className="badge bg-primary" id="daysCount">0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Объявлений:</span>
                            <span className="badge bg-success" id="adsCount">3</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    {/* Смена email */}
                    <div className="card mb-4">
                    <div className="card-header bg-light">
                        <h5 className="card-title mb-0"><i className="bi bi-envelope text-primary me-2" />Смена электронной почты</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                        <label htmlFor="currentEmail" className="form-label">Текущий email</label>
                        <input type="email" className="form-control" id="currentEmail" defaultValue="ivan.petrov@example.com" readOnly />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="newEmail" className="form-label">Новый email</label>
                        <input type="email" className="form-control" id="newEmail" placeholder="Введите новый email" />
                        </div>
                        <button className="btn btn-primary w-100" id="changeEmailBtn">
                        <i className="bi bi-check-circle me-1" />Сменить email
                        </button>
                    </div>
                    </div>
                    {/* Смена телефона */}
                    <div className="card">
                    <div className="card-header bg-light">
                        <h5 className="card-title mb-0"><i className="bi bi-phone text-primary me-2" />Смена номера телефона</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                        <label htmlFor="currentPhone" className="form-label">Текущий телефон</label>
                        <input type="tel" className="form-control" id="currentPhone" defaultValue="+7 (900) 123-45-67" readOnly />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="newPhone" className="form-label">Новый телефон</label>
                        <input type="tel" className="form-control" id="newPhone" placeholder="Введите новый номер телефона" />
                        </div>
                        <button className="btn btn-primary w-100" id="changePhoneBtn">
                        <i className="bi bi-check-circle me-1" />Сменить телефон
                        </button>
                    </div>
                    </div>
                </div>
                {/* Правая колонка - объявления пользователя */}
                <div className="col-lg-8">
                    <div className="card">
                    <div className="card-header bg-light d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0"><i className="bi bi-list-ul text-primary me-2" />Мои объявления</h5>
                        <button className="btn btn-sm btn-outline-primary">
                        <i className="bi bi-plus-circle me-1" />Добавить
                        </button>
                    </div>
                    <div className="card-body">
                        {/* Список объявлений */}
                        <div className="row" id="advertisementsContainer">
                        {/* Объявления будут добавлены с помощью JavaScript */}
                        </div>
                        {/* Сообщение, если объявлений нет */}
                        <div className="text-center py-4 d-none" id="noAdsMessage">
                        <i className="bi bi-inbox text-muted" style={{fontSize: '3rem'}} />
                        <h5 className="mt-3">Объявлений нет</h5>
                        <p className="text-muted">Добавьте своё первое объявление</p>
                        <button className="btn btn-primary">Создать объявление</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default ProfileInfo;