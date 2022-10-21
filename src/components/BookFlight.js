import React, { Component } from 'react'

class BookFlight extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    // step 3
    /*componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }*/


    render() {
        const handleChangeFrom = (e) => {
              this.setState({selectedFrom: e.target.value})
            }
        const handleChangeTo = (e) => {
                      this.setState({selectedTo: e.target.value})
                    }
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <form action="#">
                                    <div className="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
                                        <label className="option my-sm-0 my-2">
                                            <input type="radio" name="radio" />Round Trip
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="option my-sm-0 my-2">
                                            <input type="radio" name="radio" checked/>One Way
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="form-group d-sm-flex margin">
                                        <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">

                                            <div className="label" id="from" value={this.state.selectedFrom}>
                                                <select onChange={(e) => handleChangeFrom(e)}>
                                                    <option value="sevilla">Sevilla</option>
                                                </select>
                                            </div>
                                            <span className="fas fa-dot-circle text-muted"></span>
                                        </div>
                                        <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                            <div className="label" id="from" value={this.state.selectedTo}>
                                                <select onChange={(e) => handleChangeTo(e)}>
                                                    <option value="tokyo">Tokyo</option>
                                                    <option value="madrid">Madrid</option>
                                                    <option value="roma">Roma</option>
                                                </select>
                                            </div>
                                            <span className="fas fa-dot-circle text-muted"></span>
                                        </div>
                                    </div>
                                    <div className="form-group d-sm-flex margin">
                                        <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                                            <input type="date" required placeholder="Depart Date" className="form-control"/>
                                            <div className="label" id="depart"></div>
                                        </div>
                                        <div className="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                                            <input type="date" required placeholder="Return Date" className="form-control"/>
                                            <div className="label" id="return"></div>
                                        </div>
                                    </div>
                                    <div className="form-group my-3">
                                        <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">New Passenger
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default BookFlight
