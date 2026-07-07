var index=0
class Book{
    constructor(title, author,isbn){
        this.isbn=isbn
        this.title=title
        this.author=author
        this.disponibility=true
    }
 displayInfos() {
       console.log(this.title+"of"+this.author+"(isbn:"+this.isbn+")");     
}

}
console.log(Livre);

//class member

class Member{
    constructor(name,idMember){
        this.name=name
        this.idMember=idMember
        this.loanInProgress=[]
    }
    borrowBook(){
     this.loanInProgress.push(this.loanInProgress)
     this.disponibility=false
      index+=1
    }
    returnBook(){
        this.loanInProgress.filter(val => val.disponibility=true)
        this.disponibility=true
    }
    numberBorrow(){
        return index
    }
}

//class library

class Library{
    constructor(){
        this.books=[]
        this.members=[]
    }
    addBook(){
        this.books.push(this.books)
    }
    addMember(){
        this.members.push(this.members)
    }
    booksDisponibility(){
        this.books.filter(dis => dis.disponibility=true)
    }
    searchByAuthor( author_name){
        this.books.filter(aut => aut.author=author_name)
    }
}
