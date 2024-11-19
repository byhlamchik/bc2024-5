const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { Command } = require('commander');
const program = new Command();
program
    .requiredOption('-h, --host <host>', 'server host')
    .requiredOption('-p, --port <port>', 'server port')
    .requiredOption('-c, --cache <cache>', 'cache directory path');

program.parse(process.argv);
const { host, port, cache } = program.opts();

if (!fs.existsSync(cache)) {
    fs.mkdirSync(cache, { recursive: true });
}
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/UploadForm.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'UploadForm.html'));
});
