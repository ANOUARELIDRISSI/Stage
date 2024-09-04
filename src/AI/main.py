from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = FastAPI()

# Load the DarijaBERT model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("SI2M-Lab/DarijaBERT")
model = AutoModelForSequenceClassification.from_pretrained("SI2M-Lab/DarijaBERT")

@app.post("/process_query")
async def process_query(request: Request):
    data = await request.json()
    query = data.get("query", "")

    # Tokenize and process the query
    inputs = tokenizer(query, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)

    logits = outputs.logits
    probabilities = torch.softmax(logits, dim=1)

    return {"processed_query": query, "probabilities": probabilities.tolist()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
