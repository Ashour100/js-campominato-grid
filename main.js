let select=document.getElementById("Select");
let button=document.querySelector("button");
let squareWrapper=document.querySelector(".square_wrapper");

button.addEventListener("click", function(){
    squareWrapper.innerHTML="";
    switch (select.value){
        case '1':
            for(let i=1;i<101;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
        case '2':
            for(let i=1;i<82;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square","square_9");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
        case '3':
            for(let i=1;i<50;i++){
                let tempSquare= document.createElement("div");
                tempSquare.classList.add("square","square_7");
                squareWrapper.appendChild(tempSquare);
                let tempspan= document.createElement("span");
                tempspan.innerHTML=i;
                tempSquare.appendChild(tempspan);
            }
        break;
    }
    let squares= document.getElementsByClassName("square");
    console.log(squares);
    for(let i=0;i<squares.length;i++){
    console.log(squares[i]);
    squares[i].addEventListener("click",function(){
        this.classList.toggle("clicked");
    })
}
})
