// Core
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info:    {
      title:       'Express API with Swagger',
      version:     '1.0.0',
      description: 'CRUD API application made with Express and documented with Swagger',
    },
    servers: [{
      url:         'http://localhost:4000/api/v1',
      description: 'Local server',
    }],
  },
  apis: ['./src/domains/init/router.handlers.js'],
};

const specs = swaggerJsdoc(swaggerOptions);

export { swaggerUi, specs };
