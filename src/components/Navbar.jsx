import {Link, Outlet, NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="nav">
          <h4><NavLink  style={({isActive})=>(isActive? {color:"blue"}:undefined)} to="">HOME</NavLink></h4>
          <h4 ><NavLink style={({isActive})=>(isActive? {color:"blue"}:undefined)} to="about">ABOUT</NavLink></h4>
          <h4 ><NavLink style={({isActive})=>(isActive? {color:"blue"}:undefined)} to="items">ITEMS</NavLink></h4>
      </div>
      <Outlet/>
    </>
  );
}

export default Navbar;
