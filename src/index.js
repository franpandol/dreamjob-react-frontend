import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobList from './JobList.js';
import DetailView from './DetailView.js';


class DreamJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {job: {}};

    this.handleToUpdate = (job) => {
      this.setState({
        job: job
      }, () => console.log(this.state.job));
    }
    this.handleToUpdate = this.handleToUpdate.bind(this);
  }


  render() {
    return (
      <div className="main">
        <div>
          <JobList handleToUpdate = {this.handleToUpdate} />
        </div>
        <div className="detail-view">
          <DetailView job={this.state.job}/>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <DreamJob />,
  document.getElementById('root')
);

