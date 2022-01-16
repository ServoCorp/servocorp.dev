//make an array of quotes
const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "-Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "-Walt Disney"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        source: "-Eleanor Roosevelt"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        source: "-James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        source: "-John Lennon"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "-Benjamin Franklin"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        source: "-Anne Frank"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        source: "-Abraham Lincoln"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        source: "-Dr. Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        source: "-Mae West"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        source: "-Confucius"
    },
    {
        quote: "Do not let making a living prevent you from making a life.",
        source: "-John Wooden"
    },
    {
        quote: "Love the life you live. Live the life you love.",
        source: "-Bob Marley"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        source: "-Estee Lauder"
    },
    {
        quote: "I failed my way to success.",
        source: "-Thomas Edison"
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        source: "-Steve Jobs"
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        source: "-Albert Einstein"
    }
];


function randomQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random].quote;
    document.getElementById('author').innerHTML = quotes[random].source;
}

function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    document.getElementById('time').innerHTML = time;
    setTimeout(printTime, 1000);
    }

function getDate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var date = month + '/' + day + '/' + year;
    document.getElementById('date').innerHTML = date;
    }

function consoleLog() {
    console.log("          .--------._\r\n         (`--\'       `-.\r\n          `.______      `.\r\n       ___________`__     \\\r\n    ,-\'           `-.\\     |\r\n   \/\/                \\|    |\\\r\n  (`  .\'~~~~~---\\     \\\'   | |\r\n   `-\'           )     \\   | |\r\n      ,---------\' - -.  `  . \'\r\n    ,\'             `%`\\`     |\r\n   \/                      \\  |\r\n  \/     \\-----.         \\    `\r\n \/|  ,_\/      \'-._            |\r\n(-\'  \/           \/            `     Caught ya peeping.\r\n,`--<           |        \\     \\    Thanks for checking me out!\r\n\\ |  \\         \/%%             `\\   Check out scripts() :)\r\n |\/   \\____---\'--`%        \\     \\\r\n |    \'           `               \\\r\n |\r\n  `--.__\r\n        `---._______\r\n                    `.\r\n                      \\");
}

function scripts() {
    console.log("coming soon")
}


    // call the functions
    printTime();
    getDate();
    randomQuote();
    consoleLog();