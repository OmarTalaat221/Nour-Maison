
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const createChatForBooking = async (bookingId, bookingData) => {
  // 1) document الرئيسي بتاع الشات
  const chatRef = doc(db, "chats", bookingId.toString());

  await setDoc(
    chatRef,
    {
      bookingNumber: `${bookingId}`,
      customerName: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email,
      date: bookingData.date,
      time: bookingData.time?.value || bookingData.time,
      seats: bookingData.seats?.value || bookingData.seats,
      createdAt: serverTimestamp(),
      lastMessage: "New booking created",
      lastUpdated: serverTimestamp(),
      status: "new", // تقدر تستغلها في لوحة الأدمن
    },
    { merge: true }
  );

  // 2) رسالة ترحيب أولى في سب كوليكشن messages
  const messagesRef = collection(chatRef, "messages");

  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  await addDoc(messagesRef, {
    sender: "cafe",
    name: "Nour Maison",
    type: "text",
    text: "Hello! We received your booking. If you want to update any details, just reply here 💚",
    time: timeString, // لعرض الوقت في UI
    createdAt: serverTimestamp(),
  });
};

export default createChatForBooking;
