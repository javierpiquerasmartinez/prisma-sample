# Prisma Sample

Este proyecto es un ejemplo de cómo usar Prisma como ORM para gestionar bases de datos en aplicaciones Node.js.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (opcional, si usas una base de datos en contenedor)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/prisma-sample.git
   cd prisma-sample
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias, como la URL de conexión a la base de datos. Por ejemplo:

   ```env
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos"
   ```

## Uso

### Migraciones

Para aplicar las migraciones a la base de datos, ejecuta:

```bash
npx prisma migrate dev
```

### Generar el cliente de Prisma

Si realizas cambios en el esquema de Prisma (`prisma/schema.prisma`), genera el cliente actualizado:

```bash
npx prisma generate
```

### Ejecutar el proyecto

Inicia la aplicación:

```bash
npm run dev
# o
yarn dev
```

### Interactuar con Prisma Studio

Para explorar y gestionar los datos de tu base de datos, usa Prisma Studio:

```bash
npx prisma studio
```

## Estructura del proyecto

- `prisma/`: Contiene el archivo `schema.prisma` para definir el modelo de datos.
- `src/`: Contiene el código fuente de la aplicación.

## Recursos adicionales

- [Documentación de Prisma](https://www.prisma.io/docs/)
- [Guía de inicio rápido de Prisma](https://www.prisma.io/docs/getting-started)

## Licencia

Este proyecto está bajo la licencia MIT.
