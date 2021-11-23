import { useState } from 'react'
// import '../css/styleRegister.css'
//import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios'

export default function Register(props) {
    const [Name, setName] = useState()
    const [Sex, setSex] = useState()
    const [Phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const newPost = {
        Name,
        Sex,
        Phone,
        email,
        password
    }
        
    const handleSubmit = async () => {
        const ConnectAPI = {
            Device: {
                DeviceEnvironment: "WEB"
            },
            Action: {
                ActionCode: "LOGIN_TNT.REGISTER"
            },
            Data: newPost
        }
        let DataLogin = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', ConnectAPI)
        const { data } = DataLogin
        console.log(data.Data[0][0].STATUS);
        if(data.Data[0][0].STATUS  ==="Register Successful"){
            alert('Đăng ký thành công')
            props.AcceptRegister();
        }
        else{
            alert('Đăng ký thất bại')
        }
    }

    return (
        <div className="main">
            <div className="sign-up">
                <div className="register-sign">
                    <p className="sign-title">
                        Đăng ký
                    </p>
                    <i className="fas fa-times close" onClick={props.onClick}></i>
                </div>
                <div className="sign-br"></div>
                <div className="sign-input">
                    <div className="input-left">
                        <label htmlFor="name" className="input-label">Họ và tên</label>
                        <input type="text" id="name" className="input-btn"  placeholder="Trần Văn A"
                           onChange={(e) => {setName(e.target.value) }}
                        />

                        <label htmlFor="number" className="input-label">Số điện thoại</label>
                        <input  type="number"  id="number"  className="input-btn"  placeholder="0123 456 789"
                            onChange={(e) => {setPhone(e.target.value) }}
                        />
                    </div>
                    <div className="input-left">
                        <label htmlFor="gender" className="input-label">Giới tính</label>
                        <input  type="text"  id="gender"  className="input-btn"  placeholder="Nam/ Nu"
                            onChange={(e) => {setSex(e.target.value) }}
                        />

                        <label htmlFor="email" className="input-label">Email</label>
                        <input  type="email"  id="email" className="input-btn" placeholder="example@gmail.com"
                            onChange={(e) => {setEmail(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="password-sign">
                    <label htmlFor="password" className="input-label password-label">Mật khẩu</label>
                    <input  type="text"  id="password"  className="input-btn password-btn"  placeholder="Mật khẩu"
                        onChange={(e) => {setPassword(e.target.value) }}
                    />
                    <i className="fas fa-eye eye-password"></i>
                </div>
                <div className="password-sign">
                    <label htmlFor="re-password" className="input-label password-label">Xác nhận mật khẩu</label>
                    <input
                        type="text"
                        id="re-password"
                        className="input-btn password-btn" 
                        placeholder="Xác nhận mật khẩu" 
                        // onChange={(e) => setConfirm(e.target.value)}    
                    />
                    <i className="fas fa-eye eye-password"></i>
                </div>

                <div className="button">
                    <div className="btn-submit"
                        onClick={handleSubmit}
                    >
                        Đăng ký
                        <div className="icon">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="no-password">
                        Quên mật khẩu
                    </div>
                </div>
            </div>
        </div>
    )
}
