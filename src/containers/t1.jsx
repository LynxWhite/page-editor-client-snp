import React from 'react';
import PropTypes from 'prop-types';

const t1 = (props) => (
    <div> 
        <h1> t1 </h1>
        <p>
            exact Для роутера запрещает переходить на более глубокие ссылки. 
            Например, если этот атрибут поставлен для home, то нельзя будет переходить на
            /home/2.
        </p>
        <p>
            {props.match.url}
        </p>
    </div>
);

t1.propTypes = {
    match: PropTypes.object
};

export default t1;