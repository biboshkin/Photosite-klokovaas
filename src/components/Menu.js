import React from 'react'
import {Link} from 'react-router'
require('../styles/menu.css');

export default ({}) => (
	<div className="menu">
		<div className="menu-container">
			<div className="main-menu">
				<div className="logo">
					<Link to="/">
					 	<span className="menu-title">Клокова Анастасия</span>
						<i className="menu-title__icon fa fa-camera fa-lg"></i>
						<span className="menu-title">Фотограф</span>
					</Link>
					<h1 className="hide">Klokova Anastasia</h1> 
				</div> 
				<div className="itens">
					<p><Link to="gallery/photos">Примеры работ</Link></p>
					<p><Link to="contact">Контакты</Link></p>
				</div>
			</div>
			
			<div className="social">
				<a href="https://vk.com/klokova_as">
					<i className="fa fa fa-vk"></i>
				</a>
				<a href="https://www.instagram.com/klokova_as/">
					<i className="fa fa-instagram"></i>
				</a>
				<a href="mailto:klokovaas@mail.ru.com">
					<i className="fa fa-envelope-o"></i>
				</a>
			</div>
		</div>
	</div>	
)