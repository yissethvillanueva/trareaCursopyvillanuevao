
var QuickView = document.getElementById("QuickViewDiv");

var LastUsers = document.getElementById("LastUsersDiv");

var Users = document.getElementById("UsersDiv");

var COrders = document.getElementById("COrderDiv");

var NewOrder = document.getElementById("NewOrderDiv");

var Messages = document.getElementById("MessagesDiv");

var Home = document.getElementById("HomeDiv");

var HomeDelete = document.getElementById("HomeDeleteDiv");

var Catalog = document.getElementById("AddCatalogDiv");

var CatalogDelete = document.getElementById("DeleteCatalogDiv");

var Galery = document.getElementById("GaleryDiv");

var GaleryDelete = document.getElementById("DeleteGaleryDiv");

var BtnResumen = document.getElementById("BtnResumen");

var BtnUsers = document.getElementById("BtnUsers");

var BtnOrders = document.getElementById("BtnOrders");

var BtnMessages = document.getElementById("BtnMessages");

var BtnHome = document.getElementById("BtnInicio");

var BtnCatalog = document.getElementById("BtnCatalogo");

var BtnGalery = document.getElementById("BtnGaleria");


BtnResumen.onclick = function() {
    QuickView.style.display = "flex";
    LastUsers.style.display = "flex";
    Users.style.display = "none";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "none";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnUsers.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "flex";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "none";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnOrders.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "none";
    COrders.style.display = "flex";
    NewOrder.style.display = "flex";
    Messages.style.display = "none";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnMessages.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "none";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "flex";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnHome.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "none";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "none";
    Home.style.display = "flex";
    HomeDelete.style.display = "flex";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnCatalog.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "none";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "none";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "flex";
    CatalogDelete.style.display = "flex";
    Galery.style.display = "none";
    GaleryDelete.style.display = "none";
}

BtnGalery.onclick = function() {
    QuickView.style.display = "none";
    LastUsers.style.display = "none";
    Users.style.display = "none";
    COrders.style.display = "none";
    NewOrder.style.display = "none";
    Messages.style.display = "none";
    Home.style.display = "none";
    HomeDelete.style.display = "none";
    Catalog.style.display = "none";
    CatalogDelete.style.display = "none";
    Galery.style.display = "flex";
    GaleryDelete.style.display = "flex";
}

/* Remover Mensajes */

function remove(t) {
    var div = t.parentNode;
    var th = div.parentNode;
    var tr = th.parentNode;
    var table = tr.parentNode;
    table.removeChild(tr);
}

/* Remover Mensajes */

function removeCatalog(t) {
    var th = t.parentNode;
    var tr = th.parentNode;
    var table = tr.parentNode;
    table.removeChild(tr);
}

/* Progamación del Modal Aceptar */

// Get the modal
var modalMensaje = document.getElementById("ModalGeneralMensaje");

// Get the button that opens the modal
var btnAnswer= document.getElementById("Contestar");

//Get the Accept button
var btnAccept = document.getElementById("BtnAccept")

// Get the <span> element that closes the modal
var spanMensaje = document.getElementsByClassName("CerrarMensaje")[0];

// When the user clicks on the pay button, close the modal
btnAnswer.onclick = function() {
    modalMensaje.style.display = "block";
}

// When the user clicks on the pay button, close the modal
btnAccept.onclick = function() {
    modalMensaje.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
spanMensaje.onclick = function() {
    modalMensaje.style.display = "none";
}