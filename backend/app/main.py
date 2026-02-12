from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Us & Co API",
    description="Backend para recuerdos y cupones 💌",
    version="1.0.0"
)

# --- CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción se restringe
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Ruta raíz ---
@app.get("/")
def root():
    return {
        "message": "Us & Co backend funcionando 💖"
    }


# --- Endpoint de prueba Timeline ---
@app.get("/timeline")
def get_timeline():
    return [
        {
            "id": 1,
            "title": "El día que nos conocimos",
            "description": "Fue el inicio de todo ✨",
            "date": "2024-02-14",
            "image_url": "https://via.placeholder.com/400"
        }
    ]


# --- Endpoint de prueba Cupones ---
@app.get("/coupons")
def get_coupons():
    return [
        {
            "id": 1,
            "title": "Vale por una salida al cine 🎬",
            "description": "Incluye palomitas",
            "is_redeemed": False
        }
    ]


# --- Endpoint para canjear cupón ---
@app.post("/coupons/{coupon_id}/redeem")
def redeem_coupon(coupon_id: int):
    return {
        "message": f"Cupón {coupon_id} canjeado 💌",
        "status": "success"
    }
