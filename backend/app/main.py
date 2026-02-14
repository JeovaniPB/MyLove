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
            "date": "3 de Febrero",
            "description": "Hasta le tome captura a nuestra primera conversación, porque supe que era el inicio de algo especial.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770954806/WhatsApp_Image_2026-02-12_at_9.45.47_PM_zm1hwt.jpg"},
            ]
        },
        {
            "id": 2,
            "title": "Nuestra primera cita",
            "date": "12 de Febrero",
            "description": "Ese día, cada segundo se sintió como un regalo. Desde la risa compartida hasta el silencio cómodo, supe que quería más momentos así contigo.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770955014/WhatsApp_Image_2026-02-12_at_9.45.48_PM_1_rvvtrh.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770955014/WhatsApp_Image_2026-02-12_at_9.45.48_PM_ao0dyg.jpg"},
            ]
        },
        {
            "id": 3,
            "title": "Nuestro primer 'sí' como novios",
            "date": "1 de Marzo",
            "description": "Ese día, al decir 'sí' a ser novios, sentí que el mundo se volvía un lugar más brillante. Fue el comienzo de nuestro viaje juntos, y cada día desde entonces ha sido una aventura maravillosa a tu lado.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770955857/WhatsApp_Image_2026-02-12_at_9.45.49_PM_dsgtop.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770955856/WhatsApp_Image_2026-02-12_at_9.45.49_PM_1_xg397q.jpg"},
            ]
        },
        {
            "id": 4,
            "title": "Una de las primeras veces que fui a tu casa",
            "date": "22 de Marzo",
            "description": "Recuerdo esa tarde como si fuera ayer. La emoción de conocer tu espacio, tus cosas, y compartir risas en tu sala. Fue un paso más en nuestro camino juntos, y cada vez que pienso en ese día, me llena de alegría saber que es parte de nuestra historia.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770955950/WhatsApp_Image_2026-02-12_at_9.46.08_PM_1_xrqizq.jpg"},
            ]
        },
        {
            "id": 5,
            "title": "Cuando subimos el cerro juntos",
            "date": "29 de Marzo",
            "description": "Ese dia estuvo bonito, a pesar de la desvelada mi amor, me encantó compartir esa aventura contigo. Subir el cerro juntos fue más que una caminata; fue un momento de conexión y compañerismo que siempre recordaré con cariño.",
            "media": [
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1770956159/WhatsApp_Video_2026-02-12_at_9.46.16_PM_zbgp0k.mp4"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770956095/WhatsApp_Image_2026-02-12_at_9.46.17_PM_1_fciaen.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770956096/WhatsApp_Image_2026-02-12_at_9.46.17_PM_my5338.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1770956096/WhatsApp_Image_2026-02-12_at_9.46.16_PM_tfuzfv.jpg"},
            ]
        },
        {
            "id": 6,
            "title": "Tu con un pato en la cabeza",
            "date": "23 de Abril",
            "description": "Ese día, tu espontaneidad y sentido del humor brillaron más que nunca. Verte con ese pato en la cabeza fue un momento de pura alegría y diversión que siempre recordaré con una sonrisa. Esos momentos de risa compartida son los que hacen que nuestra historia sea tan especial.",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771012801/WhatsApp_Image_2026-02-12_at_9.46.19_PM_auvo7i.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771012796/WhatsApp_Image_2026-02-12_at_9.46.19_PM_1_lxs5lu.jpg"},
            ]
        },
        {
            "id": 7,
            "title": "Cuando tenemos salidas juntes",
            "date": "29 de Diciembre",
            "description": "Amo salir contigo y compartir momentos fuera de lo común. Esos días en los que exploramos juntos, reímos sin parar y creamos recuerdos únicos son los que hacen que nuestra historia sea tan especial. Cada salida contigo es una aventura que atesoro profundamente.",
            "media": [
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1771012994/WhatsApp_Video_2026-02-12_at_9.46.23_PM_pf82ww.mp4"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771012990/WhatsApp_Image_2026-02-12_at_9.46.19_PM_3_fp26v6.jpg"},
            ]
        },
        {
            "id": 8,
            "title": "Primera vez en la playa",
            "date": "11 de Enero",
            "description": "Cuando fuimos a la playa por primera vez, el sol, la arena y el mar nos envolvieron en un abrazo de paz y tranquilidad. Fue un día perfecto, lleno de risas, besos y momentos que nunca olvidaré. Esos momentos en la playa son los que hacen que nuestra historia sea tan especial.",
            "media": [
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1771018632/WhatsApp_Video_2026-02-12_at_9.46.28_PM_owzs52.mp4"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771018627/WhatsApp_Image_2026-02-12_at_9.46.24_PM_fqmgtj.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771018630/WhatsApp_Image_2026-02-12_at_9.46.23_PM_p9b1ix.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771018628/WhatsApp_Image_2026-02-12_at_9.46.23_PM_1_i97evd.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771013128/WhatsApp_Image_2026-02-12_at_9.46.24_PM_1_xo5bsl.jpg"},
            ]
        },
        {
            "id": 9,
            "title": "14 de febrero",
            "date": "14 de Febrero",
            "description": "Cuando fuimos por unas hamburgesuitas por el 14 de febrero, fue un día lleno de amor y risas. Ademàs de que a Jeovicito le cayò mal jsjsjs",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771018981/WhatsApp_Image_2026-02-12_at_9.49.32_PM_1_pmif9e.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771018976/WhatsApp_Image_2026-02-12_at_9.49.32_PM_xtax6x.jpg"},
            ]
        },
        {
            "id": 10,
            "title": "Nuestro Aniversario",
            "date": "1 de Marzo",
            "description": "Fue lindo verte y dedicarte un libro muy lindo",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019140/WhatsApp_Image_2026-02-12_at_9.49.33_PM_2_v2dscb.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019135/WhatsApp_Image_2026-02-12_at_9.49.33_PM_4_vmmfma.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019141/WhatsApp_Image_2026-02-12_at_9.49.33_PM_1_q4wiqt.jpg"},
            ]
        },
        {
            "id": 11,
            "title": "Cuando fuimos a la feria",
            "date": "8 de Mayo",
            "description": "Cuando nos quitaron dinero, pero aun asi fue lindo al subirnos a los juegos y compartir ese momento juntos. Fue lindo verte.",
            "media": [
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1771019476/WhatsApp_Video_2026-02-12_at_9.49.51_PM_ch96nr.mp4"},
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1771019476/WhatsApp_Video_2026-02-12_at_9.49.41_PM_jaqshf.mp4"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019447/WhatsApp_Image_2026-02-12_at_9.49.42_PM_1_z00jho.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019449/WhatsApp_Image_2026-02-12_at_9.49.42_PM_guujgv.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019444/WhatsApp_Image_2026-02-12_at_9.49.51_PM_ca7et4.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019443/WhatsApp_Image_2026-02-12_at_9.49.34_PM_3_ztwqmf.jpg"},
            ]
        },
        {
            "id": 12,
            "title": "Segunda ida a la playa",
            "date": "11 de septiembre",
            "description": "Fue lindo ir a la playa y compartir ese momento juntos, apesar del caloron amor",
            "media": [
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019607/WhatsApp_Image_2026-02-12_at_9.49.58_PM_tgdfap.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019606/WhatsApp_Image_2026-02-12_at_9.49.58_PM_1_jyii7g.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019612/WhatsApp_Image_2026-02-12_at_9.49.57_PM_5_si4rdd.jpg"},
            ]
        },
        {
            "id": 13,
            "title": "Cuando fue tu cumpleaños",
            "date": "6 de Noviembre",
            "description": "Lo organize con mucho amor, fue un cumpleaños muy lindo, me encantó que lo pasaras bien con todos.",
            "media": [
                {"type": "video", "url": "https://res.cloudinary.com/dbytdtelf/video/upload/v1771019724/WhatsApp_Video_2026-02-13_at_3.54.38_PM_afzhok.mp4"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019689/WhatsApp_Image_2026-02-12_at_10.09.34_PM_1_zhwzsg.jpg"},
                {"type": "image", "url": "https://res.cloudinary.com/dbytdtelf/image/upload/v1771019690/WhatsApp_Image_2026-02-12_at_10.09.34_PM_kljgzl.jpg"},
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
