window.addEventListener('load',function(){
    
    var imagenes = [];
    imagenes[0] = 'img/istapage.webp';
    imagenes[1] = 'img/Gracias.gif';
    imagenes[2] = 'img/istapage.webp';

  
   

    var indiceImagenes = 0;
    var tiempo = 6000;
    function cambiarImagenes(){
        
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 2){
            indiceImagenes ++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes,tiempo);
});


