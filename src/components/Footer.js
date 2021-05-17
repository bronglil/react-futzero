import React, { Component } from 'react'

export class Footer extends Component {
  state = {
    footerData: {

      About: {
        Name: 'Home',
        Path: '',
      },

      Carrer: {
        Name: 'Carrer',
        Path: '',
      },

      Press: {
        Name: 'Press',
        Path: '',
      },

      Contact: {
        Name: 'contact us',
        Path: '',
      },

      Term: {
        Name: 'Terms of Service',
        Path: '',
      },

      privacy: {
        Name: 'Privacy Policy',
        Path: '',
      },
    }
  }
    render() {

   const footerArray = []

   for(let key in this.state.footerData){
     footerArray.push({
       id: key,
       config: this.state.footerData[key]
       });
   }




        return (
            <footer id="main-footer">



				<div id="et-footer-nav">
					<div className="container">
<ul id="menu-footer-menu" className="bottom-nav">
{
  footerArray.map((FooterElemnt) =>(
    <li key={FooterElemnt.id} id="menu-item-48721" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48721"><a href={FooterElemnt.config.path}>{FooterElemnt.config.Name}</a></li>
  ))
}

</ul>
			</div>
				</div>


				<div id="footer-bottom">
					<div className="container clearfix">
				<div id="footer-info">© Copyright Futzero 2021. All rights reserved.</div>					</div>
				</div>
			</footer>
          )
    }
}

export default Footer
