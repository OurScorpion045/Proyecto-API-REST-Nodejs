# Proyecto-API-REST-Nodejs

API-REST hacia una base de datos SQL creada en Nodejs sin el framework express

Dependencias utilizadas: mysql2, dotenv, node:process

Scripts creados: 'dev'

Proceso de desarrollo:

- Primero se creo el archivo que serviria como entry point, inicializador del servidor http y front-controller el cual es index.js, una vez creado se levanto el servidor en modo --watch en el puerto 3000

- Seguido de esto se creo la estructura del codigo fuente en el directorio /src el cual tiene la arquitectura MVC cambiando las vistas por rutas y endpoints

- En el directorio /src/config se creo el archivo Database.js donde se importo la libreria mysql2 y con ella se creo la clase Database con un pool de conexion hacia el servidor MySQL donde esta alojada la Base de datos, para ingresar los datos de conexion de base de datos se utilizaron variables de entorno configuradas en un archivo .env y configurados con la dependencia dotenv, al final la clase se exporto de manera default para ser utilizada en el modelo

- En el directorio /src/models se creo el archivo FutbolistasModel.js donde se creo la clase FutbolistasModel donde se importo e inicializo la clase Database del archivo Database.js donde mediante funciones asincronas se cumplian las promesas del pool de conexiones y permitio ejecutar las secuencias SQL que funcionan como un CRUD en el sistema

- En el directorio /src/controllers se creo el archivo FutbolistasController.js donde se creo la clase FutbolistaController donde se importa los metodos estaticos de FutbolistasModel, se ejecutan en los propios motodos estaticos de la clase FutbolistaController y el resultado se envia como respuesta de la peticion pero formateados en JSON

- En el directorio /src/utils se creo el archivo parseBody.js el cual importa una constante la cual a su vez es una promesa donde lee el evento 'data' de la request y acumula los chunks de informacion del body de la peticion en una variable que despues se formatea a JSON y al llegar el evento end del stream de daatos se agrega la informacion entrante como el valor de la constante exportada

- En el directorio /src/routes se creo el archivo FutbolistasRoute.js se exporta una constante que a su vez es una funcion flecha que toma como parametros los req y res del servidor http, mediante los atributos req.url y req.method se obtiene tanto el id como el metodo HTTP de la peticion y en consecuencia mediante un switch case es posible ejecutar la funcion correspondiente del controlador en cada determinado caso

- Finalmente en el entry point index.js mediante req.url se obtiene tanto la ruta que el usuario busca como si existe o no un id para la ruta y con un switch case se ejecuta la funcion de FutbolistaRoute.js en caso de que el usuario coloque la ruta que le corresponde
