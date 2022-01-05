import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const createAnonymousUser = () => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      console.log('auth');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      // test
    }
  });
};

export default createAnonymousUser;
