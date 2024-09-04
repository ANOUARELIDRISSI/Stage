from transformers import AutoTokenizer, AutoModel, pipeline
from transformers import MarianMTModel, MarianTokenizer


#https://huggingface.co/SI2M-Lab/DarijaBERT



# Initialize the Darija BERT model and tokenizer (for potential preprocessing, feature extraction, etc.)
darija_model_name = "SI2M-Lab/DarijaBERT"
tokenizer = AutoTokenizer.from_pretrained(darija_model_name)
model = AutoModel.from_pretrained(darija_model_name)

# Initialize the French translation model
translation_model_name = "Helsinki-NLP/opus-mt-ar-fr"  # Model for translating Arabic (and Darija) to French
translator = pipeline("translation", model=translation_model_name, tokenizer=translation_model_name)

def preprocess_text(text):
    # Tokenize the input text using the Darija BERT tokenizer
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    # The outputs here can be used for further processing if needed (e.g., feature extraction)
    return text  # Return the original text for translation

def translate_to_french(text):
    # Translate the original or preprocessed text to French
    translation = translator(text)
    return translation[0]['translation_text']

def main():
    input_text = input("Enter the Darija text: ")
    
    # Step 1: Optionally preprocess the text using Darija BERT
    preprocessed_text = preprocess_text(input_text)
    
    # Step 2: Translate the (preprocessed) text to French
    translated_text = translate_to_french(preprocessed_text)
    
    # Output the translated text
    print("Translated Text:", translated_text)

if __name__ == "__main__":
    main()
