import fs from 'node:fs';
import path from 'node:path';
import mergeImages from 'merge-images';
import { Canvas, Image } from 'canvas';

const startingPath = path.join(process.cwd(), '.');

const getFilename = (relPath) => {
  return path.join(startingPath, relPath)
};

mergeImages([getFilename('images/body.png'), getFilename('images/eyes.png'), getFilename('images/mouth.png')], {
  Canvas: Canvas,
  Image: Image
})
  .then(b64 => {
    const buf = Buffer.from(b64, 'base64');
    fs.writeFileSync(getFilename('images/lo.png'), b64.replace(/^data:image\/png;base64,/, ""), 'base64');
   console.log('Done!'); 
  }).catch(err => {
    console.log(err);
  });
