const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addText = functions.https.onRequest(async (req, res) => {
  const text = req.body.text;
  const writeResult = await admin.firestore().collection('texts').add({text: text});
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});