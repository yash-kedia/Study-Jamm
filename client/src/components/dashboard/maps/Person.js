import React, { useState } from 'react';
import reactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Navbar from './../../navbar/navbar';
import './person.css';
//import Accordion from 'react-bootstrap/Accordion'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { GitHub, LinkedIn, Skype } from 'react-profiles';


import 'react-accessible-accordion/dist/fancy-example.css';

// const post = (props) => ( <
//     Collapsible trigger = { props.name } >
//     <
//     p className = "HEY" > { props.skills } < /p> < /
//     Collapsible >
// );


/*<Accordion title={(<div className="card mb-3" key={props._id} id={props._id}>
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
</div>)}> */

//var url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=email@domain.com&tf=1";

const post = (props) => ( 
    <Accordion allowZeroExpanded = { true }>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton > { props.name } </AccordionItemButton> 
            </AccordionItemHeading> 
            <AccordionItemPanel>
                <div className = "card mb-3" key = { props._id } id = { props._id } >
                    <div className = "skills">
                        <p> {props.descrp} </p> <br />
                        <p> <strong> My skills are: </strong></p> 
                        {
                            props.skills.map((item) => ( 
                                <span className = "skills"> { item } </span>
                            ))
                        } 
                        <br />
                        <br />
                        <p> <strong> Connect with me here: </strong> </p> 
                        {
                            props.linkedIn && (<div><br /> <LinkedIn username = {props.linkedIn} /> </div>)
                        }
                        
                        <br /> 
                        <a href={props.url} target="_blank">
                            <Button variant = "primary" className="back"> Email me </Button> 
                        </a>
                    </div> 
                </div> 
            </AccordionItemPanel>  
        </AccordionItem> 
    </Accordion>


)



export default post;


// import React, { useState } from 'react';
// import Accordion from './Accordion';
// import './Accordion.css'
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import './person.css';

// const post = (props) => ( <
//     Accordion title = {
//         ( < div className = "card mb-3"
//             key = { props._id }
//             id = { props._id } >
//             <
//             div class = "card-body" >
//             <
//             div className = "row" >
//             <
//             h5 className = "card-title col-8 color_match" > { props.name } < /h5> <
//             p className = "col-4 text-right" >
//             <
//             / p > < /
//             div > <
//             div class = "card-text row" >
//             <
//             div className = "col-8" > {
//                 props.skills.map((item) => ( <
//                     span className = "skills" > { item } < /span>
//                 ))
//             } <
//             /div>  < /
//             div > <
//             /div> < /
//             div > )
//     } > <
//     /Accordion>

// );

// export default post;