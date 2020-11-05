interface IStorageEngine{
    products:Product[];
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
};
class Scales<StorageEngine extends IStorageEngine>{
    constructor(public engine:StorageEngine){
    };
    addItem(item:Product){
        this.engine.addItem(item)
    };
    getSumScale():number{
        let summ = 0;
        this.engine.products.forEach((item:Product)=>{summ+=item.getWeight()})
        return summ;
    };
    getNameList():string[]{
        return this.engine.products.map((item:Product)=>{return item.getName()})
    };
};
class ScalesStorageEngineArray implements IStorageEngine{
    products:Product[] = [];
    addItem(item:Product){
        this.products.push(item)
    };
    getItem(index:number){
        return this.products[index]

    };
    getCount():number{
        return this.products.length
    };
}
class ScalesStorageEngineLocalStorage implements IStorageEngine{
    products:Product[] = localStorage.products = [];
    constructor(){
    }
    addItem(item:Product){
        this.products.push(item)
    };
    getItem(index:number){
        return this.products[index]

    };
    getCount():number{
        return this.products.length
    };
}

class Product {
    private weight:number;
    private name:string;
    constructor(name:string,weight:number){
        this.name = name;
        this.weight = weight;
    };
    getWeight():number{
        return this.weight
    };
    getName():string{
        return this.name
    };
};

let item1 = new Product('Green apple',0.22);
let item2 = new Product('Green small apple',0.43);
let item3 = new Product('Bad apple',0.01);

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

console.log(localStorage.products)