import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class View extends Component {
    render() {
        return (
            <div>
                <h1>View Report</h1>
                <div className="padding-top padding-right padding-left">
                    <Form>
                        <FormGroup>
                            <Label for="deviceName">ATSS Device Name</Label>
                            <Input placeholder="Device Name" type="text" id="deviceName" name="deviceName" />
                            <Label for="testProgram">Test Program</Label>
                            <Input placeholder="Test Program" type="text" id="testProgram" name="testProgram" />
                            <Label for="lpt">Logpoint</Label>
                            <Input placeholder="Logpoint" type="text" id="lpt" name="lpt" />
                            <Button onClick={() => this.onClick}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}