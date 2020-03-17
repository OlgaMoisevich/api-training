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

    fillingInput = async (e) => {
        let data = e.target.value;
        await this.setState({status: data});  //  исп. async await, тк функция this.setState асинхронная
        this.props.update(this.state.status);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data_status_after_update !== this.props.data_status_after_update) {
            this.setState({
                status: this.props.data_status_after_update,
            })
        }
    }

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

