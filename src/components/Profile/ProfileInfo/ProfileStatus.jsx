import React from 'react'


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode:false,
            status: this.props.data_status_after_update,
        };
    }

    activateEditMode = () => {
        this.setState({editMode:true})
    };

    deactivateEditMode= () => {
        this.setState({editMode:false})
    };

    fillingInput = (e) => {
        let data = e.target.value;
        this.setState({status: data});
        this.props.update(this.state.status);
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{ this.props.data_status_after_update || 'BY'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onChange={this.fillingInput} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

