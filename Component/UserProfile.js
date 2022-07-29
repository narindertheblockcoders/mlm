import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Arrow from "../public/arrow.svg";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
}



const UserProfile = () => {

  const firstNameRef =useRef()
  const lastNameRef = useRef()
  const  emailRef =useRef()
  const contactNumberRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const countryRef = useRef()
  const zipCodeRef = useRef()
  const [verify, setVerify]=useState(false)
  const [firstName, setFirstName]= useState()
  const [lastName, setLastName]= useState()
  const [contactNumber, setContactNumber]= useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [country, setCountry]= useState()
  const [state, setState]= useState()
  const [zipcode, setZipcode]=useState()
  const [isLoadingRef, setLoadingRef] = useState(false);
  const [isLoading,setIsLoading]= useState(false)
  const [email, setEmail] = useState();
  const router = useRouter()
  
  async function getUserProfile() {
    try {
      // const token = localStorage.getItem('token')
      // console.log(token, "to get the token from the localStora`ge")
      let res = await axios.post("/api/getUserProfile");
      const response = res.data;
      // setIsFinalData(response.data)
      // console.log(isFinalData, "final data here for you")
      setFirstName(response.data?.firstName)
      setLastName(response.data?.lastName)
      setEmail(response.data?.email)
      setContactNumber(response.data?.contactNumber)
      setAddress(response.data?.address)
      setCity(response.data?.city)
      setCountry(response.data?.country)
      setState(response.data?.state)
      setZipcode(response.data?.zipCode)
    } catch (err) {
      console.log(err, err);
    }
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  
  
  async function userData(data) {
    try {
      const token = localStorage.getItem("token")
      console.log(token, "to get the token");
      let res = await axios.post("/api/updateUserProfile",{token:token,data});
      const request = res.data;
      console.log(request.data, 'data fet');
      notify ('User Detail Updated')
      // setIsFinalData(request.data)
      setIsLoading(true)
      setVerify(true)
      setLoadingRef(true)
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
      
    } catch (err) {
      console.log(err, err);
      setIsLoading(false)
      setLoadingRef(false)
      notifyError('Invalid Detail')
    }
  }


  function formSubmitHandler(event) {
    event.preventDefault();
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const contactNumber = contactNumberRef.current.value
    const address = addressRef.current.value
    const city = cityRef.current.value
    const state = stateRef.current.value
    const country = countryRef.current.value
    const zipCode = zipCodeRef.current.value

    const data = {
      firstName,
      lastName,
      email,
      contactNumber,
      address,
      city,
      state,
      country,
      zipCode
    }

    console.log(data, "data entered by user")

    userData(data)

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
            <form className="input-sec mb-5"
             onSubmit={formSubmitHandler}
             >
              <div className="line userprofile-line" ></div>
              <h3 className="heading-text pink-text mt-2 mb-5" id="mb-mar">
                <Link href={'/dashboard'}>
                  <span className="arrows-icon" style={{ position: "relative", left: "-23%", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Complete Profile</h3>

              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">FIRST NAME</h6>
                  <input
                  ref={firstNameRef}
                    // required
                    defaultValue={firstName}
                    onChange={(e)=>setFirstName(e.currentTarget.value)}
                    className="textinput"
                    type="name"
                    name="username"
                    // placeholder={isFinalData?.firstName}

                  />
                </div>

                <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                >
                  <h6 className="item-text">LAST NAME</h6>
                  <input
                  ref={lastNameRef}
                    // required
                   defaultValue={lastName}
                   onChange={(e)=>setLastName(e.currentTarget.value)}
                    className="textinput"
                    type="last name"
                    name="last-name"
                  />
                </div>
              </div>
           
              <div className="name-sec" >
                {/* <h6 className="item-text">EMAIL</h6> */}
                <div className="input-item item-set" style={{ marginRight: "10px", display: "flex" }} >
                  <input style={{    borderRadius: "4px 0 0 4px"}} ref={emailRef} disabled  required className="textinput mt-0" name="email" 
                  value={email}
                  // defaultValue={isFinalData?.email} 
                   />
                  <Link href={'/emailChange'}>

                    <button type="button" className="btn btn-roundes  btn- w-50  mt-0 ">
                      MODIFY
                    </button>
                  </Link>

                </div>
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CONTACT NUMBER</h6>
                <input ref={contactNumberRef}  
                // required  
                value={contactNumber}
                onChange={(e)=>setContactNumber(e.currentTarget.value)}
                // placeholder={isFinalData?.contactNumber} 
                className="textinput" name="contact no" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">ADDRESS</h6>
                <input  ref={addressRef} required 
                value={address}
                onChange={(e)=>setAddress(e.currentTarget.value)}

                // placeholder={isFinalData?.address} 
                className="textinput" name="address" />
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CITY</h6>
                <input ref={cityRef}  required 
                value={city}
                onChange={(e)=>setCity(e.currentTarget.value)}
                // placeholder={isFinalData?.city} 
                className="textinput" name="city" />
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">STATE/PROVINCE</h6>
                <input ref={stateRef} required
                value={state}
                onChange={(e)=>setState(e.currentTarget.value)}
                // placeholder={isFinalData?.state} 
                className="textinput" name="state" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text"> COUNTRY </h6>
                <input ref={countryRef} required 
                  value={country}
                  onChange={(e)=>setCountry(e.currentTarget.value)}
                // placeholder={isFinalData?.country} 
                className="textinput" name="country" />
              </div>

              <div className="input-item item-set mb-4">
                <h6 className="item-text">ZIP Code</h6>
                <input ref={zipCodeRef} required 
                value={zipcode}
                onChange={(e)=>setZipcode(e.currentTarget.value)}
                // placeholder={isFinalData?.zipcode} 
                className="textinput" name="zip code" />
              </div>
      {verify && (
                    <p style={{ color: "green", fontSize:"15px",  margin:"0" }}> User Detail Updated </p>
                  )}
              <Button
      variant="primary"
      className="btn btn-round btn-warning w-100 p-0 "
      style={{ marginTop: "5px" }}
      type="submit"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoadingRef ? 'Loading…' : '   UPDATE'}
    </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
