const endpoint = "https://gdcdc7d0011250f-db202110281837.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/partyroom/partyroom"

$(document).ready(function () {
    /**cargue la pagina realiza la petición get */

    peticionGet()
    $("#guardar").click(function(){
       peticionPost()
    })
    $("#actualizar").click(function(){
        peticionPut()
     })
     $("#eliminar").click(function(){
        peticionDelete()
     })

})




/**
 * funcion peticion get
 */

function peticionGet() {

    $.ajax({
        method: "GET",
        url: endpoint,
        success: function (data) {
            if (data.items.length == 0) {
                $("#peticion").html("Sin datos")
            }
            else {
                console.log(data.items)
                $("#tbody").html(mostrarDatosTabla(data.items))
            }
        }
    })
}

function mostrarDatosTabla(productos) {
    let cadena = ""
    productos.forEach(producto => {
        cadena += "<tr>" +
            "<td>" + producto.codprod + "</td>" +
            "<td>" + producto.nomprod + "</td>" +
            "<td>" + producto.precio + "</td>" +
            "<td>" + producto.inventario + "</td>" +
            "</tr>"

    })
    return cadena
}

function mostrarEtiqueta(productos) {
    let cadena = "*************************"
    productos.forEach(producto => {
        cadena += "<p>Codigo:" + producto.codprod + "</p>" +
            "<p>Producto:" + producto.nomprod + "</p>" +
            "<p>Precio:" + producto.precio + "</p>" +
            "<p>Inventario:" + producto.inventario + "</p>" +
            "*************************"

    })
    return cadena
}




function mostrarProducto(productos) {


    console.log("*********************")
    productos.forEach(producto => {
        console.log("codigo " + producto.codprod)
        console.log("Producto " + producto.nomprod)
        console.log("Precio " + producto.precio)
        console.log("Inventario " + producto.inventario)
        console.log("*********************")
    })
}


/**
 * funcion peticion post 
 */
function peticionPost() {

    /**
     * objeto javascript producto
     */
    const producto = {
        codprod: "204",
        nomprod: "Piña",
        precio: 4000,
        inventario: 120
    }

    const datasend=JSON.stringify(producto)


    $.ajax({

        method:"POST",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
            peticionGet()
        }


    })

}


function peticionPut() {

    /**
     * objeto javascript producto
     */
    const producto = {
        codprod: "204",
        nomprod: "Piña 1",
        precio: 40003,
        inventario: 1203
    }

    const datasend=JSON.stringify(producto)


    $.ajax({

        method:"PUT",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
            peticionGet()
        }


    })

}

function peticionDelete() {

    /**
     * objeto javascript producto
     */
    const producto = {
        codprod: "204"      
    }

    const datasend=JSON.stringify(producto)


    $.ajax({

        method:"DELETE",
        url:endpoint,
        data:datasend,
        contentType:"application/json",
        complete:function(response){
            console.log(response.status)
            peticionGet()
        }


    })

}


