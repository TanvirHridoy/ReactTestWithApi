import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { booklist: [], loading: true };
  }

  componentDidMount() {
    this.populateBooklistData();
  }

    static renderBooklistTable(booklist) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Title</th>
            <th>Book Id</th>
            <th>Author</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {booklist.map(book =>
              <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.bookId}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>

            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : FetchData.renderBooklistTable(this.state.booklist);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateBooklistData() {
      const auth = await fetch('http://localhost:5870/WeatherForecast');
      //console.log(auth.json());
      var token = await auth.json()
      console.log(token);
      const newOptions = {
          //...options,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.t}`,
          },
      }
      const response = await fetch('http://localhost:5870/api/BookLists', newOptions);

    const data = await response.json();
    this.setState({ booklist: data, loading: false });
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
