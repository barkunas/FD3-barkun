interface IStorageEngine {
    getItemList(): Product[]
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
};
class Scales<StorageEngine extends IStorageEngine>{
    constructor(public engine: StorageEngine) {
    };
    addItem(item: Product) {
        this.engine.addItem(item)
    };
    getSumScale(): number {
        let summ = 0;
        this.engine.getItemList().forEach((item: Product) => { summ = summ + item.weight })
        return summ;
    };
    getNameList(): string[] {
        return this.engine.getItemList().map((item: Product) => { return item.name })
    };
};
class ScalesStorageEngineArray implements IStorageEngine {
    products: Product[] = [];
    getItemList() {
        return this.products;
    };
    addItem(item: Product) {
        this.products.push(item);
    };
    getItem(index: number) {
        return this.products[index];

    };
    getCount(): number {
        return this.products.length;
    };
}
class ScalesStorageEngineLocalStorage implements IStorageEngine {
    constructor() {
        localStorage.setItem('products', '[]')
    }
    getItemList() {
        let simpleArray:Product[] = JSON.parse(localStorage.products);
        return simpleArray.map((item:Product) => { return new Product(item.name, item.weight) });
    }
    addItem(item: Product) {
        let itemsObj: Product[] = JSON.parse(localStorage.products);
        itemsObj.push(item);
        var newTextItems = JSON.stringify(itemsObj)
        localStorage.setItem('products', newTextItems)
    };
    getItem(index: number) {
        return this.getItemList()[index]

    };
    getCount(): number {
        return this.getItemList().length
    };
}
class Product {
    private _weight: number;
    private _name: string;
    constructor(name: string, weight: number) {
        this._name = name;
        this._weight = weight;
    };
    public get weight(): number {
        return this._weight
    };
    public get name(): string {
        return this._name
    };
};

let item1 = new Product('Green apple', 0.22);
let item2 = new Product('Green small apple', 0.43);
let item3 = new Product('Bad apple', 0.01);

let scale = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray());

scale.addItem(item1);
scale.addItem(item2);
scale.addItem(item3);

let summScale = scale.getSumScale();
let nameList = scale.getNameList();

console.log(summScale);
console.log(nameList);


let scaleLS = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage());

scaleLS.addItem(item1);
scaleLS.addItem(item2);
scaleLS.addItem(item3);
let summScaleLS = scaleLS.getSumScale();
let nameListLS = scaleLS.getNameList();

console.log(summScaleLS);
console.log(nameListLS);

console.log(`localStorage: ${localStorage.products}`)