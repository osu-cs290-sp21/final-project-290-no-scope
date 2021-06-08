
var searchInput = document.getElementById("navbar-search-input")
var title = document.getElementById("title")
var author = document.getElementById("author")
var description = document.getElementsByClassName("description").value
//var content = document.getElementById("navbar-search-input").value
var search = document.getElementById("navbar-search-input")


var blogs = document.querySelectorAll(".article-preview")

submitButton = document.getElementsByClassName("submit-button")[0]
cancelButton = document.getElementsByClassName("cancel-button")[0]



function insertBlogPost() {
    console.log("Insert new Blog Posts")
}

function createBlogPost() {
    console.log("Create a new Blog Post")
}

function update(){
    //console.log("This will be the search")
    var blogContent = document.getElementsByClassName("article-preview")[0]
    for(i = 0; i < blogs.length; i++){
        if(blogs[i].textContent.toLowerCase().includes(search.value.toLowerCase()) == false){
            blogs[i].classList.add("hidden")
        }
        else{
            blogs[i].classList.remove("hidden")
        }
    }
}

if(search){
search.addEventListener('keyup', function(){
    update()
})
}

if(submitButton){
submitButton.addEventListener('click', function(){
    createBlogPost()
})
}

if(cancelButton){
cancelButton.addEventListener('click', function(){
    author = ""
    title = ""
    description = ""
    content = ""
})
}