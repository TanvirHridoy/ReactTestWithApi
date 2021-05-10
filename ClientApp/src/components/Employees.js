//import './css/jquery.dataTables.css'
import React, { Component } from 'react';

const $ = require('jquery')
$.DataTable = require('datatables.net')
export class Employees extends Component {
    static displayName = Employees.name;

    constructor(props) {
        super(props);
        this.state = { EmployeList: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderTable(EmployeList) {
        return (
            <table className='dt table table-striped'  aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {EmployeList.map(emp =>
                        <tr key={emp.empID}>
                            <td>{emp.empID}</td>
                            <td>{emp.fullName}</td>
                            <td>{emp.designation.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Employees.renderTable(this.state.EmployeList);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component  fetching data from the Erp bepza server.</p>
                {contents}
            </div>
        );
    }
   
    async populateData() {
        //const auth = await fetch('http://erp1.bepza.gov.bd:84/api/jwt');
        //console.log(auth.json());
        //var token = await auth.json()
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUZXN0IHN1YmplY3QiLCJOYW1lIjoiSHJpZG95IiwiZW1haWwiOiJocmlkb3lAYXNpdC5jb20uYmQiLCJleHAiOjE2MjA3OTE3NDMsImlzcyI6Imh0dHA6Ly9lcnAxLmJlcHphLmdvdi5iZDo4NCIsImF1ZCI6Imh0dHA6Ly9lcnAxLmJlcHphLmdvdi5iZDo4NCJ9.iL2Ia8Wg1FvTndaVhvQ5AZoP0VaA4eaX6yJzp2oi-F8';
        console.log(token);
        const newOptions = {
            //...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
        const response = await fetch('http://erp1.bepza.gov.bd:84/api/PrmEmploymentInfoes/1', newOptions);

        const data = await response.json();
        data.sort((a, b) => a.designation.sortOrder - b.designation.sortOrder);
        //console.log(data);
        this.setState({ EmployeList: data, loading: false });
    }
    //const fetchWrapper = async (URI, options) => {
    //    const auth = await fetch('http://localhost:5870/WeatherForecast',
    //        {
    //            method: 'POST'//, // *GET, POST, PUT, DELETE, etc.
    //            //mode: 'cors', // no-cors, *cors, same-origin
    //            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //            //credentials: 'same-origin', // include, *same-origin, omit
    //            //headers: {
    //            //    'Content-Type': 'application/json'
    //            //    // 'Content-Type': 'application/x-www-form-urlencoded',
    //            },
    //    );
    //    console.log(auth);
    //    const newOptions = {
    //        ...options,
    //        headers: {
    //            'Content-Type': 'application/json',
    //            'Authorization': `Bearer ${auth}`,
    //        },
    //    }
    //    const res = await fetch(URI, newOptions);
    //    return res;
    //}
}