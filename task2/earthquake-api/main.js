const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const dataFilePath = './earthquakeData.json';
let earthquakes = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

const saveDataToFile = () => {
    fs.writeFileSync(dataFilePath, JSON.stringify(earthquakes, null, 2));
};

app.get('/earthquakes', (req, res) => {
    res.json(earthquakes);
});


app.get('/earthquakes/:id', (req, res) => {
    const eq = earthquakes.find(q => q.id === req.params.id);
    eq ? res.json(eq) : res.status(404).json({ message: 'Earthquake not found' });
});


app.post('/earthquakes', (req, res) => {
    const newEarthquake = { id: `eq${Date.now()}`, ...req.body };
    earthquakes.push(newEarthquake);
    saveDataToFile();
    res.status(201).json(newEarthquake);
});


app.put('/earthquakes/:id', (req, res) => {
    const index = earthquakes.findIndex(q => q.id === req.params.id);
    if (index !== -1) {
        earthquakes[index] = { ...earthquakes[index], ...req.body };
        saveDataToFile();
        res.json(earthquakes[index]);
    } else {
        res.status(404).json({ message: 'Earthquake not found' });
    }
});

app.delete('/earthquakes/:id', (req, res) => {
    const index = earthquakes.findIndex(q => q.id === req.params.id);
    if (index !== -1) {
        const deleted = earthquakes.splice(index, 1);
        saveDataToFile();
        res.json(deleted);
    } else {
        res.status(404).json({ message: 'Earthquake not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});