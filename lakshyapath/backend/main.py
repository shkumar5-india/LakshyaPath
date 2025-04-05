from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.recommendations import router as recommend_router

app = FastAPI(title="LakshyaPath API")

# Allow requests from frontend (adjust origin as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include recommendation routes
app.include_router(recommend_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "LakshyaPath API is running!"}
