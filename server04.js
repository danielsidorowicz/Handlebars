const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.urlencoded({
    extended: true
}));


const path = require("path")
app.use(express.static(path.join(__dirname, '/static')));
const hbs = require('express-handlebars');
const { log } = require("console");
const context = {
    subject: "ćwiczenie 4 - dane z tablicy, select",
    fields: [
        { name: "title" },
        { name: "author" },
        { name: "lang" }
    ],
    books: [
        { title: "Lalka", author: "B Prus", lang: "PL" },
        { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
        { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
        { title: "Zamek", author: "F Kafka", lang: "CZ" }
    ]
}

app.get("/", function (req, res) {
    res.render('index04.hbs', context);
})

app.get("/send", function (req, res) {
    console.log(req.query.select);
    select = req.query.select
    // switch (select) {
    //     case select == "title":
    //         res.render('index041.hbs', context);
    //         break;
    //     case select == "author":
    //         res.render('index042.hbs', context);
    //         break;
    //     case select == "lang":
    //         res.render('index043.hbs', context);
    //         break;
    // }
    if (select == "title") {
        let titles = {}

        res.render('index041.hbs', context);
    } else if (select == "author") {
        res.render('index041.hbs', context);
    } else if (select == "lang") {
        res.render('index041.hbs', context);
    } else {
        res.render('index041.hbs', context);
    }

})

app.set('views', path.join(__dirname, 'views')); // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' })); // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs'); // określenie nazwy silnika szablonów

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})