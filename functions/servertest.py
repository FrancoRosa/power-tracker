import requests
url = 'https://us-central1-pwr-trkr.cloudfunctions.net/addText'
url = 'http://localhost:5001/pwr-trkr/us-central1/measurements'
message = {
  "Vrs": 221.1,
  "Vrt": 221.1,
  "Vst": 221.1,
  "Ir": 1.1,
  "Is": 3.1,
  "It": 2.1,
  "Wrs": 2211.1,
  "Wrt": 3221.1,
  "Wst": 4221.1,
  "F": 60.1,
}
response = requests.post(url, json=message)
print(">> url:", url)
print(">>> tx:", message)
print(">>> rx:", response.json())
