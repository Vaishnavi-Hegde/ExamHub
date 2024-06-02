import React from 'react';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Announcement = ({ title, description, date }) => {
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDateString = date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const formattedTimeString = date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        });
        return `${formattedDateString} ${formattedTimeString}`;
      };
    return (<div style={{padding: "20px"}}>
        <div class="card">
            <div class="card-header">
                <h4>{title}</h4>
            </div>
            <div class="card-body">
                <p class="card-text">{description}</p>
                <p class="card-text"><small class="text-muted">{formattedDate(date)}</small></p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        </div>
    );
};

export default Announcement;
