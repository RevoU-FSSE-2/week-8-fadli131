"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
// app.use(cors());
app.use(body_parser_1.default.json());
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log(`Server berjalan di 
http://localhost/
:${port}`);
});
