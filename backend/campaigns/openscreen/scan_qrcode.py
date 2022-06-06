import requests
import json
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse, Say
import os
from datetime import datetime


def scaninfo_main(scanid):
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/scans/"+scanid

    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0YTQxOTRiNi02ZmQ4LTRmMGQtYmUyYS00ZTFiMTg1MjIxYzciLCJldmVudF9pZCI6ImE5MzRkODhiLTkwMWEtNGJhZS1iZjIzLTg2YTBmNjc2YmZjMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0ODYzNjgsImV4cCI6MTY1NDUyOTU2NywiaWF0IjoxNjU0NDg2MzY4LCJqdGkiOiJhNGI1OWI1Ny1iYTlhLTQ2Y2YtYTNhMi01NGIxZjI2NDg5YjkiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.dtastYC1Qzv5cbzBvU8tBckGKwUZQ8TyQ3NH_pCjF4wVLc4iEvatwiy1eJvjEIvqqUWKnQcY6Qj5kcGW0Me_WREuKQIUOwJ18uV0o5qOHrswH_dyy0Qb8YMF1ZxG6TO23RuIKimPnEgo8vzxBP6bvz2ZRXMG0G--jNcIaX1rtLU71iIFld8mvOIwl5wBizTRptok3m1MPSzGnOWUvs6xl0GKfFaF_AOoQ5RX6RA1qBp1ZWM4dlCU5IKbHu8c_r8sJrQVh01USv5nae5mOfDiDnfm4ZH0oEjVJfKHrlIxBBEtlhW9m7j4m6a4jjMQ7ZtvZ8y42MjbtoMgeMnPxF08UA"
    }

    response = requests.get(url, headers=headers)

    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)

    print(result)

    # time = json_object["scan"]["scanTime"]
    # city = json_object["scan"]["locationCityName"]
    # region = json_object["scan"]["locationRegionName"]
    # country = json_object["scan"]["locationCountryName"]
    # latitude = json_object["scan"]["locationLatitude"]
    # longitude = json_object["scan"]["locationLongitude"]

    # msg = "A scan has been made from {},{},{} at {}. The exact latitude and longitude is {},{}".format(
    #     city, region, country, time, latitude, longitude)
