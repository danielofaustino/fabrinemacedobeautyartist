
// Cookies alerts LGPD

(() => {
    if (!localStorage.pureJavaScriptCookies) {
      document.querySelector(".box-cookies").classList.remove('hide');
    }
    
    const acceptCookies = () => {
      document.querySelector(".box-cookies").classList.add('hide');
      localStorage.setItem("pureJavaScriptCookies", "accept");
    };
    
    const btnCookies = document.querySelector(".btn-cookies");
    
    btnCookies.addEventListener('click', acceptCookies);
  })();
  

// form on modal
$('#contact').submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        window.location.href='www.google.com.br';
    });
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



const changeImg = (x) => {

    let replacement = x.src.substr(44,6)

    let newReplacement = replacement.replace(replacement[0],`${replacement[0]}-${replacement[0]}`)

    let newSrc = x.src.replace(replacement,newReplacement)

    if(newSrc.includes("proced") == true){

        x.src = newSrc
        

    } else{

        newSrc.replace("proced","cursos")

        x.src = newSrc
        
    }
    

}



const returnImg = (x) => {

    console.log(x.src)

    let srcSliced = x.src.slice(0,45)
    console.log(srcSliced)
    x.src = `${srcSliced}.jpeg`
    
    console.log(x.src)
}

