import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider();

const authenticate = async () => {
  const auth = getAuth();
  const result = await signInWithPopup(auth, provider);
  try{
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user;
    console.log('user: ', user);
    console.log('credential: ', credential);
    return { credential, user };
  } catch(error) {
    console.log('Error code: ', error.code)
    console.log(error.message);
  }
}

export default authenticate;