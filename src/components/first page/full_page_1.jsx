import Footer from "./footer";
import Header from "./header";
import Slider from "./slider";
import Article from "./articles";
import News from "./news";
import Modal_Cat from "../second page/modal_cat";
import Modals from "../modals/Modals";

function Full_page_1 () {
    return (
        <div>
            <Header/>
            <Slider/>
            <Article/>
            <News/>
            <Footer/>
            <Modals/>
            <Modal_Cat/>
        </div>
    );
}

export default Full_page_1;