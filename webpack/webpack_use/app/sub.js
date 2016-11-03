//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h3');
    element.innerHTML = "Hello h3 world";
    return element;
}

module.exports = generateText;


//这里使用es6新特性
/*export default function() {
    var element = document.createElement('h3');
    element.innerHTML = "Hello h3 world";
    return element;
}*/
