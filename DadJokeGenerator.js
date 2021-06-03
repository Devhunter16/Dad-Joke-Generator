const button = document.querySelector("#jokeButton");
button.addEventListener("click", async function () {
    newDadJoke();
})

const newDadJoke = async () => {
    // this function gets and displays a dad joke, and removes the old one
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        const jokeHole = document.querySelector("#jokeHole");
        const newJoke = document.createElement("li");
        newJoke.append(res.data.joke);
        jokeHole.append(newJoke);
        jokeHole.replaceChild(newJoke, jokeHole.childNodes[0]);
    } catch (e) {
        console.log("No jokes available, sorry.")
    }
}

