from config import PORT
import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host='0.0.0.0', port=PORT,
                reload=True, debug=True, workers=1)
