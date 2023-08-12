
import LoginForm from '../src/components/LoginForm/LoginForm'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header';
const LoginPage = () => {
  return (
    <>
        <Header showMenu={false} showNav={false}/>
        <main className='login-page'>
            <LoginForm/>
        </main>
        <Footer/>
    </>
  )
}

export default LoginPage