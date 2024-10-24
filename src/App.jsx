
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import { useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase.config'
import { AuthContext } from './context/AppContext'


function App() {

  const {loadUserData } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async(currentUser)=>{
      if(currentUser){
        navigate('/chat')
        await loadUserData(currentUser.uid)
        // loadUserData = currentUser.uid
        // console.log('User is signed in', currentUser.email)
      } else {
        // console.log('User is signed out')
        navigate('/')  // Redirect to login page if not logged in yet
      }
      // ...
    })
    // return () => {
    //   unsubsCribe()
    // }
  },[])


  return (
    <>
      <Routes>
        
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/chat' element={<Chat></Chat>}></Route>
          <Route path='/profile' element={<ProfileUpdate></ProfileUpdate>}></Route>
      </Routes>
    </>
  )
}

export default App
