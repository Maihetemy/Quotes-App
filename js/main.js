var qoute = document.getElementById('qoute');
var auther = document.getElementById('auther');

var quotesList = ['Be the change that you wish to see in the world.',
    'You only live once, but if you do it right, once is enough.',
    `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
    `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
    `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    `So many books, so little time.`,
    `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    `Be yourself; everyone else is already taken.`,
    `We accept the love we think we deserve.`,
    `Without music, life would be a mistake.`];
var authersList = [
    `Mahatma Gandhi`,
    `Mae West`,
    `Dr. Seuss`,
    `William W. Purkey`,
    `Bernard M. Baruch`,
    `Marcus Tullius Cicero`,
    `Albert Einstein`,
    ` Frank Zappa`,
    `Marilyn Monroe`,
    `Oscar Wilde`,
];

var nBefore = -1, nAfter;
function getQoute() {
    nAfter = Math.floor(Math.random() * 10);
    while (nBefore === nAfter) {
        nAfter = Math.floor(Math.random() * 10);
    }
    qoute.innerHTML = quotesList[nAfter];
    auther.innerHTML = `--${authersList[nAfter]}`;
    console.log(nAfter);
    nBefore = nAfter;
}