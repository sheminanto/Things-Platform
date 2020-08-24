from config import PORT
import uvicorn

if __name__ == "__main__":
    uvicorn.run("main:app", host='127.0.0.1', port=PORT,
                reload=True, debug=True, workers=1)
