
//firebase sdk

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//firebase hooks

import { useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyALvxlohJ9hI7gKyhb2t69vxzCN9Tad9Zg",
  authDomain: "waterlevelmonitor-ca990.firebaseapp.com",
  projectId: "waterlevelmonitor-ca990",
  storageBucket: "waterlevelmonitor-ca990.appspot.com",
  messagingSenderId: "104980360186",
  appId: "1:104980360186:web:11942dbafb5212e1bb1243",
  measurementId: "G-TZC1HP95KH"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user?< DispInfo /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle=() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function DispInfo(){
  const infoGen = firestore.collection('levelnfo')
  const query =infoGen.orderBy('createdAt').limit(25);

  const [readings] = useCollectionData(query,{idField:'id'});
  return(
    <>
      <div>
        { readings && readings.map(rding => < ShowValue  key={rding.id} reading={rding}/>)}
      </div>
    </>
  )
}
function ShowValue(props){
  const{ text,uid} =props.reading;
  return (
    <>
        <h1>hello</h1>
        <p>{text}</p>
    </>

  );
}
export default App;
