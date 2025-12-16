import { useEffect, useState } from "react";

function ProfileInfo() {
    const [userData, setUserData] = useState([]);
    const [isLogin, setIslogin] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [dayCounter, setDayCounter] = useState(0);
    const [isLoadingOrders, setIsLoadingOrders] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        getInf();
    }, []);

    useEffect(() => {
        myPost();
    }, []);

    useEffect(() => {
        if (userData.registrationDate){
            calcDate();
        }
    }, [userData.registrationDate]);

    function calcDate() {
        const regDate = new Date(userData.registrationDate);
        const today = new Date();

        regDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        const diffInMs = today.getTime() - regDate.getTime();
        setDayCounter(Math.round(diffInMs / (1000 * 60 * 60 * 24)));
    }

    function getInf(){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.xn--80ahdri7a.site/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("API Response:", result);

                const user = result;
                const userData = {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                    registrationDate: user.registrationDate,
                    ordersCount: user.ordersCount
                }

                setIslogin(true);
                setUserData(userData);

                if (!(result.id)){
                    setIslogin(false);
                }
            })
    }

    function myPost(){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        setIsLoadingOrders(true);
        
        fetch("https://pets.xn--80ahdri7a.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("Response:", result);
                if (result.data && result.data.orders) {
                    setOrders(result.data.orders);
                }
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            })
            .finally(() => {
                setIsLoadingOrders(false);
            });
    }

    async function deletePost(postId) {
        if (!window.confirm("Вы уверены, что хотите удалить это объявление?")) {
            return;
        }

        setIsDeleting(true);
        setDeletingId(postId);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

        try {
            const response = await fetch(`https://pets.xn--80ahdri7a.site/api/users/orders/${postId}`, {
                method: 'DELETE',
                headers: myHeaders,
            });

            const result = await response.json();
            console.log("Delete Response:", result);

            if (response.ok) {
                setOrders(prevOrders => prevOrders.filter(order => order.id !== postId));
                
                setUserData(prevData => ({
                    ...prevData,
                    ordersCount: prevData.ordersCount - 1
                }));

                alert("Объявление успешно удалено!");
            } 
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Произошла ошибка при удалении объявления");
        } finally {
            setIsDeleting(false);
            setDeletingId(null);
        }
    }

    if (!isLogin) {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body text-center p-5">
                                <div className="mb-4">
                                    <i className="bi bi-shield-lock text-danger" style={{ fontSize: '4rem' }} />
                                </div>
                                <h2 className="card-title mb-4">Доступ ограничен</h2>
                                <p className="card-text mb-4">
                                    Для просмотра этой страницы необходимо авторизоваться.
                                    Пожалуйста, войдите в свою учетную запись или зарегистрируйтесь.
                                </p>
                                <div className="d-grid gap-2 d-md-block">
                                    <button type="button" className="btn btn-primary h-100" data-bs-toggle="modal" data-bs-target="#Enter">
                                        Войти
                                    </button>
                                    <button type="button" className='btn btn-link' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Зарегистрироваться
                                    </button>
                                </div>
                                <div className="mt-4 text-muted">
                                    <small>
                                        Если у вас уже есть аккаунт, проверьте, что вы вошли в систему.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function changeEmail(event) {
        event.preventDefault();

        if (email !== '') {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

            var raw = JSON.stringify({
                "email": email,
            });

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/users/email", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                if (result.data.status){
                    window.location.reload();
                }

            })
            .catch(error => console.log('error', error));
        }
    }

    function changePhone(event) {
        event.preventDefault();

        if (phone !== '') {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${localStorage.token}`);

            var raw = JSON.stringify({
                "phone": phone,
            });

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/users/phone", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                if (result.data.status){
                    window.location.reload();
                }

            })
            .catch(error => console.log('error', error));
        }
    }

    function getPhotoUrl(photoPath) {
        if (!photoPath) return null;
        if (photoPath.startsWith('http')) return photoPath;
        return `https://pets.xn--80ahdri7a.site${photoPath}`;
    }

    return ( 
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
                            <h1 className="h3 mb-1">{userData.name}</h1>
                            <p className="mb-0">Пользователь с <span id="registrationDays"></span>{userData.registrationDate}</p>
                            <p className="mb-0 opacity-75" id="daysSinceRegistration" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card stats-card">
                            <div className="card-body">
                                <h5 className="card-title"><i className="bi bi-info-circle text-primary me-2" />Информация о пользователе</h5>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Зарегистрирован: </span>
                                    <span id="registrationDateDisplay">{userData.registrationDate}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Дней на сайте:</span>
                                    <span className="badge bg-primary" id="daysCount">{dayCounter}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Объявлений:</span>
                                    <span className="badge bg-success" id="adsCount">{userData.ordersCount}</span>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header bg-light">
                                <h5 className="card-title mb-0"><i className="bi bi-envelope text-primary me-2" />Смена электронной почты</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="currentEmail" className="form-label">Текущий email</label>
                                    <input type="email" className="form-control" id="currentEmail" defaultValue={userData.email} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newEmail" className="form-label">Новый email</label>
                                    <input type="email" className="form-control" id="newEmail" placeholder="Введите новый email" onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <button className="btn btn-primary w-100" id="changeEmailBtn" onClick={(e) => changeEmail(e)}>
                                    <i className="bi bi-check-circle me-1" />Сменить email
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header bg-light">
                                <h5 className="card-title mb-0"><i className="bi bi-phone text-primary me-2" />Смена номера телефона</h5>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="currentPhone" className="form-label">Текущий телефон</label>
                                    <input type="tel" className="form-control" id="currentPhone" defaultValue={userData.phone} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPhone" className="form-label">Новый телефон</label>
                                    <input type="tel" className="form-control" id="newPhone" placeholder="Введите новый номер телефона" onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                                <button className="btn btn-primary w-100" id="changePhoneBtn" onClick={(e) => changePhone(e)}>
                                    <i className="bi bi-check-circle me-1" />Сменить телефон
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header bg-light d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0"><i className="bi bi-list-ul text-primary me-2" />Мои объявления ({orders.length})</h5>
                            </div>
                            <div className="card-body">
                                {isLoadingOrders ? (
                                    <div className="text-center py-5">

                                    </div>
                                ) : orders.length > 0 ? (
                                    <div className="row" id="advertisementsContainer">
                                        {orders.map(order => (
                                            <div className="col-md-6 mb-4" key={order.id}>
                                                <div className="card h-100 shadow-sm">
                                                    {order.photos && (
                                                        <div className="position-relative">
                                                            <img 
                                                                src={getPhotoUrl(order.photos)} 
                                                                className="card-img-top" 
                                                                alt={order.kind}
                                                                style={{ 
                                                                    height: '200px', 
                                                                    objectFit: 'cover',
                                                                    width: '100%'
                                                                }}
                                                            />
                                                            <span className={`badge bg-${order.status} position-absolute top-0 end-0 m-2`}>
                                                                {order.status}
                                                            </span>
                                                            <div className="position-absolute top-0 start-0 m-2 d-flex gap-1">
                                                                <button 
                                                                    className="btn btn-danger btn-sm" 
                                                                    title="Удалить пост"
                                                                    onClick={() => deletePost(order.id)}
                                                                    disabled={isDeleting && deletingId === order.id}
                                                                >
                                                                    <i className="bi bi-trash me-1"></i>Удалить
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <i className="bi bi-person-circle me-2"></i>
                                                            {order.kind}
                                                        </h5>
                                                        <p className="card-text text-muted small">
                                                            {order.description}
                                                        </p>
                                                        <div className="mt-3">
                                                            {order.mark && (
                                                                <span className="badge bg-info me-2 mb-1">
                                                                    <i className="bi bi-tag me-1"></i>{order.mark}
                                                                </span>
                                                            )}
                                                            {order.district && (
                                                                <span className="badge bg-secondary me-2 mb-1">
                                                                    <i className="bi bi-geo-alt me-1"></i>{order.district}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-transparent d-flex justify-content-between align-items-center">
                                                        <small className="text-muted">
                                                            <i className="bi bi-calendar3 me-1"></i>
                                                            {order.date}
                                                        </small>
                                                        <small className="text-muted">ID: {order.id}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-5">
                                        <i className="bi bi-inbox text-muted" style={{fontSize: '4rem'}} />
                                        <h5 className="mt-3">Объявлений нет</h5>
                                        <p className="text-muted mb-4">У вас пока нет ни одного объявления</p>
                                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newPost">
                                            <i className="bi bi-plus-circle me-2"></i>Создать первое объявление
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;