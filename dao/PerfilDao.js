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
const PerfilEsquema_1 = __importDefault(require("../esquemas/PerfilEsquema"));
class PerfilDao {
    static consultarPerfiles(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield PerfilEsquema_1.default.find().sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    static crearPerfiles(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield PerfilEsquema_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El registro ya existe...." });
            }
            else {
                const objPerfil = new PerfilEsquema_1.default(parametros);
                objPerfil.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear el perfil" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Perfil creado exitosamente", codigo: miObjeto._id });
                    }
                });
            }
        });
    }
    static eliminarPerfil(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //en esta line se hace una consulta
            //const existe = await PerfilEsquema.findById(identificador);
            const existe = yield PerfilEsquema_1.default.findById(identificador).exec();
            if (existe) {
                PerfilEsquema_1.default.findByIdAndDelete(identificador, (miError, MiObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede Eliminar socio paila " });
                    }
                    else {
                        res.status(200).json({ respuesta: "Breve ya se Elimino todo bien ", eliminado: MiObjeto });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "Paila el perfil no existe yuca " });
            }
        });
    }
    static actualizarPerfil(identificador, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await PerfilEsquema.findById(identificador);
            const existe = yield PerfilEsquema_1.default.findById(identificador).exec();
            if (existe) {
                PerfilEsquema_1.default.findByIdAndUpdate({ _id: identificador }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede actualizar el perfil" });
                    }
                    else {
                        res.status(200).json({ respuesta: "Perfil actualizado exitosamente", actualizado: miObjeto._id });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "No existe el perfil" });
            }
        });
    }
}
exports.default = PerfilDao;