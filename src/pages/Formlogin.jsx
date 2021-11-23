import React from 'react'
// import image from '../img/img1.png'
import Login from '../components/Login'
import Register from '../components/Register'
import { useState } from 'react'
import Home from './Home'
// import styleForm from '../css/styleForm.css'

export default function Formlogin(props) {
    const [show, setShow] = useState(false)
    const [success, setSucess] = useState(false)
    const handle = () => {
            setShow(true)
    }
    return (
        <div>
            {/* {show && <Register onClick={() => setShow(false)}/>} */}
            {/* { success ? <Home /> : */}
            <div className="row test">
                {show && <Register onClick={() => setShow(false)}/>}
                {show && <Register AcceptRegister={() => setSucess(true)}/>}
            {/* <div className="col-4">
                    <img src={image} className="img-login" alt="Hello anh em" />
                </div> */}
                <div className="col">
                    <div className="register">
                        <div className="register-title"  onClick={handle} >
                            Đăng ký
                        </div>
                    </div> 
                 <Login AcceptLogin={() => setSucess(true)} /> 
                </div>
            </div> 

        </div>
    )
}
