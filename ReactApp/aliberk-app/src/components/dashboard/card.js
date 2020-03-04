import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShowing: true };
        this.approve = this.approve.bind(this);
        this.decline = this.decline.bind({company:'Netas'});
    }
    approve() {
        console.log(`Approved State:${this.state.isShowing}`);
        this.setState((state,props)=>({ isShowing:!state.isShowing}));
        console.log(`Approved State:${this.state.isShowing}`);
    }
    decline() {
        console.log(`Declined State:${JSON.stringify(this)}`);//String interpolation
    }
    render() {
        //console.log(this.state);
        return (<div className="card">
            <div className="content">
                {this.props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button" onClick={this.approve}>Approve</div>
                    <div className="ui basic red button" onClick={this.decline}>Decline</div>
                </div>
            </div>
        </div>)
    }
}

export default Card;