var artistInput = document.getElementById("artist"),
    lableInput = document.getElementById("lable"),
    addButton = document.getElementById("addButton"),
    displayList = document.getElementById("display-list"),
    books = [];

var Book = function Book(artist, lable) {
    this.artist = artist;
    this.lable = lable;
    this.getDisplayText = function () {
        return this.artist + " by " + this.lable;
    }
}

var renderList = function renderList() {
    displayList.innerHTML = "";
    books.forEach(function (book, index, arr) {
        displayList.innerHTML += book.getDisplayText() + "<br>";
    });
};

addButton.addEventListener("click", function () {
    var newBook = new Book(artistInput.value, lableInput.value);
    books.push(newBook);
    renderList();
});
