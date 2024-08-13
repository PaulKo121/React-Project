import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch( ... 略 ... );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1>Dashboard</h1>
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Device</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.timestamp}</td>
                <td>{item.device}</td>
                <td>{item.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;