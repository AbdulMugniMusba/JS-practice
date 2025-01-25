class book{
    author;
    title;

    constructor(au,ti){
        this.author = au;
        this.title= ti;
    }
    displayDetails(){
        console.log(`Author:${this.author} Title:${this.title}`);
    }

}
let book1= new book("John","Harry Potter");
book1.displayDetails()