
import ChatBox from '../../components/ChatBox/ChatBox';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

import '../../styles/chat.css'
const Chat = () => {
    return (
        <div className="chat ">
            <div className="chat-container">
                <LeftSideBar></LeftSideBar>
                <ChatBox></ChatBox>
                <RightSideBar></RightSideBar>

            </div>
            
        </div>
    );
};

export default Chat;