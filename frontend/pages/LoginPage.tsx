
import NavBar from '../src/components/NavBar/NavBar';
import LoginForm from '../src/components/LoginForm/LoginForm'
import Footer from '../src/components/Footer/Footer'
const LoginPage = () => {
  return (
    <>
        <NavBar showInput={false} showBag={false} showButton={false}/>
        <main className='login-page'>
            <LoginForm/>
        </main>
        <Footer/>
    </>
  )
}

export default LoginPage