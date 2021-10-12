
         let getClassForTemperature = (temperature ) =>
    {
        let class_name = "";

            if ( temperature < 40 && temperature >= 39 )
                class_name = "temp_40_39";
            else if ( temperature < 39 && temperature >= 36 )
                class_name = "temp_39_36"; 
            else if ( temperature < 36 && temperature >= 32 )
                class_name = "temp_36_32";       
            else if ( temperature < 32 && temperature >= 29 )
                class_name = "temp_32_29"; 
            else if ( temperature < 29 && temperature >= 27 )
                class_name = "temp_29_27"
            else if ( temperature < 27 && temperature >= 24 )
                class_name = "temp_27_24"
            else if ( temperature < 24 && temperature >= 20 )
                class_name = "temp_24_20"
            else if ( temperature < 20 && temperature >= 15 )
                class_name = "temp_20_15" 
            else if ( temperature < 15 && temperature >= 12 )
                class_name = "temp_15_12"
            else if ( temperature < 12 && temperature >= 9 )
                class_name = "temp_12_9"
            else if ( temperature < 9 && temperature >= 5 )
                class_name = "temp_9_5"
            else if ( temperature < 5 && temperature >= 1 )
                class_name = "temp_5_1"
            else if ( temperature < 1 && temperature >= -3 )
                class_name = "temp_1_-3"
            else if ( temperature < -3 && temperature >= -5 )
                class_name = "temp_-3_-5"
            else if ( temperature < -5 && temperature >= -8 )
                class_name = "temp_-5_-8"
            else if ( temperature < -8 && temperature >= -10 )
                class_name = "temp_-8_-10"   
   
            return class_name;
    }

    let getClassForPrecipitacionTotal = (precipitacion ) =>
    {
        let class_name = "";

            if ( precipitacion < 110 && precipitacion >= 104 )
                class_name = "precip_110_104";
            else if ( precipitacion < 104 && precipitacion >= 70 )
                class_name = "precip_104_70"; 
            else if ( precipitacion < 70 && precipitacion >= 54 )
                class_name = "precip_70_54";       
            else if ( precipitacion < 54 && precipitacion >= 50 )
                class_name = "precip_54_50";

            return class_name;
    }

    let generateHTMLCode = table =>
    {
        let HTMLCode = '<table>';

        for ( let fila=0; fila<table.length; fila++ )
        {
            
            HTMLCode+= '<tr>';

            for ( let columna=0; columna<table[fila].length; columna++ )
            {
                if ( fila < 6 && fila > 0 ) //temperaturas
                {
                    HTMLCode += `<td class=" table_font ${getClassForTemperature(table[fila][columna])}">${table[fila][columna]}</td>`;
                }
                else if ( fila == 6 ) //precipitacion
                {
                    HTMLCode += `<td class="table_font ${getClassForPrecipitacionTotal(table[fila][columna])}">${table[fila][columna]}</td>`;
                }
                else if ( fila == 7 ) //dias de precipitaciones
                {

                }
                else if ( fila == 8 ) // horas de sol
                {

                }
                else if ( fila == 9 ) // humedad relativa
                {
                    
                }

                       
            }

            HTMLCode+= '</tr>';
        }

        HTMLCode += '</table>';

        return HTMLCode; 
    }
    let table = null;

//Peticiones al servidor en segundo plano

//Dos maneras de hacerlo:

//API XmlHttpRequest

let procesarRespuestaDelServer = ( event ) =>
{
    if ( event.currentTarget.status == 200 )
    {
        let serverResponse = event.currentTarget.responseText;
        
        //Deserealización (Proceso que convierte una representaciòn textual en una estructura expresada en tèrminos del lenguaje de programaciòn)
        //Deserealizo en el formato recibido (JSON)
        table = JSON.parse(serverResponse);

        //alert('Solicitud satisfactoria');
        
        let espacioParaTabla = document.getElementById("table-gui");
        espacioParaTabla.innerHTML = generateHTMLCode( table );
    }
    else
    {
        alert("Hubo errores al procesar la solicitud.");
    }
}

let realizarPeticionAlServer = ( event ) =>
{
    let connection = new XMLHttpRequest();

    connection.open('GET', 'server.php');

    connection.addEventListener('loadend', procesarRespuestaDelServer );
    connection.send();
}

let inicializarVistaGrafica = () =>
{
    let botonDeActualizacion = document.getElementById("update-button");
    botonDeActualizacion.addEventListener("click", realizarPeticionAlServer );

    realizarPeticionAlServer();
    window.setInterval(realizarPeticionAlServer, 1000);
}


window.addEventListener('DOMContentLoaded', inicializarVistaGrafica );