const fs = require('fs');

// two functions handling the site's output

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and sent the rror to the Promise's `.catch()` method
            if (err) {
                reject (err);
                // return out of the function here to ensure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, reslve the Promise and send the successful data to the `.then()` method
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// write copy file using above as blueprint
const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject (err);
              return;
            }
            
            
            resolve ({
                ok: true,
                message: 'Success!'
            });
        });
    });
}

module. exports = { writeFile, copyFile}

// module.exports = {
//     property name: value - writeFile: writeFile,
//     property name: value - copyFile: copyFile
// };