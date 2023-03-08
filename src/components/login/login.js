import React,{useEffect,useState} from 'react';
import Buttons from '../../buttons';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [usersList,setUsersList] = useState([]);
  const [showMessage,setShowMessage] = useState(undefined);
  useEffect(() => {
    let userListClone = usersList.slice(0);
    let fetchUsers = localStorage.getItem("Users");
    let dataInJSON = JSON.parse(fetchUsers);
    if (dataInJSON) {
        userListClone = dataInJSON;
        setUsersList(userListClone);
    }
}, []);
useEffect(() => {
  console.log(showMessage);

  if (showMessage == "You have logged in successfully!") {
      let authenticatedUser = { email, password };
      let dataInStr = JSON.stringify(authenticatedUser);
      localStorage.setItem("AuthenticatedUser", dataInStr);
      window.location.reload();
    }
  },[showMessage]);
      // Note: Function to login user..!
      const logInUser = () => {
        let user = {
            email,
            password
        };
        // console.log(user);

        for (let i = 0; i < usersList.length; i++) {
            // console.log(usersList[i]);

            if (
                usersList[i].email == user.email &&
                usersList[i].password == user.password
            ) {
                setShowMessage("You have logged in successfully!");
                break;
            }

            else if (
                usersList[i].email == user.email &&
                usersList[i].password != user.password
            ) {
                setShowMessage("Password does not matched!");
                break;
            }

            else setShowMessage("User does not exist!");
        };
    };
      return (
        <>
    Email<input/><br></br>
    Password<input/><br></br>
<Buttons/>
    </>
  )
}

export default Login