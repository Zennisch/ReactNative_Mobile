let score = 20;
let secretNumber = Math.trunc(Math.random() * score) + 1;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * score) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('body').style.color = '#eee';
    document.querySelector('.number').style.width = '15rem';
});