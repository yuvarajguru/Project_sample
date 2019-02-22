import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as action from './Store/Action/data'
class form extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            show: false
        }
    }
    modalshow = () => {
        this.setState({
            show: true
        })
    }
    hidemodal = () => {
        this.setState({
            show: false
        })
    }

    inputHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.newuser(this.state);
        this.hidemodal();
    }


    render() {
        // console.log(this.state)
        return (
            <div>
                <div className="id" style={{ textAlign: 'center' }}>
                    <Button variant="primary" onClick={this.modalshow}> Add new</Button>
                    <br />
                </div>
                <div className="id1" style={{ width: '50%', margin: 'auto' }}>
                    

                    <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={this.hidemodal}
                        aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Add New Details
            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={this.inputHandle} type="text" name="name" placeholder="Enter the name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" name="age" onChange={this.inputHandle} placeholder="Enter the age" />
                                </Form.Group>

                                <Form.Group controlId="formGridState">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Canada</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="Radio" label="Male" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="Radio" label="Female" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit

                                </Button>

                            </Form>



                        </Modal.Body>
                    </Modal>




                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        newuser: obj => dispatch(action.fetchUserSuccess(obj))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(form);
