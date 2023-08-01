// Variáveis globais
var flashcardIndex = 0;
var flashcards = [
   {
        question: "Beber álcool ajuda a se aquecer no frio.",
        answer: "Mito!",
        explanation: " O álcool dilata os vasos sanguíneos, o que pode dar uma sensação de calor temporária. No entanto, essa sensação não aumenta a temperatura corporal e pode até levar a uma perda de calor mais rápida."
    },
	

   {
        question: "O álcool é uma substância psicoativa que pode causar dependência.",
        answer: "Verdade!",
        explanation: " O álcool é uma substância que afeta o sistema nervoso central e pode levar ao desenvolvimento de dependência física e psicológica."
    },

	{
        question: "O consumo excessivo de álcool pode levar a problemas de saúde,como doenças do fígado e do coração.",
        answer: "Verdade!",
        explanation: " O consumo excessivo de álcool está associado a
uma série de problemas de saúde, incluindo doenças hepáticas, como cirrose, e doenças cardiovasculares, como hipertensão e arritmias."
    },

	{
        question: " Beber café ou tomar banho frio pode ajudar a diminuir o efeito do álcool.",
        answer: "Mito!",
        explanation: "O café e o banho frio não têm a capacidade de diminuir o efeito do álcool no organismo. A única forma de diminuir o efeito do álcool é esperar o corpo metabolizá-lo naturalmente."
    },

	{
        question: "O álcool pode afetar negativamente o desempenho acadêmico e profissional.",
        answer: "Verdade!",
        explanation: "O consumo excessivo de álcool pode levar a problemas de memória, dificuldade de concentração e diminuição do desempenho cognitivo, afetando negativamente o desempenho acadêmico e profissional."
    },

	{
        question: " Beber álcool antes de dormir ajuda a ter uma boa noite de sono.",
        answer: "Mito!",
        explanation: " Embora o álcool possa inicialmente induzir o sono, elepode interromper os ciclos de sono normais e levar a uma qualidadede sono inferior. O consumo de álcool antes de dormir pode resultarem sono fragmentado e menos reparador."
    },

     {
        question: " O consumo moderado de álcool pode ter alguns benefícios à saúde, como redução do risco de doenças cardíacas.",
        answer: "Verdade!",
        explanation: "Estudos mostram que o consumo moderado de álcool, especialmente vinho tinto, pode estar associado a uma redução do risco de doenças cardíacas. No entanto, é importante ressaltar que os benefícios são observados apenas em quantidades moderadas e para certos grupos populacionais."

    },

	{
        question: "Beber álcool em excesso pode matar as células cerebrais.",
        answer: "Mito!",
        explanation: "O álcool prejudica a coordenação motora, o tempo de reação e a capacidade de julgamento, o que torna a condução sob efeito de álcool extremamente perigosa. Beber álcool antes de dirigir aumenta significativamente o risco de acidentes de trânsito."

    }
];

// Variável para controlar se o botão está habilitado
var buttonEnabled = true;

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
    // Verificar se o botão está habilitado
    if (!buttonEnabled) {
        return;
    }

    // Desabilitar o botão
    buttonEnabled = false;

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
    // Habilitar o botão
    buttonEnabled = true;

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
