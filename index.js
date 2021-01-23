import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import categoryRoutes from "./routes/category.route.js";
import productRoutes from "./routes/product.route.js";
import customerRoutes from "./routes/customer.route.js";
import deliveryRoutes from "./routes/delivery.route.js";
import orderRoutes from "./routes/order.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/Logistic";
const PORT = process.env.PORT || 3000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port: " + PORT))
  )
  .catch((err) => {
    console.log(err.message);
  });

mongoose.set("useFindAndModify", false);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Libary",
      version: "1.0.0",
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// YYYY-mm-ddTHH:mm:ss
/**
 * @swagger
 * /api/categories/:
 *    get:
 *      tags:
 *      - Category
 *      description: Get all category
 *      responses:
 *        200:
 *          description: Success
 * /api/categories/create:
 *    post:
 *      tags:
 *      - Category
 *      description: add new category
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               img:
 *                 type: array
 *                 items:
 *                    oneOf:
 *                      - type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/categories/delete/{id}:
 *    delete:
 *      tags:
 *      - Category
 *      description: Delete a category
 *      parameters:
 *        - name: id
 *          description: Category's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/categories/update/{id}:
 *    put:
 *      tags:
 *      - Category
 *      description: Update a category
 *      parameters:
 *        - name: id
 *          description: Category's id
 *          in: path
 *          required: true
 *          type: string
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               img:
 *                 type: array
 *                 items:
 *                    oneOf:
 *                      - type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/products/:
 *    get:
 *      tags:
 *      - Product
 *      description: Get all product
 *      responses:
 *        200:
 *          description: Success
 * /api/products/getByCate/{id}:
 *    get:
 *      tags:
 *      - Product
 *      description: Get products by category
 *      parameters:
 *        - name: id
 *          description: Category's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/products/getByKW:
 *    get:
 *      tags:
 *      - Product
 *      description: Get products by keyword
 *      parameters:
 *        - name: keyword
 *          description: keyword
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/products/create:
 *    post:
 *      tags:
 *      - Product
 *      description: add new Product
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               idCategory:
 *                 type: string
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               provide:
 *                 type: string
 *               description:
 *                 type: string
 *               rating:
 *                 type: number
 *               countRating:
 *                 type: number
 *               bought:
 *                 type: number
 *               inventory:
 *                 type: number
 *               dateCreate:
 *                 type: string
 *               dateUpdate:
 *                 type: string
 *               img:
 *                 type: array
 *                 items:
 *                    oneOf:
 *                      - type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/products/delete/{id}:
 *    delete:
 *      tags:
 *      - Product
 *      description: Delete a product
 *      parameters:
 *        - name: id
 *          description: Product's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/products/update/{id}:
 *    put:
 *      tags:
 *      - Product
 *      description: Update a product
 *      parameters:
 *        - name: id
 *          description: Product's id
 *          in: path
 *          required: true
 *          type: string
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               idCategory:
 *                 type: string
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               provide:
 *                 type: string
 *               description:
 *                 type: string
 *               rating:
 *                 type: number
 *               countRating:
 *                 type: number
 *               bought:
 *                 type: number
 *               inventory:
 *                 type: number
 *               dateCreate:
 *                 type: string
 *               dateUpdate:
 *                 type: string
 *               img:
 *                 type: array
 *                 items:
 *                    oneOf:
 *                      - type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/customers/:
 *    get:
 *      tags:
 *      - Customer
 *      description: Get all users
 *      responses:
 *        200:
 *          description: Success
 * /api/customers/create:
 *    post:
 *      tags:
 *      - Customer
 *      description: add new Customer
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/customers/delete/{id}:
 *    delete:
 *      tags:
 *      - Customer
 *      description: Delete a Customer
 *      parameters:
 *        - name: id
 *          description: Customer's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/customers/update/{id}:
 *    put:
 *      tags:
 *      - Customer
 *      description: Update a Customer
 *      parameters:
 *        - name: id
 *          description: Customer's id
 *          in: path
 *          required: true
 *          type: string
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/deliveries:
 *    get:
 *      tags:
 *      - Delivery
 *      description: Get all users
 *      responses:
 *        200:
 *          description: Success
 * /api/deliveries/create:
 *    post:
 *      tags:
 *      - Delivery
 *      description: add new Delivery
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               feePer1Km:
 *                 type: Number
 *      responses:
 *        200:
 *          description: Success
 * /api/deliveries/delete/{id}:
 *    delete:
 *      tags:
 *      - Delivery
 *      description: Delete a Delivery
 *      parameters:
 *        - name: id
 *          description: Delivery's id
 *          in: path
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/deliveries/update/{id}:
 *    put:
 *      tags:
 *      - Delivery
 *      description: Update a Delivery
 *      parameters:
 *        - name: id
 *          description: Delivery's id
 *          in: path
 *          required: true
 *          type: string
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               feePer1Km:
 *                 type: Number
 *      responses:
 *        200:
 *          description: Success
 * /api/users:
 *    get:
 *      tags:
 *      - User
 *      description: Get all user
 *      responses:
 *        200:
 *          description: Success
 * /api/roles:
 *    get:
 *      tags:
 *      - User
 *      description: Get all role
 *      responses:
 *        200:
 *          description: Success
 * /api/getByKW:
 *    get:
 *      tags:
 *      - User
 *      description: Get all role
 *      parameters:
 *        - name: keyword
 *          description: keyword
 *          in: query
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/login:
 *    post:
 *      tags:
 *      - User
 *      description: Login Account
 *      parameters:
 *        - name: username
 *          description: User's username
 *          in: query
 *          required: true
 *          type: string
 *        - name: password
 *          description: Password's username
 *          in: query
 *          required: true
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/register:
 *    post:
 *      tags:
 *      - User
 *      consumes:
 *      - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *               fullName:
 *                 type: string
 *               birthDay:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/addNewUser:
 *    post:
 *      tags:
 *      - User
 *      consumes:
 *      - application/json
 *      parameters:
 *        - name: id
 *          in: query
 *          type: String
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *               fullName:
 *                 type: string
 *               birthDay:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/updateInfo/{id}:
 *    put:
 *      tags:
 *      - User
 *      consumes:
 *      - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          type: string
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *               fullName:
 *                 type: string
 *               birthDay:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/changePassword:
 *    put:
 *      tags:
 *      - User
 *      consumes:
 *      - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *               newPassword:
 *                 type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/users/delete/{id}:
 *    delete:
 *      tags:
 *      - User
 *      parameters:
 *        - name: id
 *          in: path
 *          type: string
 *      responses:
 *        200:
 *          description: Success
 * /api/orders/:
 *    get:
 *      tags:
 *      - Order
 *      description: Get all users
 *      responses:
 *        200:
 *          description: Success
 */
