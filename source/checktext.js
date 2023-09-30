import path from 'node:path';
import {unified} from 'unified'
import retextStringify from 'retext-stringify'
import retextEquality from 'retext-equality';
import retextIndefiniteArticle from 'retext-indefinite-article';
import retextSentenceSpacing from 'retext-sentence-spacing';
import retextIntensify from 'retext-intensify';
import retextRepeatedWords from 'retext-repeated-words';
import retextEnglish from 'retext-english';
import {reporter} from 'vfile-reporter';
import {read} from 'to-vfile'

const checkable = 'a' === 'a' ? retextSentenceSpacing : true ? retextIntensify : true ? retextIndefiniteArticle : retextEquality;
const file = await unified()
    .use(retextEnglish)
    .use(checkable)
    .use(retextRepeatedWords)
    .use(retextStringify)
    .process(await read(path.join(process.cwd(), 'fixtures', 'a-call-loan.txt')));

console.error(reporter(file));
