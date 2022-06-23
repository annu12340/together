import json
import requests
from .utils import get_qr_code_id, get_asset_id, get_project_id
# 1. Created an asset and a qr code
# 2. Verifying the qr code is correctly created using show_qr_code
# 3. Get the qr code id and the asset id
# 4. Create a contact object
# 5. Get scanid from url and fetch scan info from it


def main(intent, asset_name, description):

    result = create_asset(intent, asset_name, description)
    qrcode_id = get_qr_code_id(result)
    assetid = get_asset_id(result)
    projectid = get_project_id(result)
    img_url = show_qr_code(qrcode_id)
    return img_url


def create_asset(intent, asset_name, description):
    print("*"*20)
    print('Creating asset')
    print("-"*20)
    print("\n"*5)
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/projects/589cc172-87c0-43db-afb9-fcbbf79d693b/assets"
    payload = {
        "qrCodes": [
            {
                "dynamicRedirectType": "SCAN_ID_IN_QUERY_STRING_PARAMETER",
                "intent": intent,
                "intentType": "DYNAMIC_REDIRECT",
                "locatorKeyType": "SHORT_URL",
                "status": "ACTIVE"
            }
        ],
        "description": description,
        "name": asset_name
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiJiZTNiMzZhYi01OWI2LTRlNTctYjUzNS03OGVkZWRlNGQ1MzgiLCJldmVudF9pZCI6ImZjZDc0ZDc5LThhM2UtNDFhNi1hMjgyLTU1M2JhMmMzN2FkNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTU5NjE0NDksImV4cCI6MTY1NjAwNDY0OSwiaWF0IjoxNjU1OTYxNDQ5LCJqdGkiOiJkOTc0NmM4My1iODM0LTQ0NGItODNiMS02NGM0OWY4NjhjMDAiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.EDwG1984XfPV07F-4XhoCYthYjqsYfONa1eVnOZnl5XZOfw1cX3h01nInRaMgmCva5HujxIEgGUx-a8N6fVwRGH3sqfCZ2MpojOmT_45vqa2-dXmxlq6_4iEFqEC3pwq9ySdTBO_LGTkcdPdaPam4--PgdERlU8Stg60tKIcLE8e6a32LorP-T_7HN1TGKDRVtTy9lsfhhV9s24TJ_gL2bPO9Skb4zz0uqm-9c5sfsgeipQ_LlxdiLrSGkwATexU354cTcFASvmuEdLNZrl1Aod_yvq8gxYZMj8GHZA3w1syOoJx-OTfb03wl840HM1oZBTaF_myPng9bsVUtCf32g"


    }
    response = requests.post(url, json=payload, headers=headers)
    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)
    print("new assest", result)
    return result


def show_qr_code(qrcode_id):
    print("*"*20)
    print('Showing qr code')
    print("-"*20)
    print("\n"*5)
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/qrcodes/" + \
        qrcode_id+"?format=PNG"
    headers = {"Accept": "application/json",        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiJiZTNiMzZhYi01OWI2LTRlNTctYjUzNS03OGVkZWRlNGQ1MzgiLCJldmVudF9pZCI6ImZjZDc0ZDc5LThhM2UtNDFhNi1hMjgyLTU1M2JhMmMzN2FkNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTU5NjE0NDksImV4cCI6MTY1NjAwNDY0OSwiaWF0IjoxNjU1OTYxNDQ5LCJqdGkiOiJkOTc0NmM4My1iODM0LTQ0NGItODNiMS02NGM0OWY4NjhjMDAiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.EDwG1984XfPV07F-4XhoCYthYjqsYfONa1eVnOZnl5XZOfw1cX3h01nInRaMgmCva5HujxIEgGUx-a8N6fVwRGH3sqfCZ2MpojOmT_45vqa2-dXmxlq6_4iEFqEC3pwq9ySdTBO_LGTkcdPdaPam4--PgdERlU8Stg60tKIcLE8e6a32LorP-T_7HN1TGKDRVtTy9lsfhhV9s24TJ_gL2bPO9Skb4zz0uqm-9c5sfsgeipQ_LlxdiLrSGkwATexU354cTcFASvmuEdLNZrl1Aod_yvq8gxYZMj8GHZA3w1syOoJx-OTfb03wl840HM1oZBTaF_myPng9bsVUtCf32g"

               }
    response = requests.get(url, headers=headers)
    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)
    img_output = json.loads(result)
    img_url = "data:image/png;base64, "+img_output["image"]["data"]
    print("\n\n\n\n================================", img_url)
    return img_url


def create_contact_object(assetid, parent_name, phone):
    print("*"*20)
    print('Creating contact object')
    print("-"*20)
    print("\n"*5)
    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/assets/{}/contacts".format(
        assetid)

    payload = {
        "cellPhone": phone,
        "firstName": parent_name[0],
        "lastName": parent_name[1]
    }
    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0YTQxOTRiNi02ZmQ4LTRmMGQtYmUyYS00ZTFiMTg1MjIxYzciLCJldmVudF9pZCI6ImE5MzRkODhiLTkwMWEtNGJhZS1iZjIzLTg2YTBmNjc2YmZjMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0ODYzNjgsImV4cCI6MTY1NDUyOTU2NywiaWF0IjoxNjU0NDg2MzY4LCJqdGkiOiJhNGI1OWI1Ny1iYTlhLTQ2Y2YtYTNhMi01NGIxZjI2NDg5YjkiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.dtastYC1Qzv5cbzBvU8tBckGKwUZQ8TyQ3NH_pCjF4wVLc4iEvatwiy1eJvjEIvqqUWKnQcY6Qj5kcGW0Me_WREuKQIUOwJ18uV0o5qOHrswH_dyy0Qb8YMF1ZxG6TO23RuIKimPnEgo8vzxBP6bvz2ZRXMG0G--jNcIaX1rtLU71iIFld8mvOIwl5wBizTRptok3m1MPSzGnOWUvs6xl0GKfFaF_AOoQ5RX6RA1qBp1ZWM4dlCU5IKbHu8c_r8sJrQVh01USv5nae5mOfDiDnfm4ZH0oEjVJfKHrlIxBBEtlhW9m7j4m6a4jjMQ7ZtvZ8y42MjbtoMgeMnPxF08UA",

        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)
    print(result)

    json_object["projectContact"]["projectId"]
