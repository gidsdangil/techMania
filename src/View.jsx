import React, { Component } from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Label, Container, Row, Col } from 'reactstrap';
import ReactTable from 'react-table';
import testpgms from './test_programs';
import 'react-table/react-table.css';


export default class View extends Component {
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
            data: [],
        };

        this.state = initialState;
    }

    handleClick = () => {
        alert("clicked!");
    }

    componentWillMount() {
        this.refreshOptions();
    }

    refreshOptions = () => {
        this.setState({ testpgm: testpgms.test_programs });
    }

    render() {
        const columns = [{
            Header: 'Bin',
            accessor: 'bin'
        }, {
            Header: 'Recovery Rate',
            accessor: 'rr',
        }, {
            Header: 'Enroll',
            accessor: 'enroll'
        }];

        const data = []
        return (
            <div>
                <h1 align="center">View Report</h1>
                <hr />
                <Container>
                    <Row>
                        <Col xs="4">
                            <Form>
                                <FormGroup>
                                    <Label for="deviceName">Device Name</Label>
                                    <Select placeholder="Please select Device Name" isClearable
                                        options={this.state.deviceNames} />
                                    <Label for="testProgram">Test Program</Label>
                                    <Select placeholder="Please select Test Program" isClearable
                                        options={this.state.testpgm.reduce((sum, e, i) => {
                                            if (e.name !== null) {
                                                sum.push({ label: e.name, value: e.name, });
                                            }
                                            return sum;
                                        }, [])} />
                                    <Label for="lpt">Logpoint</Label>
                                    <Select placeholder="Please select Logpoint" isClearable
                                        options={this.state.lpt} />
                                        <div>&nbsp;</div>
                                    <Button onClick={() => this.handleClick()}>Submit</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs="8">
                            <h2 align="center">Binning Information</h2>
                            <ReactTable data={data} columns={columns} resolveData={data => data.map(row => row)}
                                minRows="20" />
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}