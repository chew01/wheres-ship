import db from './firebase.config';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
  getDoc,
  orderBy,
  limit,
} from 'firebase/firestore';

const shipRef = collection(db, 'ship-coordinates');
const userRef = collection(db, 'users');

const queryForShipCoordinates = async (queryObject) => {
  const q = query(shipRef, where('name', '==', queryObject.queryShip));
  let queryShip, queryCoords;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    queryShip = doc.data().name;
    queryCoords = doc.data().coords;
  });
  if (
    Math.abs(queryCoords[0] - queryObject.queryCoords[0]) < 25 &&
    Math.abs(queryCoords[1] - queryObject.queryCoords[1]) < 25
  )
    return queryShip;
  return null;
};

const queryForRandomShips = async (count) => {
  const randomNumbers = [];
  while (randomNumbers.length < count) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  const result = [];
  const q = query(shipRef, where('index', 'in', randomNumbers));
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => result.push(doc.data().name));
  return result;
};

const startTime = async () => {
  const newUser = await addDoc(userRef, {
    startTime: Timestamp.now(),
  });
  return newUser.id;
};

const endTime = async (uid) => {
  await updateDoc(doc(db, 'users', uid), {
    endTime: Timestamp.now(),
  });
};

const getTimeInSeconds = async (uid) => {
  const userData = await getDoc(doc(db, 'users', uid));
  const startTimeInSeconds = userData.data().startTime.seconds;
  const endTimeInSeconds = userData.data().endTime.seconds;
  const timeTakenInSeconds = endTimeInSeconds - startTimeInSeconds;
  await updateDoc(doc(db, 'users', uid), {
    timeTaken: timeTakenInSeconds,
  });
  return timeTakenInSeconds;
};

const setName = async (uid, name) => {
  await updateDoc(doc(db, 'users', uid), {
    username: name,
  });
};

const findTopTenFastest = async () => {
  const topTen = [];
  const q = query(
    userRef,
    orderBy('timeTaken'),
    orderBy('username'),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const name = doc.data().username;
    const timing = doc.data().timeTaken;
    const entry = { name, timing };
    topTen.push(entry);
  });
  return topTen;
};

export {
  queryForShipCoordinates,
  queryForRandomShips,
  startTime,
  endTime,
  getTimeInSeconds,
  setName,
  findTopTenFastest,
};
