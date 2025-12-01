import Footer from "./footer";
import Header from "./header";
import Slider from "./slider";
import Article from "./articles";
import News from "./news";
import Modal from "./modal_window";
import Modal_Cat from "../second page/modal_cat";

function Full_page_1 () {
    return (
        <div>
            <Header/>
            <Slider/>
            <Article/>
            <News/>
            <Footer/>
            <Modal/>
            <Modal_Cat/>
        </div>
    );
}

export default Full_page_1;