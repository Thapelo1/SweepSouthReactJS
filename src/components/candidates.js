import React from 'react';
import {NavLink} from 'react-router-dom'


const Candidates = ({candidates}) => {
    return (
        <>
            {candidates.map((candidate, index) => (
                <div className="col-6">
                    <div className="card mb-3" key={index}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/images/profile.jpg" alt="" style={{width: 100, borderRadius: "50%" }}/>
                                </div>
                                <div className="col">
                                    <h5 className="card-title">{candidate.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{candidate.email}</h6>
                                    <p className="card-text">{candidate.address.city}</p>
                                    <NavLink className="btn btn-primary" to = {`/candidates/${candidate.id}`}> View {candidate.name} </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
        </>
    )
};

export default Candidates;