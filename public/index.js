//console.log("Trying")
var searchInput = document.getElementById("navbar-search-input")
/*var title = document.getElementById("title")
var author = document.getElementById("author")
var description = document.getElementsByClassName("description")
var content = document.getElementById("content")*/
var search = document.getElementById("navbar-search-input")
//console.log("search:", search)

var createPostButton = document.getElementsByClassName('create-post-button')

var blogs = document.querySelectorAll(".article-preview")

var submitButton = document.getElementsByClassName("submit-button")[0]
var cancelButton = document.getElementsByClassName("cancel-button")[0]
var tru = 1;

function createBlogPost(){
  //Gets Date
  var date = Date(Date.now())
  var full_date = date.toString()

  // request the user from our app's sqlite database
 
  
  const userRequest = new XMLHttpRequest();
  userRequest.open('post', '/new');
  userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

  userRequest.send(JSON.stringify({'title':document.getElementById("title").value, 'author':document.getElementById("author").value, 'description':document.getElementById("description").value, "content": document.getElementById("content").value, "date": full_date }));

 
}


function update(){
    //console.log("This will be the search")
    var blogContent = document.getElementsByClassName("article-preview")[0]
    //console.log("hello")
    var i = 67
    //console.log("i: ")
    for(i = 0; i < blogs.length; i++){
        //console.log("blogs[i]", blogs[i])
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
    //console.log("Checking console.log")
    update()
})
}

if(submitButton){
  submitButton.addEventListener('click', function(){
    console.log('entered submitButton event listener')
    createBlogPost()
    console.log("About to click button")
    document.getElementsByClassName("cancel-button").click()
  })
}


if(createPostButton){
  console.log("entered if(createPostButton)")

var previews = 0
previews = document.querySelectorAll(".article-preview")
  if(previews === 0){
    console.log("entered if(!previews)")
    location.reload()
  }
}

