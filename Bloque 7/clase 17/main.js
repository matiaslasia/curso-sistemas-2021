
        
    let datos =
    [
            ["Mes", "Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic.", "Anual"],
			["Temp.max. abs.(°C)", 39.3, 38.1, 36.3, 32.5, 27.4, 22.2, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4, 39.4],
			["Temp. max. media (°C)", 26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 13.1, 14.4, 16, 18.5, 21.7, 24.4, 19.6],
			["Temp. media (°C)", 20.3, 19.9, 18.0 , 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5, 14.0],
			["Temp. min. media (°C)", 14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7, 8.7],
			["Temp. min. abs (°C)", 4.7, 1.2, 1.9, -1, -3, -5.5, -9.3, -6.4, -5.5, -3, -2, -0.2,-9.3],
			["Precipitación total (mm)", 100.1, 72.8, 107.0, 73.3, 73.5, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0, 923.6],
			["Días de precipitaciones (>0.1mm)", 9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10, 107],
			["Horas de sol", 288.3, 234.5, 232.5, 195.0, 167.4, 120.0, 127.1, 164.3, 174.0, 210.8, 222.0, 269.7, 2405.6],
			["Tumedad. relativa (%)", 76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76, 80]
    ];



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

    let generateHTMLCode = tabla_de_datos =>
    {
        let HTMLCode = '<table>';

        for ( let fila=0; fila<tabla_de_datos.length; fila++ )
        {
            
            HTMLCode+= '<tr>';

            for ( let columna=0; columna<tabla_de_datos[fila].length; columna++ )
            {
                if ( fila < 6 && fila > 0 ) //temperaturas
                {
                    HTMLCode += `<td class="${getClassForTemperature(datos[fila][columna])}">${datos[fila][columna]}</td>`;
                }
                else if ( fila == 6 ) //precipitacion
                {
                    HTMLCode += `<td class="${getClassForPrecipitacionTotal(datos[fila][columna])}">${datos[fila][columna]}</td>`;
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
    //Peticiones al servidor en segundo plano

    //Dos maneras de hacerlo:
    
    //API XmlHttpRequest
    
    let procesarRespuestaDelServer = ( event ) =>
    {
        if ( event.currentTarget.status == 200 )
        {
            let serverResponse = event.currentTarget.responseText;
            alert('Solicitud satisfactoria');
            let body = document.getElementById("gui");
            body.innerHTML = generateHTMLCode( datos );
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
    
    
    
    //-------------------------
    let botonDeCarga = document.getElementById("loadButton");
    botonDeCarga.addEventListener('click', realizarPeticionAlServer );
    

    