// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (!req.files || !req.files.pdf) {
        return res.status(400).send('No files were uploaded.');
    }

    const pdfFile = req.files.pdf;

    pdfFile.mv(path.join(__dirname, 'uploads', pdfFile.name), (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File uploaded and saved successfully.');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
