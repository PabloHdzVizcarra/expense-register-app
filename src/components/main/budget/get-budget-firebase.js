import { db } from "../../../libs/firebase";

export async function getBudgetFromFirebase(uid) {
  try {
    const data = [];
    const querySnapshot = await db
      .collection(uid)
      .doc("budgets")
      .collection("budget")
      .get();

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data[0];
  } catch (error) {
    console.log(error);
    return [];
  }
}
