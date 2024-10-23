// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signUp = async(userName, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await setDoc(doc(db,'users', user.uid),{
            id: user.uid,
            userName: userName.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, There i am using chat app",
            LastSeen: Date.now(),

        })
        toast.success('Sign Up Successfully')

        await setDoc(doc(db,'chats', user.uid),{
            chatData: []
        })
    }
    catch(error){
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}


const login = async(email, password)=>{
    try{
         await signInWithEmailAndPassword(auth,email, password)
        // const user = res.user;
        toast.success('Login Successfully')
    }
    catch(error){
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}


const logout = async()=>{
   try{
    await auth.signOut()
    toast.success('Logout Successfully')
   }
   catch(error){
       toast.error(error.code.split('/')[1].split('-').join(' '))
   }
}
export {signUp, login,logout};