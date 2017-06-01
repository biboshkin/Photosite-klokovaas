import * as React from 'react';
import { 
    Navbar, 
    NavItem, 
    Nav 
} from 'react-bootstrap';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Клокова Анастасия Сергеевна | Фотограф</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Цены</NavItem>
                    <NavItem eventKey={2} href="#">Контакты</NavItem>
                </Nav>
            </Navbar>
        )
    }
}
