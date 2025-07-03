from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware # Comentar
# from fastapi.responses import JSONResponse # Comentar

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}
    # return JSONResponse(content={"message": "pong"}) # Si JSONResponse está comentado, cambia a un diccionario plano
    # return {"message": "pong"}

# app.add_middleware( # Comentar todo el bloque del middleware
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# Todas las líneas de router ya deben estar comentadas de tu intento anterior
# from routers import ...
# app.include_router(...)
