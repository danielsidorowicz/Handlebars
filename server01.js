const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.urlencoded({
    extended: true
}));


const path = require("path")
app.use(express.static(path.join(__dirname, '/static')));
const hbs = require('express-handlebars');


app.get("/index", function (req, res) {
    res.render('index.hbs');
})

app.get("/login", function (req, res) {
    res.render('login.hbs');
})


app.set('views', path.join(__dirname, 'views')); // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' })); // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs'); // określenie nazwy silnika szablonów

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})