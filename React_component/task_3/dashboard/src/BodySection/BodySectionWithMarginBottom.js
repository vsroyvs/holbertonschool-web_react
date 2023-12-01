import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => {
    const { children } = props;

    return (
        <div className="bodySectionWithMargin">
            {/* Use the spread operator on the BodySection component */}
            <BodySection {...props}>
                {/* Render the children within the BodySection */}
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;