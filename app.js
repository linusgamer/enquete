// Variáveis globais
var flashcardIndex = 0;
var flashcards = [
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

// Função para exibir o flashcard atual
function showFlashcard() {
    var flashcardContainer = document.getElementById("curiosity-container");
    var flashcard = flashcards[flashcardIndex];

    flashcardContainer.innerHTML = `
        <div class="flashcard">
            <h2>${flashcard.question}</h2>
        </div>
    `;
}

// Função para verificar a resposta do usuário
function checkAnswer(isTrue) {
    var flashcard = flashcards[flashcardIndex];
    var flashcardElement = document.querySelector(".flashcard");

    if (flashcard.isTrue === isTrue) {
        flashcardElement.style.backgroundColor = "#2ecc71";
        flashcardElement.style.color = "#ffffff";
    } else {
        flashcardElement.style.backgroundColor = "#e74c3c";
        flashcardElement.style.color = "#ffffff";
    }

    // Exibir a resposta e explicação
    flashcardElement.innerHTML += `
        <p class="curiosity-answer">${flashcard.answer}</p>
        <p class="curiosity-explanation">${flashcard.explanation}</p>
    `;

    // Exibir o botão "Próxima Curiosidade"
    var nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
}

// Função para avançar para o próximo flashcard
function nextFlashcard() {
    var flashcardContainer = document.getElementById("curiosity-container");

    // Verificar se há mais flashcards
    if (flashcardIndex < flashcards.length - 1) {
        flashcardIndex++;
        showFlashcard();
    } else {
        flashcardContainer.innerHTML = "<p>Fim das curiosidades!</p>";
    }

    // Ocultar o botão "Próxima Curiosidade"
    var nextButton = document.getElementById("next-button");
    nextButton.style.display = "none";
}


// Event listeners para os botões "Verdade" e "Mito"
document.getElementById("true-button").addEventListener("click", function() {
    checkAnswer(true);
});

document.getElementById("false-button").addEventListener("click", function() {
    checkAnswer(false);
});

// Event listener para o botão "Próxima Curiosidade"
document.getElementById("next-button").addEventListener("click", nextFlashcard);

// Exibir o primeiro flashcard ao carregar a página
showFlashcard();
