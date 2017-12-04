var artisInput = document.getElementById("artis"),
    lableInput = document.getElementById("lable"),
    addButton = document.getElementById("addButton"),
    displayList = document.getElementById("display-list"),
    book = [];

var Book = function Book(artis, lable){
    this.artis = artis;
    this.lable = lable;
    this.displayList = function(){
        return this.artis + " by " + this.lable;
    }

var renderList = function renderList(){
        displayList.innerHTML = "";
        books.forEach(function(book, index, arr){
            displayList.innerHTML += book.getDisplayText() + "<br>";
        });
    };
 
    addButton.addEventListener("click", function(){
        var newBook = new Book(artisInput.value, lableInput.value);
        books.push(newBook);
        renderList();
    });