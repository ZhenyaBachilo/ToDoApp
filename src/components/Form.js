import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';


export default class Form extends React.Component {
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

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.add) {
            if (!this.state.value.trim()) {
                this.setState({
                    value: ''
                });
                return;
            }
            this.props.add(this.state.value);
            this.setState({
                value: '',
            })

        } else {
            if (!this.state.value.trim()) {
                this.setState({
                    value: ''
                });
                return;
            } else if (!this.props.categoryId) {
                return;
            }
            this.props.addTask(this.state.value, this.props.categoryId);
            this.setState({
                value: ''
            })
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} >
                <InputGroup className="mb-3" size="sm" >
                    <FormControl
                        placeholder={this.props.inputPlaceholder}
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <InputGroup.Append>
                        <Button
                            onClick={this.handleSubmit}
                            variant="outline-info"
                        >
                            ADD
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        )
    }
}

