const express = require('express');
const fs = require('fs');
const app = express();

var cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the development api-server');
});

app.get('/artists', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

app.get('/artists/:id', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Error reading file.' });
        }
        const id = req.params.id;
        const obj = JSON.parse(data);
        const artist = obj.artists[id];
        if (!artist) {
            return res.status(404).send({ error: `Artist with id ${id} not found.` });
        }
        res.send({
            name: artist.name,
            genre: artist.genre,
            label: artist.label,
            totalNumOfAlbums: artist.totalNumOfAlbums,
            numOfAlbumsInRecord: artist.numOfAlbumsInRecord,
        });
    });
});
app.get('/artists/:id/albums', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Error reading file.' });
        }
        const id = req.params.id;
        const obj = JSON.parse(data);
        const albums = obj.artists[id].albums;
        if (!albums) {
            return res.status(404).send({ error: `Artist with id ${id} not found.` });
        }
        res.send({
            albums: albums,
        });
    });
});

app.get('/artists/:id/albums/:albumid', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Error reading file.' });
        }
        const id = req.params.id;
        const albumid = req.params.albumid;
        const obj = JSON.parse(data);
        const albums = obj.artists[id].albums;
        const album = albums[albumid];
        if (!albums) {
            return res.status(404).send({ error: `Artist with id ${id} not found.` });
        }
        res.send({
            albums: album,
        });
    });
});