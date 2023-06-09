function shuffle() {
    var grid = document.getElementById('game');
    for(var i = grid.children.length; i>=0; i--){
        grid.appendChild(grid.children[Math.floor(Math.random()* i)]);
    }
}

function loadGame() {
    shuffle();
}

window.addEventListener('click', function(e){
    //On est sur un élément de classe item (chiffre)
    if (e.target.className == 'item') {
        var emptyItem = document.querySelector('.empty');
    }

    if (getDistance(e.target.offsetLeft, e.target.offsetTop, emptyItem.offsetLeft, emptyItem.offsetTop) <= 110) {
        //On doit convertir le vide en chiffre
        emptyItem.classList = ('item');
        emptyItem.innerText = e.target.innerText;
        e.target.classList = 'empty';
        e.target.innerText = '';

        checkVictory();
    }
});

function getDistance(x1, y1,x2,y2) {
    var a = x1-x2;
    var b = y1 - y2;
    return Math.sqrt(a*a + b*b);
}

function checkVictory() {
    
    var items = document.querySelectorAll('.item');
    var score = 0;
    for(var i= 0; i<items.length; i++){
        if (items[i].innerText == ('' + (i+1))) {
            score++;
        }
    }

    if (score>=15) {
        var victoryItem = document.querySelector('.victory');
        victoryItem.style.opacity = "1";
    }
}