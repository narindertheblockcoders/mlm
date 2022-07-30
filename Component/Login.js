import axios from "axios";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [error, setError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }


  async function formSubmitHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || email.trim() == " " || !password) {
      notifyError("Please Check the credentials");
      setError(true);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res);
    if (res?.error) {
      // setError(res.error);
      console.log(res.error);
      // setValid(true);
      notifyError("Invalid login details. Please try again or signup below.");
      setIsLoading(false);
    }
    if (!res.error) {
      console.log(res);
      setLoadingRef(true);
      setIsLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
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
        setLoadingRef(true);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoadingRef(false);

  return (
    <div>
      <section className="profile-sec  ">
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
              className="input-sec input-top"
              id="form-setik"
              onSubmit={formSubmitHandler}
            >
              <div className="input-line iptset-line" id="login-line"></div>
              {/* <img src="/Ayewalogo.png" className="mt-2 " /> */}
              <h3 className="heading-text mt-3"> MLM™ LOGIN</h3>
              <p style={{ fontSize: "13px", paddingTop: "7px", margin: "0" }}>
                {" "}
                Unleash your potential on MLM™ living healthier, happier,
                longer, and richer.
              </p>

              <div className="input-item">
                <h6 className="item-text">EMAIL</h6>
                <input
                  className="textinput"
                  // required
                  type="email"
                  name="email"
                  ref={emailInputRef}
                  autoComplete="off"
                />
              </div>

              <div
                className="input-item"
                style={{ marginTop: "25px", marginBottom: "30px" }}
              >
                <h6 className="item-text">PASSWORD</h6>
                <input
                  className="textinput"
                  // required
                  type="password"
                  name="last-name"
                  ref={passwordInputRef}
                />
              </div>
              {error && (
                <p style={{ color: "red", margin: "0", fontSize: "15px" }}>
                  {" "}
                  Invalid login details. Please try again or signup below.{" "}
                </p>
              )}
              {/* {verify && (
                <p style={{ color: "green", margin: "0", fontSize: "15px" }}>
                  {" "}
                  User LoggedIn Successfully.{" "}
                </p>
              )} */}
              {/* <Link href={"/creditPage"}> */}
              <Button
                variant="primary"
                className="btn btn-round btn-warning w-100 p-0 "
                style={{ marginTop: "5px" }}
                type="submit"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoadingRef ? "Loading…" : "   CONTINUE"}
              </Button>

              {/* </Link> */}
              <p className="by-text mb-0">
                {" "}
                By continuing you agree to our cookie policy.
              </p>
              <Link href={"/emailVerify"}>
                <p
                  className="by-text"
                  style={{
                    cursor: "pointer",
                    marginTop: "5px",
                    fontSize: "13px",
                    color: "#2990DF",
                  }}
                >
                  {" "}
                  Forget Your Password
                </p>
              </Link>

              <div className="para-set">
                <Link href={"/"}>
                  <p className="iptpara-text">
                    Are you new here?{" "}
                    <a
                      href="home-page.html"
                      style={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        color: "#515151",
                      }}
                    >
                      Sign Up
                    </a>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

