var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (item) {
        this.products.push(item);
    };
    Scales.prototype.getsSummScale = function () {
        return this.products.reduce(function (acc, item) { return acc + item.getwWeight(); }, 0);
    };
    Scales.prototype.getNameList = function () {
        return this.products.map(function (item) { return item.getName(); });
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Product.prototype.getwWeight = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Apple';
        _this.color = 'green';
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = 'red';
        return _this;
    }
    return Tomato;
}(Product));
var item1 = new Apple('Green apple', 0.22);
var item2 = new Apple('Green small apple', 0.43);
var item3 = new Apple('Bad apple', 0.01);
var item4 = new Tomato('Red tomato', 1.2);
var item5 = new Tomato('Cherry', 3.4);
var scales = new Scales;
scales.add(item1);
scales.add(item2);
scales.add(item3);
scales.add(item4);
scales.add(item5);
var itemListOnScales = scales.getNameList();
var itemSummWeight = scales.getsSummScale();
console.log(itemListOnScales);
console.log(itemSummWeight);
