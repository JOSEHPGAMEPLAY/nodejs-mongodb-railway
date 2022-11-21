"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConexionDB = () => {
    const URL = String(process.env.DB_MONGO);
    //recuerde que debe entrar mongo db atlas crear su cuenta un cluster y usuario y generar una bd llamada basetareas
    // const URL = String("");
    /* const { MongoClient, ServerApiVersion } = require('mongodb');
     const uri = "";
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
     client.connect().;*/
    (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log("Estas conectado a mondoDB", process.env.DB_MONGO);
    })
        .catch((miError) => {
        console.log("NO encuentro a mongo", miError);
    });
};
exports.default = ConexionDB;

