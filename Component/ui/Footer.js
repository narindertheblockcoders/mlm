import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer class="footer-head py-3 " id='footer-set' style={{display:"flex", justifyContent:"center"}}>
    {/* <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">© 2022 HealthiWealthi™. </a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">All rights reserved | <a href="#" class="systeme-show-popup-3443593">Contact us </a> </a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"></a></li>

      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">    
</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">     Privacy Policy | Terms of Use | Cookie Policy (see links on ico page)
</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">All rights reserved</a></li>
    </ul> */}
    <p class="text-center text-muted">© 2022 HealthiWealthi™. All rights reserved | <a href="#" className="form-script-tag-3443593" style={{textDecoration:"none", color:"#F8C600", fontWeight:"600"}}>Contact us </a>
    <Script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></Script>  |
     Privacy Policy | Terms of Use |  <a href=" https://healthiwealthi.io/rxheal/cookie.php" target="_blank" style={{textDecoration:"none", color:"#F8C600", fontWeight:"600", paddingLeft:"5px"}}>   Cookie Policy  </a>
    </p>
 
  </footer>
    </div>
  )
}

export default Footer