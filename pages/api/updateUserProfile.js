import axios from "axios";
import {getSession} from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({req})
  if (req.method === "POST") {
    try {
      // const {token} = req.body;
      const {data} = req.body;
      console.log(data, "to send the data to api");
      var config = {
        method: "post",
        url: "http://192.168.1.5:2000/api/v1/member/updateUserProfile",
        headers: {
          'Authorization': `Bearer ${session.user.name}`
        },data,
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
