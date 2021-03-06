import React, {Component} from 'react';

import './RedHOC.css'

const RedHoc = WrappedComponent => {
  return class Red extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          className={[this.props.className, 'red-hoc'].join(' ')}
        />
      )
    }
  }
}

export default RedHoc;