import requests
import json
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse, Say
import os
from datetime import datetime


def scaninfo_main(asset_id):
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/assets/"+asset_id+"/scans"

    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiJkNjYyMzg5MC0zNjhjLTQ4ZjUtYjNhNi1kZjhlMTEzNTJhMjAiLCJldmVudF9pZCI6ImE5NzVjYjMxLTM3YTUtNGQ3MC1hNTc4LTk5YzhkNDQ5ZmY0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTU5NzU1MTYsImV4cCI6MTY1NjAxODcxNiwiaWF0IjoxNjU1OTc1NTE2LCJqdGkiOiJmZDI5OWU0Zi1hZjg0LTQxZjMtYmYwNi05OTU4ZmZhZjQyNDUiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.dGEFaFyb7w_zB5G_Ygi-g0oopp5YVzGm4iorNyyaxbJUANesQdQmWar3mbTRWdUTaQBCq1wHq8olIZV7CQCR2yIrIx5qOOtF3gn871qeBphOWCiXKUEgf6CL9iZD9gfN1iDXbCf7KXis9idQaixAwdh6cY9fxsiiqwoebWITZqaYviSsuVuS6fUl3UGrTHiRfO9K0SDWQdx-N8jxWjn_KLaasngn2NuNndhWzMmUPcUmpQyKNEUo2RMRuvRz4RV4SWaa_vXUVE0lJ_pkX36Vla0wlL5sjIOb6QdFNiCRP6Nh1mVNPykeBcZIaE67VkyRXtAl9RBs-EjJCL7Z6bcLfA"


    }

    response = requests.get(url, headers=headers)

    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)
    print("result: ", result)

    # time = result["scan"]["scanTime"]
    # city = result["scan"]["locationCityName"]
    # region = result["scan"]["locationRegionName"]
    # country = json_object["scan"]["locationCountryName"]
    # latitude = json_object["scan"]["locationLatitude"]
    # longitude = json_object["scan"]["locationLongitude"]
    # print(time)

    # msg = "A scan has been made from {},{},{} at {}. The exact latitude and longitude is {},{}".format(
    #     city, region, country, time, latitude, longitude)
