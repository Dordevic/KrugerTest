# KrugerTest

Prueba tecnica de Kruger

Se realiza el proyecto usando json-server

Para instalar el proyecto se sugiere usar _**yarn**_. Lo primero que se debe hacer es usar el comando _yarn_

Despues para ejecutar el servidor json ejecutar el comando _yarn server_ esto ejecutara el servidor en el puero 3001

Una vez el servidor se encuentre activo se puede ejecutar el proyecto en el purto 3000 utilizando el comando _yarn start_

## Usuarios de prueba

Administrador
username: Admin
password: Admin

Empleado
username: Employee
password: Employee

## Proceso de construccion

Se diseño el proyecto usando diseño atomico. Se estructuraron las rutas pensando en la autorización del usuario.
Se construyo primero la pantaya de Login despues la seccion del empleado para poder editar las vacunaciones. Finalmente se construyo el dashboard del administrador para poder filtrar los usuarios, ver su información y crear nuevos usuarios.

Todos los servicios se consumen con axios y las formas usan la libreria react-hook-form
