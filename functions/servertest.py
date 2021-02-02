import requests
url = 'http://localhost:5001/pwr-trkr/us-central1/addMessage'
message = {'text': 'cool'}

response = requests.post(url, json=message)
print(">> url:", url)
print(">>> tx:", message)
print(">>> rx:", response.json())