import Header from "../first page/header";
import Footer from "../first page/footer";
import ProfileInfo from "./profileInfo";
import Modals from "../modals/Modals";

function MyPage() {
    return (
        <div>
            <Header/>
            <ProfileInfo/>
            <Footer/>
            <Modals/>
        </div>
     );
}

export default MyPage;