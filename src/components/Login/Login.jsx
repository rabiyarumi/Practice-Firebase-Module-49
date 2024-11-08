import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleHithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
    .then((result) => {
        console.log(result.user);
        setUser(result.user);
    })
    .catch(error => console.log(error))

  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
        console.log("Sign out ")
        alert("are sure you want to Signed Out?");
        setUser(null)
        
    })
    .catch((error)=> console.log(error))
  }
  return (
    <div className="w-2/3 h-2/3 m-auto text-center font-bold  my-20">
      <p className="text-3xl mb-8"> Sign-up</p>

      {user && <div className="p-4 border border-blue-300 w-fit text-left mx-auto my-8">
        <img src={user.photoURL} alt="" className="rounded-full"/>
        <p >{user.displayName}</p>
        <p>{user.email}</p>
        </div>}

        {
            user ? <p onClick={handleSignOut} className="btn btn-outline">Sign Out</p>
            :
           <>
            <p onClick={handleGoogleSignIn} className="btn btn-outline mr-4">
            Sign in with Google
          </p>
            <p onClick={handleHithubSignIn} className="btn btn-outline">
            Sign in with Github
          </p>
           </>
    
        }
        

    </div>
  );
};

export default Login;
