<?php

$table = 
[
    ["Mes", "Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic.", "Anual"],
    ["Temp.max. abs.(°C)", 39.3, 38.1, 36.3, 32.5, 27.4, -9.9, 27.7, 24.7, 28.8, 34.4, 35.7, 39.4, 39.4],
    ["Temp. max. media (°C)", 26.3, 25.8, 23.7, 20.5, 16.8, 13.8, 34.1, 14.4, 14, 18.5, 21.7, 24.4, 19.6],
    ["Temp. media (°C)", 20.3, 19.9, 18.0 , 14.6, 11.3, 8.5, 8.1, 8.9, 10.5, 13.1, 15.9, 18.5, 14.0],
    ["Temp. min. media (°C)", 14.3, 14.1, 12.5, 9.1, 6.4, 4.1, 3.8, 4.0, 5.3, 7.6, 10.1, 12.7, 8.7],
    ["Temp. min. abs (°C)", 4.7, 1.2, 1.9, -9.3, -3, -5.5, -9.3, -3, -5.5, -3, -2, -0.2,-9.3],
    ["Precipitación total (mm)", 100.1, 72.8, 107.0, 73.3, 73.5, 54.9, 58.9, 64.0, 56.4, 83.4, 75.3, 104.0, 92.3],
    ["Días de precipitaciones (>0.1mm)", 9, 8, 9, 9, 9, 9, 9, 8, 7, 10, 10, 10, 107],
    ["Horas de sol", 288.3, 234.5, 232.5, 195.0, 167.4, 120.0, 127.1, 164.3, 174.0, 210.8, 222.0, 269.7, 2405.6],
    ["Tumedad. relativa (%)", 76, 77, 79, 81, 83, 84, 81, 81, 80, 80, 77, 76, 80]
];

//Serialización (Proceso que convierte estructuras expresadas en un lenguaje de programaciòn a una representaciòn de tipo textual (string) )
//Està en funciòn de un formato.
//EL FORMATO DE SERIALIZACIÒN/DESEREALIZACIÒN entre el servidor y el cliente, DEBE ser conocido y Consensuado.

//Hay que ponerse de acuerdo en intercambiar en un formato comùn.
//Texto formateado

echo json_encode($table);

?> 