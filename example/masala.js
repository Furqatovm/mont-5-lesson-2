let div =document.getElementById("div");
let ul =document.createElement("ul");
div.appendChild(ul);
for (let i =1; i <=10; i++){
    let li =document.createElement("li");
    li.textContent =i;
    ul.appendChild(li);
    if(li.textContent %2 ==0){
        li.classList.add("even");
        li.style.color ="red";
    } else{
        li.classList.add("odd");
        li.style.color ="blue"
    }
}


let arr =["Muhammadyusuf", "ozod", "akbar", "qaxramon", "inomjon"];

let ismlar =document.getElementById("ismlar");

for (let i of arr){
    let matn =document.createElement("p");
    matn.textContent =i;
    ismlar.prepend(matn);
}