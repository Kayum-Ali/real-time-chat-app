import { useState } from "react";
import assets from "../../assets/assets";
import '../../styles/ProfileUpdate.css'


const ProfileUpdate = () => {
    const [images, setImages] = useState(false)
    return (
        <div className="profile">
            <div className="profile-container bg-white flex justify-between items-center min-w-[700px] rounded-xl">
                <form className="flex flex-col gap-5 p-10">
                    <h3 className="font-medium">Profile Details</h3>
                    <label htmlFor="avatar" className="flex items-center gap-3 text-gray-500 cursor-pointer">
                        <input onChange={(e)=> setImages(e.target.files[0])} type="file" id="avatar" accept="" hidden />
                        <img className="w-14 aspect-square rounded-full" src={images? URL.createObjectURL(images) :assets.avatar_icon} alt="" />
                        Upload profile Image
                    </label>
                    <input type="text" placeholder="Your name" required />
                    <textarea name="" id="" placeholder="write prifile bio" required></textarea>
                    <button type="submit" className="py-2.5 w-full bg-[#007EFF] text-white rounded-lg">Save</button>
                </form>
                <img className="profile-pic max-w-[160px] aspect-square my-5 mx-auto rounded-full" src={images? URL.createObjectURL(images) : assets.logo_icon} alt="" />
            </div>
            
        </div>
    );
};

export default ProfileUpdate;