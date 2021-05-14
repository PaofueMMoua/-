function welcomeMessage() {
  alert("Please ask me anything.");
}

// welcomeMessage();

let answers = [
  "It is certain",
  "It is decidedly so",
  "without a doubt",
  "Yes, definitely",
  "you may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function selectRandomAnswer() {
  document.getElementById("randomAnswerWrapper").style.opacity = "0";
  document.getElementById("magicBallWrapper").classList.add("shake");
  setTimeout(() => {
    document.getElementById("magicBallWrapper").classList.remove("shake");
    document.getElementById("smoke").style.opacity = ".5";

    // getting how long the question is and trimming all of the spaces before and after the first letter or Number. so you have to put in a question and not just spaces

    setTimeout(() => {
      let randomAnswerElement = document.getElementById("randomAnswer");
      let hasQuestion =
        document.getElementById("answerInput").value.trim().length > 0;
      let randomAnswer;

      // finding the random math input to round and multiply to = answers that are possible so it selects a random answer
      if (hasQuestion) {
        let randomNumber = Math.random() * (answers.length - 1);
        let roundedRandomNumber = Math.round(randomNumber);
        randomAnswer = answers[roundedRandomNumber];
      } else {
        randomAnswer = "Please ask a question";
      }

      randomAnswerElement.innerHTML = randomAnswer;

      document.getElementById("smoke").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("randomAnswerWrapper").style.opacity = "1";
      }, 500);
    }, 1250);
  }, 500);
}
