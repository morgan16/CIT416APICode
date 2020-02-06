import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      results: null
    }
  }

  render()
  {
    // set up a variable to be used within render called results which gets its value from results of state
    // proper destructuring of state into a "local" variable
    const {results} = this.state; 

    //if (results == null) return null;

    return (
      <div className="App">
        { results ?
          <Table 
            list={results.hits}
            />
          : null
        }
      </div>
    );
  }
}

function Table({list})
{
  return (
    <table className='news'>
      <thead><tr><th>Title</th><th>URL</th><th>Author</th><th>Num Comments</th></tr></thead>
      <tbody>
      {
        list.map((item) => {
          return <tr key={item.objectID}>
                    <td>{item.title}</td>
                    <td><a href='{item.url}'>{item.url}</a></td>
                    <td>{item.author}</td>
                    <td>{item.num_comments}</td>
                 </tr>
        })
      }
      </tbody>
      </table>
  );
}

export default App;
