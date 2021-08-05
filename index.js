const tacoButton = document.querySelector("#taco")
const emojisContainer = document.getElementById("blobs")
const emojiForm = document.getElementById("emoji-form")
const commentForm = document.getElementById("comment-form")
const comments = document.getElementById("comments")

const initialEmojis = ["🍓", "🍕", "🥔", "😋", "🚽", "💪"]
initialEmojis.forEach(addEmoji)

document.querySelector('form').addEventListener("submit", handleSubmit)

document.getElementById("taco").addEventListener("click", function(){addEmoji("🌮")})

emojisContainer.addEventListener("click", () => console.log("clicked"))

function addEmoji(emoji){
  const emojiButton = document.createElement("li")
  emojiButton.innerText = emoji
  emojisContainer.appendChild(emojiButton)
}

document.querySelector("li").addEventListener("click", function(e){
  e.stopPropagation()
  e.target.style.backgroundColor = "yellow"
})

function handleSubmit(e){
  e.preventDefault()
  addEmoji(e.target.emoji.value)
  e.target.reset()
}
