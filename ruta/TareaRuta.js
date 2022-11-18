"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TareaControlador_1 = __importDefault(require("../controlador/TareaControlador"));
class TareaRuta {
    constructor() {
        this.rutaApi = (0, express_1.Router)();
        this.configurarRutas();
    }
    ;
    configurarRutas() {
        this.rutaApi.get("/listado", TareaControlador_1.default.consulta);
        this.rutaApi.get("/listapapa", TareaControlador_1.default.consultapapa);
        this.rutaApi.post("/crear", TareaControlador_1.default.crear);
        this.rutaApi.delete("/eliminar/:codiguito", TareaControlador_1.default.eliminar);
        this.rutaApi.put("/actualizar/:codiguito", TareaControlador_1.default.actualizar);
    }
    ;
}
;
const tareaRuta = new TareaRuta();
exports.default = tareaRuta.rutaApi;
