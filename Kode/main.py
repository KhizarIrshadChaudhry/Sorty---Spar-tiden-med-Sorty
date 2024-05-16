import requests
import json

response = requests.post(
  url="https://openrouter.ai/api/v1/chat/completions",
  headers={
    "Authorization": f"Bearer {"API-KEY"}",

  },
  data=json.dumps({
    "model": "openchat/openchat-7b:free", 
    "messages": [
      { "role": "user", "content": "Du er skal fortælle mig hvilken afdeling tilhøre \"citronmåne\" i. Afdeleningerne er listet neden under. Hvis den ikke tilhøre nogle afdeleningen skal du svare med \"ingen\". Du skal kun svare navnet på afdelingen og INTET MERE. Afdelingerne:Frugt,Brød,Mejeri og Kage" }
    ]
  })
)

print(response.json)
