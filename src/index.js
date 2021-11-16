const url = "https://distinct-vaulted-freesia.glitch.me/image"
const cardImg = document.getElementById("fg-image")
const cardTitle = document.getElementById("fg-title")
const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("fg-comments")
const likeBtn = document.getElementById("like-button")
const likes = document.getElementById("fg-likes")

fetch(url)
.then(res => res.json())
.then(renderPhoto)

function renderPhoto(photo){
    cardTitle.innerText = photo.title
    cardImg.src = photo.image
    commentList.innerHTML = 
    `<li>${photo.comments[0].content}</li>
    <li>${photo.comments[1].content}</li
    <li>${photo.comments[2].content}</li>`
    likeBtn.addEventListener("click", addLikes)

 function addLikes() {
    likes.innerText = ++photo.likes + "Likes"
}

commentForm.addEventListener("submit", postComment)
function postComment(e) {
    e.preventDefault()
    let newComment = document.createElement("li")
    newComment.textContent = e.target.comment.value
    commentList.append(newComment)   

    }
}