import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import changePassword from "../pages/changePassword";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Arrow from "../public/arrow.svg";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const ChangePassword = () => {
  const oldPasswordInputRef = useRef();
  const newPasswordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const sendCodeInputRef = useRef();
  const [error, setError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);
  const router = useRouter();

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }

  async function sendcode() {
    try {
      let res = await axios.post("/api/sendCodeCP");
      const response = res.data;
      console.log(response, "to get the data from api");
      notify("Verificatoin Code Send Successfully");
    } catch (err) {
      console.log(err)
      notifyError("Something Went Wrong to send the Verification Code");
    }
  }

  function onClickHandler(event) {
    event.preventDefault();

    const oldPassword = oldPasswordInputRef.current.value;
    const newPassword = newPasswordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    if (!oldPassword || !newPassword || !confirmPassword) {
      notifyError("Please fill all the details");
      return;
    }

    if (!(newPassword === confirmPassword)) {
      notifyError("Password doesn't match");
      return;
    }

    if (oldPassword === newPassword) {
      notifyError("Old Password and New Password can't be same");
      return;
    }
    sendcode();
  }

  async function changePassword (data) {
    try{
      let res = await axios.post ("/api/changepassword",data);
      const response = res.data;
      console.log(response,"to check the whether working or not")
      notify("Password Changed Successfully");
      setTimeout(() => {
        router.push("/dashboard");
      },1000);
    }
    catch(err) {
      notifyError("Wrong Verification Code")
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const oldPassword = oldPasswordInputRef.current.value;
      const newPassword = newPasswordInputRef.current.value;
      const confirmPassword = confirmPasswordInputRef.current.value;
      const otp = sendCodeInputRef.current.value;
      
      if (!(newPassword === confirmPassword)) {
        notifyError("Password doesn't match");
        setError(true);
        return;
      }
      const data = {
        oldPassword,
        newPassword,
        confirmPassword,
        otp,
      };

      console.log(data, "data entered by the user");
    
      changePassword(data);
    }

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
        setLoadingRef(true);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoadingRef(false);

  return (
    <div>
      <section className="profile-sec">
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
            <form
              className="input-sec"
              id="form-setting"
              onSubmit={formSubmitHandler}
            >
              <div className="line profile-line" id="ch-line"></div>
              <h3 className="heading-text pink-text mt-2 ">
                <Link href={"/dashboard"}>
                  <span
                    className="arrows-icon"
                    style={{
                      position: "relative",
                      left: "-23%",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Change Password
              </h3>

              <div className="input-item item-set mt-5">
                <h6 className="item-text">OLD PASSWORD</h6>
                <input
                  ref={oldPasswordInputRef}
                  required
                  className="textinput"
                  type="password"
                  name="password"
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">NEW PASSWORD</h6>
                <input
                  ref={newPasswordInputRef}
                  required
                  className="textinput"
                  type="password"
                  name="password"
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CONFIRMPASSWORD</h6>
                <input
                  ref={confirmPasswordInputRef}
                  required
                  className="textinput"
                  type="password"
                  name="confirmpassword"
                />
                {error && (
                  <p style={{ color: "red" }}> Password doesn't match </p>
                )} 
                 {verify && (
                  <p style={{ color: "green" }}> Password doesn't match </p>
                )}
              </div>
              <div style={{ float: "left", width: "100%", marginTop: "10px" }}>
                <p style={{ margin: "0", fontSize: "15px", marginTop: "15px" }}>
                  Click SEND CODE, check your inbox, enter the verification code
                  and click UPDATE.
                </p>
              </div>
              <div
                className="name-sec mb-5 mt-0"
                style={{ marginTop: "0px !important" }}
              >
                <div
                  className="input-item item-set mt-0"
                  id="item-value"
                  style={{
                    marginRight: "10px",
                    display: "flex",
                    marginTop: "0px !important",
                  }}
                >
                  <input
                    className="textinput w-50       "
                    type="number"
                    name="username"
                    style={{ borderRadius: " 10px 0 0 10px !important" }}
                    ref={sendCodeInputRef}
                  />
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="btn btn-roundes  btn- w-50   "
                    style={{}}
                  >
                    Send Code
                  </button>
                </div>
              </div>
              {error && (
                <p style={{ color: "red", fontSize: "15px", margin: "0px" }}> 
                Password doesn't match </p>
              )}
              {verify && (
                <p style={{ color: "green", fontSize: "15px", margin: "0" }}>
                  Change Successfuly{" "}
                </p>
              )}
              <Button
                variant="primary"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "0px", marginBottom: "0px" }}
                type="submit"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoadingRef ? "Loading…" : "     UPDATE"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
