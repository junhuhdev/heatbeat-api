import express from "express";
import { container } from "./config/inversify/ioc";
import "./config/inversify/Loader";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";
import { InversifyExpressServer } from "inversify-express-utils";
import { ApolloServer, gql } from "apollo-server-express";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({path: ".env.example"});

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

const app = server.build();

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
};

const apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.applyMiddleware({app});


// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

app.set("port", process.env.PORT || 3030);
app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    // store: new MongoStore({
    //     url: mongoUrl,
    //     autoReconnect: true
    // })
    cookie: {
        secure: false, // Secure is recommended, However it requires an HTTPS enabled website (SSL Certificate)
        maxAge: 10000 * 6 * 30 // 30 minutes
    }
}));
app.use(passport.initialize());
app.use(passport.session());

export default app;
