const btnDiv = document.querySelector('.button-container')
const btnSwitch = document.querySelector('.blue-switch');
const video = document.querySelector('.video-container');



btnDiv.addEventListener('click', function()  {
    if(!btnSwitch.classList.contains("On")){
        btnSwitch.classList.add("On");
        video.pause();
    }
    else{
        btnSwitch.classList.remove("On")
        video.play();
    }
})

/*document.getElementsByName("switch").onClick = function() {
    if(!btnDiv.classList.contains("slide")){
        btnDiv.classList.add("slide");
        video.pause();
    }
    else
    {
        btnDiv.classList.remove("slide");
        video.play
    }
}*/


const prelaoder = document.querySelector('.preloader');

window.addEventListener('load',function(){
    prelaoder.classList.add("hide-preloader");
});

window.alert("Hello world!");
