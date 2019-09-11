import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input} from 'reactstrap';
import testpgms from './test_programs';
import atss_data from './atss_data';
import nrbRules from './nrb_rules';

class Inputs extends Component {
    constructor(props) {
        super(props);

        var initialState = {            
            nrb_rule:[],
            data: [],
            selected_testpgm: '',
            selected_device: '',
            selected_lpt: '',
            bin_array: {}
        };
        this.handleButton = this.handleButton.bind(this);
        this.state = initialState;
    }

    componentWillMount() {
        this.refreshOptions();
    }

    handleChange = (value, event) =>{
        console.log(value)
        if(value === "device")
            this.setState({selected_device: event.target.value});
        else if(value === "tpgm")
            this.setState({selected_testpgm: event.target.value});
        else if(value === "lgpt")
            this.setState({selected_lpt: event.target.value});
    }

    handleButton = () => {
        if (this.props.button === 'showView'){
            let options_array = [this.state.selected_device, this.state.selected_testpgm, this.state.selected_lpt];
            this.props.handleClick(options_array);
        }else{
            let options_array = [this.state.selected_device, this.state.selected_testpgm, this.state.selected_lpt];
            this.props.handleClick(options_array);
        }
    }    

    refreshOptions = () => {
        let tp = testpgms.test_programs;
        let atss = atss_data.atss_data;
        let lpts = atss_data.atss_data;

        //eliminate dupes
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

        this.setState({ testpgm: tp });
        this.setState({ atssData: atss });
        this.setState({ lpt: lpts });
        this.setState({ nrb_rule: nrbRules.nrb_rules });
    }
    render(){
        const devices = this.state.atssData.map((item) =>
            <option value={item.material}>{item.material}</option>
        );
        const tpgm = testpgms.test_programs.map((item) =>
            <option value={item.name}>{item.name}</option>
        );
        const lgpt = this.state.lpt.map((item) =>
            <option value={item.logpoint}>{item.logpoint}</option>
        );
        return(
            <div>
            <Form>
                <FormGroup>
                    <Label for="deviceName">Device Name</Label>
                    <Input type="select" id="deviceName" onChange={this.handleChange.bind(null,'device')}>
                        <option value=''></option>
                        {devices}                                
                    </Input>
                    <Label for="testProgram">Test Program</Label>
                    <Input type="select" id="testProgram" onChange={this.handleChange.bind(null,'tpgm')}>
                        <option value=''></option>
                        {tpgm}                                
                    </Input>
                    <Label for="lpt">Logpoint</Label>
                    <Input type="select" id="logPoint" onChange={this.handleChange.bind(null,'lgpt')}>
                        <option value=''></option>
                        {lgpt}                                
                    </Input>
                    <div>&nbsp;</div>
                    <Button onClick={this.handleButton}>Submit</Button>                    
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Inputs;