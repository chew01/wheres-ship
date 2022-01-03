import db from './firebase.config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const shipRef = collection(db, 'ship-coordinates');

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

export default queryForShipCoordinates;
