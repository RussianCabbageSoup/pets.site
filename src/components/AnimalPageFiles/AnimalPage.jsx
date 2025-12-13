import Header from "../first page/header";
import Footer from "../first page/footer";
import Modals from "../modals/Modals";
import AnimalData from "./animalData";

function AnimalPage() {
    return ( 
        <div>
            <Header/>
            <AnimalData/>
            <Footer/>
            <Modals/>        
        </div>
    );
}

export default AnimalPage;