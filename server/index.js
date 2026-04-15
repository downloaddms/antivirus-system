import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Початкові дані про пристрої
let devices = [
    { id: 1, name: "Office-PC-01", lastScan: "2024-04-10", status: "Safe" },
    { id: 2, name: "CEO-Laptop", lastScan: "2023-11-20", status: "Needs Scan" }
];

// Отримання списку всіх ПК
app.get('/api/computers', (req, res) => {
    res.json(devices);
});

// Додавання результату перевірки
app.post('/api/computers', (req, res) => {
    const { name, lastScan } = req.body;

    if (!name || name.length < 3) {
        return res.status(400).json({ error: "Name is too short!" });
    }

    const newPC = {
        id: Date.now(),
        name,
        lastScan,
        status: new Date(lastScan) > new Date('2024-01-01') ? "Safe" : "Needs Scan"
    };

    devices.push(newPC);
    res.status(201).json(newPC);
});

app.listen(PORT, () => {
    console.log(`Server Antivirus started on http://localhost:${PORT}`);
});