# API-REST

Esta API REST esta realizada con Node.js - Express.js - Typescript y Testing con Jest - Supertest y MongoDB Memory Server

## Herramientas 
  * Node.js
  * Express.js
  * Typescript
  * MongoDB
  * Express Validator
  * MongoDB Memory Server 
  * Eslint
  * Jest
  * Supertest

## Descripcion
Esta API fue creada con el proposito de poner en practica mis conocimientos de backend y testing. Desde esta API nos podemos conectar con una mongo a traves de una arquitectura denominada DAO (Data Access Object). La arquitectura nos simplifica la comunicacion con nuestra bases de datos. 

## Funcionalidades ⚙️

### Rutas: 
En esta seccion podemos obtener informacion de la api mediante las opraciones CRUD

```
  http://{url_base}/v1/api/users --> Retorna todos los usuarios. 
  http://{url_base}/v1/api/users/:id --> Retorna un usuario por su ID
  http://{url_base}/v1/api/users --> Crea un nuevo usuario en la bases de datos
  http://{url_base}/v1/api/users/:id --> Edita un usuario 
  http://{url_base}/v1/api/users/:id --> Elimina un usuario 
```

### Controladores: 
En esta seccion podemos ver la logica de la aplicacion es la encargada de comunicarse con la DAO para obtener la informacion de las operaciones CRUD 

### Modelo: 
Estructura del modelo de nuestra bases de datos, contiene un bloque de codigo en la que permite decirle a la respuesta de la mongoDB que se reemplaze el __id por id y que no aparezca el _v

/* Insertar imagen toJSON_method*/

### Configuraciones: 
En la configuraciones se encuentran todos los environment. 

# Testing 🧪
Los tests se crearon con Jest para los test sencillos, se utilizo Supertest para tener una mejor precision de la prueba de los controladores y se utuliza Mongodb Memory Server para poder crear un mock de coneccion de la bases dedatos. Los test se dividen en varias secciones
  * cotrollers: En los controladores se testean todos los posibles casos de la funcionalidad de los mismos, los caso de devolver un 200, 201, 400. Aqui se testea todas las operaciones CRUD

  * dao: En esta seccion se testea la funcionabilidad de la Arquitectura dao mediante jest

  * database: En database se testea que se cree un nuevo modelo con datos mocks y una coneccion a la mongoDB creada con mongodb memory server

  * helpers: Se encuentran todas las validaciones customizada testeada.
  
  * models: Se testea la creacion del modelo. 

/* Insertar imagenes tests */
# ACLARACION IMPORTANTE ⛔️
Esta API se realizo en base al aprendizaje del uso de nuevas herramientas.

# Deploy 👨‍💻

Proximamente ⌛

# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);