import requests

url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/auth/getAccessToken"

payload = {
    "accessKey": "",
    "accessSecret": ""
}
headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
