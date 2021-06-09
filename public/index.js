
var searchInput = document.getElementById("navbar-search-input")
var title = document.getElementById("title")
var author = document.getElementById("author").value
var description = document.getElementsByClassName("description").value
var content = document.getElementById("content").value
var search = document.getElementById("navbar-search-input")


var blogs = document.querySelectorAll(".article-preview")

var submitButton = document.getElementsByClassName("submit-button")[0]
var cancelButton = document.getElementsByClassName("cancel-button")[0]
var tru = 1;

/*function createBlogPost() {
  axios.post("/postme", {
      author: 'author',
      title: 'title',
      description: 'description',
      content: 'content'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}*/

function createBlogPost(){
  // request the user from our app's sqlite database
  const userRequest = new XMLHttpRequest();
  userRequest.open('post', '/new');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  userRequest.send(JSON.stringify({'title':document.getElementById("title").value, 'author':document.getElementById("author").value, 'description':document.getElementById("description").value, "content": document.getElementById("content").value, "date":"6-8-2021" }));
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
