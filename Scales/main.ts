class Scales {
    products:Product[] = []
    constructor(){
        
    }
    add(item:Product){
        this.products.push(item)
    }
    getsSummScale():number{
        return this.products.reduce((acc,item)=>acc+item.getwWeight(),0)
    }
    getNameList():String[]{
        return this.products.map(item=>item.getName())
    }
}
class Product{
    weight:number;
    name:string;
    constructor(name:string,weight:number){
        this.name = name
        this.weight = weight;
    }
    getwWeight():number{
        return this.weight
    }
    getName():string{
        return this.name
    }
}
class Apple extends Product{
    type:string = 'Apple';
    color:string = 'green'
}
class Tomato extends Product{
    color:string = 'red'
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