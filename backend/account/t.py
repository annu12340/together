import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "AC40d8ff4136be74453d0ee376b288b100"
auth_token = "80846e086d5a0937f1633413fac4df46"
client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hi there',
    from_='+19362263441',
    to='+919188058865'
)

print(message.sid)
