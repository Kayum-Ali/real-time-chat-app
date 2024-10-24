
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import '../../styles/LeftSideBar.css'
const LeftSideBar = () => {
    const navigate = useNavigate()
    return (
        <div className="ls bg-[#001030] text-white h-[75vh]">
            <div className="ls-top p-5">
                <div className="ls-nav flex justify-between items-center">
                    <img className="logo max-w-[140px]" src={assets.logo} alt="" />
                    <div className="menu relative py-2.5">
                        <img className="max-h-[20px] opacity-60" src={assets.menu_icon} alt="" />
                        {/* sub menu */}
                        <div className="sub-menu absolute top-[100%] right-0 w-[130px] p-5 rounded-md bg-white text-black   ">
                            <p onClick={()=> navigate('/profile')} className="cursor-pointer text-sm">Edit Profile</p>
                            <hr className="border-none h-[1px] bg-[#a4a4a4] my-2"/>
                            <p className="cursor-pointer text-sm">Logout</p>

                        </div>
                    </div>
                </div>
                <div className="ls-search flex bg-[#002670] items-center gap-2 py-2.5 px-3 mt-5">
                    <img className="w-4" src={assets.search_icon} alt="" />
                    <input type="text" placeholder="Search here..." className="bg-transparent border-none outline-none text-white text-xs placeholder:text-[#c8c8c8]" />
                </div>
            </div>
            <div className="ls-list flex flex-col h-[60%] no-scrollbar overflow-scroll">
               {
                Array(12).fill('').map((item,idx)=>(
                    <div key={idx} className="friends hover:bg-[#007EFF] flex items-center gap-3 px-5 py-3 cursor-pointer text-sm">
                    <img className="w-[35px] aspect-square rounded-full" src={assets.profile_img} alt="" />
                    <div className="flex flex-col">
                        <p>Qamar Iqbal</p>
                        <span className="text-[#9f9f9f] text-xs">Hello, how are you</span>
                    </div>

                </div>
                ))
               }

            </div>
        </div>
    );
};

export default LeftSideBar;