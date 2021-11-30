// https://icanhazdadjoke.com/

const jokeBtn = document.querySelector(".get-joke");
const jokeText = document.querySelector(".joke-text");

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    const res = await fetch("https://icanhazdadjoke.com/",config);
    const data = await res.json();
    jokeText.innerHTML = data.joke;
}


jokeBtn.addEventListener("click",generateJoke);

generateJoke();