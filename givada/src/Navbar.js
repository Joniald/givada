const Navbar = () => {
    const mystyle = {
        width: "30",
        height: "30",
      };
    return (
        <nav className="navbar navbar-expand-sm navbar-light p-3 bg-info sticky-top">
            <a class="navbar-brand" href="#">
               <img src="https://i.ibb.co/F66mmyR/machine-learning.png" width="50" height="50" className="d-inline-block align-top" alt="Logo" />
            </a>
            <a className="navbar-brand" href="/"><h2>GiVaDa</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><b>Services</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><b>Work</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><b>Team</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/"><b>Contact</b></a>
                    </li>
                </ul>
            </div>
         </nav>
    );
}

export default Navbar;