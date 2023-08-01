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

let currentIndex = 0;

const curiosityQuestion = document.getElementById("curiosity-question");
const curiosityAnswer = document.getElementById("curiosity-answer");
const curiosityExplanation = document.getElementById("curiosity-explanation");
const nextButton = document.getElementById("next-button");

function showCuriosity() {
    const currentCuriosity = curiosities[currentIndex];
    curiosityQuestion.textContent = currentCuriosity.question;
    curiosityAnswer.textContent = currentCuriosity.answer;
    curiosityExplanation.textContent = currentCuriosity.explanation;
}

function nextCuriosity() {
    currentIndex++;
    if (currentIndex < curiosities.length) {
        showCuriosity();
    } else {
        currentIndex = 0;
        showCuriosity();
    }
}

nextButton.addEventListener("click", nextCuriosity);

showCuriosity();
