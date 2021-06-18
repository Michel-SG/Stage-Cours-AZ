const express = require('express');
const app = express();
const multiparty = require('multiparty');
const fs = require('fs');
const path = require('path');
var util = require('util');

const port = 5000;

app.post('/', (req, res) => {
    var form = new multiparty.Form();

    form.parse(req, function (err, fields, files) {
        console.log(util.inspect({ fields, files }));
        for (var key in files) {
            const file = files[key][0];
            fs.copyFile(
                file.path,
                path.join(__dirname, 'avatars', file.originalFilename),
                (err) => {
                    if (err) {
                        console.log('Error Found:', err);
                    } else {
                        console.log('\nFile Contents of copied_file:');
                    }
                }
            );
        }
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({ fields: fields, files: files }));
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
