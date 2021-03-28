const Contact = () => {
    
    return (
        

<div >

<div className="card bg-dark" style={{ border: "none"}}>
  <div className="card-body mt=4 mb-4"> 
    <h2 className="card-title text-center" style = {{color:"#7a99a3"}}>Contact us</h2>
    <p className="card-text" style = {{color:"#7a99a3"}}></p>
  </div>  
</div> 

<div className="row bg-dark " >
 <div className="col-xl-6" style={{ border: "none"}}>

<div className="card  bg-dark " style={{ border: "none"}}>

 

    
    <div className="card-body px-lg-5 pt-0 mt-5 ml-5 mr-5">

        
        <form className="text-center" style={{color: "#757575"}} action="#!">

            
            <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" class="form-control" />
                <label for="materialContactFormName" style = {{color:"#7a99a3"}}>Name</label>
            </div>

            
            <div className="md-form">
                <input type="email" id="materialContactFormEmail" class="form-control" />
                <label for="materialContactFormEmail" style = {{color:"#7a99a3"}}>E-mail</label>
            </div>

            
            <div className="md-form">
                <textarea id="materialContactFormMessage" class="form-control md-textarea" rows="3"></textarea>
                <label for="materialContactFormMessage" style = {{color:"#7a99a3"}}>Message</label>
            </div>


            
            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

        </form>
        

    </div>

</div>

</div>
<div className="col-xl-6" style={{ border: "none"}}>
  <div className="card-body p-5 m-5">
    <h1 className="card-title" style = {{color:"#3d3d66"}}></h1>
    <p className="card-text h2 m-4" style = {{color:"#7a99a3"}}>Tell us about your needs! We are here for a proper solution.</p>
  </div>
</div>

</div>




</div>

);
}

export default Contact;