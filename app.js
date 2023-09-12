

const addBtn = document.querySelector('#AddBook')
const remBtn = document.querySelector('#RemBook')
const bookList = document.querySelector('.bookList')
const counterBook = document.querySelector('#counter')
//inputs
const inputs = document.querySelectorAll('input')
const title = inputs[0]
const auth = inputs[1]
const pages = inputs[2]
const year = inputs[3]

// //pop-up
// var closePopup = document.getElementById("popupclose");
// var overlay = document.getElementById("overlay");
// var popup = document.getElementById("popup");
// var button = document.getElementById("button");

//     // Close Popup Event
// closePopup.onclick = function() {
//     overlay.style.display = 'none';
//     popup.style.display = 'none';
// }

// button.onclick = function() {
//     overlay.style.display = 'block';
//     popup.style.display = 'block';
// }


const myLibrary = []

//book object

function Book(title,author,pages,year,read) {
    this.title = title
    this.author = author
    this.pages =pages
    this.year = year
    this.read = read
}
Book.prototype.toggleRead = function(){
    this.read =!this.read
}

function toggleRead(index) {
    myLibrary[index].toggleRead()
    display()
}

book1=new Book ("Once Upon a Broken Heart","Stephanie Garber",416,2021,1)
book2=new Book ("The Ballad of Never After","Stephanie Garber",403,2022,1)
book3 =new Book ("A Curse for True Love","Stephanie Garber",400,2023,0)

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
display()

addBtn.addEventListener('click',addBookToLibrary)
function addBookToLibrary() {
    book = new Book(title.value,auth.value,pages.value,year.value)
    myLibrary.push(book)
    console.log(myLibrary)
    display()
}

function display(){
    bookList.innerHTML=''
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i])
        item = document.createElement('div')
        item.classList.add('bookItem')
        item.id=i
        item.innerHTML=`
        <header>${myLibrary[i].title}</header>
        <br>Author: ${myLibrary[i].author}
        <br>Pages: ${myLibrary[i].pages}
        <br>Year: ${myLibrary[i].year}
        <p>${myLibrary[i].read? "Read":"Not Read Yet"}</p>
        <button  type'button' onclick="toggleRead(${i})">Read</button>
        <button type="button" onclick='removeBook(${i})'> Remove</button><br>
        `
        bookList.append(item)
    }
    counterBook.innerText = `Book Count: ${myLibrary.length}`
}

function removeBook(index){
   myLibrary.splice(index,1)
    console.log(myLibrary)
    display()
}

