const url = "https://distinct-vaulted-freesia.glitch.me/image"
const cardImg = document.getElementById
const cardTitle = document.getElementById
const commentList = document.getElementById
 
function (photo){
    cardTitle.innerText = photo.title
    commentList.innerHTML =
    ${photo.comments[0].content}</li>
    ${photo.comments[1].content}</li
    ${photo.comments[2].content}</li>`
    likeBtn.addEventListener("click", addLikes)
 
 
commentForm.addEventListener("submit", postComment)
function postComment(e){
    e.preventDefault()
    let newComment = document.createElement("li")
 
    commentList.append(newComment)
   
