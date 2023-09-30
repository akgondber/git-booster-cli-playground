import fs from 'node:fs';
import download from 'download';
import Progress from 'progress';
import ProgressBar from 'progress';

const writeStream = fs.createWriteStream('gert.PNG');
const readStream = download('https://linuxhint.com/wp-content/uploads/2023/05/What-to-Add-to-git-status-porcelain-to-Make-it-Behave-Like-git-status-8.png');
readStream.on('response', (res) => {
    const len = parseInt(res.headers['content-length'], 10);
    const bar = new ProgressBar(' dowing [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len,
    });
    readStream.on('data', (chunk) => {
        writeStream.write(chunk);
        bar.tick(chunk.length);
    });
    readStream.on('end', () => {
        console.log('Downl done with succ');
        writeStream.end();
    });
});
