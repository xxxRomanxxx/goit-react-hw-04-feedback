import React from "react";
import PropTypes from 'prop-types';
import css from './Statics.module.css'

const Statics = ({onGood, onNeutral, onBad, onCountPositiveFeedbackPercentage, onCountTotalFeedback}) => {
    return (
        <div className = {css.section}>
            <p className = {css.text}>Good: {onGood}</p>
            <p className = {css.text}>Neutral: {onNeutral}</p>
            <p className = {css.text}>Bad: {onBad}</p>
            <p className = {css.text}>Total: {onCountTotalFeedback}</p>
            {onCountTotalFeedback !== 0 && <p className = {css.text}>Positive feedback: {onCountPositiveFeedbackPercentage} %</p>}
        </div>
    )
}

Statics.prototype = {
    onGood: PropTypes.number.isRequired,
    onNeutral: PropTypes.number.isRequired,
    onBad: PropTypes.number.isRequired,
    onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
    onCountTotalFeedback: PropTypes.number.isRequired,
}

export default Statics;