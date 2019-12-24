import React from "react";

class ProfileStatus extends React.Component{

   state ={
       editMode: false,
        status:this.props.status,
   }

   activateStatusMenu =()=>{
       this.setState({
           editMode : true,
       })
       console.log(this.status);
   }
   deactivateStatusMenu = ()=>{
       this.setState({
           editMode : false,
       })
       this.props.updateStatus(this.state.status);
   }
    statusChange=(e)=> {
        this.setState({
                status: e.target.value,
            }
        )
    }
    componentDidUpdate=(prevProps,prevState)=> {
       if(prevProps.status !== this.props.status){
           this.setState({
               status :this.props.status,
           })
       }
   }

    render() {
        return (
            <div >
                {
                    console.log(this)
                }
                {
                    !this.state.editMode &&
                    <div>
                        <span onClick={this.activateStatusMenu}>{this.props.status||'--Enter status--'}</span>
                    </div>
                }
                {  this.state.editMode &&
                    <div>
                        <input  onChange={this.statusChange}
                                autoFocus={true}
                                onBlur={this.deactivateStatusMenu}
                                value={this.state.status}/>

                    </div>

                }

            </div>
        )
    }

}

export default ProfileStatus;