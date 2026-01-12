const express = require('express');
const app = express();
app.use(express.json()); // Untuk menangani format JSON [cite: 79]

// Middleware Autentikasi API Key [cite: 23, 81]
const authenticateKey = (req, res, next) => {
    const apiKey = req.header('Authorization'); // Bearer API_KEY [cite: 48]
    if (apiKey === 'Bearer MY_SECRET_KEY') { // Simulasi pengecekan
        next();
    } else {
        res.status(401).json({ message: "Unauthorized: API Key is required" });
    }
};

// Endpoint Produk [cite: 86, 87]
app.get('/api/v1/products', (req, res) => {
    res.json({ message: "Menampilkan semua produk elektronik" });
});

app.get('/api/v1/products/:id', (req, res) => {
    res.json({ message: `Detail produk dengan ID ${req.params.id}` });
});

// Endpoint Order (Simulasi) [cite: 94]
app.post('/api/v1/orders', authenticateKey, (req, res) => {
    res.status(201).json({ status: "ok", message: "Order berhasil dibuat" });
});

app.listen(3000, () => console.log('Server running on port 3000'));