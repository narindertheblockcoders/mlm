import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinkPage = () => {
  const [usdAmt, setUsdAmt] = useState();
  const [name, setName] = useState(null);
  const router = useRouter();

  // async function tokenPrice() {
  //   try {
  //     let res = await axios.post("/api/mytoken");
  //     const response = res.data;
  //     console.log(response.data, "data to get");
  //     setUsdAmt(response.data);
  //   } catch (err) {
  //     console.log(err, err);
  //   }
  // }

  // useEffect(() => {
  //   tokenPrice();
  // }, []);

  function logoutHandler(event) {
    event.preventDefault();
    signOut();
  }

  // async function getUserData() {
  //   let data = await axios.post("api/userProfile");
  //   setName(data.data.data);
  // }

  // useEffect(()=>{
  // getUserData();
  //   },[])

  function onSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" onSubmit={onSubmitHandler}>
              <h3 className="funds-heading">Your Dashboard</h3>
              <h4 className="wel-text">
                {/* Welcome NAME ! */}{" "}
                <strong style={{ marginBottom: "10px !important" }}>
                  {" "}
                  Welcome {name?.firstName} !{" "}
                </strong>{" "}
                <br /> <br/>
                You're now part of a passionate community of health lovers &
                professionals ready to build and succeed in the new healthcare
                3.0.
                {/* Please find below your RXHEAL details. Watch out for our HealthiWealthi™ email updates. Questions?  */}
                {/* <a
                      href="/contact"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        color: "#D32286",
                        textDecoration:"none"
                      }}
                    >
                      {" "}
                      Contact us.
                    </a> */}
              </h4>

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

              <div className="col-head mt-3 " id="col-head">
                <h6 className="mb-0 mt-0" style={{ fontSize: "14px" }}>
                  {/* Share, inspire & earn using your Influencer Referral Link: https://healthy-wealthy.vercel.app?ref=4694016 */}
                  Share, inspire & earn using your Influencer Referral Link:
                  <strong style={{ fontSize: "0.8rem" }}>
                    {" "}
                    {/* http://rxheal.healthiwealthi.io/?ref= */}
                    {/* {props.session.user.email}{" "} */}
                  </strong>
                  <CopyToClipboard
                    // text={`http://rxheal.healthiwealthi.io/?ref=${props.session.user.email}`}
                    onCopy={() => {
                      notify("Copied Successfully");
                    }}
                  >
                    <img style={{ marginLeft: "0px" }} src={"/mdi.png"} />
                  </CopyToClipboard>{" "}
                </h6>
                <h6 className="mt-3 mb-4" style={{ fontSize: "14px" }}>
                  Questions?{" "}
                  <a
                    style={{ color: "black" }}
                    href=" https://healthiwealthi.io/contact-us"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Contact us
                  </a>{" "}
                  |{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://healthiwealthi.io/influencer-program/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Influencer Resources
                  </a>{" "}
                </h6>

                <div className="col-md-7 left-headSec">
                  <div className="link-head  " id="first-sec">
                    {/* <Link
                      href={
                        "https://healthiwealthi.io/the-healthiwealthi-solutions-free-course/"
                      }
                      target="_blank"
                      rel="noreferer"
                    >
                      <div className="link-item four-sec"> WATCH & LEARN</div>
                    </Link> */}

                    <Link href={"/userProfile"}>
                      <div
                        className="link-item first-sec first-set"
                        id="first-item "
                      >
                        PROFILE
                      </div>
                    </Link>

                    {/* <Link href={"/myRefferals"}> */}
                      <div className="link-item third-sec" id="sec-item" onClick={()=>router.push("/myRefferals")}>
                        MyREFFERALS DIRECTS
                        {/* TOKEN */}
                      </div>
                    {/* </Link> */}
                    <Link href={"/buy"}>
                      <div className="link-item five-sec" id="sec-item">
                        GEN TREE
                      </div>
                    </Link>
                    <Link href={"/changePassword"}>
                      <div className="link-item six-sec" id="seconds-item">
                        CHANGE PASSWORD
                      </div>
                    </Link>

                    <Link href={"/myrefers"}>
                      <div className="link-item seven-sec" id="thirds-item">
                        WALLLET
                      </div>
                    </Link>

                    <Link href={"/login"}>
                      <div
                        className="link-item second-sec "
                        onClick={logoutHandler}
                        id="thirds-item"
                      >
                        INCOME
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-md-2 right-profile">
                  <div className="input-line linkPage-line"></div>
                  <div className="wallet-box">
                    <h4 className="wallet-heading">Your Wallet</h4>
                  </div>

                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Coin Price</p>
                    </div>
                    <div>
                      <p className="wallet-amt">$ {usdAmt?.coinPrice} </p>
                    </div>
                  </div>

                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Locked</p>
                    </div>
                    <div>
                      <p className="wallet-amt"> {usdAmt?.locked} RXHEAL</p>
                    </div>
                  </div>

                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Available Token</p>
                    </div>
                    <div>
                      <p className="wallet-amt">
                        {" "}
                        {usdAmt?.availableToken} RXHEAL
                      </p>
                    </div>
                  </div>
                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Total</p>
                    </div>
                    <div>
                      <p className="wallet-amt"> {usdAmt?.total} RXHEAL</p>
                    </div>
                  </div>

                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Total Value</p>
                    </div>
                    <div>
                      <p className="wallet-amt">$ {usdAmt?.totalValue} </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

};

export default LinkPage;






// return (
//   <div>
//     <section className="profile-sec">
//       <div className="container">
//         <div className="row justify-content-center">
//           <form className="funds-sec" onSubmit={onSubmitHandler}>
//             <h3 className="funds-heading">Your Dashboard</h3>
//             <h4 className="wel-text">
//               {" "}
//               Welcome <strong> {name?.firstName} </strong>{" "}
//               <br/>Please find below
//               your MLM details. Watch out for our MLM™
//               email updates. Questions?<br/>
//               <a
//                 href="/contact"
//                 style={{
//                   fontWeight: "bold",
//                   fontSize: "15px",
//                   color: "#515151",
//                   textDecoration: "none",
//                 }}
//               >
//                 {" "}
//                 Contact us.
//               </a>
//             </h4>

//             <div className="col-head" id="col-head">
//               <div className="col-md-7 left-headSec">
//                 <div className="link-head  " id="first-sec">
//                   <div
//                     className="link-item first-sec"
//                     onClick={() => router.push("/userProfile")}
//                   >
//                     PROFILE
//                   </div>

//                     <div
//                       className="link-item third-sec first-set"
//                       id="first-item "
//                       onClick={() => router.push("/funds")}
//                     >
//                       FUNDS
//                     </div>
//                     <div 
//                     className="link-item four-sec" 
//                     id="sec-item"
//                     onClick={()=>router.push("/changePassword")}>
//                       CHANGE PASSWORD
//                     </div>
//                     <div 
//                     className="link-item five-sec" 
//                     id="four-item"
//                     onClick={()=>router.push("/buy")}>
//                       BUY TOKEN
//                     </div>

//                     <div className="link-item six-sec" id="third-item">
//                       TOKEN
//                     </div>
//                   <div
//                     className="link-item second-sec "
//                     onClick={logoutHandler}
//                     id="second-item"
//                   >
//                     LOGOUT
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-2 right-profile">
//                 <div className="input-line linkPage-line"></div>
//                 <div className="wallet-box">
//                   <h4 className="wallet-heading">Your Wallet</h4>
//                 </div>

//                 <div className="wallet-box1">
//                   <div>
//                     <p className="wallet-para">Coin Price</p>
//                   </div>
//                   <div>
//                     <p className="wallet-amt">$ 0.01 </p>
//                   </div>
//                 </div>

//                 <div className="wallet-box1">
//                   <div>
//                     <p className="wallet-para">Locked</p>
//                   </div>
//                   <div>
//                     <p className="wallet-amt"> {usdAmt?.totalToken} AYEWA</p>
//                   </div>
//                 </div>

//                 <div className="wallet-box1">
//                   <div>
//                     <p className="wallet-para">Available Token</p>
//                   </div>
//                   <div>
//                     <p className="wallet-amt">
//                       {" "}
//                       {usdAmt?.availableToken} AYEWA
//                     </p>
//                   </div>
//                 </div>
//                 <div className="wallet-box1">
//                   <div>
//                     <p className="wallet-para">Total</p>
//                   </div>
//                   <div>
//                     <p className="wallet-amt"> {usdAmt?.totalToken} AYEWA</p>
//                   </div>
//                 </div>

//                 <div className="wallet-box1">
//                   <div>
//                     <p className="wallet-para">Total Value</p>
//                   </div>
//                   <div>
//                     <p className="wallet-amt">$ {usdAmt?.totalUsdAmount} </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3"></div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   </div>
// );