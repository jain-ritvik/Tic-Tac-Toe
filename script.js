let turnofplayerX = true;

let buttons = document.querySelectorAll(".classBtn");
let pleft = document.querySelector("#leftside");
let pright = document.querySelector("#rightside");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

pleft.innerText = "Player X's turn";
pright.innerText = "";

let winPatterns = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

let winnerFound = false;

let checkWinner = () => {
for ( pattern of winPatterns) {
    let [a,b,c] = pattern;
    let btnA = document.getElementById(a.toString());
    let btnB = document.getElementById(b.toString());
    let btnC = document.getElementById(c.toString());

    if (btnA.innerText != ""  && btnB.innerText != "" && btnC.innerText != "") {
        if (btnA.innerText == btnB.innerText  && btnB.innerText == btnC.innerText) {
            btnA.style.backgroundColor = "#daa520";
            btnB.style.backgroundColor = "#daa520";
            btnC.style.backgroundColor = "#daa520";
            pleft.innerText = "";
            pright.innerText = "";
            let winner = btnA.innerText;
            msg.innerText = `Player ${winner} wins`;
            winnerFound = true;
            buttons.forEach((btn) => {
                btn.disabled = true;
            })
            return;
        }
    }
}

let allFilled = true;
if (!winnerFound) {
    buttons.forEach((btn) => {
        if (btn.textContent == "") {
            allFilled = false;
        }
    })
}

if (allFilled && !winnerFound) {
    msg.innerText = "It's a draw!"
    pleft.innerText = "";
    pright.innerText = "";
    }
}


buttons.forEach(function(button) {
    button.addEventListener ('click', function() {
        if(button.textContent == ""){
            if (turnofplayerX) {
                pleft.innerText = "";
                pright.innerText = "Player O's turn";            
                button.textContent = "X";
                button.classList.add("playerX");
            }
            else {
                pleft.innerText = "Player X's turn";
                pright.innerText = "";
                button.textContent = "O";
                button.classList.add("playerO");
            }
            turnofplayerX = !turnofplayerX;
            
            checkWinner();
        }
})
})

resetBtn.addEventListener('click', function() {
    buttons.forEach(function(button) {
        button.textContent = "";
        button.classList.remove("playerX", "playerO");
        turnofplayer1 = true;
        pleft.innerText = "Player X's turn";
        pright.innerText = "";
        msg.innerText = "";
        button.disabled = false;
        winnerFound = false;
        button.style.backgroundColor = "";
    })
})