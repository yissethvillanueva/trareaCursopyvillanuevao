    const usuario =  document.getElementById('User');
     const contraseña = document.getElementById('Contraseña');                
    const confirmar = document.getElementById('conf');
    const electronico= document.getElementById('correo');
    const co= document.getElementById('cor');
    const form = document.getElementById('frm');

    form.addEventListener("submit", e => {
      e.preventDefault();
      let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
      entrar= false;
      if(usuario.value.length<6)
      {
        entrar=true;
      } 
      if(contraseña.value.length<8)
      {
        entrar=true;
      } 
      if(confirmar == contraseña)
      {
        entrar=true;
      } 
      if(!validEmail.test(electronico.value))
      {
        entrar=true;
      } 
      if(co==electronico)
      {
        entrar=true;
      } 
      if(entrar)
      {
        alert("Datos incorrecto");
      }  
      else{
        alert("Datos enviado");
      }

    });
    

/* Progamación del Modal */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Link");

//Get the understand button
var ok = document.getElementById("Understand")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the understand button, close the modal
ok.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}