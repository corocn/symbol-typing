/* @flow */
import React from 'react'
import styles from '../../../components/styles.css'
import Typing from '../../../components/Typing'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return <div className={styles.Wrapper}>
        <Typing {...this.props} dispatch={this.props.dispatch}/>
      </div>
  }
}
