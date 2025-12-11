import ModalContact from './ModalContact';
import ModalLog from './ModalLog';
import ModalNewPost from './ModalNewPost';
import ModalPersonalAcc from './ModalPersonalAcc';
import ModalRegistration from './ModalRegistration';



function Modals () {
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