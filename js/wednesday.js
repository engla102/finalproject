$(document).ready(function() {
    $("#tabs").tabs();


    var modal = document.getElementById("myModal");


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