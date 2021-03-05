import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import TheContext from "../TheContext";
import actions from "../api";
// import User from "../../../backend/models/User";

function EditProfile(props) {
  const history = useHistory();

  const { user } = React.useContext(TheContext);
  console.log("USER DATA FROM CONTEXT", user);

  const [thisUser, setThisUser] = useState([user]);

  const handleChange = (e) => {
    setThisUser({
      ...thisUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    actions
      .getOneUser()
      .then((thisUserDbData) => {
        console.log("THIS USER DB DATA", thisUserDbData);
        setThisUser(thisUserDbData.data);
      })
      .catch(console.error);
  }, []);

  console.log("after getting from DB and setting state", thisUser);

  const submit = (e) => {
    e.preventDefault();


    console.log(thisUser, "from inside submit function");

    actions.addUserProf(thisUser)
    .then(newUserUpdate => {
        console.log('new new user update!', newUserUpdate)
        //Redirect to all-posts page
        alert('Profile Saved')
    }).catch(console.error)
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={submit}>
        <label>
          {" "}
          Username{" "}
          <input onChange={handleChange} name="userName" placeholder={thisUser.userName}></input>
        </label>
        <br />
        <label>
          {" "}
          First Name{" "}
          <input onChange={handleChange} name="given_name" placeholder={thisUser.given_name}></input>
        </label>
        <br />
        <label>
          {" "}
          Last Name{" "}
          <input onChange={handleChange} name="family_name" placeholder={thisUser.family_name}></input>
        </label>
        <br />
        <label>
          {" "}
          Email <input onChange={handleChange} name="email" placeholder={thisUser.email}></input>
        </label>
        <br />
        <label>
          {" "}
          Bio <input onChange={handleChange} name="userAbout" placeholder={thisUser.userAbout}></input>
        </label>
        <br />
        <label>
          {" "}
          Twitter{" "}
          <input onChange={handleChange} name="userTwitter" placeholder={thisUser.userTwitter}></input>
        </label>
        <br />
        <label>
          {" "}
          Instagram{" "}
          <input
            onChange={handleChange} name="userInstagram"
            placeholder={thisUser.userInstagram}
          ></input>
        </label>
        <br />
        <label>
          {" "}
          SoundCloud{" "}
          <input
            onChange={handleChange} name="userSoundCloud"
            placeholder={thisUser.userSoundCloud}
          ></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
