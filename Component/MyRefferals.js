import React, { useEffect, useState } from "react";
import Link from "next/link";
import {useRouter} from 'next/router';
import axios from "axios";
import Arrow from "../public/arrow.svg";

const MyRefferal = () => {
  const [refferals, setRefferals] = useState();
  const router = useRouter();

  async function myrefferals() {
    try {
      let res = await axios.post("/api/myrefferals");
      const response = res.data;
      console.log(response, "to get the data from api");
      setRefferals(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    myrefferals();
  }, []);

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" id="ref-code">
              <h3 className="heading-text pink-text mt-2 ">
                  <span
                    className="arrows-icon"
                    id="left-rfset"
                    style={{
                      position: "relative",
                      left: "-44%",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Arrow.src} onClick={()=>router.back("/dashboard")} />
                  </span>
                My Referrals
              </h3>

              <table className="table funds-table mt-3" id="funds-color">
                <thead>
                  <tr>
                    <th id="fuds" scope="col">
                      Sr. No.
                    </th>
                    <th id="fuds" scope="col">
                      First Name
                    </th>
                    <th id="fuds" scope="col">
                      Last Name
                    </th>
                    <th id="fuds" scope="col">
                      Email
                    </th>
                    <th id="fuds" scope="col">
                      Refferal Code
                    </th>
                  </tr>
                </thead>

                 <tbody>
                          <tr>
                            <td className="">1</td>
                            <td>{refferals?.firstName} </td>
                            <td>{refferals?.lastName}</td>
                            <td>{refferals?.email}</td>
                            <td>{refferals?.refferalCode}</td>
                             {/* <td>
                              {new Date(refferals.regDate).toLocaleString("en-us", {
                                day: "numeric",
                                year: "numeric",
                                month: "numeric",
                              })}
                            </td> */}
                          </tr>
                        {/* );
                      })
                    : null} */}
                </tbody>

                {/* <tbody> */}
                  {/* {refferals
                    ? refferals?.map((item, i) => {
                        return ( */}
                          {/* <tr  */}
                          {/* // key={i} */}
                          {/* > */}
                            {/* <td className="">{i + 1}</td> */}
                            {/* <td>{refferals?.firstName} </td> */}
                            {/* <td>{item.lastName}</td> */}
                            {/* <td>{item.email}</td> */}
                            {/* <td>
                              {new Date(item.regDate).toLocaleString("en-us", {
                                day: "numeric",
                                year: "numeric",
                                month: "numeric",
                              })}
                            </td> */}
                          {/* </tr> */}
                        {/* );
                      })
                    : null} */}
                {/* </tbody> */}
              </table>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRefferal;

// const [data,setData] = useState()
//     async function getPeople(){
//         let resp = await axios.post('/api/refers')
//         console.log(resp.data.data)
//         setData(resp.data.data)
//     }
// useEffect(()=>{
//     getPeople()
// },[])
