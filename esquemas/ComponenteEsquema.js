"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ComponenteEsquema = new mongoose_1.Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    variantes: { type: [String], required: true }
}, { versionKey: false });
exports.default = ComponenteEsquema;
//export default model("Coomponente",ComponenteEsquema,"Componente");
