import React from 'react';
import styles from './Display.module.css';

class Display extends React.Component {
    render = () => {
        let s = this.props.currentValue === this.props.maxValue
            ? `${styles.display} ${styles.maxValue}`
            : styles.display;

        return (
            <div className={`${s} smallBorder`}>
                {this.props.error
                    ? <span className={styles.error}>Incorrect value!</span>
                    : this.props.message
                        ? <span className={styles.message}>enter values and press 'set'</span>
                        : <p>{this.props.currentValue}</p>}
            </div>
        );
    }
}

export default Display;

