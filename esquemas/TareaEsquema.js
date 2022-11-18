"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ComponenteEsquema_1 = __importDefault(require("./ComponenteEsquema"));
const TareaEsquema = new mongoose_1.Schema({
    itemPriority: { type: String, required: true },
    itemCategory: { type: String, required: true },
    itemName: { type: String, required: true },
    componentes: { type: [ComponenteEsquema_1.default], required: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Tarrea", TareaEsquema, "Tarea");
