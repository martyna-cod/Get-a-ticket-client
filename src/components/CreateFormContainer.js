import React from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions'
import CreateForm from './CreateForm'

  class CreateFormContainer extends React.Component {
    state = {
        name: "",
        description: "",
        picture: "",
        start_date: "",
        end_date: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createEvent(this.state) 
           
        this.setState({
            name: "",
            description: "",
            picture: "",
            start_date: "",
            end_date: ""
        })
    }

    render() {
        return (
        
                <CreateForm 
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state} 
                />
        )
    }
}

export default connect (null, { createEvent }) (CreateFormContainer) 