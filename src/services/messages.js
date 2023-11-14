import db from "../firebase";
import { collection, getDocs, addDoc, onSnapshot, doc, Timestamp } from "firebase/firestore";

export async function getMessages() {
  const messagesCollection = collection(db, 'messages');
  const messageDocs = await getDocs(messagesCollection);
  const messageList = messageDocs.docs.map(doc => doc.data());
  return messageList;

}

export async function sendMessage(message, curUser) {
  const messagesCollection = collection(db, 'messages');
  const user = {
    uid: curUser.uid,
    photoURL: curUser.photoURL,
    name: curUser.displayName,
  }

  const docRef = await addDoc(messagesCollection, { message, user, created: Date.now()} );
  return docRef;
}

export function ObserveMessages(callback) {
  onSnapshot(doc(db, 'messages', 'SF'), {
    includeMetadataChanges: true,
  } ,callback)
}