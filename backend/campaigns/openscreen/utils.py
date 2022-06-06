import json


def get_qr_code_id(response):
    print("Retriving qr code id")
    print("-"*20)
    print("\n"*5)
    result = json.loads(response)
    id = result["asset"]["qrCodes"][0]["qrCodeId"]
    return (id)


def get_project_id(response):
    print("Retriving qr code id")
    print("-"*20)
    print("\n"*5)
    result = json.loads(response)
    id = result["asset"]["qrCodes"][0]["qrCodeId"]
    return (id)


def get_asset_id(response):
    print("Retriving qr code id")
    print("-"*20)
    print("\n"*5)
    result = json.loads(response)
    id = result["asset"]["qrCodes"][0]["assetId"]
    return (id)
