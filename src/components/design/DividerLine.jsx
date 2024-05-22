import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({color, thickness, margin, width}) => {
    const style = {
        backgroundColor: color,
        height: thickness,
        margin: margin,
        width: width,
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    return (
        <div style={style}></div>
    );
};

Divider.propTypes = {
    color: PropTypes.string,
    thickness: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
};

Divider.defaultProps = {
    color: '#6d6c6c',
    thickness: '1px',
    margin: '10px 0',
    width: '50%',
};

export default Divider;