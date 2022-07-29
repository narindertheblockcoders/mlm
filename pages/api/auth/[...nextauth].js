import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
    secret: "ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=",
  },
  providers: [
    CredentialsProviders({
      name: "Custom Provider",
      async authorize(credentials) {
        let { email, password } = credentials;
        console.log(credentials, "for credentials");
        let data = { email: email, password: password };
        console.log(data, "form email and password");
        let response = await axios.post(
          "http://192.168.1.5:2000/api/v1/auth/userLogIn",
          data
        );
        console.log(response, "response");
        let user = response.data;
        // console.log(user, "data for user")
        let token = response.data.data;
        // console.log(token, 'for token')

        if (!token) {
          throw new Error("Invalid token");
        }
        if (!(response.status == 200)) {
          throw new Error("Invalid Credentials");
        }
        if (response.status == 200) {
          return (user = {
            name: token,
            email: email,
          });
        }
      },
    }),
  ],
});
