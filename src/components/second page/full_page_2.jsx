import Footer from "../first page/footer";
import Header from "../first page/header";
import Card_1 from "./animal-card_1";
import Modal_Cat from "./modal_cat";
import { useState } from "react";
import Modals from "../modals/Modals";
import SearchRow from "./SearchRow";

function Full_page_2 () {
    return (
        <div>
            <Header/>
            <SearchRow/>
            <Card_1/>
            <Footer/>
            <Modal_Cat/>
            <Modals/>
        </div>
    );
}

export default Full_page_2;