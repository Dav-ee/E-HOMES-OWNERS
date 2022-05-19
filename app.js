var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', express.static('public'));


app.get('/', function (req, res) {
    res.render('./pages/index');
});
app.get('/dashboard', function (req, res) {
    res.render('./pages/dashboard');
});
app.get('/add-property', function (req, res) {
    res.render('./pages/add-property');
});
app.get('/property-bookings', function (req, res) {
    res.render('./pages/property-bookings');
});
app.get('/my-property', function (req, res) {
    res.render('./pages/my-property');
});
app.get('/messages', function (req, res) {
    res.render('./pages/messages');
});
app.get('/profile', function (req, res) {
    res.render('./pages/profile');
});
app.get('/contact', function (req, res) {
    res.render('./pages/contact');
});
app.get('/wallet', function (req, res) {
    res.render('./pages/wallet');
});



app.listen(PORT, function () {
    console.log('E-HOMES app server running on port: ' + PORT);
});