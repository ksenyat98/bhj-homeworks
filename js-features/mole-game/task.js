const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead == 10) {
            alert ('win');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        } else if (counterLost == 5) {
            alert ('lose');
            counterDead = 0;
            counterLost = 0;
            lost.textContent = counterLost;
        }
    });

}
replaceMole();