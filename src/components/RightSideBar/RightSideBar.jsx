import assets from "../../assets/assets";
import '../../styles/RightSideBar.css'
import { logout } from "../../config/firebase.config";
const RightSideBar = () => {
    return (
        <div className="rs text-white bg-[#001030] relative h-[75vh] overflow-y-scroll">
            <div className="rs-profile pt-14 text-center max-w-[70%] mx-auto">
                <img className="w-[110px] aspect-square rounded-[50%] mx-auto" src={assets.profile_img} alt="" />
                <h3 className="text-[18px] flex items-center justify-center gap-1 my-1">Tawrin Mitu <img src={assets.green_dot} className="dot" alt="" /></h3>
                <p className="text-[13px] opacity-80 font-light">Hey, there i am Mitu using Chat app</p>
            </div>
            <hr className="text-[#ffffff50] my-4"/>
            <div className="rs-media px-5 text-xs">
                <p>Media</p>
                <div className="max-h-[180px] mt-2 gap-1 grid  grid-cols-3 ">
                     <img src={assets.pic1} alt="" />
                     <img src={assets.pic2} alt="" />
                     <img src={assets.pic3} alt="" />
                     <img src={assets.pic4} alt="" />
                     <img src={assets.pic1} alt="" />
                     <img src={assets.pic2} alt="" />
                </div>
            </div>
            <button onClick={()=> logout()} className="absolute bottom-5 left-1/2 bg-[#007EFF] text-white border-none py-2.5 px-16 rounded-[20px] cursor-pointer  -translate-x-1/2">Logout</button>
            
        </div>
    );
};

export default RightSideBar;