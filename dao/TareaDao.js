"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TareaEsquema_1 = __importDefault(require("../esquemas/TareaEsquema"));
//https://refactorizando.blog/tutorial-mongoose-como-utilizar-mongoose/
class TareaDao {
    static consultarTareas(res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entro a consultar taras");
            const datos = yield TareaEsquema_1.default.find().sort({ _id: -1 });
            console.log(datos);
            res.status(200).json(datos);
        });
    }
    static consultarTareaspapa(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield TareaEsquema_1.default.find({ "componentes.nombre": "papa" }, 'itemName itemCategory').sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    static crearTareaes(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield TareaEsquema_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El registro ya existe...." });
            }
            else {
                const objTarea = new TareaEsquema_1.default(parametros);
                console.log(objTarea);
                objTarea.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear la Tarea" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Tarea creada exitosamente", codigo: miObjeto._id });
                    }
                });
            }
        });
    }
    static eliminarTarea(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //en esta line se hace una consulta
            //const existe = await TareaEsquema.findById(identificador);
            console.log("inicio borrado");
            const existe = yield TareaEsquema_1.default.findById(identificador).exec();
            if (existe) {
                console.log("encontro que existe");
                TareaEsquema_1.default.findByIdAndDelete(identificador, (miError, MiObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede Eliminar socio paila " });
                    }
                    else {
                        res.status(200).json({ respuesta: "Breve ya se Elimino todo bien ", eliminado: MiObjeto });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Paila el Tarea no existe yuca " });
            }
        });
    }
    static actualizarTarea(identificador, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await TareaEsquema.findById(identificador);
            const existe = yield TareaEsquema_1.default.findById(identificador).exec();
            if (existe) {
                TareaEsquema_1.default.findByIdAndUpdate({ _id: identificador }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede actualizar la Tarea" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Tarea actualizada exitosamente", actualizado: miObjeto._id });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "No existe el Tarea" });
            }
        });
    }
}
exports.default = TareaDao;
