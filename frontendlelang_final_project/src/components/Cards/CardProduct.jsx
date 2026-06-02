import { Card, Container, Row, Col } from 'react-bootstrap';
import styleCard from './styleCard.module.css'
import NoImage from '../../images/no_image.png'
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { Rupiah } from '../CostumFunction/Rupiah';
import { MdFavorite } from 'react-icons/md';
import jwt from 'jwt-decode'
const { REACT_APP_API_URL } = process.env

function CardComponent() {

    const token = localStorage.getItem('token');
    let decode = null;
    try { if (token) decode = jwt(token); } catch (e) { /* invalid token */ }
    const url = `${REACT_APP_API_URL}/api/v1/product/all`;
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fLoad, setFLoad] = useState(false);
    const [tLoad, setTload] = useState(false);
    const [uLoad, setULoad] = useState(false);
    const [favorites, setFavorites] = useState([])

    // Data dummy untuk preview - dipakai kalau API tidak tersedia
    const DUMMY_PRODUCTS = [
        { id: 1, name: 'iPhone 13 Pro 256GB', base_price: 12500000, categories: { name: 'Elektronik' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400' }] },
        { id: 2, name: 'MacBook Air M2 2022', base_price: 18900000, categories: { name: 'Elektronik' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400' }] },
        { id: 3, name: 'Sepatu Nike Air Jordan', base_price: 2750000, categories: { name: 'Fashion' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' }] },
        { id: 4, name: 'Tas Ransel Eiger 35L', base_price: 580000, categories: { name: 'Aksesoris' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' }] },
        { id: 5, name: 'Kamera Canon EOS M50', base_price: 8200000, categories: { name: 'Kamera' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400' }] },
        { id: 6, name: 'Jam Tangan Casio G-Shock', base_price: 1650000, categories: { name: 'Fashion' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' }] },
        { id: 7, name: 'Headphone Sony WH-1000XM4', base_price: 3950000, categories: { name: 'Elektronik' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400' }] },
        { id: 8, name: 'Sepeda Polygon Premier', base_price: 4500000, categories: { name: 'Olahraga' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400' }] },
        { id: 9, name: 'PlayStation 5 Disc Edition', base_price: 7800000, categories: { name: 'Gaming' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400' }] },
        { id: 10, name: 'Gitar Akustik Yamaha F310', base_price: 1450000, categories: { name: 'Musik' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400' }] },
        { id: 11, name: 'Kursi Gaming Secretlab Titan', base_price: 6900000, categories: { name: 'Furniture' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400' }] },
        { id: 12, name: 'Tablet iPad Air 5th Gen', base_price: 9500000, categories: { name: 'Elektronik' },
          images: [{ image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400' }] },
    ];

    const getProducts = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url, { timeout: 3000 });
            setLoading(false);
            if (res.status === 204 || !res.data?.data?.product?.length) {
                setItems(DUMMY_PRODUCTS);
            } else {
                setItems(res.data.data.product);
            }
        } catch (error) {
            // Backend tidak tersedia → pakai data dummy
            console.log('Pakai data dummy:', error.message);
            setItems(DUMMY_PRODUCTS);
            setLoading(false);
        }
    }

    const getFavorite = async () => {
        setFLoad(true)
        try{
            await axios.get(`${REACT_APP_API_URL}/api/v1/product/favorite/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setFLoad(false)
                // console.log(res.data.Favorites, 'favorite')
                setFavorites(res.data.Favorites)
            })
        } catch(error){
            // console.log(error.message)
        }
    }

    const setToFavorite = async (e, pId, sId) => {
        e.preventDefault();
        setTload(true)
        try {
            await axios({
                    method: 'POST',
                    url: `${REACT_APP_API_URL}/api/v1/product/favorite/add`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    data: {
                        product_id: pId,
                        seller_id: sId
                    }
                })
                .then(res => {
                    if(res.status === 201){
                        setTload(false)
                        getFavorite()
                    }
                })
        } catch (error) {

        }
    }

    const setToUnFavorite = async (e, id) => {
        e.preventDefault();
        setULoad(true)
        try {
            axios.delete(`${REACT_APP_API_URL}/api/v1/product/favorite/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                setTload(false)
                getFavorite()
                // console.log(res, 'delete')
            })
        } catch(error){

        }
    }

    // console.log(items, 'items--setelah');

    useEffect(() => {
        getProducts();
        getFavorite();
    }, []);

    return (
        <Container fluid="md" className={styleCard.container}>
            {loading && (
                <div className='d-flex justify-content-center my-5'>
                    <Spinner animation="border" role="status" size="lg">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {!loading && items.length > 0 ? (
                <Row xs={2} sm={3} md={4} lg={5} className="g-3">
                    {items.map((item, index) => (
                        <Col key={index} className="d-flex">
                            <Link to={'/detail/'+item.id} className="w-100 text-decoration-none text-dark">
                                <Card className={styleCard.cardStyle}>
                                    <Card.Img variant="top"
                                        src={ !item.images || item.images.length === 0 ? NoImage : item.images[0].image_url }
                                        className={styleCard.imgThumbnail} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title style={{fontSize: '14px', fontWeight: 700, marginBottom: '4px', lineHeight: 1.3}}>
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className={styleCard.styleCardText}>
                                            {item.categories == null ? 'Tidak Berkategori' : item.categories.name}
                                        </Card.Text>
                                        <Card.Title style={{fontSize: '16px', fontWeight: 700, color: '#dc3545', marginTop: 'auto', marginBottom: 0}}>
                                            {Rupiah(item.base_price)}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            ) : !loading && (
                <div className="text-center mt-4 py-5">
                    <h5>Opps... Belum ada product yang dijual nih...</h5>
                </div>
            )}
        </Container>
    );
}

export default CardComponent;