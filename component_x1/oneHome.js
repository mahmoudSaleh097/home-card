import React , {Component} from "react";
class  OneHome extends Component {
 
    render(){
        return (
            <div className="col-md-3 col-sm-6">
                <div className="card" >
                    <div className="card-header" >
                        < img src={this.props.mm} alt="" />
    
                    </div>
                    <div className="card-body" >
                            <div><h3>{this.props.location}</h3></div>
                            <div><h3> Room : {this.props.numOfRoom}</h3></div>
                            <div><h3> Price : {this.props.price}</h3></div>
                            <div><h4> Phone : {this.props.phone}</h4></div>
    
    
    
                    </div>
    
                </div>
            </div>
        )
    }

   
}
export default OneHome