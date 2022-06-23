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
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiJiZTNiMzZhYi01OWI2LTRlNTctYjUzNS03OGVkZWRlNGQ1MzgiLCJldmVudF9pZCI6ImZjZDc0ZDc5LThhM2UtNDFhNi1hMjgyLTU1M2JhMmMzN2FkNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTU5NjE0NDksImV4cCI6MTY1NjAwNDY0OSwiaWF0IjoxNjU1OTYxNDQ5LCJqdGkiOiJkOTc0NmM4My1iODM0LTQ0NGItODNiMS02NGM0OWY4NjhjMDAiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.EDwG1984XfPV07F-4XhoCYthYjqsYfONa1eVnOZnl5XZOfw1cX3h01nInRaMgmCva5HujxIEgGUx-a8N6fVwRGH3sqfCZ2MpojOmT_45vqa2-dXmxlq6_4iEFqEC3pwq9ySdTBO_LGTkcdPdaPam4--PgdERlU8Stg60tKIcLE8e6a32LorP-T_7HN1TGKDRVtTy9lsfhhV9s24TJ_gL2bPO9Skb4zz0uqm-9c5sfsgeipQ_LlxdiLrSGkwATexU354cTcFASvmuEdLNZrl1Aod_yvq8gxYZMj8GHZA3w1syOoJx-OTfb03wl840HM1oZBTaF_myPng9bsVUtCf32g"

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
