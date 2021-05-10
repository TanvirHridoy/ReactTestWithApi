////import { extend } from 'jquery';
////import React, { Component } from 'react';

////export class Ticket extends Component {
////    static displayName = Ticket.name;

////    constructor(props) {
////        super(props);
////        this.state = { tickets: [], loading: true };
////    }
////    componentDidMount() {
////        this.populateTicketData();
////    }

////    static renderTicketsTable(tickets) {
////        return (
////            <table className='table table-striped' aria-labelledby="tabelLabel">
////                <thead>
////                    <tr>
////                        <th>Date</th>
////                        <th>Temp. (C)</th>
////                        <th>Temp. (F)</th>
////                        <th>Summary</th>
////                    </tr>
////                </thead>
////                <tbody>
////                    {forecasts.map(ticket =>
////                        <tr key={ticket.date}>
////                            <td>{ticket.date}</td>
////                            <td>{ticket.temperatureC}</td>
////                            <td>{ticket.temperatureF}</td>
////                            <td>{ticket.summary}</td>
////                        </tr>
////                    )}
////                </tbody>
////            </table>
////        );
////    }

////}