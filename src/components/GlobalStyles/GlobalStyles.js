import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {

    return children

    // chỉ cho phép hàm này có 1 children được chuyền vào, từ 2 trở lên là lỗi
    // return React.Children.only(children);
}

GlobalStyles.propTypes ={
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
