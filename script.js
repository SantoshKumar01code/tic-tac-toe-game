let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let Newgamebtn = document.querySelector("#New-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerx ,player0

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turnO){
            //playerO
            box.innerText = "O";
            turnO = false;
        } else{
            //playerx
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
    });

    const disableBoxes = () => {
        for(let box of boxes){
        box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        }
    };
    

    const showwinner = (winner) => {
        msg.innerText = `congratulation, winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }

    const checkWinner =() =>{
        for(pattern of winpatterns) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" &&  pos2val != "" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                }
            }
        }
    };

    Newgamebtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);

        