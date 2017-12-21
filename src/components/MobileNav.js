import React from 'react'
import {Link} from 'react-router'
require('../styles/mobilemenu.css')

export default ({}) => (
	<nav className="mobile-nav">
	  <div id="menuToggle">
	    <input type="checkbox" />
	    <span></span>
	    <span></span>
	    <span></span>
	    <ul id="menu">
	    	<div className="mobile-logo">
					<Link to="/">
						<i className="fa fa-camera fa-lg"></i>
						<p>Клокова Анастасия</p>
						<p>Фотограф</p>
					</Link>
					<br/>
					<h1 className="hide">Klokova Anastasia</h1> 
				</div> 
				<p><Link to="gallery/photos">Примеры работ</Link></p>
				<p><Link to="contact">Контакты</Link></p>
				<br/>
				<li>
					<a className="mobile-link" href="tel:+79106174473">
						<i className="fa fa-phone"></i>
					</a>
					<a className="mobile-link" href="https://vk.com/klokova_as">
						<i className="fa fa-vk"></i>
					</a>
					<a className="mobile-link" href="https://www.instagram.com/klokova_as/">
						<i className="fa fa-instagram"></i>
					</a>
					<a className="mobile-link" href="mailto:klokovaas@mail.ru.com">
						<i className="fa fa-envelope-o"></i>
					</a>
				</li>
				
	    </ul>
	  </div>

		
	</nav>
)