import requests
import json
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse, Say
from dotenv import load_dotenv
import os
from datetime import datetime
load_dotenv()


def scaninfo_main(scanid):
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/scans/"+scanid

    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0MTIyYzI4Ni03YzkxLTRlZjYtYWRmNy03OGRkMWViMDYxNjciLCJldmVudF9pZCI6IjgwZmYwOGIzLWYzYzItNGI1MC1hYWRkLTI5ZDk0ZTBhZjU0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0MjU0MjksImV4cCI6MTY1NDQ2ODYyOSwiaWF0IjoxNjU0NDI1NDI5LCJqdGkiOiI2MGJlZjQwMC1iNzQxLTRhM2UtYTllZi0yMmE1MTk1Yjc1NDgiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.gZuVaZ66vnnK1bVsFj-hKXiCZwZDQp88HuzSq-sEDxejXHcZ-OaJdbqohNzNUF4IQ6dbu51Ug60MkK9DVVqYsd_5WBGG8kI97esRFeHenNo1sxlgv3hwZqZS2hGY_OB0jU1IDFnf1cdl1a7rf4jUex3t8YTLS24bplhKHqgBuUTwIijfQb2sqOmfpxsJYP-DOJYlHIRzAsax6UAIKDXuLS9cv3kmQPS248GxZN9bH1MQDUD2kUCinkF-2xZQO98pehfYl2w2kLjLJXoX8T4TgwSjAVnz8ja7GA4SZpo3LLF4raz1ni3O0m2ACgJMN-EbwHK6c_UmZmriaZVkYUTIlg"
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
