import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Component/ui/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { SSRProvider } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
// import Footer from '../Component/ui/Footer';

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
      <SSRProvider>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer/> */}
      </SSRProvider>
    </SessionProvider>
}

export default MyApp;
