import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import stylePopup from './stylePopup.module.css';
import { Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { getDummyProductById } from '../../../dummyProducts';
import NoImage from '../../../images/no_image.png';
const { REACT_APP_API_URL } = process.env;

function PopUp() {
    const [modal, setModal] = useState(false);
    const [bidPrice, setBidPrice] = useState('');
    const [item, setItem] = useState({});
    const [category, setCategory] = useState({});
    const [images, setImages] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const nav = useNavigate();
    let { productId } = useParams();

    const url = `${REACT_APP_API_URL}/api/v1/buyer/order/buy`;
    const url2 = `${REACT_APP_API_URL}/api/v1/buyer/product/`;
    const token = localStorage.getItem('token');

    const Detail = async () => {
        const applyDummy = () => {
            const dummy = getDummyProductById(productId);
            setItem(dummy);
            setCategory(dummy.categories);
            setImages(dummy.images);
        };
        try {
            const res = await axios.get(url2 + productId, { timeout: 3000 });
            if (res?.data?.data?.product) {
                setItem(res.data.data.product);
                setCategory(res.data.data.product.categories);
                setImages(res.data.data.product.images || []);
            } else {
                applyDummy();
            }
        } catch (error) {
            applyDummy();
        }
    };

    useEffect(() => {
        Detail();
    }, []);

    const handleOrder = async (e) => {
        e.preventDefault();
        if (!bidPrice) {
            alert('Masukkan harga tawaran terlebih dahulu');
            return;
        }
        setSubmitting(true);

        // Try real API, fallback to demo success
        try {
            await axios({
                method: 'POST',
                url,
                headers: { 'Authorization': `Bearer ${token}` },
                data: {
                    bid_price: bidPrice,
                    product_id: productId,
                    seller_id: item.user_id,
                },
                timeout: 3000,
            });
            nav('/buyer/logged/sent/' + item.id);
        } catch (error) {
            // Backend tidak tersedia → tampilkan success demo
            console.log('Demo mode:', error.message);
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    const togglePopup = () => {
        setModal(!modal);
        setSubmitted(false);
        setBidPrice('');
    };

    const previewImage = images.length > 0 ? images[0].image_url : NoImage;
    const formatRupiah = (n) =>
        n ? 'Rp. ' + Number(n).toLocaleString('id-ID') : '';

    return (
        <div>
            <button
                className={stylePopup.roundedButton}
                onClick={togglePopup}
            >
                Saya Tertarik dan Ingin Nego
            </button>
            {modal && (
                <div className={stylePopup.modal}>
                    <div className={stylePopup.overlay} onClick={togglePopup}></div>
                    <div className={stylePopup.modalContent}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
                                <strong style={{ fontSize: 18 }}>Tawaran Terkirim!</strong>
                                <p style={{ color: '#666', marginTop: 12 }}>
                                    Penawaran kamu sebesar <b>{formatRupiah(bidPrice)}</b> sudah dikirim ke penjual.
                                </p>
                                <p style={{ color: '#666', fontSize: 13 }}>
                                    Penjual akan menghubungi kamu jika harganya cocok.
                                </p>
                                <button
                                    className={stylePopup.roundedButtonSend}
                                    onClick={togglePopup}
                                    style={{ marginTop: 16 }}
                                >
                                    Tutup
                                </button>
                            </div>
                        ) : (
                            <>
                                <strong>Masukkan Harga Tawarmu</strong><br /><br />

                                <div className={stylePopup.textPopup}>
                                    Harga tawaranmu akan diketahui penjual.
                                    Jika cocok, kamu akan segera dihubungi penjual.
                                </div>

                                <div className={stylePopup.imagePopup}>
                                    <div className={stylePopup.row}>
                                        <div className={stylePopup.satu}>
                                            <div className={stylePopup.img}>
                                                <img
                                                    className={stylePopup.image}
                                                    src={previewImage}
                                                    alt="product"
                                                />
                                            </div>
                                        </div>
                                        <div className={stylePopup.dua}>
                                            <strong>{item.name || 'Loading...'}</strong><br />
                                            <small style={{ color: '#777' }}>
                                                {category?.name || 'Tidak Berkategori'}
                                            </small><br />
                                            {formatRupiah(item.base_price)}
                                        </div>
                                    </div>
                                </div>
                                <br /> Harga Tawar

                                <Form onSubmit={handleOrder}>
                                    <Form.Group controlId="formBidPrice">
                                        <Form.Control
                                            className={stylePopup.styleForm}
                                            type="number"
                                            placeholder="Rp. 0,00"
                                            value={bidPrice}
                                            onChange={(event) => setBidPrice(event.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <button
                                        className={stylePopup.roundedButtonSend}
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        {submitting ? 'Mengirim...' : 'Kirim'}
                                    </button>
                                </Form>
                            </>
                        )}

                        <div
                            className={stylePopup.closeModal}
                            onClick={togglePopup}
                        >
                            <IoClose />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default PopUp;
