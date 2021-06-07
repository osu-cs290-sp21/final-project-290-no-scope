var searchInput = document.getElementById("navbar-search-input").value
var title = document.getElementById("title").value
var author = document.getElementById("author").value
var description = document.getElementById("navbar-search-input").value
var content = document.getElementById("navbar-search-input").value
var search = document.getElementById("navbar-search-input")


submitButton = document.getElementsByClassName("submit-button")[0]
cancelButton = document.getElementsByClassName("cancel-button")[0]

function insertBlogPost() {
    console.log("Insert new Blog Posts")
}

function createBlogPost() {
    console.log("Create a new Blog Post")
}

function update(){
    console.log("This will be the search")
}

search.addEventListener('input', function(){
    update()
})

submitButton.addEventListener('click', function(){
    createBlogPost()
})

cancelButton.addEventListener('click', function(){
    author = ""
    title = ""
    description = ""
    content = ""
})