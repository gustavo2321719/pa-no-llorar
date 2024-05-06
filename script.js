// Obtener los componentes de la fecha
var fechaComponents = fecha.split("-");
// Reorganizar los componentes en el formato deseado
var fechaFormateada = fechaComponents[2] + "/" + fechaComponents[1] + "/" + fechaComponents[0];
// Insertar la fecha formateada en la columna "Fecha de DJ"
datos[3] = fechaFormateada;

// Agregar "'" al inicio del contenido de la celda de DNI
datos[4] = "'" + datos[4];
