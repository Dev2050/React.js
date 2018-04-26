import React, {Component} from 'react';

class Feedback extends Component{
    constructor(props){
        super(props);
        this.state={value: 'Please give feedback!'};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
                <div id="content">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Feedback
                                <textarea value={this.state.value} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
        );
    }
}
export default Feedback;
