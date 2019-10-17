import PropTypes from 'prop-types';

export const contactType = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        age: PropTypes.number,
        number: PropTypes.string
    })
);