const tacoButton = document.querySelector("#taco")
const emojisContainer = document.getElementById("blobs")
const emojiForm = document.getElementById("emoji-form")
const commentForm = document.getElementById("comment-form")
const comments = document.getElementById("comments")

const initialEmojis = ["🍓", "🍕", "🥔", "😋", "🚽", "💪"]
initialEmojis.forEach(addEmoji)

emojiForm.addEventListener("submit", handleSubmit)
commentForm.addEventListener("submit", handleCommentSubmit)

document.getElementById("taco").addEventListener("click", function(){addEmoji("🌮")})


// anti-pattern: Does not apply to added emojis
// document.querySelectorAll("li").forEach(element => {
//   element.addEventListener("dblclick", (e) => e.target.remove())
// })

function addEmoji(emoji){
  emojisContainer.innerHTML += `<li data-emoji=${emoji}>'${emoji}'</li>`
}

emojisContainer.addEventListener("dblclick", (e) => {
  if (e.target.tagName == "LI"){
    if (e.target.dataset.emoji == "🌮"){
      alert("YUM")
    }
    e.target.remove()
  }
})

// closure method:
// function addEmoji(emoji){
//   const emojiButton = document.createElement("li")
//   emojiButton.innerText = emoji
//   emojisContainer.appendChild(emojiButton)
//   // let counter = 0
//   // emojiButton.addEventListener("click", increaseCounter)
//   // function increaseCounter(){
//   //   counter++
//   //   console.log(`counter for ${emoji}:`, counter)
//   // }
//   emojiButton.addEventListener("dblclick", () => emojiButton.remove())
// }

document.querySelector("li").addEventListener("click", function(e){
  e.target.style.backgroundColor = "yellow"
})

function handleSubmit(e){
  e.preventDefault()
  addEmoji(e.target.emoji.value)
  e.target.reset()
}

function handleCommentSubmit(e){
  e.preventDefault()
  // you can also use e.target to get commentForm
  const initialClicks = commentForm.initialClicks.value
  const comment = commentForm.comment.value
  addComment(initialClicks, comment)
  commentForm.reset()
}

// Event Delegation:

// function addComment(initialClicks, comment){
//   comments.innerHTML += `<p data-initial-clicks=${initialClicks} data-comment=${comment}>${initialClicks}: ${comment}</p>`
// }

// comments.addEventListener("click", function(e){
//   if (e.target.tagName == "P"){
//     ++e.target.dataset.initialClicks
//     e.target.innerText = `${e.target.dataset.initialClicks}: ${e.target.dataset.comment}`
//   }
// })

// Closures:

function addComment(initialClicks, comment){
  const newComment = document.createElement("p")
  newComment.innerText = `${initialClicks}: ${comment}`
  comments.appendChild(newComment)
  newComment.addEventListener("click", function(){
    newComment.innerText = `${++initialClicks}: ${comment}`
  })
}
