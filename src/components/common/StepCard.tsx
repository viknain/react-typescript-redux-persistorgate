import React from 'react';
import { Card } from 'react-bootstrap';
import './StepCard.css';

export const StepCard: React.FC<{
  step?: string;
  title?: string;
  subtitle?: string;
  text1?: string;
  text2?: string;
}> = (props) => {
  return (
    <Card>
      {/* <Card.Header className="step-name">                    
            {props.step}
                </Card.Header> */}
      <Card.Body>
        <div className="step-name">{props.step}</div>
        <Card.Title className="step-title">
          <h3>{props.title}</h3>
        </Card.Title>
        <Card.Text className="step-card-text">
          {props.text1}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle className="step-card-subtitle">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text className="step-card-text">
          {props.text2}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
