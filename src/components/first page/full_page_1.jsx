import Footer from "./footer";
import Header from "./header";
import Slider from "./slider";
import Article from "./articles";
import News from "./news";
import Modal from "./modal_window";
import Modal_Cat from "../second page/modal_cat";
import { useState } from "react";

function Full_page_1 () {

    let [user, setUser] = useState({
        first_name: "The",
        last_name: "Maksim",
        email: "mail@mail.ru",
        phone: "+7 (912) 212-32-23" 
      });
    
    return (
        <div>
            <Header/>
            <Slider/>
            <Article/>
            <News/>
            <Footer/>
            <Modal data = {user} setValue = {setUser}/>
            <Modal_Cat/>
        </div>
    );
}

export default Full_page_1;