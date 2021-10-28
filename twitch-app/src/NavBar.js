import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const NavBar = ({user, token, logout}) =>{
return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Random Stream</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
  
      {!token ?
      <>
      <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/signup" className="navlinks">Sign up</Nav.Link>
      <Nav.Link as={NavLink} to="/login" className="navlinks">Log In</Nav.Link>
      </Nav>
      
      </>
      :
      <>
      <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/random" className="navlinks">Streams</Nav.Link>
      <Nav.Link as={NavLink} to={`/${user}`} className="navlinks">{user}</Nav.Link>
      <Nav.Link as={NavLink} to='/logout'  onClick={logout} className="navlinks">Logout</Nav.Link>
      
    </Nav>
    </>
    }
      </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
  
     

)
}

export default NavBar;