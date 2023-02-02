const answers = ["A", "B", "A", "B", "A"];

const form = document.querySelector('.quiz-questions');
const result = document.querySelector('.result');

const mapFormValues = () => {
    const answersFromForm = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
        form.question5.value,
    ];
    return answersFromForm;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let score = 0;
    const actualAnswers = mapFormValues();
    actualAnswers.forEach((answer, index) => {
        if (answer === answers[index]) {
            score = score + 20;
        }
    });

    window.scrollTo(0, 0);
    result.classList.remove('d-none');
    let scorePercentage = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${scorePercentage}%`;
        if (scorePercentage === score) {
            clearInterval(timer);
        } else {
            scorePercentage++;
        }
    }, 25);
});