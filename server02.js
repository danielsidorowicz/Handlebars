const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.urlencoded({
    extended: true
}));


const path = require("path")
app.use(express.static(path.join(__dirname, '/static')));
const hbs = require('express-handlebars');
const context = {
    subject: "ćwiczenie 2 - podstawowy context",
    content: "to jest lorem ipsum",
    footer: "to jest stopka na mojej stronie"
}

app.get("/", function (req, res) {
    res.render('lorem.hbs', context);
})

app.set('views', path.join(__dirname, 'views')); // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' })); // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs'); // określenie nazwy silnika szablonów

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})