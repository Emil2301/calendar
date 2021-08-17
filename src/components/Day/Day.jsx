import React from 'react';
import './Day.css';
import Card from '@material-ui/core/Card';

const Day = ({number}) => (
  <Card className="day">
    <div >    
      Day {number}
    </div>
  </Card>
  
);

export default Day;
