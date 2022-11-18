"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TareaDao_1 = __importDefault(require("../dao/TareaDao"));
class TareaControlador extends TareaDao_1.default {
    consulta(req, res) {
        TareaControlador.consultarTareas(res);
    }
    consultapapa(req, res) {
        TareaControlador.consultarTareaspapa(res);
    }
    crear(req, res) {
        TareaControlador.crearTareaes(req.body, res);
    }
    eliminar(req, res) {
        TareaControlador.eliminarTarea(req.params.codiguito, res);
    }
    actualizar(req, res) {
        TareaControlador.actualizarTarea(req.params.codiguito, req.body, res);
    }
}
const tareaControlador1 = new TareaControlador();
exports.default = tareaControlador1;
