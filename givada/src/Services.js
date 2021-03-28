import {useState} from "react";

const Services = () => {

    const[countFirst,setCountFirst] = useState(0);
    const[countSecond,setCountSecond] = useState(0);
    const[countThird,setCountThird] = useState(0);
    
    return (
        

<div >


<div className="row" >
 <div className="col-xl-6" style={{ border: "none"}}>
  <div className="card-body p-5 m-5">
    <h1 className="card-title" style = {{color:"#3d3d66"}}>Services</h1>
    <p className="card-text h4 " style = {{color:"#3d3d66"}}>Extensive report evaluating the status of digitization
     and data culture in your organization. List of needs and challenges, structured around strategic, methodological and organizational pillars. 
     Detailed set of tasks and specific actions recommended to achieve your goals, including their dependencies.
     Timeframe of initiatives and projects to implement the required changes.</p>
  </div>
 </div>
 <div className="col-xl-6 mb-2">    
  <div className="card" style={{ border: "none"}}>
     <img className="card-img " src="https://i.ibb.co/ZfxBTS9/AI-artificial.jpg"  height="500" alt="Moto"/>
  </div>
  </div>
</div>

<div className="row" >
<div className="col-xl-3 mb-2">    
  <div className="card mr-5 ml-5" style={{ border: "none"}}>
     <img className="card-img " src="https://i.ibb.co/fHGpXSM/Machine-Learning-Logo.png"   alt="Moto"/>
  </div>
  </div>
 <div className="col-xl-9" style={{ border: "none"}}>
  <div className="card-body m-3">
    <h1 className="card-title" style = {{color:"#3d3d66"}}></h1>
    <p className="card-text h2 m-4" style = {{color:"#6a5acd"}}>We provide data research and contextual analytics services globally.</p>
    <button type="button" className="btn btn-danger btn-round" onClick={() => setCountFirst(1)}>Explore</button>
  </div>
 </div>
 </div>

 {Array(countFirst).fill(
 
 <div className="card bg-info" style={{ border: "none"}}>
  <div className="card-body">
    <h5 className="card-title">Title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
    <p className="card-text">
    Tech bootcamps are a quick way to gain experience with data science and become knowledgeable in
    programming languages such as Python, R and SQL. Data science bootcamps are typically short programs
    offered in a variety of formats including part time, full time, online or on campus. Some bootcamps may
    take a couple of weeks to complete while others may take up to a couple of months. Bootcamps may help you
    expand your network and could offer dedicated career services to help with job placements after graduation.
    During the bootcamp, you’ll work on projects and create a portfolio to demonstrate your abilities to potential
    employers. Data science bootcamps typically cover a variety of topics such as machine learning, natural
    language processing, different types of data analytics, data visualization and more. When researching bootcamps,
    it is important to consider your career goals and what you’d like to get out of the program. 
    Some bootcamps are geared toward beginners, while others are better suited for those with some programming or
    computer science experience. You may also want to consider the background of the instructors teaching the bootcamp as well as cost.
    Are you able to take time off and commit to a full-time immersive experience? Does the bootcamp offer scholarships or discounts? 
    Make sure to ask about all of your financing options.</p>
    
 <button type="button" className="btn btn-danger btn-round m-1" onClick={() => { if (countFirst>=1) {setCountFirst( countFirst -1 )}; } }>Close</button>
 </div>
 </div>
 )}
 
 
 <div className="row" >
<div className="col-xl-3 mb-2">    
  <div className="card mr-5 ml-5" style={{ border: "none"}}>
     <img className="card-img " src="https://i.ibb.co/wJ6KmHC/Global-Data-Logo.png"   alt="Moto"/>
  </div>
  </div>
 <div className="col-xl-9" style={{ border: "none"}}>
  <div className="card-body m-3">
    <h1 className="card-title" style = {{color:"#3d3d66"}}></h1>
    <p className="card-text h2 m-4" style = {{color:"#6a5acd"}}>We provide data research and contextual analytics services globally.</p>
    <button type="button" className="btn btn-danger btn-round" onClick={() => setCountSecond(1)}>Explore</button>
  </div>
 </div>
 </div>

 {Array(countSecond).fill(
 
 <div className="card bg-info" style={{ border: "none"}}>
  <div className="card-body">
    <h5 className="card-title">Title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
    <p className="card-text">
    Tech bootcamps are a quick way to gain experience with data science and become knowledgeable in
    programming languages such as Python, R and SQL. Data science bootcamps are typically short programs
    offered in a variety of formats including part time, full time, online or on campus. Some bootcamps may
    take a couple of weeks to complete while others may take up to a couple of months. Bootcamps may help you
    expand your network and could offer dedicated career services to help with job placements after graduation.
    During the bootcamp, you’ll work on projects and create a portfolio to demonstrate your abilities to potential
    employers. Data science bootcamps typically cover a variety of topics such as machine learning, natural
    language processing, different types of data analytics, data visualization and more. When researching bootcamps,
    it is important to consider your career goals and what you’d like to get out of the program. 
    Some bootcamps are geared toward beginners, while others are better suited for those with some programming or
    computer science experience. You may also want to consider the background of the instructors teaching the bootcamp as well as cost.
    Are you able to take time off and commit to a full-time immersive experience? Does the bootcamp offer scholarships or discounts? 
    Make sure to ask about all of your financing options.</p>
    
 <button type="button" className="btn btn-danger btn-round m-1" onClick={() => { if (countSecond>=1) {setCountSecond( countSecond -1 )}; } }>Close</button>
 </div>
 </div>
 )}

 <div className="row" >
<div className="col-xl-3 mb-2">    
  <div className="card mr-5 ml-5" style={{ border: "none"}}>
     <img className="card-img " src="https://i.ibb.co/YRtFbHS/Data-Pre-Logo.png"   alt="Moto"/>
  </div>
  </div>
 <div className="col-xl-9" style={{ border: "none"}}>
  <div className="card-body m-3">
    <h1 className="card-title" style = {{color:"#3d3d66"}}></h1>
    <p className="card-text h2 m-4" style = {{color:"#6a5acd"}}>We provide data research and contextual analytics services globally.</p>
    <button type="button" className="btn btn-danger btn-round" onClick={() => setCountThird(1)}>Explore</button>
  </div>
 </div>
 </div>

 {Array(countThird).fill(
 
 <div className="card bg-info" style={{ border: "none"}}>
  <div className="card-body">
    <h5 className="card-title">Title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
    <p className="card-text">
    Tech bootcamps are a quick way to gain experience with data science and become knowledgeable in
    programming languages such as Python, R and SQL. Data science bootcamps are typically short programs
    offered in a variety of formats including part time, full time, online or on campus. Some bootcamps may
    take a couple of weeks to complete while others may take up to a couple of months. Bootcamps may help you
    expand your network and could offer dedicated career services to help with job placements after graduation.
    During the bootcamp, you’ll work on projects and create a portfolio to demonstrate your abilities to potential
    employers. Data science bootcamps typically cover a variety of topics such as machine learning, natural
    language processing, different types of data analytics, data visualization and more. When researching bootcamps,
    it is important to consider your career goals and what you’d like to get out of the program. 
    Some bootcamps are geared toward beginners, while others are better suited for those with some programming or
    computer science experience. You may also want to consider the background of the instructors teaching the bootcamp as well as cost.
    Are you able to take time off and commit to a full-time immersive experience? Does the bootcamp offer scholarships or discounts? 
    Make sure to ask about all of your financing options.</p>
    
 <button type="button" className="btn btn-danger btn-round m-1" onClick={() => { if (countThird>=1) {setCountThird( countThird -1 )}; } }>Close</button>
 </div>
 </div>
 )}

</div>
);
}

export default Services;