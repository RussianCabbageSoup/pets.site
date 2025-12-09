import { useState } from "react";

function News () {

    let [email, setEmail] = useState('');
    let [success, setSuccess]=useState('none');
    let [error, setError]=useState('none');
    let [message, setMessage]=useState();
    
    function subscription(e) {

        e.preventDefault();

        if (email != '') {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"email": email});

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };

            fetch("https://pets.xn--80ahdri7a.site/api/subscription", requestOptions)
                .then(response => response.status)
                .then(
                    result => {console.log(result)
                    switch (result) {
                        case 204:
                            setSuccess('block');
                            setError('none');
                            break;
                        case 422:
                            setError('block');
                            setSuccess('none');
                            setMessage('Пожалуйста введите корректный e-mail');
                            break;
                    }
            })
            .catch(error => console.log('error', error));
        }
        else {
            setError('block');
            setSuccess('none');
            setMessage('Пожалуйста введите e-mail');
        }
    }

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <form className="w-50 p-3" style={{marginLeft: '30px'}}>
                <div className="mb-3">
                    <div className="alert alert-success" role="alert" style={{display: success}}>
                        Вы подписаны!
                    </div>
                    <div className="alert alert-danger" role="alert" style={{display: error}}>
                        {message}
                    </div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адреss электронной почты</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e)=>subscription(e)}>Подписаться</button>
            </form>
        </div>
    );
}

export default News;