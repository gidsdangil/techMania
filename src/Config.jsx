import React, { Component } from 'react';
import { Button, Label, Input, Container, Row, Col } from 'reactstrap';
import Inputs from './Inputs';
import testpgms from './test_programs';


export default class Config extends Component {
    constructor(props) {
        super(props);

        //console.log('dataInner', props.data);

        var initialState = {
            deviceNames: [{ value: "device1", label: "device1" },
            { value: "device2", label: "device2" },
            { value: "device3", label: "device3" }],
            testpgm: [{ value: "pgm1", label: "pgm1" },
            { value: "pgm2", label: "pgm2" },
            { value: "pgm2", label: "pgm2" }],
            lpt: [{ value: "0000", label: "0000" },
            { value: "0100", label: "0100" },
            { value: "0200", label: "0200" }],
        };

        this.state = initialState;
    }

    handleClick = () => {
        alert("clicked!");
    }

    onSubmit = () => {
        alert("submitted!");
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
                            <Inputs />
                            <Button onClick={() => this.handleClick()}>View NRB Rules</Button>
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
                                            <Label for="minLots">Min Lots:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="minLots" id="minLots" placeholder="Enter min lot"></Input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Label for="timespan">Time Span:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="timeSpan" id="timeSpan" placeholder="Enter time span"></Input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Label for="rr">Recovery Rate:&nbsp;</Label>
                                        </td>
                                        <td>
                                            <Input type="text" name="rr" id="rr" placeholder="Enter recovery rate"></Input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>&nbsp;</div>
                            <Button onClick={() => this.onSubmit()}>Override</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}