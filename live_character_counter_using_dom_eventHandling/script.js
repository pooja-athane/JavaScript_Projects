let int =document.querySelector("input")
let span = document.querySelector("span")

int.addEventListener("input", function(){
// console.log(int.value.length);
let left = 20 -int.value.length
span.textContent = left;
if(left <0){
    span.style.color = "red"
}else{
    span.style.color = "black"
}
})