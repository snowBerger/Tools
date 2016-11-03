require('./main.css');
//require('./main.scss');
var sub = require('./sub');

var $ = require('jquery');   //添加第三方库  jQuery  moment
var moment = require('moment');

var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
//document.body.appendChild(app);
$('body').append(app).append('<p>Look at me! now is ' + moment().format() + '</p>');

//es6新特新下书写风格
/*import './main.css';
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
app.appendChild(generateText());
document.body.appendChild(app);*/
