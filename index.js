console.log("hello world")


// function hello(e){
//   console.log(e.target)
// }

// find the element you want to add the event listener to

const header = document.querySelector("h1")
console.log("header:", header)

// add the event listener
// pass in the type of event as a string as the first argument
// and a callback function describing what you want it to do as a second argument
// document.addEventListener("click", hello)


// document.addEventListener("click", function(e){
//   e.target.innerText = "🌮"
// })

document.querySelector("li").addEventListener("click", function(e){
  e.target.style.backgroundColor = "yellow"
})

function handleSubmit(e){
  e.preventDefault()
  addEmoji(e.target.emoji.value)
}

function addEmoji(emoji){
  // THIS BREAKS THE CODE FROM LINE 24 AFTER IT'S INVOKED
  document.querySelector("ul").innerHTML += `<li>${emoji}</li>`
}

document.querySelector('form').addEventListener("submit", handleSubmit)

document.getElementById("taco").addEventListener("click", function(){addEmoji("🌮")})
