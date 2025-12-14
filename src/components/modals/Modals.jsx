import ModalContact from './ModalContact';
import Exit from './ModalExit';
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
            <Exit/>
        </div>
    );
}

export default Modals;