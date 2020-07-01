import React from 'react';
import Display from './Display';
import Button from './Button';
import {incrementCurrentValueAC, resetCurrentValueAC} from '../redux/reducer';
import {connect} from 'react-redux';
import styles from './Counter.module.css';

class Counter extends React.Component {

    incrementCurrentValue = () => {
        this.props.incrementCurrentValue();
    };

    resetCurrentValue = () => {
        this.props.resetCurrentValue();
    };

    render = () => {
        return (
            <div className={`border ${styles.counter}`}>
                <Display currentValue={this.props.currentValue}
                         maxValue={this.props.maxValue}
                         error={this.props.error}
                         message={this.props.message}
                />
                <div className={`smallBorder ${styles.buttons}`}>
                    <Button disabled={
                        this.props.currentValue === this.props.maxValue
                        || this.props.error
                        || this.props.message
                    }
                            onClick={this.incrementCurrentValue}
                            value={'inc'}/>
                    <Button disabled={this.props.currentValue === this.props.startValue || this.props.error}
                            onClick={this.resetCurrentValue}
                            value={'reset'}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        maxValue: state.maxValue,
        startValue: state.startValue,
        error: state.error,
        message: state.message
    }
};

export default connect(mapStateToProps, {
    incrementCurrentValue: incrementCurrentValueAC,
    resetCurrentValue: resetCurrentValueAC
})(Counter);

