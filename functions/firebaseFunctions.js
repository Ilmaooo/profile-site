import { https } from "firebase-functions";
import { initializeApp, firestore } from "firebase-admin";
import { getFirestore, collection, addDoc } from "firebase/firestore";

initializeApp();

export const addFormData = https.onCall(async (data, context) => {
  const db = firestore();

  try {
    //set id to full name
    const id = data.fullName.toLowerCase().replace(/ /g, "-");

    // Create a document
    await db
      .collection("formEntries")
      .doc(id)
      .set({
        fullName: data.fullName,
        email: data.email,
        currentPosition: data.currentPosition,
        phoneNumber: data.phoneNumber,
        experiences: [
          {
            title: "",
          },
        ],
      });

    return { id }; // Return the generated ID
  } catch (error) {
    console.error("Error submitting form:", error);
    throw new https.HttpsError(
      "internal",
      "An error occurred while processing your request."
    );
  }
});
