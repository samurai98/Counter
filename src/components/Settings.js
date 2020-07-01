import React from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import {setNewSettingsAC, setErrorAC, setMessageAC} from '../redux/reducer';
import styles from './Settings.module.css';

class Settings extends React.Component {

    componentDidMount() {
        let localStorageMax = +localStorage.getItem('maxValue');
        let localStorageStart = +localStorage.getItem('startValue');
        if (localStorageMax && localStorageStart) {
            this.setState({
                newMax: localStorageMax,
                newStart: localStorageStart
            });
            this.props.setNewSettings(localStorageMax, localStorageStart);
        }
    }

    state = {
        newMax: this.props.maxValue,
        newStart: this.props.startValue
    };

    updateMaxValue = (newValue) => {
        const newValueNumber = +newValue.target.value;
        this.props.isMessage(true);
        this.setState({newMax: newValueNumber});

        newValueNumber <= this.state.newStart
            ? this.props.isError(true)
            : this.props.isError(false);
    };

    updateStartValue = (newValue) => {
        const newValueNumber = +newValue.target.value;
        this.props.isMessage(true);
        this.setState({newStart: newValueNumber});

        newValueNumber < 0
            ? this.props.isError(true)
            : newValueNumber >= this.state.newMax
            ? this.props.isError(true)
            : this.props.isError(false);
    };

    setNewSettingsClick = () => {
        this.props.isMessage(false);
        this.props.setNewSettings(this.state.newMax, this.state.newStart);

        localStorage.setItem('maxValue', this.state.newMax);
        localStorage.setItem('startValue', this.state.newStart);
    };

    render = () => {
        return (
            <div className='border'>
                <div className='smallBorder'>
                    <span className={styles.span}>max value:
                        <input className={styles.input}
                               onChange={this.updateMaxValue}
                               value={this.state.newMax}
                               type={'number'}/>
                    </span>
                    <span className={styles.span}>start value:
                        <input className={styles.input}
                               type={'number'}
                               onChange={this.updateStartValue}
                               value={this.state.newStart}/>
                    </span>
                </div>
                <div className='smallBorder'>
                    <Button onClick={this.setNewSettingsClick}
                            value={'set'}
                            disabled={this.props.error}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        startValue: state.startValue,
        error: state.error
    }
};

export default connect(mapStateToProps, {
    setNewSettings: setNewSettingsAC,
    isError: setErrorAC,
    isMessage: setMessageAC
})(Settings);

