import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import OrderDetails from './Components/OrderDetails/OrderDetails'
import OrderPage from './Pages/OrderPage/OrderPage'
import UserInfo from './Components/UserInfo/UserInfo'
import Home from './Pages/Home/Home'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {

  return (
    <>
    <Header/>
    {/* <Banner/>
    <Login/>
    <UserInfo/>
    <OrderDetails/>
    <OrderPage/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/order" element={<OrderPage/>}></Route>
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
