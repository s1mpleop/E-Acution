import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    CardHeader,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import BuyerService from "../Services/BuyerServices";

class UpdateBuyer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.match.params.id,
            name:'',
            email:'',
            address:'',
            phoneNumber:'',
    
        };
    
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
      }

      componentDidMount(){
        BuyerService.getBuyer(this.state.id).then((res) =>{
            let seller = res.data;
            this.setState({
                name: seller.name,
                email: seller.email,
                address: seller.address,
                phoneNumber: seller.phoneNumber
            });
        });
      }

      saveBuyer = (e) => {
        e.preventDefault();
        let buyer = {name : this.state.name, email: this.state.email,  phoneNumber: this.state.phoneNumber, address: this.state.address};
        console.log('Buyer =>' + JSON.stringify(buyer));

        BuyerService.updateBuyer(buyer, this.state.id).then( res => {
            this.props.history.push('/buyers');
        });
    
      }
    
      cancel(){
        this.props.history.push('/buyers');
      }
    
      changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
        // console.log(event.target.value);
      }
    
      changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
        // console.log(event.target.value);
      }
    
      changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
        // console.log(event.target.value);
      }
    
      changePhoneNumberHandler = (event) =>{
        this.setState({phoneNumber: event.target.value});
        // console.log(event.target.value);
      }
    
    render() {
        return (
            <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill Information to Update a Seller</h3>
              </CardHeader>

              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input type="text" placeholder="Name" value={this.state.name} onChange={this.changeNameHandler}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input type="text" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandler}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Enter Address</Label>
                    <Input type="text" placeholder="Address" value={this.state.address} onChange={this.changeAddressHandler}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number </Label>
                    <Input
                      type="text"
                      placeholder="Enter your phone number"
                      value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button outline color="light" onClick={this.saveBuyer.bind(this)}>
                      Update
                    </Button>
                    <Button color="secondary" onClick={this.cancel.bind(this)} className="ms-2">
                      Cancel
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
        );
    }
}

export default UpdateBuyer;