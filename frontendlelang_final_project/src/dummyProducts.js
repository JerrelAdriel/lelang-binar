// Data dummy untuk preview portfolio — dipakai sebagai fallback
// kalau backend API tidak tersedia.

const SELLER_DUMMY = {
  full_name: 'Budi Santoso',
  city: 'Jakarta Selatan',
  image_url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200',
};

export const DUMMY_PRODUCTS = [
    {
        id: 1, name: 'iPhone 13 Pro 256GB', base_price: 12500000,
        description: 'iPhone 13 Pro 256GB warna Sierra Blue, fullset original box, charger, dan kabel. Kondisi mulus 95%, baterai 89%, masih ada sisa garansi resmi iBox. Tidak ada lecet di body, hanya pemakaian normal. Nego sopan diterima!',
        user_id: 1, categories: { name: 'Elektronik' },
        users: { ...SELLER_DUMMY, full_name: 'Budi Santoso', city: 'Jakarta Selatan' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=800' },
        ],
    },
    {
        id: 2, name: 'MacBook Air M2 2022', base_price: 18900000,
        description: 'MacBook Air M2 2022, RAM 8GB, SSD 256GB, warna Midnight. Beli baru di iBox Maret 2023, pemakaian ringan untuk kerja kantor. Cycle count 89, kondisi sangat terawat tanpa lecet. Bonus tas laptop & mouse.',
        user_id: 2, categories: { name: 'Elektronik' },
        users: { ...SELLER_DUMMY, full_name: 'Siti Rahma', city: 'Bandung' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800' },
        ],
    },
    {
        id: 3, name: 'Sepatu Nike Air Jordan', base_price: 2750000,
        description: 'Nike Air Jordan 1 Mid Chicago, size 42. Original 100% (bukan replika). Beli di Nike Store, baru pake 3x untuk acara saja. Box lengkap, lace tambahan masih ada. Mau jual karena ga muat lagi.',
        user_id: 3, categories: { name: 'Fashion' },
        users: { ...SELLER_DUMMY, full_name: 'Dedi Kurniawan', city: 'Surabaya' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?w=800' },
        ],
    },
    {
        id: 4, name: 'Tas Ransel Eiger 35L', base_price: 580000,
        description: 'Tas Ransel Eiger Compass 35L, cocok untuk hiking & camping. Baru pake 2x naik gunung. Kondisi mulus, semua resleting & strap berfungsi normal. Waterproof.',
        user_id: 4, categories: { name: 'Aksesoris' },
        users: { ...SELLER_DUMMY, full_name: 'Andi Wijaya', city: 'Yogyakarta' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800' }],
    },
    {
        id: 5, name: 'Kamera Canon EOS M50', base_price: 8200000,
        description: 'Canon EOS M50 Mark II kit lens 15-45mm. Total shutter count 4.500. Sangat bagus untuk vlogging & content creator. Bonus 2 baterai, charger, & memory card 64GB.',
        user_id: 5, categories: { name: 'Kamera' },
        users: { ...SELLER_DUMMY, full_name: 'Rina Fitria', city: 'Bali' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800' },
        ],
    },
    {
        id: 6, name: 'Jam Tangan Casio G-Shock', base_price: 1650000,
        description: 'Casio G-Shock GA-2100 (CasiOak), warna hitam doff. Original Casio Indonesia, garansi resmi masih panjang. Box, manual, dan kartu garansi lengkap.',
        user_id: 6, categories: { name: 'Fashion' },
        users: { ...SELLER_DUMMY, full_name: 'Agus Pratama', city: 'Medan' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800' }],
    },
    {
        id: 7, name: 'Headphone Sony WH-1000XM4', base_price: 3950000,
        description: 'Sony WH-1000XM4 wireless headphone with industry-leading noise cancellation. Baterai tahan 30 jam. Eearpad masih original tidak ada yang sobek. Case ikut.',
        user_id: 7, categories: { name: 'Elektronik' },
        users: { ...SELLER_DUMMY, full_name: 'Maya Lestari', city: 'Jakarta Pusat' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800' }],
    },
    {
        id: 8, name: 'Sepeda Polygon Premier', base_price: 4500000,
        description: 'Sepeda gunung Polygon Premier 4. Frame alloy, gear Shimano 24 speed. Cocok untuk komuter & weekend riding. Servis terakhir 2 bulan lalu.',
        user_id: 8, categories: { name: 'Olahraga' },
        users: { ...SELLER_DUMMY, full_name: 'Eko Priyanto', city: 'Semarang' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800' }],
    },
    {
        id: 9, name: 'PlayStation 5 Disc Edition', base_price: 7800000,
        description: 'PS5 Disc Edition fullset dengan 2 stick DualSense. Bonus 3 game disc: Spider-Man 2, Horizon, dan FIFA 24. Kondisi mulus, jarang dipakai.',
        user_id: 9, categories: { name: 'Gaming' },
        users: { ...SELLER_DUMMY, full_name: 'Farhan Rizki', city: 'Tangerang' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800' },
        ],
    },
    {
        id: 10, name: 'Gitar Akustik Yamaha F310', base_price: 1450000,
        description: 'Gitar Yamaha F310, gitar pemula populer. Suara bersih, neck nyaman. Pemakaian setahun, tidak ada cacat. Bonus tas gitar & pick.',
        user_id: 10, categories: { name: 'Musik' },
        users: { ...SELLER_DUMMY, full_name: 'Lia Permata', city: 'Bekasi' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800' }],
    },
    {
        id: 11, name: 'Kursi Gaming Secretlab Titan', base_price: 6900000,
        description: 'Secretlab Titan Evo 2022, ukuran regular. Sangat nyaman untuk WFH atau gaming marathon. Tidak ada robek/aus di bagian manapun.',
        user_id: 11, categories: { name: 'Furniture' },
        users: { ...SELLER_DUMMY, full_name: 'Tono Saputra', city: 'Bogor' },
        images: [{ image_url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800' }],
    },
    {
        id: 12, name: 'Tablet iPad Air 5th Gen', base_price: 9500000,
        description: 'iPad Air 5 (M1 chip), 64GB Wifi, warna Space Gray. Layar mulus, baterai sehat. Bonus Apple Pencil 2nd Gen & smart folio cover.',
        user_id: 12, categories: { name: 'Elektronik' },
        users: { ...SELLER_DUMMY, full_name: 'Desi Anggraini', city: 'Depok' },
        images: [
            { image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800' },
            { image_url: 'https://images.unsplash.com/photo-1543069190-9e44d4e84db5?w=800' },
        ],
    },
];

export const getDummyProductById = (id) => {
    const numId = parseInt(id, 10);
    return DUMMY_PRODUCTS.find(p => p.id === numId) || DUMMY_PRODUCTS[0];
};
