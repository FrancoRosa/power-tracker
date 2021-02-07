import requests
url = 'https://us-central1-pwr-trkr.cloudfunctions.net/measurements' # legacy firebase server
url = 'http://localhost:5001/pwr-trkr/us-central1/measurements' # local firebase emulator
message = {
  "Vrs": 231.1,
  "Vrt": 226.2,
  "Vst": 234.3,
  "Ir": 4.1,
  "Is": 7.6,
  "It": 1.9,
  "Wrs": 2201.4,
  "Wrt": 3271.5,
  "Wst": 4921.6,
  "F": 60.1,
}
response = requests.post(url, json=message)
print(">> url:", url)
print(">>> tx:", message)
print(">>> rx:", response)
print(">>> rx:", response.json())
