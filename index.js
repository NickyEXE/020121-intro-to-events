const tacoButton = document.querySelector("#taco")
const emojisContainer = document.getElementById("blobs")
const emojiForm = document.getElementById("emoji-form")
const commentForm = document.getElementById("comment-form")
const comments = document.getElementById("comments")

const initialEmojis = ["🍓", "🍕", "🥔", "😋", "🚽", "💪"]
initialEmojis.forEach(addEmoji)

document.querySelector('form').addEventListener("submit", handleSubmit)

document.getElementById("taco").addEventListener("click", function(){addEmoji("🌮")})

function addEmoji(emoji){
  emojisContainer.innerHTML += `<li>${emoji}</li>`
}

document.querySelector("li").addEventListener("click", function(e){
  e.target.style.backgroundColor = "yellow"
})

function handleSubmit(e){
  e.preventDefault()
  addEmoji(e.target.emoji.value)
  e.target.reset()
}
