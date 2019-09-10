import React, { Component } from 'react';
import Select from 'react-select';
import { Form, FormGroup, Label} from 'reactstrap';
import testpgms from './test_programs';
import atss_data from './atss_data';
import nrbRules from './nrb_rules';

export default class Inputs extends Component {
    constructor(props) {
        super(props);

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
            nrb_rule:[],
            data: [],
        };

        this.state = initialState;
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

        this.setState({ testpgm: tp });
        this.setState({ atssData: atss });
        this.setState({ lpt: lpts });
        this.setState({ nrb_rule: nrbRules.nrb_rules });
    }
    render(){
        return(
            <div>
            <Form>
                <FormGroup>
                    <Label for="deviceName">Device Name</Label>
                    <Select placeholder="Please select Device Name" isClearable
                                options={this.state.atssData.reduce((sum, e, i) => {
                        if (e.material_name !== null) {
                            sum.push({ label: e.material_name, value: e.material_name, });
                            }
                            return sum;
                        }, [])}/>
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
                            options={this.state.lpt.reduce((sum, e, i) => {
                        if (e.logpoint !== null ) {
                            sum.push({ label: e.logpoint, value: e.logpoint, });
                            }
                            return sum;
                        }, [])} />
                    <div>&nbsp;</div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}