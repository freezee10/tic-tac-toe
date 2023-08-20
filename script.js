let playerToMove = "X";
let xHTML = `<h1 class = "X"> X </div>`
let oHTML = `<h1 class = "X"> O </div>`
let boardRecord = [ [], [], [] ];
let gg = false;

document.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('click', () => {
        if(gg === false) {
            if(playerToMove === "X") {
                if(slot.innerHTML === xHTML || slot.innerHTML === oHTML) {
                    console.log('tt')
                    return;
                } else {
                slot.innerHTML = xHTML;
                playerToMove = "O";
                let brOne = Number(slot.dataset.location[0]);
                let brTwo = Number(slot.dataset.location[2]);
                boardRecord[brOne][brTwo] = "X";
                document.querySelector('.turn').innerHTML = 'Turn: O';
                checkWin();
                }
                
            } else if(playerToMove === "O") {
                if(slot.innerHTML === xHTML || slot.innerHTML === oHTML) {
                    return;
                } else {
                slot.innerHTML = oHTML;
                playerToMove = "X";
                let brOne = Number(slot.dataset.location[0]);
                let brTwo = Number(slot.dataset.location[2]);
                boardRecord[brOne][brTwo] = "O";
                document.querySelector('.turn').innerHTML = 'Turn: X';
                checkWin();
                }
                
            }
    } else if(gg === true) {
        return;
    }
    })
})

function checkWin() {
    if((boardRecord[0][0] === "X" && boardRecord[0][1] === "X" && boardRecord[0][2] === "X") || (boardRecord[1][0] === "X" && boardRecord[1][1] === "X" && boardRecord[1][2] === "X") || (boardRecord[2][0] === "X" && boardRecord[2][1] === "X" && boardRecord[2][2] === "X") || (boardRecord[0][0] === "X" && boardRecord[1][0] === "X" && boardRecord[2][0] === "X") || (boardRecord[0][1] === "X" && boardRecord[1][1] === "X" && boardRecord[2][1] === "X") || (boardRecord[0][2] === "X" && boardRecord[1][2] === "X" && boardRecord[2][2] === "X") || (boardRecord[0][0] === "X" && boardRecord[1][1] === "X" && boardRecord[2][2] === "X") || (boardRecord[0][2] === "X" && boardRecord[1][1] === "X" && boardRecord[2][0] === "X")) {
        gg = true;
        boardRecord = [ [], [], [] ];
        document.querySelector('.win-mess').innerHTML = "X Wins!"
        let button = document.createElement('button');
        button.innerText = "Again";
        
        let container = document.querySelector('.win-container');
        container.appendChild(button);

        button.addEventListener('click', () => {
            gg = false;
            container.removeChild(button);
            document.querySelector('.win-mess').innerHTML = "";
            document.querySelectorAll('.slot').forEach((slot) => {
                slot.innerHTML = "";
            })
        })
    }

    if((boardRecord[0][0] === "O" && boardRecord[0][1] === "O" && boardRecord[0][2] === "O") || (boardRecord[1][0] === "O" && boardRecord[1][1] === "O" && boardRecord[1][2] === "O") || (boardRecord[2][0] === "O" && boardRecord[2][1] === "O" && boardRecord[2][2] === "O") || (boardRecord[0][0] === "O" && boardRecord[1][0] === "O" && boardRecord[2][0] === "O") || (boardRecord[0][1] === "O" && boardRecord[1][1] === "O" && boardRecord[2][1] === "O") || (boardRecord[0][2] === "O" && boardRecord[1][2] === "O" && boardRecord[2][2] === "O") || (boardRecord[0][0] === "O" && boardRecord[1][1] === "O" && boardRecord[2][2] === "O") || (boardRecord[0][2] === "O" && boardRecord[1][1] === "O" && boardRecord[2][0] === "O")) {
       gg = true;
       boardRecord = [ [], [], [] ];
       document.querySelector('.win-mess').innerHTML = "O Wins!"
       let button = document.createElement('button');
       button.innerText = "Again";
       
       let container = document.querySelector('.win-container');
       container.appendChild(button);
       
       button.addEventListener('click', () => {
        gg = false;
        container.removeChild(button);
        document.querySelector('.win-mess').innerHTML = "";
        document.querySelectorAll('.slot').forEach((slot) => {
            slot.innerHTML = "";
        })
    })
    }
    
}