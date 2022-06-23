import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './App.css';

function Counter(props) {
  return (
    <Card /*className={`counter${props.id}`}*/>
      <Card.Text>
        <p>{props.count}</p>
        <Button onClick={()=>props.increaseCounter()}>Like</Button>
      </Card.Text>
      <Card.Text>
        <p>{props.count}</p>
        <Button onClick={()=>props.increaseCounter()}>DisLike</Button>
      </Card.Text>
    </Card>
  );
}
export default Counter;







