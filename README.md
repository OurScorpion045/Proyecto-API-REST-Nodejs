# Proyecto-API-REST-Nodejs

API-REST hacia una base de datos SQL creada en Nodejs sin el framework express

Dependencias utilizadas: mysql2, dotenv, node:process

Scripts creados: 'dev'

Proceso de desarrollo:

- Primero se creo el archivo que serviria como entry point, inicializador del servidor http y front-controller el cual es index.js, una vez creado se levanto el servidor en modo --watch en el puerto 3000

- Seguido de esto se creo la estructura del codigo fuente en el directorio /src el cual tiene la arquitectura MVC cambiando las vistas por rutas y endpoints

- En el directorio /src/config se creo el archivo Database.js donde se importo la libreria mysql2 y con ella se creo la clase Database con un pool de conexion hacia el servidor MySQL donde esta alojada la Base de datos, para ingresar los datos de conexion de base de datos se utilizaron variables de entorno configuradas en un archivo .env y configurados con la dependencia dotenv, al final la clase se exporto de manera default para ser utilizada en el modelo

- En el directorio /src/models se creo el archivo FutbolistasModel.js donde se creo la clase FutbolistasModel donde se importo e inicializo la clase Database del archivo Database.js donde mediante funciones asincronas se cumplian las promesas del pool de conexiones y permitio ejecutar las secuencias SQL que funcionan como un CRUD en el sistema
