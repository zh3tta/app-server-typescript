# API REST con Typescript

Este proyecto es una api-rest realiza con Nodejs, express y typescript como tecnologias principales, además utiliza mysql para almacenar datos. El mismo posee secciones de categoria, clientes, productos, compras, compras de productos y usuarios. Incluye metodos de autenticación mediante json web token para el login.

## Instalación

```bash
git clone https://github.com/byZhetta/app-server-typescript.git
cd app-server-typescript
npm install
npm run start:dev
```
## Tecnologías principales

- nodejs v14.18.1
- express v4.18.2
- typescript v4.6.2
- typeorm v0.3.6
- mysql v2.18.1

## Uso

Esta aplicación necesita las siguientes variables de entorno:

- `PORT` puerto de ejecución
- `DB_PORT` puerto de ejecución de la base de datos
- `DB_NAME` nombre de base de datos
- `DB_USER` nombre de usuario de base de datos
- `DB_PASS` contraseña de base de datos
- `DB_HOST` servidor de base de datos
- `JWT_SECRET` llave secreta generada con JWT

[@byZhetta](https://github.com/byZhetta)