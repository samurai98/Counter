import React from 'react';
import styles from './Button.module.css'


class Button extends React.Component {
    render = () => {
        return (
            <button onClick={this.props.onClick}
                    className={this.props.disabled
                        ? `${styles.button} ${styles.disabled}`
                        : styles.button}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;

