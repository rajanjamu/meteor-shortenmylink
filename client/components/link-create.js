import React, { Component } from 'react';

class LinkCreate extends Component {
    handleSubmit(event) {
        event.preventDefault();

        console.log(this.refs.link.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="link-create">
    
            <div className="form-group">
                <label>Link to shorten</label>
                <input ref="link" className="form-control" type="text" />
            </div>
            <button className="btn btn-primary">Shorten!</button>
                
            </form>
        );
    }
    
}

export default LinkCreate;