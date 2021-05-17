import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {

        return (
          <header id="main-header" data-height-onload="60">
  			<div className="container clearfix et_menu_container">
  							<div className="logo_container">
  					<span className="logo_helper"></span>
  					<Link to='/' >
  						<img src="images/futww.png" alt="360Player" id="logo" data-height-percentage="45" />
  					</Link>
  				</div>
  							<div id="et-top-navigation" data-height="60" data-fixed-height="60">
  											<nav id="top-menu-nav">
  						<ul id="top-menu" className="nav"><li id="menu-item-48854" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-48854"><Link to="/">Funktsioonid</Link>
  <ul className="sub-menu">
  	<li id="menu-item-48493" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48493"><Link to="/tootoad">Töötoad</Link></li>
  	<li id="menu-item-53679" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53679"><Link to="/kursused">Kursused</Link></li>
  	<li id="menu-item-48496" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48496"><Link to="/spordipsuhholoogia">Spordipsühholoogia päevik</Link></li>

  </ul>
  </li>
  <li id="menu-item-54269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-54269"><a href="/#">Lahendused</a>
  <ul className="sub-menu">
  	<li id="menu-item-54270" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54270"><Link to="/">Mängijale </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/">Treeneritele </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/">Lapsevanemale  </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/">Klubidele  </Link></li>
  	<li id="menu-item-54271" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54271"><Link to="/">Jalgpalliliidule  </Link></li>
  </ul>
  </li>
  <li id="menu-item-53427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53427"><a href="pricing-detect/index.html">Paketid</a></li>
  <li id="menu-item-49559" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-49559"><a target="_blank" rel="noopener" href="/#">Help Center</a>
  <ul className="sub-menu">
  	<li id="menu-item-55024" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-55024"><a target="_blank" rel="noopener" href="/#/">Abi</a></li>
  	<li id="menu-item-55023" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55023"><a href="onboarding/index.html">Onboarding guide</a></li>
  </ul>
  </li>
  <li id="menu-item-54926" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-54926"><a href="/#">Ettevõttest</a>
  <ul className="sub-menu">
  	<li id="menu-item-54928" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54928"><a href="about/index.html">About Us</a></li>
  	<li id="menu-item-54927" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54927"><a href="/#">Blog</a></li>
  	<li id="menu-item-54929" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-54929"><a href="press/index.html">Press</a></li>
  	<li id="menu-item-54930" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-54930"><a href="contact/index.html">Contact</a></li>
  </ul>
  </li>
  <li id="menu-item-114" className="button-item menu-item menu-item-type-custom menu-item-object-custom menu-item-114"><a href="/#"><span className="login-button">Logi sisse</span></a></li>
  <li id="menu-item-51738" className="button-item menu-item menu-item-type-custom menu-item-object-custom menu-item-51738"><a href="/#"><span className="cta-button">Registreeri</span></a></li>
  </ul>						</nav>

  					<div id="et_mobile_nav_menu">
  					<div className="mobile_nav closed">
  						<span className="select_page">Select Page</span>
  						<span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
  					</div>
  					</div>
  				</div>
  			</div>
  			<div className="et_search_outer">
  				<div className="container et_search_form_container">
  					<form role="search" method="get" className="et-search-form" action="/">
  					<input type="search" className="et-search-field" placeholder="Search &hellip;"  name="s" title="Search for:" />					</form>
  					<span className="et_close_search_field"></span>
  				</div>
  			</div>
  		</header>
          )
    }
}

export default Header
