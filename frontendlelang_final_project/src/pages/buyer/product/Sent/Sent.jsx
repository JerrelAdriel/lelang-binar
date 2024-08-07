import React, { useEffect } from 'react';
import Style from './styleSent.module.css'
import Navbar from '../../../../components/NavbarAfterLogin/NavbarDashboard'
import { Carousel, Container, Col, Row} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Previous from './fi_arrow-left.svg';
import Image from './jam_1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailsSent from './DetailsSent/DetailsSent'

function Sent() {
    useEffect(() => {
        // console.log("helloo")
        toast.dismiss()
        toast.success("Harga tawar anda telah terkirim, Tunggu balasan dari penjual",{position:"top-center"})
    }, [])
    return (
        <div >
            <Navbar title="Product Detail"/>
            <Container>
                <DetailsSent />
                {/* <Row className={Style.styleRow}>
                    <Col className={Style.col1}>
                        <h4 className={Style.h4}>Aksesoris</h4>
                        <h1 className={Style.h1}>Jam Tangan Casio</h1>
                        <div className='d-flex flex-row align-items-center'>
                            <h3 className={Style.h3}>Price</h3>
                            <h2 className={Style.h2}>Rp 250.000</h2>
                        </div>
                        <p className={Style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>

                                            <Carousel.Item className={Style.carousel}>
                                                <img className={Style.carouselImage} src={NoImage} alt="productImage" />
                                            </Carousel.Item>

                                            :

                                            images.map((image, index) => {
                                                return (
                                                    <Carousel.Item key={index} className={Style.carousel}>
                                                        <img className={Style.carouselImage} src={image.image_url} alt="productImage" />
                                                    </Carousel.Item>
                                                )
                                            })
                                    }
                                </Carousel>
                            </Col>

                            <Carousel.Item>
                                <img
                                    className="carouselImage d-block w-100"
                                    src={Image}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row> */}
                {/* <ToastContainer className={Style.toast}/> */}
            </Container>
            
        </div>
    )
}

export default Sent