// var jumboHeight = $('.jumbotron').outerHeight();

// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('#fondo').css('height', (jumboHeight-scrolled) + 'px');
// }
// $(window).scroll(function(e){
//     parallax();
// });

function cambiarFont(color){

    document.getElementById("prueba").style.fontFamily = "Arial";
    document.getElementById("prueba").style.color = color;
    
};

function cambiarWallpaper(){

    
    document.getElementById("fondo").style.removeProperty("background-image");
    document.getElementById("fondo").style.backgroundColor = "black";
    document.getElementById("fondo").style.setProperty("background-image", "url(./images/wallpaper1.jpg)");
    
};

function regresarFont(){

    document.getElementById("prueba").style.color = "white";
    document.getElementById("prueba").style.fontFamily = "sans-serif";
}

function regresarWallpaper(){

    document.getElementById("fondo").style.removeProperty("background-image");
    document.getElementById("fondo").style.backgroundColor = "black";
    document.getElementById("fondo").style.setProperty("background-image", "url(./images/world-series-wallpaper2.jpg)");
    document.getElementById("fondo").classList.add("animated bounce");
}