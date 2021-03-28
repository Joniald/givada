
import {FaGithub,FaLinkedin,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';



const Footer = () => {
    
    return (
    <div style={{background:"#f2f0fd", border: "none"}}>
            <footer className="text-center text-white" style={{backgroundColor:"#f1f1f1"}}>
              <div className="container pt-4">
   
              <section className="mb-4">
      
        <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href=""
        role="button"
        data-mdb-ripple-color="dark"><FaFacebook /></a>


       
      
        <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><FaTwitter/></a>


      
       <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><FaInstagram /></a>

       <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><FaLinkedin /></a>
      
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"><FaGithub /></a>
    </section>

    
  </div>
   <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-dark" href="">GiVaDaTeam.com</a>
  </div>
  
  </footer>
</div>
    );
}
    
export default Footer;
