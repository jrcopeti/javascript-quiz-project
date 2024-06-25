class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()
  shuffleQuestions() {
    this.questions.sort(() => Math.random() - 0.5);
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    // this.getQuestion().anwser === answer ? this.correctAnswers++ : null;
    this.questions[this.currentQuestionIndex].answer === answer &&
      this.correctAnswers++;
  }
  // 6. hasEnded()

  hasEnded() {
    /* This is a more efficient way to check if all questions have been answered and also a faster way to write it.
        return this.currentQuestionIndex === this.questions.length; */

    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
    // we don't need to check if it's equal
    return true;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }
}
