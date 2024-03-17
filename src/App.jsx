import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import OrderPage from './Components/OrderPage/OrderPage'

function App() {

  return (
    <>
    <Header/>
      <div className="view">
        <h1>Welcome To Dynamic Ribbon & Label Industries Limited Order Management System</h1>
      </div>
    <Login/>
    <OrderPage/>
    <Footer/>  
    </>
  )
}

export default App
