import React, {useState} from 'react';
import Accordion from './Accordion';
import './Accordion.css'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './person.css';

const post = (props) => (
	<Accordion title={(<div className="card mb-3" key={props._id} id={props._id}>
	<div class="card-body">
		<div className="row">
			<h5 className="card-title col-8 color_match">{props.name}</h5>
			<p className="col-4 text-right">
				<i class="fas fa-comment-alt fa-2x"></i>
			</p>
		</div>
		<div class="card-text row">
			<div className="col-8">
				{props.skills.map((item) =>(
					<span className="skills">{item}</span>
				))}
			</div>
			<div className="col-4 text-right accordion-icon">
				Chat 
			</div>
		</div>
	</div>
</div>)}>
		CONNECT TO
			</Accordion>
	
);

export default post;