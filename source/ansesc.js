import { intro, outro } from '@clack/prompts';
import logUpdate from 'log-update';

const frames = ['-', '\\', '|', '/'];
let index = 0;
let sa = `

    f e
     r t

`;

setInterval(() => {
	const frame = frames[index = ++index % frames.length];
    
    sa += '\n';

	logUpdate(sa);
}, 1280);

// intro(`create-my-app`);
// Do stuff
console.log('Brat');
// outro(`You're all set!`);

