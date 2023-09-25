

const addBtn = document.querySelector('#AddBook')
const remBtn = document.querySelector('#RemBook')
const bookList = document.querySelector('.bookList')
const counterBook = document.querySelector('#counter')
const counterRead = document.querySelector('#Rcounter')
const sort = document.body.querySelector("#sort")

//inputs
const inputs = document.querySelectorAll('input')
const title = inputs[0]
const auth = inputs[1]
const pages = inputs[2]
const year = inputs[3]




const myLibrary = []

//book object

class Book {
    constructor(title,author,pages,year,read){
    this.title = title
    this.author = author
    this.pages =pages
    this.year = year
    this.read = read
    }
    toggleRead(){
        this.read =!this.read
    }
}


function toggleRead(index) {
    myLibrary[index].toggleRead()
    display(myLibrary)
}

book1=new Book ("Once Upon a Broken Heart","Stephanie Garber",416,2021,1)
book2=new Book ("The Ballad of Never After","Stephanie Garber",403,2022,1)
book3 =new Book ("A Curse for True Love","Stephanie Garber",400,2023,0)

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
display(myLibrary)

addBtn.addEventListener('click',addBookToLibrary)
function addBookToLibrary() {
    if(title.value===''){
        alert("Please provide a title")
        return;
    }
    book = new Book(title.value,auth.value,pages.value,year.value)
    myLibrary.push(book)
    // console.log(myLibrary)
    display(myLibrary)
}

function display(myLibrary){
    bookList.innerHTML=''
    for(let i=0;i<myLibrary.length;i++){
        // console.log(myLibrary[i])
        item = document.createElement('div')
        item.classList.add('bookItem')
        item.id=i
        item.innerHTML=`
        <header>${myLibrary[i].title}</header>
        <br>Author: ${myLibrary[i].author}
        <br>Pages: ${myLibrary[i].pages}
        <br>Year: ${myLibrary[i].year}
        <p>${myLibrary[i].read? "Read":"Not Read Yet"}</p>
        <button type'button' onclick="toggleRead(${i})">Read</button>
        <button type="button" onclick='removeBook(${i})'>Remove</button><br>
        `
        bookList.append(item)
    }
    
    counterBook.innerText = `Book Count: ${myLibrary.length}`
    counterRead.innerText = `Books Read Count: ${myLibrary.filter((a=>a.read==1)).length}`
    
}

   
// function strip(myLibrary) {
//     return myLibrary.replace(/^(a |the |an )/i, '').trim();
//   }   

function sortBooks(t) {
    if(t==='Asc')
        display(myLibrary.sort((a,b)=>a.title>b.title?1:-1))
    else
        display(myLibrary.sort((a,b)=>a.title<b.title?1:-1))
}

 sort.addEventListener('change', function(e){
   sortBooks(e.target.value)
 })


function removeBook(index){
    myLibrary.splice(index,1)
    // console.log(myLibrary)
    display(myLibrary)
}

