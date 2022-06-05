import json
import requests
from .utils import get_qr_code_id, get_asset_id, get_project_id
# 1. Created an asset and a qr code
# 2. Verifying the qr code is correctly created using show_qr_code
# 3. Get the qr code id and the asset id
# 4. Create a contact object
# 5. Get scanid from url and fetch scan info from it


def main(intent, asset_name, description, parent_name, phone):

    result = create_asset(intent, asset_name, description)
    qrcode_id = get_qr_code_id(result)
    assetid = get_asset_id(result)
    projectid = get_project_id(result)

    img_url = show_qr_code(qrcode_id)

    # create_contact_object(assetid, parent_name, "+13362263441")
    # sendsms(projectid)
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
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0MTIyYzI4Ni03YzkxLTRlZjYtYWRmNy03OGRkMWViMDYxNjciLCJldmVudF9pZCI6IjgwZmYwOGIzLWYzYzItNGI1MC1hYWRkLTI5ZDk0ZTBhZjU0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0MjU0MjksImV4cCI6MTY1NDQ2ODYyOSwiaWF0IjoxNjU0NDI1NDI5LCJqdGkiOiI2MGJlZjQwMC1iNzQxLTRhM2UtYTllZi0yMmE1MTk1Yjc1NDgiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.gZuVaZ66vnnK1bVsFj-hKXiCZwZDQp88HuzSq-sEDxejXHcZ-OaJdbqohNzNUF4IQ6dbu51Ug60MkK9DVVqYsd_5WBGG8kI97esRFeHenNo1sxlgv3hwZqZS2hGY_OB0jU1IDFnf1cdl1a7rf4jUex3t8YTLS24bplhKHqgBuUTwIijfQb2sqOmfpxsJYP-DOJYlHIRzAsax6UAIKDXuLS9cv3kmQPS248GxZN9bH1MQDUD2kUCinkF-2xZQO98pehfYl2w2kLjLJXoX8T4TgwSjAVnz8ja7GA4SZpo3LLF4raz1ni3O0m2ACgJMN-EbwHK6c_UmZmriaZVkYUTIlg
        "

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
    headers = {"Accept": "application/json",        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0MTIyYzI4Ni03YzkxLTRlZjYtYWRmNy03OGRkMWViMDYxNjciLCJldmVudF9pZCI6IjgwZmYwOGIzLWYzYzItNGI1MC1hYWRkLTI5ZDk0ZTBhZjU0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0MjU0MjksImV4cCI6MTY1NDQ2ODYyOSwiaWF0IjoxNjU0NDI1NDI5LCJqdGkiOiI2MGJlZjQwMC1iNzQxLTRhM2UtYTllZi0yMmE1MTk1Yjc1NDgiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.gZuVaZ66vnnK1bVsFj-hKXiCZwZDQp88HuzSq-sEDxejXHcZ-OaJdbqohNzNUF4IQ6dbu51Ug60MkK9DVVqYsd_5WBGG8kI97esRFeHenNo1sxlgv3hwZqZS2hGY_OB0jU1IDFnf1cdl1a7rf4jUex3t8YTLS24bplhKHqgBuUTwIijfQb2sqOmfpxsJYP-DOJYlHIRzAsax6UAIKDXuLS9cv3kmQPS248GxZN9bH1MQDUD2kUCinkF-2xZQO98pehfYl2w2kLjLJXoX8T4TgwSjAVnz8ja7GA4SZpo3LLF4raz1ni3O0m2ACgJMN-EbwHK6c_UmZmriaZVkYUTIlg
               "
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
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0MTIyYzI4Ni03YzkxLTRlZjYtYWRmNy03OGRkMWViMDYxNjciLCJldmVudF9pZCI6IjgwZmYwOGIzLWYzYzItNGI1MC1hYWRkLTI5ZDk0ZTBhZjU0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0MjU0MjksImV4cCI6MTY1NDQ2ODYyOSwiaWF0IjoxNjU0NDI1NDI5LCJqdGkiOiI2MGJlZjQwMC1iNzQxLTRhM2UtYTllZi0yMmE1MTk1Yjc1NDgiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.gZuVaZ66vnnK1bVsFj-hKXiCZwZDQp88HuzSq-sEDxejXHcZ-OaJdbqohNzNUF4IQ6dbu51Ug60MkK9DVVqYsd_5WBGG8kI97esRFeHenNo1sxlgv3hwZqZS2hGY_OB0jU1IDFnf1cdl1a7rf4jUex3t8YTLS24bplhKHqgBuUTwIijfQb2sqOmfpxsJYP-DOJYlHIRzAsax6UAIKDXuLS9cv3kmQPS248GxZN9bH1MQDUD2kUCinkF-2xZQO98pehfYl2w2kLjLJXoX8T4TgwSjAVnz8ja7GA4SZpo3LLF4raz1ni3O0m2ACgJMN-EbwHK6c_UmZmriaZVkYUTIlg
        ",

        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    json_object = json.loads(response.text)
    result = json.dumps(json_object, indent=3)
    print(result)

    json_object["projectContact"]["projectId"]


def sendsms(project_id):

    url = "https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/projects'/'smstemplates"

    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNWY5NGEyYS1lNGJjLTRiYmMtYjRjMi05NDA2M2I3MjAyNjQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI0MTIyYzI4Ni03YzkxLTRlZjYtYWRmNy03OGRkMWViMDYxNjciLCJldmVudF9pZCI6IjgwZmYwOGIzLWYzYzItNGI1MC1hYWRkLTI5ZDk0ZTBhZjU0ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ0MjU0MjksImV4cCI6MTY1NDQ2ODYyOSwiaWF0IjoxNjU0NDI1NDI5LCJqdGkiOiI2MGJlZjQwMC1iNzQxLTRhM2UtYTllZi0yMmE1MTk1Yjc1NDgiLCJ1c2VybmFtZSI6Inp4aTZ4cXdhYXJyY3JkeXZteCJ9.gZuVaZ66vnnK1bVsFj-hKXiCZwZDQp88HuzSq-sEDxejXHcZ-OaJdbqohNzNUF4IQ6dbu51Ug60MkK9DVVqYsd_5WBGG8kI97esRFeHenNo1sxlgv3hwZqZS2hGY_OB0jU1IDFnf1cdl1a7rf4jUex3t8YTLS24bplhKHqgBuUTwIijfQb2sqOmfpxsJYP-DOJYlHIRzAsax6UAIKDXuLS9cv3kmQPS248GxZN9bH1MQDUD2kUCinkF-2xZQO98pehfYl2w2kLjLJXoX8T4TgwSjAVnz8ja7GA4SZpo3LLF4raz1ni3O0m2ACgJMN-EbwHK6c_UmZmriaZVkYUTIlg
        "
    }

    response = requests.get(url, headers=headers)

    print(response.text)
