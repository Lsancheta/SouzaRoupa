// SCRIPT DA TROCA DE IMAGENS  //

/*
let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img');
    max = images.length;

    function nextImage(){

        images[currentImageIndex].classList.remove("selected")

        currentImageIndex ++

       if(currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex].classList.add("selected")
        //console.log(images[1])
    }

    function start(){
        //Troca de imagem no banner principal
        setInterval(() =>{
            nextImage()
        }, time)
    }

    window.addEventListener("load", start)

    */

// SCRIPT DO MODAL POPUP PARA APARECER  //
    function iniciaModal(modalID){
        var modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) =>{
            if(e.target.id == modalID || e.target.className =='fechar'){
                modal.classList.remove('mostrar');
            }
        })
    }
    var logo
    iniciaModal('modal-informacao');
