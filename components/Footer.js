import Link from 'next/link';
import {BsFacebook} from 'react-icons/bs';
const FooterCom = () => {
    return (
        <>
           <div className="footer-sec1">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 mt-4 brside">
                           <div>
                               <h5>Other Links</h5>
                               <ul>
                                   <li><Link href="/"><a>Site Requriments</a></Link></li>
                                   <li><Link href="/"><a>User Agreement</a></Link></li>
                                   <li><Link href="/"><a>Privacy Policy</a></Link></li>
                               </ul>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4 brside">
                           <div>
                               <h5>Contact</h5>
                               <h5>Company</h5>
                               <p>24-25, 3rd street</p>
                               <p>A.P</p>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4 brside">
                           <div>
                               <h5>Email Us</h5>
                               <p>prathyusham432@gamil.com</p>
                           </div>
                       </div>
                       <div className="col-lg-3 mt-4">
                           <div>
                               <h5>Stay Connectd</h5>
                               <BsFacebook/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="footer-sec2">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                           <p>Copyright 2019 - company | All Rights Reserved</p>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default FooterCom
