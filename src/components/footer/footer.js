import React from 'react'
import './footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, facebookSquare } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
	return (
		<div>
			<footer className="footer">
				<div className="container bottom_border">
					<div className="row">
						<div className=" col-sm-4 col-md col-sm-4  col-12 col">
							<h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
							{/*headin5_amrc*/}
							<p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
							<p><i className="fa fa-location-arrow" /> 9878/25 sec 9 rohini 35 </p>
							<p><i className="fa fa-phone" />  +91-9999878398</p>
							<p><i className="fa fa fa-envelope" /> info@example.com</p>
						</div>
						<div className=" col-sm-4 col-md  col-6 col">
							<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
							{/*headin5_amrc*/}
							<ul className="footer_ul_amrc">
								<li><a href="http://webenlance.com">Image Rectoucing</a></li>
								<li><a href="http://webenlance.com">Clipping Path</a></li>
								<li><a href="http://webenlance.com">Hollow Man Montage</a></li>
								<li><a href="http://webenlance.com">Ebay &amp; Amazon</a></li>
								<li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
								<li><a href="http://webenlance.com">Image Cropping</a></li>
							</ul>
							{/*footer_ul_amrc ends here*/}
						</div>
						<div className=" col-sm-4 col-md  col-6 col">
							<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
							{/*headin5_amrc*/}
							<ul className="footer_ul_amrc">
								<li><a href="http://webenlance.com">Remove Background</a></li>
								<li><a href="http://webenlance.com">Shadows &amp; Mirror Reflection</a></li>
								<li><a href="http://webenlance.com">Logo Design</a></li>
								<li><a href="http://webenlance.com">Vectorization</a></li>
								<li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
								<li><a href="http://webenlance.com">Image Cropping</a></li>
							</ul>
							{/*footer_ul_amrc ends here*/}
						</div>
						<div className=" col-sm-4 col-md  col-12 col">
							<h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
							{/*headin5_amrc ends here*/}
							{/* <ul className="footer_ul2_amrc">
								<li><a href="javascript();"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="javascript();">https://www.lipsum.com/</a></p></li>
								<li><a href="javascript();"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="javascript();">https://www.lipsum.com/</a></p></li>
								<li><a href="javascript();"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="javascript();">https://www.lipsum.com/</a></p></li>
							</ul> */}
							{/*footer_ul2_amrc ends here*/}
						</div>
					</div>
				</div>
				<div className="container">
					<ul className="foote_bottom_ul_amrc">
						<li><a href="http://webenlance.com">Home</a></li>
						<li><a href="http://webenlance.com">About</a></li>
						<li><a href="http://webenlance.com">Services</a></li>
						<li><a href="http://webenlance.com">Pricing</a></li>
						<li><a href="http://webenlance.com">Blog</a></li>
						<li><a href="http://webenlance.com">Contact</a></li>
					</ul>
					{/*foote_bottom_ul_amrc ends here*/}
					<p className="text-center">Copyright @2017 | Designed With by Your Company Name</p>
					<ul className="social_footer_ul">
						{/* <FontAwesomeIcon icon="spinner" size="6x" />
						<FontAwesomeIcon icon={facebookSquare} /> */}


					</ul>
					{/*social_footer_ul ends here*/}
				</div>
			</footer>
		</div>

	)
}

Footer.propTypes = {

}

export default Footer







