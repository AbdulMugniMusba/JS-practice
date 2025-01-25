class product{
    name;
    price;
    quantity;

    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    productDetails(){
        console.log(`Product Name: ${this.name} `);
        console.log(`Product Price: ${this.price} `);
        console.log(`Product Quantity: ${this.quantity} `);
    }
    calculateTotalValue(){
        console.log(`$total vale = ${this.price * this.quantity}`);
        
    }
    applyDiscount(discountPercentage){
        console.log(`before discount =${this.price}`);
        let discount = this.price * (discountPercentage / 100);
        this.price = this.price - discount ;
        console.log(`after discount =${this.price}`);
        
        

    }
    restock(newQuantity){
        this.quantity += newQuantity;
        console.log(`new quantity =${this.quantity}`);

    }
}
let product2 = new product("aata",300,1);
product2.productDetails();
product2.calculateTotalValue();
product2.applyDiscount(10);
product2.restock(2);