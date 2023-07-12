// seteamos la fecha de consulta


today = new Date();
console.log("Fecha de consulta:" + " " + today)
console.log("--------------------------------------")


// Identificacion del usuario 
const usuario = (prompt("Ingresá tu nombre"))
if(usuario == ""){}
console.log("Usuario que realiza la consulta: "+ usuario)


const operacion = (prompt("Hola" + " " +usuario+  "!" + " " +"Que tipo de operacion deseas realizar? cotizar / explorar"))
if(operacion === "cotizar") {
          Cotizador()
} else if (operacion === "explorar") {
          Ingresos()
}else {
          alert("No seleccionaste ninguna opción, pero podes ingresar y conocernos!")
}



function Ingresos() {
let ambiente = prompt("Para que tipo de ambiente buscás (living / bath / kitchen) ?   [Si queres ver todos nuestros productos presioná Enter]")
let accesorio = prompt("Indicá que accesorio buscás")
let material = prompt("Indicá el material principal")
let color = prompt("Indicá el color principal")
let IVA = prompt("Deseas incluir IVA? S/N * ")
let precioMinimo = prompt("Monto mínimo (solo numeros)")
let precioMaximo = prompt("Monto máximo (solo numeros)")



const datosBusqueda = {
          ambiente: ambiente,
          accesorio: accesorio,
          material: material,
          color: color,
          precioMinimo: precioMinimo,
          precioMaximo: precioMaximo,
          
  

}


function noResultados(){
          alert("No se encontraron resultados para tu búsqueda") //document.write("No se encontraron resultados para tu búsqueda")
          console.log("No se encontraron resultados para tu búsqueda, recordá seleccionar la opcion IVA")
          let correo = prompt("Ingresá tu correo y nos pondremos en contacto cuanto antes para una atencion personalizada")
          //console.log("Consulta realizada por: "+ usuario)
          console.log(correo)
}

function mostrarStock(stock){
          stock.forEach(producto => {
                    console.log("Tipo de ambiente: " + " " + producto.ambiente + " - Producto: " + producto.accesorio +" "+ producto.material +" "+ producto.color +" "+ "$"+ producto.precioMaximo )      
          });
};

function mostrarStockIVA(stock){
          stock.forEach(producto => {
                    console.log("Tipo de ambiente: " + " " + producto.ambiente + " - Producto: " + producto.accesorio +" "+ producto.material +" "+ producto.color +" "+ "$"+ producto.precioMaximo*1.21 )      
          });
};




function filtrarAmbiente(producto) {
          if(datosBusqueda.ambiente) {
                    return producto.ambiente == datosBusqueda.ambiente
          } return producto;
}

function filtrarAccesorio(producto) {
          if(datosBusqueda.accesorio) {
                    return producto.accesorio == datosBusqueda.accesorio
          } return producto;
}

function filtrarMaterial(producto) {
          if(datosBusqueda.material) {
                    return producto.material == datosBusqueda.material
          } return producto;
}

function filtrarColor(producto) {
          if(datosBusqueda.color) {
                    return producto.color == datosBusqueda.color
          } return producto;
}


function filtrarMinimo(producto) {
          if(datosBusqueda.precioMinimo) {
                    return producto.precioMinimo >= datosBusqueda.precioMinimo
          }
          return producto;
}

function filtrarMaximo(producto) {
          if(datosBusqueda.precioMaximo) {
                    return producto.precioMaximo <= datosBusqueda.precioMaximo
          }
          return producto;
}


function filtrarStock(){
          let resultado = stock.filter(filtrarAccesorio).filter(filtrarAmbiente)
          .filter(filtrarColor).filter(filtrarMaterial).filter(filtrarMinimo).filter(filtrarMaximo)
                    console.log("Cantidad de productos encontrados:" + " " + resultado.length)
                    if(resultado.length && IVA==="S"){
                    mostrarStockIVA(resultado)
                    }else if(resultado.length && IVA==="N"){
                      mostrarStock(resultado)
                    } else 
                    {noResultados()}
}

filtrarStock();

}


//---- COTIZADOR ----

function Cotizador() { const tipoDeco = prompt("Tu consulta es por deco particular o business");
console.log(tipoDeco)

switch (tipoDeco.toLowerCase()) {
          case "particular":
                    var tipoAmbiente= (prompt("Detallá si tu ambiente es interior o exterior"));
                    //var ambiente= (prompt("Ingresá que ambiente queres remodelar"));
                    console.log(tipoAmbiente)
                    
          break;
          case "business":
                    var rubro= (prompt("Ingresá el rubro de tu negocio o emprendimiento"));
                    console.log(rubro)
          break;
          default:
                    alert("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
                    console.log("Por favor ingresá una de las dos opciones o iniciá sesión para continuar");
} 

let porcentajeCotiz = 15300;

function result() {alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear)}

if (tipoDeco == "particular" && tipoAmbiente== "interior"){
          var cotizM2 = (prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = (prompt("Ingresá solo en números la altura de tu/s ambiente/s"));
          var cotizYear = (prompt("Ingresá solo en números los años de antiguedad "));
          result();

}else if (tipoDeco == "business" || tipoAmbiente == "exterior"){
        let correo = prompt("comunicate por mail o Whatsapp para mas información o bien ingresá tu correo y nos pondremos en contacto cuanto antes para una atencion personalizada")
          
                  let esCorreoValido = false;
                
                  while (!esCorreoValido) {
                  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                  if (regexCorreo.test(correo)) {
                    esCorreoValido = true;
                    console.log("Gracias por visitarnos" +" " + usuario + "!, " + "te contactaremos a la brevedad!");
                    alert("Gracias por visitarnos" +" " + usuario + "! " + "te contactaremos a la brevedad!");
                  } else {
                    correo = prompt("Por favor, ingresá un correo válido:");
                  }
          }
} else alert("debes detallar si se trata de interiores o exteriores");

}



/* if (cotizM2==""  || cotizAlt=="" || cotizYear =="" || cotizM2 == 0 || cotizAlt == 0 || 
cotizYear == 0 || cotizM2==null  || cotizAlt==null|| cotizYear ==null){
          alert("para cotizar, deberás ingresar un valor válido: ");
          var cotizM2 = Number(prompt("ingresá los m2 totales para obtener una cotización aproximada"));
          var cotizAlt = Number(prompt("Ingresá la altura de tu/s ambiente/s"));
          var cotizYear = Number(prompt("Ingresá en años la antiguedad"));
          alert("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
          console.log("cotización aproximada para tu nuevo hogar: $" + (cotizM2 * porcentajeCotiz * cotizAlt) / cotizYear);
} 
 */
