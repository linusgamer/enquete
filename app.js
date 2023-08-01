// Variáveis globais
var flashcardIndex = 0;
var flashcards = [
    {
        question: "Pergunta 1",
        answer: "Resposta 1",
        explanation: "Explicação 1",
        isTrue: true
    },
    {
        question: "Pergunta 2",
        answer: "Resposta 2",
        explanation: "Explicação 2",
        isTrue: false
    }
];

// Função para exibir o flashcard atual
function showFlashcard() {
    var flashcardContainer = document.getElementById("curiosity-container");
    var flashcard = flashcards[flashcardIndex];

    flashcardContainer.innerHTML = `
        <div class="flashcard">
            <h2>${flashcard.question}</h2>
            <p class="curiosity-answer">${flashcard.answer}</p>
            <p class="curiosity-explanation">${flashcard.explanation}</p>
        </div>
    `;
}

// Função para exibir o popup
function showPopup(message) {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    var popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = message;
    popup.style.display = "flex";

    // Fechar o popup ao clicar no botão "Fechar"
    document.getElementById("popup-close").addEventListener("click", function() {
        popup.style.display = "none";
    });
}

// Função para verificar a resposta do usuário
function checkAnswer(isTrue) {
    var flashcard = flashcards[flashcardIndex];

    if (flashcard.isTrue === isTrue) {
        showPopup("Você acertou!");
    } else {
        showPopup("Você errou!");
    }

    // Exibir a resposta e explicação
    var flashcardElement = document.querySelector(".flashcard");
    flashcardElement.classList.add("show-answer");
}

// Função para avançar para o próximo flashcard
function nextFlashcard() {
    var flashcardContainer = document.getElementById("curiosity-container");

    // Remover a classe "show-answer" do flashcard atual
    var flashcardElement = document.querySelector(".flashcard");
    if (flashcardElement) {
        flashcardElement.classList.remove("show-answer");
    }

    // Verificar se há mais flashcards
    if (flashcardIndex < flashcards.length - 1) {
        flashcardIndex++;
        showFlashcard();
    } else {
        flashcardContainer.innerHTML = "<p>Fim dos flashcards!</p>";
    }
}

// Event listeners para os botões "Verdade" e "Mito"
document.getElementById("true-button").addEventListener("click", function() {
    checkAnswer(true);
});

document.getElementById("false-button").addEventListener("click", function() {
    checkAnswer(false);
});

// Exibir o primeiro flashcard ao carregar a página
showFlashcard();
