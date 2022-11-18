"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaEntidad = void 0;
class TareaEntidad {
    constructor(p, c, n, com) {
        this.itemPriority = p;
        this.itemCategory = c;
        this.itemName = n;
        this.componentes = com;
    }
}
exports.TareaEntidad = TareaEntidad;
exports.default = TareaEntidad;
