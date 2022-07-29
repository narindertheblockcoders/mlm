import axios from "axios";
import {getSession} from 'next-auth/react';

export default async function handler(req, res){ 
  const session = await getSession({req})
  if (req.method === "POST") {
    try {
      const data= req.body;
      console.log(data, 'data to send to api')
      var config = {
        method: "post",
        url:  "http://192.168.1.5:2000/api/v1/member/changePassword",
        headers: {
          Authorization: `Bearer ${session.user.name} `,
        },
        data:data
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data });
      });


      // res.status(200).json({ data: reference });
    } catch (err) {
      // console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}




