import { Tabla_Streaming } from "../models/streaming.model.js";
Tabla_Streaming.create([
    {
        usuario: { edad: 25, genero: "Masculino" },
        tiempo_diario: 120,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Acción", duracion: 142, calificacion_pelicula: 8.5, vio_completa: true }
    },
    {
        usuario: { edad: 19, genero: "Femenino" },
        tiempo_diario: 45,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Romance", duracion: 98, calificacion_pelicula: 7.0, vio_completa: false }
    },
    {
        usuario: { edad: 34, genero: "No binario" },
        tiempo_diario: 180,
        tipo_dispositivo: "PC",
        pelicula: { genero: "Ciencia Ficción", duracion: 165, calificacion_pelicula: 9.0, vio_completa: true }
    },
    {
        usuario: { edad: 22, genero: "Femenino" },
        tiempo_diario: 60,
        tipo_dispositivo: "Tablet",
        pelicula: { genero: "Terror", duracion: 110, calificacion_pelicula: 6.2, vio_completa: true }
    },
    {
        usuario: { edad: 28, genero: "Masculino" },
        tiempo_diario: 150,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Drama", duracion: 124, calificacion_pelicula: 7.9, vio_completa: true }
    },
    {
        usuario: { edad: 16, genero: "Masculino" },
        tiempo_diario: 210,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Animación", duracion: 95, calificacion_pelicula: 8.8, vio_completa: false }
    },
    {
        usuario: { edad: 45, genero: "Femenino" },
        tiempo_diario: 90,
        tipo_dispositivo: "PC",
        pelicula: { genero: "Documental", duracion: 80, calificacion_pelicula: 9.2, vio_completa: true }
    },
    {
        usuario: { edad: 20, genero: "Femenino" },
        tiempo_diario: 30,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Comedia", duracion: 102, calificacion_pelicula: 5.5, vio_completa: false }
    },
    {
        usuario: { edad: 31, genero: "Masculino" },
        tiempo_diario: 130,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Suspenso", duracion: 118, calificacion_pelicula: 7.4, vio_completa: true }
    },
    {
        usuario: { edad: 27, genero: "No binario" },
        tiempo_diario: 110,
        tipo_dispositivo: "Tablet",
        pelicula: { genero: "Fantasía", duracion: 150, calificacion_pelicula: 8.0, vio_completa: true }
    },
    {
        usuario: { edad: 24, genero: "Masculino" },
        tiempo_diario: 95,
        tipo_dispositivo: "PC",
        pelicula: { genero: "Acción", duracion: 130, calificacion_pelicula: 6.9, vio_completa: true }
    },
    {
        usuario: { edad: 18, genero: "Femenino" },
        tiempo_diario: 240,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Terror", duracion: 88, calificacion_pelicula: 4.0, vio_completa: false }
    },
    {
        usuario: { edad: 38, genero: "Masculino" },
        tiempo_diario: 75,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Drama", duracion: 140, calificacion_pelicula: 8.1, vio_completa: true }
    },
    {
        usuario: { edad: 21, genero: "Femenino" },
        tiempo_diario: 115,
        tipo_dispositivo: "Tablet",
        pelicula: { genero: "Romance", duracion: 105, calificacion_pelicula: 7.3, vio_completa: true }
    },
    {
        usuario: { edad: 29, genero: "Masculino" },
        tiempo_diario: 160,
        tipo_dispositivo: "PC",
        pelicula: { genero: "Ciencia Ficción", duracion: 175, calificacion_pelicula: 9.5, vio_completa: true }
    },
    {
        usuario: { edad: 50, genero: "Femenino" },
        tiempo_diario: 50,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Comedia", duracion: 90, calificacion_pelicula: 6.0, vio_completa: true }
    },
    {
        usuario: { edad: 23, genero: "No binario" },
        tiempo_diario: 140,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Animación", duracion: 100, calificacion_pelicula: 7.8, vio_completa: false }
    },
    {
        usuario: { edad: 26, genero: "Masculino" },
        tiempo_diario: 85,
        tipo_dispositivo: "PC",
        pelicula: { genero: "Suspenso", duracion: 122, calificacion_pelicula: 8.3, vio_completa: true }
    },
    {
        usuario: { edad: 17, genero: "Femenino" },
        tiempo_diario: 190,
        tipo_dispositivo: "Móvil",
        pelicula: { genero: "Fantasía", duracion: 135, calificacion_pelicula: 6.5, vio_completa: true }
    },
    {
        usuario: { edad: 33, genero: "Masculino" },
        tiempo_diario: 100,
        tipo_dispositivo: "Smart TV",
        pelicula: { genero: "Documental", duracion: 112, calificacion_pelicula: 8.9, vio_completa: true }
    }
])

export const test = () => console.log("Llamando controlador de app")