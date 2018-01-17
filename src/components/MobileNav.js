import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCollectionsTree } from '../utils/flickrApiHelper'
import { initCollections } from '../reducers/actions'
import { showLoader, hideLoader } from '../utils/loader'
require('../styles/mobilemenu.css')

let isNavOpen = false;

class MobileNav extends React.Component {
	constructor() {
		super();
		this.state = {
			isNavOpen: false
		};
		this.toogleNav = this.toogleNav.bind(this);
	}

	componentDidMount() {
		if (this.props.collections && this.props.collections.length == 0) {
			getCollectionsTree(
				(responce) => this.getCollectionsSuccess(responce), 
				() => this.getCollectionsError()
			)
		}
	}

	render() {
		const { collections } = this.props;
		return (
			<nav className="mobile-nav"  
				 onClick={ this.toogleNav } >
				<div id="menuToggle">
					<input type="checkbox" 
						   checked={ this.state.isNavOpen }/>
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
							{
								collections && 
								collections.map((item, index) =>
									<p key={ index }>
										<Link className="mobile-tabs"
											  to={ `collections/${item.id}` }>
											  { item.title }
										</Link>
									</p>
								)
							}
							<p className="mobile-tabs">
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

	getCollectionsSuccess(responce) {
		if (responce.collections && responce.collections.collection) {
			this.props.initCollections(responce.collections.collection)
		}
		hideLoader();
	}

	getCollectionsError() {
		hideLoader();
	}
}

MobileNav.propTypes = {
	collections: React.PropTypes.array
}

function mapStateToProps(state) {
	return {
		collections: state.collections
	}
}

function mapDispatchToProps(dispatch) {
	return {
		initCollections: bindActionCreators(initCollections, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav)