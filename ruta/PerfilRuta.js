"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilControlador_1 = __importDefault(require("../controlador/PerfilControlador"));
class PerfilRuta {
    constructor() {
        this.rutaApi = (0, express_1.Router)();
        this.configurarRutas();
    }
    ;
    configurarRutas() {
        this.rutaApi.get("/listado", PerfilControlador_1.default.consulta);
        this.rutaApi.post("/crear", PerfilControlador_1.default.crear);
        this.rutaApi.delete("/eliminar/:codiguito", PerfilControlador_1.default.eliminar);
        this.rutaApi.put("/actualizar/:codiguito", PerfilControlador_1.default.actualizar);
    }
    ;
}
;
const perfilRuta = new PerfilRuta();
exports.default = perfilRuta.rutaApi;
