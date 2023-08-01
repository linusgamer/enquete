const curiosities = [
    {
        question: "Beber álcool ajuda a se aquecer no frio",
        answer: "Mito!",
        explanation: "- Explicação: O álcool dilata os vasos sanguíneos, o que pode dar uma sensação de calor temporária. No entanto, essa sensação não aumenta a temperatura corporal e pode até levar a uma perda de calor mais rápida."
    },
    {
        question: "O álcool é uma substância psicoativa que pode causar dependência",
        answer: "Verdade!",
        explanation: "- Fundamento: O álcool é uma substância que afeta o sistema nervoso central e pode levar ao desenvolvimento de dependência física e psicológica."
    }
];

function createCuriosityCard(curiosity) {
    const curiosityCard = document.createElement("div");
    curiosityCard.classList.add("flashcard");

    const questionElement = document.createElement("p");
    questionElement.textContent = curiosity.question;
    curiosityCard.appendChild(questionElement);

    const answerElement = document.createElement("p");
    answerElement.classList.add("curiosity-answer");
    answerElement.textContent = curiosity.answer;
    curiosityCard.appendChild(answerElement);

    const explanationElement = document.createElement("p");
    explanationElement.classList.add("curiosity-explanation");
    explanationElement.textContent = curiosity.explanation;
    curiosityCard.appendChild(explanationElement);

    curiosityCard.addEventListener("click", () => {
        curiosityCard.classList.toggle("show-answer");
    });

    return curiosityCard;
}

const curiosityContainer = document.getElementById("curiosity-container");

curiosities.forEach((curiosity) => {
    const curiosityCard = createCuriosityCard(curiosity);
    curiosityContainer.appendChild(curiosityCard);
});
