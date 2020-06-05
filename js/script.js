$('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            alert('Form Submitted. Thanks.')
            // You can also redirect the user to a custom thank-you page:
            window.location = 'https://wa.me/5511970433870'
        }
    })
})

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