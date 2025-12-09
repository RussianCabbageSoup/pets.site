import { useState } from 'react';
import ModalContact from './ModalContact';
import ModalLog from './ModalLog';
import ModalNewPost from './ModalNewPost';
import ModalPersonalAcc from './ModalPersonalAcc';
import ModalRegistration from './ModalRegistration';



function Modals (props) {

    const [phone, setPhon]=useState('');
    const [email, setEmail]=useState('');
    const [success, setSuccess]=useState('none');
    const [error, setError]=useState('none');
    const [message, setMessage]=useState();

    const [user_name, setUser_name] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_phone, setUser_phone] = useState('');
    const [user_password, setUser_password] = useState('');

    const [isReg, setIsReg] = useState(false);

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
        <div>
            <ModalLog/>
            <ModalContact/>
            <ModalNewPost/>
            <ModalPersonalAcc/>
            <ModalRegistration/>
        </div>
    );
}

export default Modals;