$(document).ready(function () {
    let score = 0;
    let selectedQuestion = null;
    let answeredQuestionsCount = 0;
    let selectedQuestionIds = [];
    let questionSelected = false;

    function loadQuestions() {
        return jeopardyQuestions;
    }

    function displayQuestion(question) {
        if (question) {
            $(".question-window").text(question.question);
            selectedQuestion = question;
            $(`#${question.id}`).addClass("disabled selected");
            selectedQuestionIds.push(question.id);
            questionSelected = true;
        }
    }

    function extractValue(value) {
        return parseInt(value.replace(/\D/g, ''));
    }

    function isQuestionSelected(id) {
        return selectedQuestionIds.includes(id);
    }

    function checkAnswer() {
        if (!questionSelected) {
            alert("Please select a question before submitting an answer.");
            return;
        }

        const userAnswer = $(".answer-input").val().toLowerCase().trim();
        const correctAnswer = selectedQuestion.answer.toLowerCase();
        const questionValue = extractValue(selectedQuestion.value);

        if (!userAnswer) {
            alert("Please enter an answer before submitting.");
            return;
        }

        if (!isNaN(questionValue)) {
            if (userAnswer === correctAnswer) {
                score += questionValue;
                answeredQuestionsCount++;

                if (answeredQuestionsCount === 25) {
                    enableResetButton();
                }
            } else {
                score -= questionValue;
            }
        }

        $("#score-display").text(Math.max(score, 0));
        $(".answer-input").val("");
        $(".jeopardy-question").removeClass("selected");

        const allQuestionsDisabled = $(".jeopardy-question:not(.disabled)").length === 0;
        if (allQuestionsDisabled) {
            enableResetButton();
        }

        selectedQuestion = null;
        questionSelected = false;

        $(".question-window").text("Questions will appear here. Please choose a category to begin.");
    }

    function enableResetButton() {
        $(".reset-button").prop("disabled", false);
    }

    $(".jeopardy-question").click(function () {
        if (!questionSelected) {
            const id = $(this).attr("id");
            const value = $(this).data("value");
            const questions = loadQuestions();

            const matchingQuestions = questions.filter(question => question.value === value && !question.clicked);
            const randomQuestion = matchingQuestions[Math.floor(Math.random() * matchingQuestions.length)];

            if (randomQuestion) {
                randomQuestion.id = id;
                randomQuestion.clicked = true;
                displayQuestion(randomQuestion);
            }
        }
    });

    $(".submit-answer").click(function () {
        checkAnswer();
    });

    $(".reset-button").click(function () {
        score = 0;
        $("#score-display").text("Score: $" + score);
        $(".jeopardy-question").removeClass("disabled selected");
        $(".reset-button").prop("disabled", true);
        answeredQuestionsCount = 0;
        selectedQuestionIds = [];
    });
});