document.querySelector(".mybutton")
for (var i = 0; i < 3; i++) {
document.querySelectorAll(".mybutton")[i].addEventListener("click",function() {

var text = this.innerHTML;

console.log(text);
play(text);
playanim(text);

});
    
}
//////////////////////////////////
function play(text){


    switch(text){
        case "a" :
            var audio = new Audio('audio/a.mp3');
            audio.play();
        break ;
        
        
            case "b" :
                var audio = new Audio('audio/b.mp3');
                audio.play();
            break ;
            
        
                case "c" :
                    var audio = new Audio('audio/c.mp3');
                    audio.play();
                break ;
                
        
        
        
    }   



}
///////////////////
function playanim(text){

var seletetdbutton = document.querySelector("."+text);

seletetdbutton.classList.add("anim");

setTimeout(function(){

    seletetdbutton.classList.remove("anim");


},1000)

}


////keyprres 
document.addEventListener("keypress",function(Event){

var text = Event.key;

play(text);
playanim(text);



});
/////count boxs
var count=0;
document.querySelector("textarea").addEventListener("keypress",function(Event){
count++;
var text=Event.key;

document.querySelector("p").innerHTML = "you have press " +count;


})
