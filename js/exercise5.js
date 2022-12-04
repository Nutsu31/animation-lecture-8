let el = document.querySelector(".box");


el.addEventListener("click", clickedBox, false);

let result = 0;
function clickedBox(evt) {
    result += 1;
    console.log(result)
    if(result == 1){
        el.style.transition = '1s';
        el.style.left = '300px'
    }else if(result == 2){
        el.style.top = '300px'
    }else if(result == 3){
        el.style.left = '00px'
    }else if(result == 4) {
        el.style.left = '0'
        el.style.top = '0'
        return result = 0;
    }
}