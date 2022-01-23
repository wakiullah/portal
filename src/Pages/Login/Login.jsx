import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginActions } from "../../Store/Slices/LoginContext";
import { NoticeAction } from "../../Store/Slices/NotificationContext";
import "./Login.css";
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [haveAccount, setHaveAccount] = useState(true);
  const EmailRef = useRef();
  const PassRef = useRef();
  const NameRef = useRef();
  const changeTypeHandler = () => {
    setHaveAccount((prev) => !prev);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = EmailRef.current.value;
    const enteredPassword = PassRef.current.value;
    // const enteredName = NameRef.current.value;
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      dispatch(
        NoticeAction.setNotice({
          notice: "Please fill inputs by your info!",
          noticeType: "error",
        })
      );
      return;
    }

    let url;

    if (!haveAccount) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyqaeVYBGJB7cmwUs7SaA0fkbldc6AOMI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyqaeVYBGJB7cmwUs7SaA0fkbldc6AOMI";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            let message = "Faild To Fetch";
            if (error && error.error && error.error.message) {
              message = error.error.message;
            }
            throw new Error(message);
          });
        }
      })
      .then((data) => {
        window.localStorage.setItem("loginToken", data.idToken);
        dispatch(LoginActions.logInHandler({ token: data.idToken }));
        navigate("/dashboard/dashboard", { replace: true });
        console.log("logedin");
        let message;
        if (!haveAccount) {
          message = "Congratulations! Account Created!";
        } else {
          message = "Logged In!";
        }

        dispatch(
          NoticeAction.setNotice({ notice: message, noticeType: "success" })
        );
      })
      .catch((error) => {
        dispatch(
          NoticeAction.setNotice({ notice: error.message, noticeType: "error" })
        );
      });
  };

  return (
    <section className="login">
      <div className="container mx-auto h-screen grid place-items-center w-full">
        <div className="bg-gray-100 px-8 shadow-lg w-1/3 p-9">
          <h2 className="text-center text-2xl font-medium text-cyan-500 mb-6">
            {haveAccount ? "LogIn" : "Create Account"}
          </h2>
          <form onSubmit={formSubmitHandler}>
            {!haveAccount && (
              <>
                <label htmlFor="Email" className="block text-lg mb-3 ">
                  Your Name:
                </label>
                <input
                  ref={NameRef}
                  type="text"
                  id="Email"
                  className="w-full border-y-2 shadow-inner shadow-inherit text-lg outline-none px-2 h-8 mb-3 rounded-sm"
                />
              </>
            )}
            <label htmlFor="Email" className="block text-lg mb-3">
              Your Email:
            </label>
            <input
              type="email"
              id="Email"
              ref={EmailRef}
              className="w-full text-lg outline-none border-y-2 px-2 h-8 rounded-sm"
            />
            <label htmlFor="Password" className="block text-lg mb-3 mt-4">
              Your password:
            </label>
            <input
              type="password"
              id="Password"
              ref={PassRef}
              className="w-full h-8 border-y-2 rounded-sm outline-none px-2"
            />
            <button
              type="submit"
              className="px-9 hover:bg-cyan-600 py-1 block mt-4 mx-auto bg-cyan-500 rounded-sm cursor-pointer"
            >
              {haveAccount ? "LogIn" : "Create"}
            </button>
          </form>
          <p
            className=" mt-4 inline-block cursor-pointer underline"
            onClick={changeTypeHandler}
          >
            {haveAccount ? "Create Account!" : "Already have Account?"}
          </p>
        </div>
      </div>
    </section>
  );
};
export default LogIn;
