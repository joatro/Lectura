window.addEventListener('load',function(){
    
    var imagenes = [];
    imagenes[0] = 'img/istapage.webp';
    imagenes[1] = 'img/istapage.webp';
  
   

    var indiceImagenes = 0;
    var tiempo = 4000;
    function cambiarImagenes(){
        
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 1){
            indiceImagenes ++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes,tiempo);
});


