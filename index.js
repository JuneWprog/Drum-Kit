var drums=document.querySelectorAll(".drum");
var sounds={"w":"tom-1","a":"tom-2","s":"tom-3","d":"tom-4","j":"snare","k":"kick-bass","l":"crash"};
//click to make sound
for (var i=0;i<drums.length; i++){
    drums[i].addEventListener("click",function(){
        var buttonClicked=this.innerHTML;
        makeSound(buttonClicked);
        animation(buttonClicked);
    });
}
//press keyboard to make sound

document.addEventListener("keydown",function(e){
    makeSound(e.key);
    animation(e.key);
})

function makeSound(key){
    sound=sounds[key];
    audio=new Audio("sounds/"+sound+".mp3");
    audio.play();
}

function animation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}




//        var audio=new Audio('sounds/tom-1.mp3");
//audio.play();

