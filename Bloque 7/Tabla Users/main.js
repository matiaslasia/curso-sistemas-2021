let showUserTable = ( userTable ) =>
{
    let HTMLCode = `<table class= "w3-table-all w3-centered " style="width:40%">`

    for ( let row=0; row<userTable.length; row++)
    {
       
       
        
        HTMLCode += `<tr>`;
        
        for (let column=0; column<userTable[row].length; column++)
        {
            HTMLCode += `<td>${userTable[row][column]}</td>`;
        }

        if ( row == 0 )
        {
            HTMLCode += `<td>ACTIONS</td>`;
           
        }

        else
        {
            HTMLCode += `<td>
                        <button id='editUser-${userTable[row][0]}'class="w3-button w3-round-xlarge w3-teal" >Editar</button>
                        <button id='deleteUser-${userTable[row][0]}'class="w3-button w3-round-xlarge w3-black" >Borrar</button>
                    </td>`;
        }


        HTMLCode += `</tr>` ;     

    }                      
    
    HTMLCode += `</table>`;
    HTMLCode += `<button class="w3-button w3-round-xlarge w3-orange">Nuevo Usuario</button>`;
    return HTMLCode;
}

let onEditUserButtonClick = (event) =>
{
    alert('Iniciando edición del usuario...');
}

let onDeleteUserButtonClick = (event) =>
{
    alert('Borrando usuario...');
}

let processUsersResponse = ( event ) =>
{
    if ( event.currentTarget.status == 200 )
    {
        //1
        let serverResponse = event.currentTarget.responseText;
        data = JSON.parse(serverResponse);

        //2
        let userTable = document.getElementById("userTable");
        userTable.innerHTML = showUserTable( data );

        //3
        for( let row=1; row<data.length; row++)
        {
            document.getElementById('editUser-'+data[row][0] ).addEventListener('click', onEditUserButtonClick );
            document.getElementById('deleteUser-'+data[row][0] ).addEventListener('click', onDeleteUserButtonClick );
        }
    }
    else
    {
        alert("Hubo errores al procesar la solicitud.");
    }
}

let requestUsers = ( event ) =>
{
    let connection = new XMLHttpRequest();

    connection.open('GET', './backend/server.php');

    connection.addEventListener('loadend', processUsersResponse );
    connection.send();
}

let initializeView = () =>
{
    /*1. Realizar las consultas y/o peticiones al servidor que sean necesarias
    Para poder presentar la informaciòn inicial en la vista.*/
    requestUsers();

    /*2. Invocar las funciones que dibujan la interfaz gráfica correspondiente a cada región*/


    /*3. Preparar toda la asociación de eventos de interacción entre el usuario y la interfaz*/

}


window.addEventListener('DOMContentLoaded', initializeView );