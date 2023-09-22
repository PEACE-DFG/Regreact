import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
    function logOut(){
        localStorage.clear();
        navigate('/register')

    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link to="/">
            Home
            </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     <div>
        <ul  className="d-flex " style={{ listStyleType:'none' }}>
        {
            localStorage.getItem('users')?
            <>
            <li><a class="dropdown-item mx-4" href="#" onClick={logOut}>
            logout
            </a></li>
            
            </>:
            <>
            <li><a class="dropdown-item mx-4" href="#">
            <Link to='/login'>
            Login
            </Link>
            </a></li>
         <li><a class="dropdown-item mx-4" href="#">
            <Link to="/register">
            Register
            </Link>
            </a></li>
            </>
        }
        </ul>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar