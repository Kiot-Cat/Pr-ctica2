import { Schema, model } from "mongoose";
const Esqueleto_Peliculas = new Schema({

    usuario: {
        edad: Number,
        genero: String
    },

    tiempo_diario: Number,
    tipo_dispositivo: String,

    pelicula: {
        genero: String,
        duracion: Number,
        calificacion_pelicula: Number,
        vio_completa: Boolean
    }
});
export const Tabla_Streaming = model("Registro Peliculas", Esqueleto_Peliculas);