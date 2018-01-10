import React from 'react'
import {Link} from 'react-router'
require('../styles/mobilemenu.css')

let isNavOpen = false;

export default class MobileNav extends React.Component {
	constructor() {
		super();
		this.state = {
			isNavOpen: false
		};
		this.toogleNav = this.toogleNav.bind(this);
	}
	render() {
		return (
			<nav className="mobile-nav">
				<div id="menuToggle">
					<input type="checkbox" 
						   checked={ this.state.isNavOpen } 
						   onClick={ this.toogleNav }/>
					<span></span>
					<span></span>
					<span></span>
					<ul id="menu">
						<li>
							<Link to="/">
								<i className="fa fa-camera fa-lg"></i>
								<p className="mobile-logo">Клокова Анастасия</p>
								<p className="mobile-logo">Фотограф</p>
							</Link>
						</li>
						<li>
							<p className="mobile-tabs" onClick={ this.toogleNav }>
								<Link to="gallery/photos">Примеры работ</Link>
							</p>
							<p className="mobile-tabs" onClick={ this.toogleNav }>
								<Link to="contact">Контакты</Link>
							</p>
						</li>
							
						<br/>
						<li className="mobile-social">
							<a className="mobile-link" href="tel:+79106174473">
								<i className="fa fa-phone fa-lg"></i>
							</a>
							<a className="mobile-link" href="https://vk.com/klokova_as">
								<i className="fa fa-vk fa-lg"></i>
							</a>
							<a className="mobile-link" href="https://www.instagram.com/klokova_as/">
								<i className="fa fa-instagram fa-lg"></i>
							</a>
							<a className="mobile-link" href="mailto:klokovaas@mail.ru.com">
								<i className="fa fa-envelope-o fa-lg"></i>
							</a>
						</li>
							
					</ul>
				</div>
			</nav>
		)
	}

	toogleNav() {
		const isOpen = this.state.isNavOpen === true;
		this.setState({
			isNavOpen: isOpen ? false : true
		})
	}
}