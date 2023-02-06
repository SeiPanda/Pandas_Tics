document.querySelectorAll(".buttonBlock-item").forEach(item => {
    item.addEventListener("click", handleClickButton);
})

let currentPlayer = 0;

function handleClickButton(e){

    let clickedButton;
    if(e.target.nodeName === "DIV"){
        
      clickedButton = e.target.id;
    }

    if(e.target.nodeName === "SPAN"){
        clickedButton = e.target.parentNode.id;
    }
    
    if(document.getElementById(clickedButton).innerText != "o" && document.getElementById(clickedButton).innerText != "x"){
        if(currentPlayer == 1){
            document.getElementById(clickedButton).innerText = "o";
            document.getElementById(clickedButton).classList.add("circle");
            currentPlayer = 0;
            e.value = 0;
        }else{
            document.getElementById(clickedButton).innerText = "x";
            document.getElementById(clickedButton).classList.add("rectangle");
            currentPlayer = 1;
            e.value = 1;
        }
    }
    //ProveColumsAndRows(e, clickedButton);
    checkTriple();
}

function checkTriple() {
    let allBoxes = document.querySelector("#number-container").children;
    let boxValues = [];

    Array.from( allBoxes ).forEach( element => {
        let sign = null;
        if( element.innerText == 'x' )
            sign = 1;
        
        if( element.innerText == 'o' )
            sign = 0;
        boxValues.push( sign );
    });

    let isWinner = false;
    let winningBoxes = [];

    if( boxValues[0] != null && boxValues[0] == boxValues[1] && boxValues[1] == boxValues[2] ) {
        isWinner = true;
        winningBoxes = [0, 1, 2];
    }

    if( boxValues[0] != null && boxValues[0] == boxValues[3] && boxValues[3] == boxValues[6] ) {
        isWinner = true;
        winningBoxes = [0, 3, 6];
    }

    if( boxValues[0] != null && boxValues[0] == boxValues[4] && boxValues[4] == boxValues[8] ) {
        isWinner = true;
        winningBoxes = [0, 4, 8];
    }

    if( boxValues[1] != null && boxValues[1] == boxValues[4] && boxValues[4] == boxValues[7] ) {
        isWinner = true;
        winningBoxes = [1, 4, 7];
    }

    if( boxValues[2] != null && boxValues[2] == boxValues[4] && boxValues[4] == boxValues[6] ) {
        isWinner = true;
        winningBoxes = [4, 6, 2];
    }

    if( boxValues[3] != null && boxValues[3] == boxValues[4] && boxValues[4] == boxValues[5] ) {
        isWinner = true;
        winningBoxes = [3, 4, 5];
    }
    if( boxValues[2] != null && boxValues[2] == boxValues[5] && boxValues[5] == boxValues[8] ) {
        isWinner = true;
        winningBoxes = [8, 5, 2];
    }
    if( boxValues[6] != null && boxValues[6] == boxValues[7] && boxValues[7] == boxValues[8] ) {
        isWinner = true;
        winningBoxes = [6, 7, 8];
    }

    if(isWinner){
        showWinner(winningBoxes);
    }
}

function showWinner(winningBoxes){
    
    winningBoxes.forEach( box => {
        document.querySelector("#number-container").children[box].style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
    });
    
    setTimeout( () => {
        document.querySelectorAll(".number-container-item").forEach(item => {
            item.innerText = null;
            item.classList.remove("rectangle");
            item.classList.remove("circle");
        })

        winningBoxes.forEach( box => {
            document.querySelector("#number-container").children[box].style.boxShadow = "inset 3px 2px 9px 0px #9c9c9c";
        });
    }, 1000);
}

//diffrent more complex solution

// function ProveColumsAndRows(e, clickedButton){

//     let array = document.querySelector("#number-container");
//     let sign = "";

//     if(e.value == 0){
//         sign = "x";
//     }

//     if(e.value == 1){
//         sign = "o";
//     }

//     if(clickedButton == "item_0"){
//         if(array.children[1].innerText == sign && array.children[2].innerText == sign){
//            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
           
//         }
//         if(array.children[3].innerText == sign && array.children[6].innerText == sign){
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[4].innerText == sign && array.children[8].innerText == sign){
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_1"){
//         if(array.children[0].innerText == sign && array.children[2].innerText == sign){
//             document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[4].innerText == sign && array.children[7].innerText == sign){
//             document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_2"){
//         if(array.children[1].innerText == sign && array.children[0].innerText == sign){
//             document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[8].innerText == sign && array.children[5].innerText == sign){
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[4].innerText == sign && array.children[6].innerText == sign){
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_3"){
//         if(array.children[1].innerText == sign && array.children[6].innerText == sign){
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[4].innerText == sign && array.children[5].innerText == sign){
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_5"){
//         if(array.children[8].innerText == sign && array.children[2].innerText == sign){
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[3].innerText == sign && array.children[4].innerText == sign){
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_4"){
//         if(array.children[0].innerText == sign && array.children[8].innerText == sign){
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[2].innerText == sign && array.children[6].innerText == sign){
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[3].innerText == sign && array.children[5].innerText == sign){
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[1].innerText == sign && array.children[7].innerText == sign){
//             document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_6"){
//         if(array.children[1].innerText == sign && array.children[3].innerText == sign){
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[7].innerText == sign && array.children[8].innerText == sign){
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[4].innerText == sign && array.children[2].innerText == sign){
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }

//     if(clickedButton == "item_7"){
//         if(array.children[1].innerText == sign && array.children[4].innerText == sign){
//             document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[8].innerText == sign && array.children[6].innerText == sign){
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }
    
//     if(clickedButton == "item_8"){
//         if(array.children[0].innerText == sign && array.children[4].innerText == sign){
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[2].innerText == sign && array.children[5].innerText == sign){
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//         if(array.children[6].innerText == sign && array.children[7].innerText == sign){
//             document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//             document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
//         }
//     }
// }