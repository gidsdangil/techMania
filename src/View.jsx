import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
            nrb_rule: [],
            data: [],
            testpgm: [],
            atssData: [],
            lpt: [],
            bin_array: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.state = initialState;
    }

    handleClick = (options_array) =>{
        
        let atssJson = atss_data.atss_data;
        for (let index = 0; index < atssJson.length; index++) {
                if(atssJson[index].material === options_array[0]
                    && atssJson[index].logpoint == options_array[2]
                    && atssJson[index].test_program === options_array[1]){
                    this.setState({bin_array: atssJson[index].bin_information}); 
            }    
        }   
        console.log(options_array);        
    }

    componentWillMount() {
        this.refreshOptions();
    }

    refreshOptions = () => {
        let tp = testpgms.test_programs;
        let atss = atss_data.atss_data;
        let lpts = atss_data.atss_data;

        //e liminate dupes
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
            if (uniqueDeviceNames[val.material] === undefined) {
                uniqueDeviceNames[val.material] = true;
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
        const data = this.state.bin_array;
        const columns = [{
            Header: 'Bin',
            accessor: 'bin_name'
        }, {
            Header: 'Recovery Rate',
            accessor: 'recovery_rate',
        }, {
            Header: 'Enroll',
            accessor: 'enrolled'
        }];

        
        return (
            <div>
                <h1 align="center">View Report</h1>
                <hr />
                <Container>
                    <Row>
                        <Col xs="4">
                            <Inputs handleClick={this.handleClick} button={'showView'}/>
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