import React, { Component } from 'react';
import { Button, Label, Input, Container, Row, Col, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Inputs from './Inputs';
import testpgms from './test_programs';


export default class Config extends Component {
    constructor(props) {
        super(props);

        //console.log('dataInner', props.data);

        var initialState = {
            deviceName: [],
            testpgm: [],
            lpt: [],
        };

        this.state = initialState;
    }

    handleClick= (options_array) =>{
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
        
        this.setState({deviceName: options_array[0]});
        this.setState({testpgm: options_array[1]});
        this.setState({lpt: options_array[2]});
    }

    componentWillMount() {
        this.refreshOptions();
    }

    refreshOptions = () => {
        this.setState({ testpgm: testpgms.test_programs });
    }

    render() {
        return (
            <div>
                <h1 align="center">Config</h1>
                <hr />
                <Container>
                    <Row>
                        <Col xs="8">
                            <Inputs handleClick={this.handleClick} button={'showConfig'}/>
                        </Col>
                        <Col xs="4">
                        <div>&nbsp;</div>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th colspan="3" align="center">NRB Rules</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Label for="bn">Bin Name:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="bn" id="bn" placeholder="Enter bin namee" value = 'bin13'></Input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Label for="minLots">Min Lots:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="minLots" id="minLots" placeholder="Enter min lot" value= '12'></Input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Label for="timespan">Time Span:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="timeSpan" id="timeSpan" placeholder="Enter time span" value='3 months'></Input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Label for="rr">Recovery Rate:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="rr" id="rr" placeholder="Enter recovery rate" value = '<30%'></Input>
                                        </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                            <div>&nbsp;</div>
                        </Col>
                    </Row>
                </Container>
                <Modal isOpen={this.state.modal} toggle={this.handleClick} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>NRB Enrollment</ModalHeader>
                <ModalBody>
                    NRB configuration has been enrolled to ATSS.<br/>
                    Please see below details:<br/>
                    <b>Device</b>: {this.state.deviceName}<br/>
                    <b>Test Program</b>: {this.state.testpgm}<br/>
                    <b>Logpoint</b>: {this.state.lpt}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleClick}>Acknowledge</Button>{' '}
                    <Button color="secondary" onClick={this.handleClick}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}