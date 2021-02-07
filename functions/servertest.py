import requests
url = 'http://localhost:5001/pwr-trkr/us-central1/measurements' # local firebase emulator
url = 'https://us-central1-pwr-trkr.cloudfunctions.net/measurements' # legacy firebase server
message = {
  "Vrs": 221.1,
  "Vrt": 226.2,
  "Vst": 234.3,
  "Ir": 7.1,
  "Is": 3.6,
  "It": 2.9,
  "Wrs": 2211.4,
  "Wrt": 3221.5,
  "Wst": 4221.6,
  "F": 59.8,
}
response = requests.post(url, json=message)
print(">> url:", url)
print(">>> tx:", message)
print(">>> rx:", response)
print(">>> rx:", response.json())
