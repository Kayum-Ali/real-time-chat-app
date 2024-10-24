import { createContext, useState } from "react";
import propTypes from 'prop-types'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AppContext = (props) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState(null)
    const [chatData, setChatData] = useState(null)


    const loadUserData = async(uid) =>{
        try{
            const userRef = doc(db,'users', uid);
            const userSnap = await getDoc(userRef)
            const userData = userSnap.data();
            setUserData(userData)
            if(userData.avatar && userData.name){
                navigate('/chat')
            }
            else{
                navigate('/profile')
            }
            await updateDoc(userRef,{
                LastSeen: Date.now()
            })
            setInterval(async()=>{
                if(auth.chatUser){
                    await updateDoc(userRef,{
                        LastSeen: Date.now()
                    })
                }

            }, 60000)
            
        }
        catch(error){
            toast.error(error.code.split('/')[1].split('-').join(' '))
        }
    }
    const authInfo = {
      userData,setUserData,setChatData, chatData, loadUserData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {props.children}
            
        </AuthContext.Provider>
    );
};

AppContext.propTypes = {
    children: propTypes.node.isRequired
}

export default AppContext;