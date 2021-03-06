import React, {Component} from 'react';
import RedHoc from '../RedHOC'

class FormControlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: this.props.values
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.values);
  }

  handleChange(event, type) {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newState = {values: {...this.state.values, [type]: value}};

    this.setState(newState);
  }

  render() {
    const {input, checkbox, select} = this.state.values;
    const {className} = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={className}>
        <input type="text"
               value={input}
               onChange={event => this.handleChange(event, 'input')}
        />

        <br/>

        <input type="checkbox"
               checked={checkbox}
               onChange={event => this.handleChange(event, 'checkbox')}
        />

        <br/>

        <select
          value={select}
          onChange={event => this.handleChange(event, 'select')}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>

        <br/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default RedHoc(FormControlled);
