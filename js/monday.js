$(document).ready(function() {

$("#tabs").tabs();

var audio1 = document.createElement('audio');
    audio1.setAttribute('src', 'songs/clips/monday/braincells.m4a');

$('.song1').click(function() {
    audio1.play();
    $('.cover').addClass('rotate');

});

$('.song1').dblclick(function() {
    audio1.pause();
    audio1.currentTime =0;
    $('.cover').removeClass('rotate');
});

var audio2 = document.createElement('audio');
    audio2.setAttribute('src', 'songs/clips/monday/greenlight.m4a');

$('.song2').click(function() {
    audio2.play();
    $('.cover').addClass('green');

    });

$('.song2').dblclick(function() {
    audio2.pause();
    audio2.currentTime =0;
    $('.cover').removeClass('green');
    });

var audio3 = document.createElement('audio');
    audio3.setAttribute('src', 'songs/clips/monday/letmefly.m4a');

$('.song3').click(function() {
    audio3.play();
    $('.cover').addClass('bounce');

    });

$('.song3').dblclick(function() {
    audio3.pause();
    audio3.currentTime =0;
    $('.cover').removeClass('bounce');
    });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("menu");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }


var struc = document.getElementById("struc");

var helped = document.getElementById("help");

var exit = document.getElementsByClassName("exit")[0];

helped.onclick = function() {
struc.style.display = "block";
}

exit.onclick = function() {
struc.style.display = "none";
}





});