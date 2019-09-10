import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import ReactTable from 'react-table';
import Inputs from './Inputs'
import testpgms from './test_programs';
import atss_data from './atss_data';
import nrbRules from './nrb_rules';

export default class View extends Component {
    constructor(props) {
        super(props);

        //console.log('dataInner', props.data);

        var initialState = {
            atssData: [{ value: "device1", label: "device1" },
            { value: "device2", label: "device2" },
            { value: "device3", label: "device3" }],
            testpgm: [{ value: "pgm1", label: "pgm1" },
            { value: "pgm2", label: "pgm2" },
            { value: "pgm2", label: "pgm2" }],
            lpt: [{ value: "0000", label: "0000" },
            { value: "0100", label: "0100" },
            { value: "0200", label: "0200" }],
            nrb_rule: [],
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
        let tp = testpgms.test_programs;
        let atss = atss_data.atss_data;
        let lpts = atss_data.atss_data;

        //elliminate dupes
        let uniqueTestPrograms = {};
        tp = tp.filter((val) => {
            if (uniqueTestPrograms[val.name] === undefined) {
                uniqueTestPrograms[val.name] = true;
                return true;
            }
            return false;
        });

        let uniqueDeviceNames = {};
        atss = atss.filter((val) => {
            if (uniqueDeviceNames[val.material_name] === undefined) {
                uniqueDeviceNames[val.material_name] = true;
                return true;
            }
            return false;
        });

        let uniqueLogPoints = {};
        lpts = lpts.filter((val) => {
            if (uniqueLogPoints[val.logpoint] === undefined) {
                uniqueLogPoints[val.logpoint] = true;
                return true;
            }
            return false;
        });

        console.log(uniqueTestPrograms);
        console.log(uniqueDeviceNames);
        console.log(uniqueLogPoints);

        this.setState({ testpgm: tp });
        this.setState({ atssData: atss });
        this.setState({ lpt: lpts });
        this.setState({ nrb_rule: nrbRules.nrb_rules });
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
                            <Inputs />
                            <Button onClick={() => this.handleClick()}>Submit</Button>
                        </Col>
                        <Col xs="8">
                            <h2 align="center">Binning Information</h2>
                            <ReactTable data={data} columns={columns} 
                                resolveData={data => data.map(row => row)}
                                minRows="6" className="-striped -highlight"/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}