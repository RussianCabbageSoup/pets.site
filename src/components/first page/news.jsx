import { useState } from "react";

function News () {

    let [sub, setSub] = useState();
    let [email, setEmail] = useState('');
    
    function subscription(e) {

        e.preventDefault();

        if (email != '') {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.token);
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
                            console.log('zbs');
                            
                            break;
                        case 422:

                            break;
                    }
            })
            .catch(error => console.log('error', error));
        }
    }

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <form className="w-50 p-3" style={{marginLeft: '30px'}}>
                <div className="mb-3">
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