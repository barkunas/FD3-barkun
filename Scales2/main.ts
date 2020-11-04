interface IScalable{
    getName():string;
    getwWeight():number
}
class Scales {
    products:IScalable[] = []
    constructor(){
        
    }
    add(item:IScalable){
        this.products.push(item)
    }
    getsSummScale():number{
        return this.products.reduce((acc,item)=>acc+item.getwWeight(),0)
    }
    getNameList():String[]{
        return this.products.map(item=>item.getName())
    }
}
class Product {
    weight:number;
    name:string;
    constructor(name:string,weight:number){
        this.name = name
        this.weight = weight;
    }
}
class Apple extends Product implements IScalable{
    type:string = 'Apple';
    color:string = 'green';
    getwWeight():number{
        return this.weight
    }
    getName():string{
        return this.name
    }
}
class Tomato extends Product implements IScalable{
    color:string = 'red';
    getwWeight():number{
        return this.weight
    }
    getName():string{
        return this.name
    }
}

let item1 = new Apple('Green apple',0.22);
let item2 = new Apple('Green small apple',0.43);
let item3 = new Apple('Bad apple',0.01);
let item4 = new Tomato('Red tomato',1.2);
let item5 = new Tomato('Cherry',3.4);

let scales = new Scales;

scales.add(item1);
scales.add(item2);
scales.add(item3);
scales.add(item4);
scales.add(item5);

let itemListOnScales = scales.getNameList();
let itemSummWeight = scales.getsSummScale()

console.log(itemListOnScales)
console.log(itemSummWeight)