import React, { useState } from 'react'
import { Button, Form, Image, Card, Pagination } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'


const Payment = () => {
    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    // const [count, setCount] = useState(1);
    // const price = 200000;
    const [ship, setShip] = useState(0)
    const handleShip = () => {
        setShip(ship + 30000)
    }
    const handleShip1 = () => {
        setShip(ship + 15000)
    }

    return (
        <div className="body_payment">
            <div className="title_payment">
                <h2>Thanh toán</h2>

            </div>
            <div className="info_customer_payment">

                <div className="address_payment">

                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <div className="title_body_card_payment">
                                <i className="bx bx-map body_card_payment"></i>
                                <h4 className=" body_card_payment">Địa chỉ nhận hàng</h4>
                            </div><br /><br />
                            <Card.Subtitle className="mb-2 text-muted">Đoàn Đức Nghĩa | (+84)388888888</Card.Subtitle>
                            <Card.Text>
                                Phường Phú Lương - Hà Đông - Hà Nội
                            </Card.Text>
                            <Card.Link href="#">Sửa địa chỉ người nhận</Card.Link>

                        </Card.Body>
                    </Card>

                </div>
            </div>
            <hr className="payment_hr" />
            <div className="product_payment">
            <div className="cart__list" container-fluid>
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
            </div>
                
                <div >
                    <Card className="voucher_payment">
                        <span className=" voucher_payment_select"><i className="bx bx-wallet  ">  Voucher của Shop</i></span>
                        <span className=" voucher_payment_select" id="voucher_payment_float">Chọn voucher <a href="#"><i className="bx bx-chevron-right-circle"></i></a></span>

                    </Card>
                </div>
                <div className="selectship_payment ">
                    <h2>Vận chuyển</h2>
                    <Form.Select aria-label="Default select example">
                        <option>Chọn phương thức vận chuyển</option>
                        <option value="1" onClick={handleShip} id="ship1">Giao hàng nhanh</option>
                        <option value="2" onClick={handleShip1} id="ship2">Giao hàng tiết kiệm</option>

                    </Form.Select>
                    <p>{ship}</p>
                </div>
                <div className="selectpay_payment ">
                    <h2>Thanh toán</h2>
                    <Form.Select aria-label="Default select example">
                        <option>Chọn phương thức thanh toán</option>
                        <option value="1">Thanh toán khi nhận hàng</option>
                        <option value="2">Thanh toán online</option>
                    </Form.Select>
                </div>
                {/* <span>Tổng tiền </span> */}
                {/* <Button variant="primary" onclick="" className="payment_btn">Thanh toán</Button> */}
                {/* <Link to=""> */}
                            <Button  variant="primary" onclick="" className="payment_btn">
                               Thanh toán
                            </Button>
                        {/* </Link> */}
            </div>
        </div>

    )
}
export default Payment
