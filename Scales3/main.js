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
        this.engine.getItemList().forEach(function (item) { summ = summ + item.weight; });
        return summ;
    };
    ;
    Scales.prototype.getNameList = function () {
        return this.engine.getItemList().map(function (item) { return item.name; });
    };
    ;
    return Scales;
}());
;
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.getItemList = function () {
        return this.products;
    };
    ;
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
        localStorage.setItem('products', '[]');
    }
    ScalesStorageEngineLocalStorage.prototype.getItemList = function () {
        var simpleArray = JSON.parse(localStorage.products);
        return simpleArray.map(function (item) { return new Product(item.name, item.weight); });
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var itemsObj = JSON.parse(localStorage.products);
        itemsObj.push(item);
        var newTextItems = JSON.stringify(itemsObj);
        localStorage.setItem('products', newTextItems);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return this.getItemList()[index];
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.getItemList().length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this._name = name;
        this._weight = weight;
    }
    ;
    Object.defineProperty(Product.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
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
var summScaleLS = scaleLS.getSumScale();
var nameListLS = scaleLS.getNameList();
console.log(summScaleLS);
console.log(nameListLS);
console.log("localStorage: " + localStorage.products);
//# sourceMappingURL=main.js.map