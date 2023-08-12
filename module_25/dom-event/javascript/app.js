// Option : 1
// <button onclick="console.log(1)">click me</button>

// Option : 2
function makeDarkBlue() {
    document.body.style.background = 'darkblue';
};

// Option : 3
const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.onclick = makePink;
function makePink() {
    document.body.style.background = 'pink';
};

// Option : 4
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple() {
    document.body.style.background = 'purple';
};
// Option : 4 Another Ways
/*
const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function() {
    document.body.style.background = 'purple';
}
*/

// Option : 5
const makeChartreuseBtn = document.getElementById('make-chartreuse');
makeChartreuseBtn.addEventListener('click', makeChartreuse)
function makeChartreuse() {
    document.body.style.background = 'chartreuse';
};
// Option 5 Another Ways
const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() {
    document.body.style.background = 'green';
});
// Option 5 Another Ways
const makeGoldenBtn = document.getElementById('make-golden');
makeGoldenBtn.addEventListener('click', function() {
    document.body.style.background = 'gold';
});