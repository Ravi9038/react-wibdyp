import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from 'react-select';

const options = [
  { value: 'a', label: 'a' },
  { value: 'b', label: 'b' },
];

class App extends React.Component {
  state = {
    selectedOptions: [],
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <React.Fragment>
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      {this.state.selectedOptions.map(o => <p>{o.value}</p>)}
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
