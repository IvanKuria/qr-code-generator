

import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';

// 1. Use the inquirer npm package to get user input.
const url = await input({ message: 'Enter valid url:' });

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
 
var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('user_url.png'));

// 3. Create a txt file to save the user input using the native fs node module.
fs.writeFile('url.txt', url, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
 

