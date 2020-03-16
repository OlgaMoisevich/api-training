import React from 'react'


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editMode:false,
            dataInput: 'data',

        };
    }

    activateEditMode = () => {
        this.setState({editMode:true})
    };

    deactivateEditMode= () => {
        this.setState({editMode:false})
    };

    fillingInput = (e)=>{
        let data = e.target.value;
        this.setState({dataInput: data});
        this.props.update(data);
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <span>{this.props.data_status_after_update|| 'BY'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onChange={this.fillingInput} onBlur={this.deactivateEditMode} type="text" value={this.state.dataInput}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus

