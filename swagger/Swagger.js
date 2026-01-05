const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Foydanalovchilar API",
      version: "1.0.0",
      description: "Foydanalovchilar blan ishlovchi CRUD API",
    },
    severs: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUI, swaggerSpec };
