import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import NavigationBar from './NavigationBar';
import PhotoArea from './PhotoArea';

class App extends React.Component {
    render() {
        let {  } = this.props;
        return (
        <Grid fluid>            
            <NavigationBar />
            <Row>
                <Col xs={ 3 }>

                </Col>
                <Col xs={ 6 }>
                    <PhotoArea />                    
                </Col>
            </Row>
        </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);