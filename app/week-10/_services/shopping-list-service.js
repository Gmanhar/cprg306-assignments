import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items"); // path: /users/{userId}/items
    const q = query(itemsRef);
    const snapshot = await getDocs(q);

    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.error("Error fetching items from Firestore:", error);
  }

  return items;
}

export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items"); // path: /users/{userId}/items
    const docRef = await addDoc(itemsRef, item); // add item to Firestore
    return docRef.id; // return new document ID
  } catch (error) {
    console.error("Error adding item to Firestore:", error);
    throw error;
  }
}