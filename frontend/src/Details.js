import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Upload, Download } from "react-bootstrap-icons";

const Details = () => {


    // const { selectedTask, setSelectedTask } = useState({task_name: "complete details page", task_description: "this is a task.", user_id: "12345", priority: "high", location_id: "7", task_type: "Personal", due_date: "23 March 1970", status: "assigned"});
    // const { selectedLocation, setSelectedLocation } = useState({location_id: "7", building: "7000", room: "27A", phone_number: "3675309", address: "27 W Palm Street", hours: "1300-1500 M-F", url: "https:www.finishmyinprocessing.com", notes: "these are notes."});
    // const { currentUser, setCurrentUserk } = useState({user_id: "12345", user_name: "Ricky"});

    // Test Data
    const selectedTask =[{task_name: "complete details page", task_description: "this is a task.", user_id: "12345", priority: "high", location_id: "7", task_type: "Personal", due_date: "23 March 1970", status: "assigned"}];
    const selectedLocation =[{location_id: "7", building: "7000", room: "27A", phone_number: "3675309", address: "27 W Palm Street", hours: "1300-1500 M-F", url: "https:www.finishmyinprocessing.com", notes: "these are notes."}]
    // {console.log(selectedTask)};

    return (
        <Container>
           
                <div>{selectedTask[0].task_name}
                <Button variant="warning" className='detailH1Button'>Edit</Button>{' '}
                <Button variant="danger" className='detailH1Button'>Delete</Button>{' '}
                </div>
            
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Task Description</Accordion.Header>
                <Accordion.Body>
                {selectedTask[0].task_description}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Location</Accordion.Header>
                <Accordion.Body>
                        <div>{selectedLocation[0].address}</div>
                        <div>{selectedLocation[0].hours}</div>
                        <div>{selectedLocation[0].building}</div>
                        <div>{selectedLocation[0].room}</div>
                        <div>{selectedLocation[0].phone_number}</div>
                        <div>{selectedLocation[0].notes}</div>
                        <div>{selectedLocation[0].url}</div>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
       
            <Button variant="primary">Upload <Upload /></Button>{' '}
            <Button variant="secondary">Download <Download /></Button>{' '}
       
        </Container>
    );
}

export default Details;