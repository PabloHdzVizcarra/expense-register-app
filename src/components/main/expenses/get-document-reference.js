import { db } from "../../../libs/firebase";

export async function getDocumentReference(userID, docID) {
  if (!docID) {
    return {
      error: true,
      message: 'no existe ningun documento con ese ID'
    }
  }

  try {
    const docRef = db
      .collection(userID)
      .doc("budgets")
      .collection("budget")
      .doc(docID);

    return docRef;
  } catch (error) {
    return error;
  }
}
