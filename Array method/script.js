// index sorting method//////
// fruites array object   ////
const favFruit = ['🍏 ', '🍊', ' 🍐 ', '🍉', ' 🍓 ', '🍈', '🍑', '🥭', '🍍', ' 🥑 '];

const inputNum = document.getElementById('fruitid');


function checkFruit() {
    const ul = document.getElementById('fruits');
    favFruit.forEach((fruit) =>{
        //console.log(fruit);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = fruit;
    });
}

function searchFd(index) {
    const result = Number.isNaN(index) ? '' : favFruit.at(index);
    document.getElementById('results').innerHTML = result;
}

inputNum.addEventListener('keyup', function(e) {
    const index = e.target.valueAsNumber;
    searchFd(index);
});

inputNum.addEventListener('change', function(e) {
    const index = e.target.valueAsNumber;
    searchFd(index);
});



checkFruit();