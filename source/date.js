import { format } from 'date-fns';

const dt = new Date();
console.log(`format MM/yyyy: ${format(dt, 'MM/yyyy')}`);
