const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.measurements = functions.https.onRequest(async (req, res) => {
  const data = req.body;
  if (Object.keys(data).length == 10){
    let timestamp = new Date().toISOString()
    await admin.firestore().collection('measurements').doc(timestamp).set(data)
    await admin.database().ref('measurements').set({timestamp, ...data})
    res.json({ message: "ok" });
  } else {
    res.json({ message: "error" });
  }
});