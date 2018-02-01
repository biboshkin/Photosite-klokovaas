import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCollectionsTree } from '../utils/flickrApiHelper'
import { initCollections } from '../reducers/actions'
import { showLoader, hideLoader } from '../utils/loader'
import * as _ from 'lodash'

require('../styles/menu.css');

class Menu extends React.Component {
	componentDidMount() {
		let { collections } = this.props;
		
		if (_.isEmpty(collections)) {
			getCollectionsTree(
				(responce) => this.getCollectionsSuccess(responce), 
				() => this.getCollectionsError()
			)
		}
	}

	render() {
		const { collections } = this.props;
		return (
			<div className="menu">
				<div className="menu-container">
					<div className="main-menu">
						<div className="logo">
							<Link to="/">
								<span className="menu-title">Клокова Анастасия</span>
								<i className="menu-title__icon fa fa-camera fa-2x"></i>
								<span className="menu-title">Фотограф</span>
							</Link>
							<h1 className="hide">Klokova Anastasia</h1> 
						</div> 
						<div className="collections">
							{
								collections && 
								collections.map((item, index) =>
									<p key={ index }>
										<Link 
											  to={ `collections/${item.id}` }>
											  { item.title }
										</Link>
									</p>
								)
							}
							<p><Link to="contact">Контакты</Link></p>
						</div>
					</div>
					<div className="social">
						<i className="fa fa-phone fa-2x"><span className="menu-social__phone">+7 (910) 905 4647</span></i>				
					</div>
					<div className="social">	
						<a href="https://vk.com/klokova_as">
							<i className="fa fa-vk fa-2x"></i>
						</a>
						<a href="https://www.instagram.com/klokova_as/">
							<i className="fa fa-instagram fa-2x"></i>
						</a>
						<a href="mailto:klokovaas@mail.ru.com">
							<i className="fa fa-envelope-o fa-2x"></i>
						</a>
					</div>
				</div>
			</div>	
		)
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

Menu.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)