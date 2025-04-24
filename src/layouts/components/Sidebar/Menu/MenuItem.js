import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({title, to,icon, iconActive}) {

    return ( 
        <nav> 
            <NavLink className={(nav) => cx('menu-item' , {active: nav.isActive })} to={to}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('icon-active')}>{iconActive}</span>      
         
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </nav>
     );
}

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired,
    iconActive : PropTypes.string.isRequired
}

export default MenuItem;