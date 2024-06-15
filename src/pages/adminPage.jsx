import React, { useEffect } from 'react'
import M from 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import { logo } from '../assets'

const adminPage = () => {
  useEffect(() => {
    // Initialize dropdown
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});

    // Initialize sidenav toggle button (if applicable)
    const sideNavElem = document.querySelector('.button-collapse');
    M.Sidenav.init(sideNavElem, {});

    const items = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(items, {
      direction: 'top' 
    });
  }, []);

  useEffect(() => {
    M.AutoInit(); 
  }, []); 
  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li className="no-padding">
          <div className="bg-blue darken-2 white-text pt-[10%]" style={{ height: '180px' }}>
            <img width="100" height="100" src={logo} alt="Logo" className="circle responsive-img" style={{ margin: '0% auto' }} /> 
          </div>
        </li>

        <li><a href="#!" className="waves-effect"><b>Dashboard</b></a></li>

        <ul className="collapsible">
          <li>
            <div className="collapsible-header waves-effect"><b>Users</b></div>
            <div className="collapsible-body">
              <ul>
                <li><a href="#!" className="waves-effect">Seller</a></li>
                <li><a href="#!" className="waves-effect">Customer</a></li>
              </ul>
            </div>
          </li>

          <li>
            <div className="collapsible-header waves-effect"><b>Departments</b></div>
            <div className="collapsible-body">
              <ul>
                <li><a href="#!" className="waves-effect">Departments</a></li>
                <li><a href="#!" className="waves-effect">Courses</a></li>
              </ul>
            </div>
          </li>

          {/* Repeat similar structure for Categories and Brands */}

        </ul>
      </ul>

      <header>
        <ul id="user_dropdown" className="dropdown-content">
          <li><a href="#!">Profile</a></li>
          <li><a href="#!">Logout</a></li>
        </ul>

        <nav className="blue" role="navigation">
          <div className="nav-wrapper">
            <ul className="right">
              <li>
                <a 
                  className="dropdown-trigger" 
                  href="#!" 
                  data-target="user_dropdown"
                >
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
            </ul>

            {/* Sidenav toggle button (optional) */}
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a> 
          </div>
        </nav>

        <nav>
          <div className="nav-wrapper blue darken-2">
            <div className="col s12 px-4">
              <a href="#!" className="breadcrumb">Admin</a>
              <a href="#!" className="breadcrumb">Index</a>
            </div>
            <div id="timestamp" className="right"></div>
          </div>
        </nav>
      </header>

      <main>
        <div className="row">
          <div className="col s6" style={{padding: '0px'}}>
            <div className="card" style={{ padding: '35px', textAlign: 'center' }}>
              <div className="row">
                <div className="card-title">
                  <b>User Management</b>
                </div>
              </div>

              <div className="row">
                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>person</i> 
                    <span className="blue-text text-lighten-1"><h5>Seller</h5></span>
                  </div>
                </a>
                {/* Maintain grid spacing with empty divs */}
                <div className="col s1"></div>
                <div className="col s1"></div>

                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>people</i>
                    <span className="blue-text text-lighten-1"><h5>Customer</h5></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6" style={{padding: '0px'}} >
            <div className="card" style={{ padding: '35px', textAlign: 'center' }}>
              <div className="card-title">
                <b>Product Management</b>
              </div>

              <div className="row">
                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>store</i>
                    <span className="blue-text text-lighten-1">
                      <h5>Product</h5>
                    </span>
                  </div>
                </a>
                <div className="col s1"></div> 
                <div className="col s1"></div> 

                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>assignment</i>
                    <span className="blue-text text-lighten-1">
                      <h5>Orders</h5>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col s6" style={{padding: '0px'}}>
            <div className="card" style={{ padding: '35px', textAlign: 'center' }}>
              <div className="card-title">
                <b>Brand Management</b>
              </div>

              <div className="row">
                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>local_offer</i>
                    <span className="blue-text text-lighten-1">
                      <h5>Brand</h5>
                    </span>
                  </div>
                </a>
                <div className="col s1"></div>
                <div className="col s1"></div>

                <a href="#!" className="col s5">
                  <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                    <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>loyalty</i>
                    <span className="blue-text text-lighten-1">
                      <h5>Sub Brand</h5>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="col s6" style={{padding: '0px'}}>
          <div className="card" style={{ padding: '35px', textAlign: 'center' }}>
            <div className="card-title">
              <b>Category Management</b>
            </div>

            <div className="row">
              <a href="#!" className="col s5">
                <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                  <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>view_list</i>
                  <span className="blue-text text-lighten-1">
                    <h5>Category</h5>
                  </span>
                </div>
              </a>
              <div className="col s1"></div>
              <div className="col s1"></div>

              <a href="#!" className="col s5">
                <div className="grey lighten-3 waves-effect" style={{ padding: '30px' }}>
                  <i className="blue-text text-lighten-1 material-icons" style={{ fontSize: '48px' }}>view_list</i>
                  <span className="truncate blue-text text-lighten-1"> {/* Added 'truncate' class */}
                    <h5>Sub Category</h5>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>


        <div className="fixed-action-btn click-to-toggle bottom-[45px] right-[24px]" > 
          <a className="btn-floating btn-large green waves-effect waves-light">
            <i className="large material-icons">add</i>
          </a>

          <ul>
            <li>
              <a className="btn-floating bg-red-500"><i className="material-icons">note_add</i></a>
              <a href="" className="btn-floating fab-tip">Add a note</a>
            </li>

            <li>
              <a className="btn-floating yellow darken-1"><i className="material-icons">add_a_photo</i></a>
              <a href="" className="btn-floating fab-tip">Add a photo</a>
            </li>

            <li>
              <a className="btn-floating bg-green-500"><i className="material-icons">alarm_add</i></a>
              <a href="" className="btn-floating fab-tip">Add an alarm</a>
            </li>

            <li>
              <a className="btn-floating bg-blue-500"><i className="material-icons">vpn_key</i></a>
              <a href="" className="btn-floating fab-tip">Add a master password</a>
            </li>
          </ul>
        </div>
      </main>

     

    </div>
  )
}

export default adminPage;
