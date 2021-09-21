/* Homework 2 Part 1 
 * Samantha Farley
 * 9/21/21
 * Code developed from knowledge obtained in class (powerpoints) as well as the following sites:
 * https://stackabuse.com/get-query-strings-and-parameters-in-express-js/
 * https://dev.to/eclecticcoding/express-and-body-parser-khf
 * https://www.codegrepper.com/code-examples/javascript/loop+through+key+value+pairs+javascript
 */

import express from 'express';
// import bodyParser from 'body-parser'; // Body parser deprecated according to VS Code

const app = express();

app.get('/', (req, res) => {
    let output = "<ul>";
    Object.keys(req.query).forEach(key => {
        output += `<li>${key}: ${req.query[key]}</li>`;
    });
    output += "</ul>";
    res.send(output);
});

app.listen(5000, () => {
    console.log('Server up and listening on port 5000');
});