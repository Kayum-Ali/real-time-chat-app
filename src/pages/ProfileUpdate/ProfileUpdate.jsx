import { useContext, useEffect, useState } from "react";
import assets from "../../assets/assets";
import '../../styles/ProfileUpdate.css'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import upload from "../../lib/Upload";
import  { AuthContext } from "../../context/AppContext";


const ProfileUpdate = () => {
    const [images, setImages] = useState(false)
    const {setUserData} = useContext(AuthContext)

    const [name , setName] = useState('')
    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState('')
    const [uid, setUid] = useState('')

    const navigate = useNavigate()


    const profileUpdate = async(e)=>{
        e.preventDefault()
        try{
            if(!avatar && !images){
                toast.error('Upload profile Picture')
            }
            const docRef = await doc(db, 'users', uid)
            if(images){
                 const imgUrl =await upload(images)
                 setAvatar(imgUrl)
                 await updateDoc(docRef,{
                    avatar: imgUrl,
                    name: name,
                    bio: bio
                 })
            }
            else{
                await updateDoc(docRef,{
                   name: name,
                   bio: bio
                })

            }
            const snap = await updateDoc(docRef);
            setUserData(snap.Data())
            navigate('/chat')
        }
        catch(error){
            toast.error(error.message)
        }

    }
    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=>{
            if(user){
                setUid(user.uid)
               const docRef = doc(db, 'users', user.uid)
               const docSnap =await getDoc(docRef)
               if(docSnap.data().name){
                setName(docSnap.data().name)
               }
               if(docSnap.data().bio){
                setBio(docSnap.data().bio)
               }
               if(docSnap.data().avatar){
                setAvatar(docSnap.data().avatar)
               }
            } 
            else {
                // navigate to login page
                navigate('/')  
            }
         
        })
    },[])
    return (
        <div className="profile">
            <div className="profile-container bg-white flex justify-between items-center min-w-[700px] rounded-xl">
                <form onSubmit={profileUpdate} className="flex flex-col gap-5 p-10">
                    <h3 className="font-medium">Profile Details</h3>
                    <label htmlFor="avatar" className="flex items-center gap-3 text-gray-500 cursor-pointer">
                        <input onChange={(e)=> setImages(e.target.files[0])} type="file" id="avatar" accept="" hidden />
                        <img className="w-14 aspect-square rounded-full" src={images? URL.createObjectURL(images) :assets.avatar_icon} alt="" />
                        Upload profile Image
                    </label>
                    <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Your name" required />
                    <textarea onChange={(e)=> setBio(e.target.value)} value={bio}  name="" id="" placeholder="write prifile bio" required></textarea>
                    <button type="submit" className="py-2.5 w-full bg-[#007EFF] text-white rounded-lg">Save</button>
                </form>
                <img className="profile-pic max-w-[160px] aspect-square my-5 mx-auto rounded-full" src={images? URL.createObjectURL(images) : avatar? avatar :assets.logo_icon} alt="" />
            </div>
            
        </div>
    );
};

export default ProfileUpdate;