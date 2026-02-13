from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI(
    title="Us & Co API",
    description="Backend para nuestra historia 💌",
    version="1.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/memories")
def get_memories():
    return [
        {
            "id": 1,
            "title": "Nuestra primera charla",
            "date": "12 de Febrero",
            "description": "Hasta le tome captura a nuestra primera conversación, porque supe que era el inicio de algo especial.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770954806/WhatsApp_Image_2026-02-12_at_9.45.47_PM_zm1hwt.jpg"},
            ]
        },
        {
            "id": 2,
            "title": "Solo una foto",
            "date": "14 de Febrero",
            "description": "Una foto que me encanta.",
            "media": [
                {"type": "image", "url": "https://images.unsplash.com/photo-1528605248644-14dd04022da1"}
            ]
        }
    ]
# Endpoint para la pantalla de Cartas (Para ti)
@app.get("/letters")
def get_letters():
    return [
        {
            "id": 1,
            "title": "Léeme cuando...",
            "subtitle": "Me extrañes mucho",
            "content": "Solo quería recordarte que aunque no estemos juntos en este momento, mi corazón late por ti. Eres mi pensamiento favorito cada mañana.",
            "color": "#F8F1EA"
        },
        {
            "id": 2,
            "title": "Léeme cuando...",
            "subtitle": "Tengas un mal día",
            "content": "Respira profundo. Eres la mujer más fuerte que conozco y nada puede contigo. Aquí estoy para abrazarte fuerte en cuanto nos veamos.",
            "color": "#F0E6DD"
        },
        {
            "id": 3,
            "title": "Léeme cuando...",
            "subtitle": "No puedas dormir",
            "content": "Imagina que estoy a tu lado, tomándote de la mano hasta que el sueño llegue. Todo está bien, descansa tranquila.",
            "color": "#EFEAE4"
        },
        {
            "id": 4,
            "title": "Léeme cuando...",
            "subtitle": "Dudes de ti misma",
            "content": "Eres capaz de cosas que aún no imaginas. Yo creo en ti incluso en los días en que tú no lo haces.",
            "color": "#F5EDE6"
        },
        {
            "id": 5,
            "title": "Léeme cuando...",
            "subtitle": "Estés feliz",
            "content": "Guarda este momento. Sonríe más fuerte sabiendo que me haces feliz también.",
            "color": "#F3E8DF"
        },
        {
            "id": 6,
            "title": "Léeme cuando...",
            "subtitle": "Me necesites",
            "content": "Siempre puedes volver aquí. Siempre puedes volver a mí.",
            "color": "#F7EFE9"
        },
        {
            "id": 7,
            "title": "Léeme cuando...",
            "subtitle": "Sientas miedo",
            "content": "No tienes que enfrentarlo sola. Estoy contigo, incluso cuando no me ves.",
            "color": "#EFE5DB"
        },
        {
            "id": 8,
            "title": "Léeme cuando...",
            "subtitle": "Recuerdes algo bonito",
            "content": "Ojalá ese recuerdo te abrace tanto como yo quisiera hacerlo ahora.",
            "color": "#F6EDE7"
        },
        {
            "id": 9,
            "title": "Léeme cuando...",
            "subtitle": "Todo salga bien",
            "content": "Sabía que lo lograrías. Celebra, te lo mereces.",
            "color": "#F2E9E2"
        },
        {
            "id": 10,
            "title": "Léeme cuando...",
            "subtitle": "Te sientas sola",
            "content": "No lo estás. Nunca lo has estado. Aquí sigo.",
            "color": "#F9F3ED"
        }
    ]
