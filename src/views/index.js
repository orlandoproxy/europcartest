import React, { useState, setState } from "react";
import axios from "axios";
import Date from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
    };
    this.staions = {
      from:{},
      to:{},
    };
    this.configure = {
      sesssion_id: 5968145,
    };
    this.handleDateFrom = this.handleDateFrom.bind(this);
    this.handleDateTo = this.handleDateTo.bind(this);
    this.handleStation = this.handleStation.bind(this);
  }

  handleDateFrom = (date) => {
    this.state.startDate = date;
  }
  handleDateTo = (date) => {
    this.state.endDate = date;
    console.log(this.state);
  }
  render() {
    this.handleStation(1);
      return (
        <div>
          <div className="form-row">
            <div className="col-md-4">
              <Form>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formOfficeTo">
                    <Form.Label>Oficina de Entrega</ Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </ Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="formOfficeTo">
                    <Form.Label>Oficina de Entrega</ Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </ Form.Group>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6">
              <Form.Group className="mb-3" md="2" controlId="formDateStart">
                <Form.Label>Fecha Inicial</ Form.Label>
                <DatePicker className="form-control" selected={this.state.startDate} onChange={
                  (date) => this.handleDateFrom(date)
                } value={this.state.startDate} />
              </ Form.Group>
              </div>
              <div className="col-md-6">
              <Form.Group className="mb-3" controlId="formOfficeTo">
                <Form.Label>Fecha Salida</ Form.Label>
                <DatePicker className="form-control" selected={this.state.endDate} onChange={
                  (date) => this.handleDateTo(date)
                } />
              </ Form.Group>
              </div>
              </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>

            </div>
            <div className="col-md-8">
            </div>
          </div>
        </div>

      );
    }

  handleStation = (type) => {
    var params = {
      url: 'https://jsonplaceholder.typicode.com/photos',
      Function: 'GetStationList',
      SessionId: '5968145',
      param: {
        StationType: 'CheckIn',
      },
    };
    var reponse_string = '';
    //var url = "http://localhost:8000/user/api_client?data="+encodeURIComponent(JSON.stringify(params));
    var url = "https://www.triyolo.com/ejercicio/rest/index.php";
    axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
    axios.get(url,{
      headers : {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        "charset": "UTF-8",
      }
    })
      .then(res => {
        console.log(res)
      });

    //   fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    //     "charset": "UTF-8",
    //   }
    // })
    //   .then(response => console.log("response: ",response))
    //   .catch(error => console.log("error: ",error));
    }
  }

export default SearchForm;
