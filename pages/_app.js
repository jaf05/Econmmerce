
import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 export default function MyApp({ Component, pageProps }) {
  return ( <> 
    <Component {...pageProps} />
<ToastContainer
position="top-right"
autoClose={6000}
hideProgressBar
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover/>
    
    </>
  );


  }
