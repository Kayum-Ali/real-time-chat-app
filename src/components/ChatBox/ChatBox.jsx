import { IoSendSharp } from "react-icons/io5";
import assets from "../../assets/assets";
import "../../styles/chat-box.css";

const ChatBox = () => {
  return (
    <div className="chat-box h-[75vh] relative bg-[#f1f5ff]">
      <div className="chat-user flex items-center py-2.5 px-4 gap-3 border-b-2 border-b-[#c6c6c6]">
        <img src={assets.profile_img} className="" alt="" />
        <p className="flex-1 font-semibold text-xl text-[#393939] flex items-center gap-2">
          Tawrin Mitu <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      {/* chat msg */}
      <div className="chat-msg  ">
        <div className="s-msg ">
          <p className="msg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            non.
          </p>
          <div>
            <img
              className="w-[27px]  aspect-square rounded-full"
              src={assets.profile_img}
              alt=""
            />
            <p className="opacity-80">2:30 PM</p>
          </div>
        </div>
        {/* image */}
        <div className="s-msg ">
        <img className="max-w-[230px] mb-7 rounded-[10px]" src={assets.pic1} alt="" />
          <div>
            <img
              className="w-[27px]  aspect-square rounded-full"
              src={assets.profile_img}
              alt=""
            />
            <p className="opacity-80">2:30 PM</p>
          </div>
        </div>
        {/* reciver msg */}
        <div className="r-msg ">
          <p className="msg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            non.
          </p>
          <div>
            <img
              className="w-[27px] aspect-square rounded-full"
              src={assets.profile_img}
              alt=""
            />
            <p className="opacity-80">2:30 PM</p>
          </div>
        </div>
      </div>

      {/* chat input */}
      <div className="chat-input flex items-center gap-3  py-2.5 px-4 bg-white absolute bottom-0 left-0 right-0">
        <input
          type="text"
          placeholder="Send a message"
          className="border-none outline-none flex-1 bg-transparent"
        />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image" className="flex">
          <img
            className="w-6 cursor-pointer"
            src={assets.gallery_icon}
            alt=""
          />
        </label>
        <IoSendSharp className="text-6xl w-8 text-[#007EFF] " />
      </div>
    </div>
  );
};

export default ChatBox;
