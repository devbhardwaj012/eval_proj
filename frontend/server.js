// // server.js
// const express = require('express');
// const fileUpload = require('express-fileupload');
// const path = require('path');

// const app = express();

// app.use(fileUpload());

// app.post('/upload', (req, res) => {
//     if (!req.files || !req.files.pdf) {
//         return res.status(400).send('No files were uploaded.');
//     }

//     const pdfFile = req.files.pdf;

//     pdfFile.mv(path.join(__dirname, 'uploads', pdfFile.name), (err) => {
//         if (err) {
//             return res.status(500).send(err);
//         }

//         res.send('File uploaded and saved successfully.');
//     });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });





// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const { exec } = require('child_process');

const app = express();

app.use(fileUpload());

// Endpoint for uploading PDF files
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

// Endpoint for running parser.js
app.post('/run-parser1', (req, res) => {
    // Execute parser.js script
    exec('node parser1.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing parser1.js: ${error.message}`);
            res.status(500).send('Error executing parser1.js');
            return;
        }
        if (stderr) {
            console.error(`Error executing parser1.js: ${stderr}`);
            res.status(500).send('Error executing parser1.js');
            return;
        }
        console.log(`parser1.js output: ${stdout}`);
        res.send('parser1.js executed successfully');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
