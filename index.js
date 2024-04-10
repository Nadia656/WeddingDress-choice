const headerTwo = document.querySelector("#headerTwo");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const myPic = document.querySelector("#myPic");
const headerOne = document.querySelector("#headerOne");

one.addEventListener ("click", formal);
two.addEventListener ("click", informal);

function formal(){
    myPic.setAttribute("src","two.jpg");
    headerTwo.innerHTML = "Type of Dress";
    one.textContent = "Ball Gown";
    two.textContent = "Mermaid";

    one.addEventListener ("click", ballGown);
    two.addEventListener ("click", mermaid);

}

function ballGown(){
    myPic.setAttribute("src","ballg.jpg");
    headerTwo.innerHTML = "Collection of Ball Wedding Gowns";
    one.style = "display: none";
    two.style = "display: none";

    
}

function mermaid(){
    myPic.setAttribute("src","MR.jpg");
    headerTwo.innerHTML = "Collection of Mermaid Wedding Gowns";
    one.style = "display: none";
    two.style = "display: none";

}


function informal(){
    myPic.setAttribute("src","FT.jpg");
    headerTwo.innerHTML = "Type of Dress";
    one.textContent = "Slip";
    two.textContent = "Suit";

    one.addEventListener ("click", slip);
    two.addEventListener ("click", suit);
}

function slip(){
    myPic.setAttribute("src", "SL.jpg");
    headerOne.innerHTML = "Collection of Slip Wedding Gowns";
    one.style = "display: none";
    two.style = "display: none";
    headerTwo.style = "display: none";
   

}

function suit(){
    myPic.setAttribute("src", "Suittt.jpg");
    headerOne.innerHTML = "Collection of Wedding Suits";
    one.style = "display: none";
    two.style = "display: none";
    headerTwo.style = "display: none";
   

}