import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export class InputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState(
            { value: event.target.value }
        )
    }

    render() {
        this.props.searchTask(this.state.value);

        return (
            <InputGroup size="sm" className='inputSearch'>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    type='text'
                    placeholder='Search Task'
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </InputGroup>
        )
    }

}