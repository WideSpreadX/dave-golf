const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render('invite');
})
app.listen(port, () => {console.log(`Server listening on port ${port}`)});