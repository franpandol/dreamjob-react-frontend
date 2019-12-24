import React from 'react';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/dreamjobs/")
      .then(res => res.json())
      .then(
        (result) => {
        	console.log("result");
        	console.log(result);
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        	console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    var handleToUpdate  =   this.props.handleToUpdate;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href="#" onClick={() => handleToUpdate(item)}>{item.title}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default JobList;