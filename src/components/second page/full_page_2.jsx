import Footer from "../first page/footer";
import Header from "../first page/header";
import Card_1 from "./animal-card_1";
import Modal_Cat from "./modal_cat";
import Modal from "../first page/modal_window";
import { useState } from "react";

function Full_page_2 () {

    let [user, setUser] = useState({
        first_name: "The",
        last_name: "Maksim",
        email: "mail@mail.ru",
         phone: "+7 (912) 212-32-23" 
        });

    return (
        <div>
            <Header/>
            <Card_1/>
            <Footer/>
            <Modal_Cat/>
            <Modal data = {user} setValue = {setUser}/>
        </div>
    );
}

export default Full_page_2;