import Footer from "../first page/footer";
import Header from "../first page/header";
import Card_1 from "./animal-card_1";
import Modal_Cat from "./modal_cat";
import Modal from "../first page/modal_window";

function Full_page_2 () {
    return (
        <div>
            <Header/>
            <Card_1/>
            <Footer/>
            <Modal_Cat/>
            <Modal/>
        </div>
    );
}

export default Full_page_2;