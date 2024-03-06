// Import dependencies
const fs = require("fs");
const PDFParser = require("pdf2json");

// Get all the filenames from the patients folder
const files = fs.readdirSync("uploads");

// All of the parse patients
let uploads = [];

// Make a IIFE so we can run asynchronous code
(async () => {

    // Await all of the patients to be passed
    // For each file in the patients folder
    await Promise.all(files.map(async (file) => {

        // Set up the pdf parser
        let pdfParser = new PDFParser(this, 1);

        // Load the pdf document
        pdfParser.loadPDF(`uploads/${file}`);

        // Parsed the patient
        let upload = await new Promise(async (resolve, reject) => {

            // On data ready
            pdfParser.on("pdfParser_dataReady", (pdfData) => {

                // The raw PDF data in text form
                const raw = pdfParser.getRawTextContent().replace(/\r\n/g, " ");
                //console.log(raw);

                // Return the parsed data
                resolve({
                    Brand: /Brand(.*?)ProductName/i.exec(raw)[1].trim(),
                    ProductName: /ProductName(.*?)Adult/i.exec(raw)[1].trim(),
                    Adult: /Adult(.*?)Violence/i.exec(raw)[1].trim(),
                    Violence: /Violence(.*?)Color/i.exec(raw)[1].trim(),
                    Color: /Color(.*?)Material/i.exec(raw)[1].trim(),
                    Material: /Material(.*?)Armrests/i.exec(raw)[1].trim(),
                    Armrests: /Armrests(.*?)Size/i.exec(raw)[1].trim(),
                    Size: /Size(.*?)Durability/i.exec(raw)[1].trim(),
                    Durability: /Durability(.*?)Weight/i.exec(raw)[1].trim(),
                    Weight: /Weight(.*?)--/i.exec(raw)[1].trim()
                });

            });

        });

        // Add the patient to the patients array
        uploads.push(upload);

    }));

    // Save the extracted information to a json file
    fs.writeFileSync("uploads.json", JSON.stringify(uploads));

})();  







