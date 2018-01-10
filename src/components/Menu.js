import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCollectionsTree } from '../utils/flickrApiHelper'
import { initCollections } from '../reducers/actions'

require('../styles/menu.css');

class Menu extends React.Component {
	componentDidMount() {
		getCollectionsTree((responce) => responce.collections && 
										 responce.collections.collection && 
										 this.props.initCollections(responce.collections.collection))
	}

	render() {
		console.log('props')
		console.log(this.props)
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
								collections.map(item =>
									<p>
										<Link to={ `gallery/${item.id}` }>
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