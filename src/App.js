import React from 'react';
import Candidates from './components/candidates';
import Candidate from './components/candidate';
import NotFound from './components/notfound';
import Navbar from './components/navbar';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      candidates: []
    }

  }

  renderCandidates = (routerProps) => {

    let candidateId = parseInt(routerProps.match.params.id);
    let selectedCandidate = this.state.candidates.find(candidate => candidate.id === candidateId);

    return selectedCandidate ? <Candidate candidate={selectedCandidate}/> : <NotFound/>;

  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((candidates) => {
      this.setState({candidates: candidates})
    })
    .catch(console.log);

  }

  render(){
    const { candidates } = this.state
    return (
      <>
      <Navbar/>
      <div className="container-fluid mt-3">
     
        <div className="row">
          <div className="col-6 candidates-col">
          <div class="alert alert-dismissible alert-primary">
            <h2>Sweep South Candidates</h2>
          </div>
            <div className="row">
              <Candidates candidates={candidates}/>
            </div>
          </div>
          <div className="col-6">
          <Switch>
            <Route exact path='/candidates/:id' render={routerProps => this.renderCandidates(routerProps)} />
          </Switch>
          </div>
        </div>
      </div>
      </>
      
    )
  }
}

export default App;
