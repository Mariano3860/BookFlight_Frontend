import React, {useEffect, useState, createRef, useRef, lazy, useContext, Component} from "react";
import axios from 'axios';

class BookFlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
        price: 0,
        origen: "",
        destino: "",
        roundTrip: true,
        numPass: 0,
        id : 0,
        firstName : "",
        lastName : "",
        nationality : "",
        age : "",
        luggage : 0,
        }
    }


    getPrice = () => {
        //event.preventDefault();

        let bookFlight = {
            origen: this.state.origen,
            destino: this.state.destino,
            roundTrip: this.state.roundTrip,
            goDate : null,
            bakcDate: null,
            price : null
        };

        axios({method: 'post',
                  url: 'http://localhost:8080/api/BookFlight/price',
                  timeout: 4000,    // 4 seconds timeout
                  data: JSON.stringify(bookFlight)
              })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ price: res.data });
            })
    }

    addPassenger = () => {
        let passenger = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nationality : this.state.nationality,
            age: this.state.age,
            luggage : this.state.luggage,
            bookId: 1
        };
        console.log(passenger.id + passenger.roundTrip + passenger.age + passenger.bookId)
        axios({method: 'post',
            url: 'http://localhost:8080/api/Passenger/addPassenger',
            timeout: 4000,    // 4 seconds timeout
            data: JSON.stringify(passenger)
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ numPass: this.state.numPass + 1 });
            })
    }

    render() {
        const isOneWay = true;

        const handleChangeFrom = (e) => {
              this.setState({selectedFrom: e.target.value})
            this.getPrice();
        }
        const handleChangeTo = (e) => {
              this.setState({selectedTo: e.target.value})
            this.getPrice();
        }

        const handlePName = (e) => {
            this.setState({firstName: e.target.value})
        }
        const handlePLast = (e) => {
            this.setState({lastName: e.target.value})
        }

        const handlePAge = (e) => {
            this.setState({age: e.target.value})
        }

        const handlePNif = (e) => {
            this.setState({id: e.target.value})
        }
        const handlePLuggage = (e) => {
            this.setState({luggage: e.target.value})
        }
        const handlePNationality = (e) => {
            this.setState({nationality: e.target.value})
        }

        const handleIsShown = () =>{
              this.setState({isShown: true})
        }
        const handleIsHide = () =>{
                      this.setState({isShown: false})
        }
        const toggleTravel = () =>{
            if(isOneWay){
                this.setState({isOneWay: false});
                this.setState({roundTrip : true});
            }else{
                this.setState({isOneWay: true});
                this.setState({roundTrip : false});
            }
            this.getPrice();
        }

        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <form action="#">
                                    <div onChange={() => toggleTravel()} className="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
                                        <label className="option my-sm-0 my-2">
                                            <input value="round_trip" ref="round_trip" type="radio" name="radio" />Round Trip
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="option my-sm-0 my-2">
                                            <input value="one_way" ref="one_way" type="radio" name="radio" checked/>One Way
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="form-group d-sm-flex margin">
                                        <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">

                                            <div className="label" id="from" value={this.state.selectedFrom}>
                                                <select onChange={(e) => handleChangeFrom(e)}>
                                                    <option ref="origen" value="sevilla">Sevilla</option>
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
                                        <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"
                                        onClick={() => handleIsShown()}>New Passenger
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                          {this.state.isShown && (
                          <div>
                                <form className="well form-horizontal" action=" " method="post"  id="contact_form">
                            <fieldset>

                           <legend><center><h2><b>Total amount: {this.state.price}</b></h2></center></legend><br/>

                            <div className="form-group">
                              <label className="col-md-4 control-label">First Name</label>
                              <div className="col-md-4 inputGroupContainer">
                              <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                              <input ref={this.state.firstName} onChange={(e) => handlePName(e)} name="first_name" placeholder="First Name" className="form-control"  type="text"/>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="col-md-4 control-label" >Last Name</label>
                                <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                              <input ref={this.state.lastName} onChange={(e) => handlePLast(e)} name="last_name" placeholder="Last Name" className="form-control"  type="text"/>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <label className="col-md-4 control-label">NIF</label>
                              <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                  <input  ref={this.state.id} onChange={(e) => handlePNif(e)} name="nif" placeholder="NIF" className="form-control"  type="text"/>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-md-4 control-label">Nationality</label>
                              <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                  <input ref={this.state.nationality} onChange={(e) => handlePNationality(e)} name="nationality" placeholder="Nationality" className="form-control"  type="text"/>
                                </div>
                              </div>
                            </div>
                             <div className="form-group">
                              <label className="col-md-4 control-label">Age / Office</label>
                              <div className="col-md-4 selectContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                    <select ref={this.state.age} onChange={(e) => handlePAge(e)} name="age" className="form-control selectpicker">
                                      <option value=">9">+9</option>
                                      <option value="<2">Less than 2</option>
                                      <option value=">2 and <9">Between 2 and 9</option>
                                    </select>
                                </div>
                              </div>
                             </div>
                            <div className="form-group">
                              <label className="col-md-4 control-label" >Luggage</label>
                                <div className="col-md-4 inputGroupContainer">
                                <div className="input-group">
                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                              <input ref={this.state.luggage} onChange={(e) => handlePLuggage(e)} name="Luggage" placeholder="Luggage" className="form-control" type="number"/>
                                </div>
                              </div>
                            </div>
                        <div className="form-group">
                              <label className="col-md-4 control-label"></label>
                                  <div className="col-md-4"><br/>
                                    <button type="submit" className="btn btn-warning" onClick={() => handleIsHide()}>Finalize <span className="glyphicon glyphicon-send"></span></button>
                                    <button type="submit" className="btn btn-success" onClick={() => this.addPassenger()}>Add Passenger <span className="glyphicon glyphicon-send"></span></button>
                                  </div>
                            </div>

                            </fieldset>
                            </form>
                            </div>
                          )}
                   </div>
            </div>
        )
    }
}

export default BookFlight
