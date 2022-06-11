/* Progamación del Modal Pago */

// Get the modal
var modalPay = document.getElementById("ModalGeneral");

// Get the button that opens the modal
var btnPagar = document.getElementById("BtnPagar");

//Get the Pay button
var btnPay = document.getElementById("BtnEfectuar")

// Get the <span> element that closes the modal
var spanPay = document.getElementsByClassName("Cerrar")[0];

// When the user clicks on the button, open the modal
btnPagar.onclick = function() {
  modalPay.style.display = "block";
}

// When the user clicks on the pay button, close the modal
btnPay.onclick = function() {
  modalEfectuar.style.display = "block";
  modalPay.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
spanPay.onclick = function() {
  modalPay.style.display = "none";
}

/* Progamación del Modal Aceptar */

// Get the modal
var modalEfectuar = document.getElementById("ModalGeneralConfirmar");

//Get the Accept button
var btnAccept = document.getElementById("BtnAccept")

// Get the <span> element that closes the modal
var spanEfectuar = document.getElementsByClassName("CerrarConfirmar")[0];

// When the user clicks on the pay button, close the modal
btnAccept.onclick = function() {
  modalEfectuar.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
spanEfectuar.onclick = function() {
  modalEfectuar.style.display = "none";
}