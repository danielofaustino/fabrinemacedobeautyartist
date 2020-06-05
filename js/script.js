

$("#bootstrapForm").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Obrigado!");
    });
  });

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

// CURSOS : 

let trocandoImagem1 = (x) =>{
    x.src="img/cursos/1-1.jpeg";
}

let voltandoImagem1 = (y) =>{
    y.src="img/cursos/1.jpeg";
}

let trocandoImagem2 = (x) =>{
    x.src="img/cursos/2-2.jpeg";
}

let voltandoImagem2 = (y) =>{
    y.src="img/cursos/2.jpeg";
}

let trocandoImagem3 = (x) =>{
    x.src="img/cursos/3-3.jpeg";
}

let voltandoImagem3 = (y) =>{
    y.src="img/cursos/3.jpeg";
}

let trocandoImagem4 = (x) =>{
    x.src="img/cursos/4-4.jpeg";
}

let voltandoImagem4 = (y) =>{
    y.src="img/cursos/4.jpeg";
}


// PROCEDIMENTOS

let trocandoImagemP1 = (x) =>{
    x.src="img/procedimentos/1-1.jpeg";
}

let voltandoImagemP1 = (y) =>{
    y.src="img/procedimentos/1.jpeg";
}

let trocandoImagemP2 = (x) =>{
    x.src="img/procedimentos/2-2.jpeg";
}

let voltandoImagemP2 = (y) =>{
    y.src="img/procedimentos/2.jpeg";
}

let trocandoImagemP3 = (x) =>{
    x.src="img/procedimentos/3-3.jpeg";
}

let voltandoImagemP3 = (y) =>{
    y.src="img/procedimentos/3.jpeg";
}

let trocandoImagemP4 = (x) =>{
    x.src="img/procedimentos/4-4.jpeg";
}

let voltandoImagemP4 = (y) =>{
    y.src="img/procedimentos/4.jpeg";
}