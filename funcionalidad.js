function resumen() {

    var precioTicket = 200;
    var cantidadTicket = document.getElementById("inputCantidad").value;
    var descuento = document.getElementById("inputCategoria").value;
    var precio = cantidadTicket * (precioTicket - ((precioTicket * descuento)/100));

    document.getElementById("CompraFinal").value ="Total a Pagar: $" + precio;

}
