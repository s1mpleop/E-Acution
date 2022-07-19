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
import ProductServices from '../Services/ProductServices';
class CreateProducts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.match.params.id,
            name:'',
            discreption:'',
            staringBidAmount:'',
            category:'',
    
        };
    
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeProductDiscreptionHandler = this.changeProductDiscreptionHandler.bind(this);
        this.changeStaringBidAmountHandler = this.changeStaringBidAmountHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
      }
    
      saveProduct = (e) => {
        e.preventDefault();
        let product = {name : this.state.name, discreption: this.state.discreption, staringBidAmount: this.state.staringBidAmount, category: this.state.category };
        console.log('product =>' + JSON.stringify(product));
    
        // SellerService.createSeller(seller).then(res =>{
        //     this.props.history.push('/sellers');
        // });
        ProductServices.creaetProducts(product, this.state.id).then(res => {
            this.props.history.push('/sellers');
        });
      }
    
      cancel(){
        this.props.history.push('/sellers');
      }
    
      changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
        // console.log(event.target.value);
      }
    
      changeProductDiscreptionHandler = (event) =>{
        this.setState({discreption: event.target.value});
        // console.log(event.target.value);
      }
    
      changeStaringBidAmountHandler = (event) =>{
        this.setState({staringBidAmount: event.target.value});
        // console.log(event.target.value);
      }
    
      changeCategoryHandler = (event) =>{
        this.setState({category: event.target.value});
        // console.log(event.target.value);
      }
    
      render() {
        return (
          <Container>
            <Row className="mt-4">
              <Col sm={{ size: 6, offset: 3 }}>
                <Card color="dark" inverse>
                  <CardHeader>
                    <h3>Fill Product Details</h3>
                  </CardHeader>
    
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="Product Name">Enter Product Name</Label>
                        <Input type="text" placeholder="Product Name" value={this.state.name} onChange={this.changeNameHandler}/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Product Discreption">Enter Product Discreption</Label>
                        <Input type="text" placeholder="Product Discreption" value={this.state.discreption} onChange={this.changeProductDiscreptionHandler}></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Product Staring Bid Amount">Enter Staring Bid Amount</Label>
                        <Input type="text" placeholder="Product Starting Bid" value={this.state.staringBidAmount} onChange={this.changeStaringBidAmountHandler}></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="category"> Product Category </Label>
                        <Input
                          type="text"
                          placeholder="Enter Product Category"
                          value={this.state.category} onChange={this.changeCategoryHandler}
                        ></Input>
                      </FormGroup>
                      <Container className="text-center">
                        <Button outline color="light" onClick={this.saveProduct.bind(this)}>
                          Register
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

export default CreateProducts;