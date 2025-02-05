// Function to flip the flashcard when clicked
function flipCard(card) {
    card.classList.toggle('flipped');
}

// When the form is submitted, this function will be triggered
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    // Initialize score to 0
    let score = 0;

    // Correct answers for the quiz
    const answers = {
        answer1: 'B', // Correct answer for question 1 (Apfel)
        answer2: 'B', // Correct answer for question 2 (Hund)
        answer3: 'A', // Correct answer for question 3 (Buch)
        answer4: 'A', // Correct answer for question 4 (Stuhl)
        answer5: 'B', // Correct answer for question 5 (Auto)
        answer6: 'A', // Correct answer for question 6 (Fenster)
        answer7: 'B', // Correct answer for question 7 (Katz)
        answer8: 'C', // Correct answer for question 8 (Lehrer)
        answer9: 'B', // Correct answer for question 9 (Schule)
        answer10: 'C' // Correct answer for question 10 (Wasser)
    };

    // Check each question answer
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        if (userAnswer && userAnswer.value === answers[question]) {
            score++; // Increment score if the answer is correct
        }
    }

    // Show the score
    alert(`Your score is: ${score} / 10`);
});
