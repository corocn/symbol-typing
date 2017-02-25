/* @flow */
import React from 'react'
import styles from './styles.css'
import type {Action} from './reducers'


export default class Typing extends React.Component {
    constructor(props) {
        super(props)
    }

    focus() {
        this.typeInput.focus();
    }


    componentDidMount() {
        this.focus();
        this.intervalId = window.setInterval(this.focus.bind(this), 500)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    keyPress(event) {
        this.props.dispatch({type: "INPUT", key: event.key})
    }

    statusToClassName(status) {
        switch (status) {
            case 0:
                return styles.before_type
            case 1:
                return styles.target_type
            case 2:
                return styles.after_type
        }
    }

    render() {
        const {questions, finished, count} = this.props

        let display = questions.map((item, index) => {
            return <span
                key={index}
                className={styles.each_string + " " + this.statusToClassName(item.status)}
            >
                {item.word}
            </span>
        })

        return <div className={styles.Typing}>
            <div className={styles.text}>
                {display}
            </div>
            <input
                type="text"
                ref={(input) => { this.typeInput = input; }}
                onKeyPress={this.keyPress.bind(this)}/>

            {
                (() => {
                    if (finished) {
                        return <div>
                            Finished! {count} / {questions.length}
                        </div>
                    }
                })()
            }
        </div>
    }

}
