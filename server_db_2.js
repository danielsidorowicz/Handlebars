const express = require("express")
const app = express()
const PORT = 3000;

const path = require("path")
app.use(express.static(path.join(__dirname, '/static')));
const hbs = require('express-handlebars');
const { log } = require("console");

const Datastore = require('nedb');
const { json } = require("express");

const coll3 = new Datastore({
    filename: 'static/db/find_remove.db',
    autoload: true
});

app.set('views', path.join(__dirname, 'views')); // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' })); // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs'); // określenie nazwy silnika szablonów


app.get("/", function (req, res) {
    res.render('index_db_1.hbs');
})

app.get("/form", function (req, res) {
    let context = {}
    const { login, password } = req.query
    const logowanie = login
    const haslo = password
    console.log(logowanie, haslo);
    let doc = {
        login: logowanie,
        password: haslo,
        timestamp: new Date().getTime()
    };
    coll3.insert(doc, function (err, newDoc) {
        console.log("id dokumentu: " + newDoc._id, "DODANO: " + new Date().getMilliseconds())
        res.render('index_db_2.hbs', context);
    });


})



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})