import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import OrderDetails from './Components/OrderDetails/OrderDetails'
import OrderPage from './Components/OrderPage/OrderPage'
import UserInfo from './Components/UserInfo/UserInfo'

function App() {

  return (
    <>
    <Header/>
      <div className="view">
        <h1>Welcome To Dynamic Ribbon & Label Industries Limited Order Management System</h1>
      </div>
    <Login/>
    <UserInfo/>
    <OrderDetails/>
    <OrderPage/>
    <Footer/>  
    </>
  )
}

export default App
