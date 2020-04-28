  
import React from 'react'

const Candidate = ({candidate}) => {

    let imageStyle = {
        height: "auto",
        width: "50%",
        display: "block",
        margin: "auto",
        borderRadius: "50%"
    }

    return (
        <div className="card mb-3">
            <h3 className="card-header">Name: {candidate.name}</h3>
            <div className="card-body">
                <h5 className="card-title">Username: {candidate.username}</h5>
                <h6 className="card-subtitle text-muted">Email: {candidate.email}</h6>
            </div>
            <img style={imageStyle}src="/images/profile.jpg" alt=""/>
            <div className="card-body">
                <p className="card-text">Motto: {candidate.company.catchPhrase}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{candidate.address.street}</li>
                <li className="list-group-item">{candidate.address.suite}</li>
                <li className="list-group-item">{candidate.address.city}</li>
                <li className="list-group-item">{candidate.address.zipcode}</li>
            </ul>
            <div className="card-body">
               <p>Website:<a href={candidate.website} className="card-link"> {candidate.website}</a></p> 
               <p>Contact:<a href="/" className="card-link">{candidate.phone}</a></p>
            </div>
            <div className="card-footer text-muted">
               Updated 2 days ago
            </div>
        </div>
    )
}

export default Candidate;