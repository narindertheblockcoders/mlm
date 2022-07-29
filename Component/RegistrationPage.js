import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}

const RegistrationPage = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const refferalCodeInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingRef, setLoadingRef] = useState(false);
  const [error, setError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [isPasswordValid, setIsPasswordValid]= useState(false);
  const router = useRouter();

  async function registrationPage(data) {
    try {
      let res = await axios.post("/api/registrationpage", data);
      const response = res.data;
      console.log(response, "to check the data from api");
      notify("User Created Successfully");
      setError(false);
      setVerify(true);
      setIsLoading(true);
      setLoadingRef(true);
      setTimeout(() => {
      router.push("/login") 
      }, 1500);
    } catch (err) {
      // console.log(err, err);
      notifyError("User Already Exist");
      setError(true);
      setVerify(false);
      setIsLoading(false);
      setLoadingRef(false);
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    setIsLoading(true);
    setLoadingRef(true);

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;
    const refferalCode = refferalCodeInputRef.current.value;

    if (!(password == confirmPassword)) {
      setIsLoading(false);
      setLoadingRef(false);
      notifyError("Password Doesn't Match");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      refferalCode,
    };

    if (!regularExpression.test(password)) {
      setIsPasswordValid(true);
      setLoadingRef(false);
      setIsLoading(false);
      return false;
    }

    console.log(data, "data entered by the user");

    registrationPage(data);
  }

  /////////////Toast//////////////////////
  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoadingRef(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoadingRef(false);

  return (
    <div>
      <section className="profile-sec pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <form className="input-sec mb-5" onSubmit={formSubmitHandler}>
              <div className="line userprofile-line"></div>
              <h3 className="heading-text pink-text mt-2 mb-5" id="mb-mar">
                Create New Profile
              </h3>

              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">FIRST NAME</h6>
                  <input
                    ref={firstNameInputRef}
                    className="textinput"
                    type="text"
                    name="first-name"
                  />
                </div>

                <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                >
                  <h6 className="item-text">LAST NAME</h6>
                  <input
                    ref={lastNameInputRef}
                    className="textinput"
                    type="text"
                    name="last-name"
                  />
                </div>
              </div>

              <div className="name-sec">
                <div className="input-item item-set">
                  <h6 className="item-text">EMAIL</h6>
                  <input
                    ref={emailInputRef}
                    className="textinput"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">PASSWORD</h6>
                <input
                  ref={passwordInputRef}
                  className="textinput"
                  type="password"
                  name="Password"
                  autoComplete="off"
                />
                {isPasswordValid && (
                  <Alert variant={"danger"}>
                    Your password must be at least 8 characters long, should
                    contain at least one number and special character have a
                    mixture of uppercase and lowercase letters.
                  </Alert>
                )}
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CONFIRM PASSWORD</h6>
                <input
                  ref={confirmPasswordInputRef}
                  className="textinput"
                  name="confirmPassword"
                  type="password"
                  autoComplete="off"
                />
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">REFERRAL CODE</h6>
                <input
                  ref={refferalCodeInputRef}
                  className="textinput"
                  name="referralCode"
                  type="number"
                />
              </div>
              {error && (
                <p style={{ color: "red", fontSize: "15px", margin: "0" }}>
                  {" "}
                  User Already Exit{" "}
                </p>
              )}
              {verify && (
                <p style={{ color: "green", fontSize: "15px", margin: "0" }}>
                  {" "}
                  User Signed In Successfully{" "}
                </p>
              )}
              <Button
                variant="primary"
                className="btn btn-round btn-warning w-100 p-0 "
                style={{ marginTop: "5px" }}
                type="submit"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {loadingRef ? "Loading…" : "   Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
