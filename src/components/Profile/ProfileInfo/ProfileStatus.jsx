import React from 'react'


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editMode:false};
    }

    activateEditMode = () => {
        this.setState({editMode:true})
    };

    deactivateEditMode= () => {
        this.setState({editMode:false})
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

