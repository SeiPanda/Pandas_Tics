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
    
  
  console.log("g");

    if(document.getElementById(clickedButton).innerText != "o" && document.getElementById(clickedButton).innerText != "x"){
        if(currentPlayer == 1){
            document.getElementById(clickedButton).innerText = "o";
            document.getElementById(clickedButton).classList.add("circle");
            e.value = 1;
            currentPlayer = 0;
        }else{
            document.getElementById(clickedButton).innerText = "x";
            document.getElementById(clickedButton).classList.add("rectangle");
            currentPlayer = 1;
            e.value = 0;
        }
    
    }

    ProveColumsAndRows(e, clickedButton);
}


function ProveColumsAndRows(e, clickedButton){

    let array = document.querySelector("#number-container");
    let sign = "";

    if(e.value == 0){
        sign = "x";
    }

    if(e.value == 1){
        sign = "o";
    }

    if(clickedButton == "item_0"){
        if(array.children[1].innerText == sign && array.children[2].innerText == sign){
           document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
           document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
           document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
           
        }
        if(array.children[3].innerText == sign && array.children[6].innerText == sign){
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[4].innerText == sign && array.children[8].innerText == sign){
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_1"){
        if(array.children[0].innerText == sign && array.children[2].innerText == sign){
            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[4].innerText == sign && array.children[7].innerText == sign){
            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_2"){
        if(array.children[1].innerText == sign && array.children[0].innerText == sign){
            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[8].innerText == sign && array.children[5].innerText == sign){
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[4].innerText == sign && array.children[6].innerText == sign){
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_3"){
        if(array.children[1].innerText == sign && array.children[6].innerText == sign){
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[4].innerText == sign && array.children[5].innerText == sign){
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_5"){
        if(array.children[8].innerText == sign && array.children[2].innerText == sign){
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[3].innerText == sign && array.children[4].innerText == sign){
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_4"){
        if(array.children[0].innerText == sign && array.children[8].innerText == sign){
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[2].innerText == sign && array.children[6].innerText == sign){
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[3].innerText == sign && array.children[5].innerText == sign){
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[1].innerText == sign && array.children[7].innerText == sign){
            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_6"){
        if(array.children[1].innerText == sign && array.children[3].innerText == sign){
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_3").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[7].innerText == sign && array.children[8].innerText == sign){
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[4].innerText == sign && array.children[2].innerText == sign){
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }

    if(clickedButton == "item_7"){
        if(array.children[1].innerText == sign && array.children[4].innerText == sign){
            document.querySelector("#item_1").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[8].innerText == sign && array.children[6].innerText == sign){
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }
    
    if(clickedButton == "item_8"){
        if(array.children[0].innerText == sign && array.children[4].innerText == sign){
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_4").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_0").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[2].innerText == sign && array.children[5].innerText == sign){
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_2").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_5").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
        if(array.children[6].innerText == sign && array.children[7].innerText == sign){
            document.querySelector("#item_6").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_7").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
            document.querySelector("#item_8").style.boxShadow = "inset -1px -2px 14px 11px #3ed5d5";
        }
    }
}