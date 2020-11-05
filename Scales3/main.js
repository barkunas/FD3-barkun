;
var Scales = /** @class */ (function () {
    function Scales(engine) {
        this.engine = engine;
    }
    ;
    Scales.prototype.addItem = function (item) {
        this.engine.addItem(item);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var summ = 0;
        this.engine.products.forEach(function (item) { summ += item.getWeight(); });
        return summ;
    };
    ;
    Scales.prototype.getNameList = function () {
        return this.engine.products.map(function (item) { return item.getName(); });
    };
    ;
    return Scales;
}());
;
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.products = localStorage.products = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return this.products[index];
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.products.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    ;
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
;
var item1 = new Product('Green apple', 0.22);
var item2 = new Product('Green small apple', 0.43);
var item3 = new Product('Bad apple', 0.01);
var scale = new Scales(new ScalesStorageEngineArray());
scale.addItem(item1);
scale.addItem(item2);
scale.addItem(item3);
var summScale = scale.getSumScale();
var nameList = scale.getNameList();
console.log(summScale);
console.log(nameList);
var scaleLS = new Scales(new ScalesStorageEngineLocalStorage());
scaleLS.addItem(item1);
scaleLS.addItem(item2);
scaleLS.addItem(item3);
console.log(localStorage.products);
