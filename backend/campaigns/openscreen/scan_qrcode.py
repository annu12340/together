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
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI3MzMzYjI2My1kZWI1LTRiZDYtYmQ3My1kYWY2NWJhM2YyZDAiLCJldmVudF9pZCI6IjMwNjMwOWNiLWI4MjgtNDgzZi05MTY5LThlNmM0ZGFjNjJmNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ1ODI0NzgsImV4cCI6MTY1NDYyNTY3OCwiaWF0IjoxNjU0NTgyNDc4LCJqdGkiOiI1ZTI2NDUyOS1lOGNhLTQ1MzYtYWZkMS0wYzNjZjgzMGU0MWMiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.nvWA1UxCz1zVsfyGZQrVlSAs-sS6TNSXT5viR2ZK5wTHWo6T03epOGH8AI0sDF9C9MRd2kH0Ohk4REHtiogAf4uUhT7s-irNsai_nX7Evj2yT2R6Iobp5UTK7gInVRBIpchmotD6QE45APJvSykcp9YkHBhB9p2etciKQOTJmV97ppy5RJYrKoPJotTGnxAj49WgoSDCd6bJDDJAE9u_TLHQk2Hfygtd_iY9kdT4IxFuDKVGpRu20Fo0ADBZVwcQDxQpFf17b-_g7PA0PSk2NSvIsQ5lhOxty0yUJy6QkCrctduyfZF_VS9c7m4ZNgrbbe4oYu8QJFUwsreJLPabnA"
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
