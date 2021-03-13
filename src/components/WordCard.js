import React, { Component } from 'react'
import {Button, Modal,Container, Row, Col} from 'react-bootstrap';

export default class WordCard extends Component {
    constructor(){
        super()
        this.state = {
            detailsBox : false
        }
    }
    render() {
        const { data } = this.props;
        return (
            <>
            <Col xl = {5}  lg = {5} md = {5} sm = {10} xs = {10} onClick = {() => this.setState({detailsBox:true})} className = "word-card">
                <Row>
                    <Col><h4 >{data.word}</h4></Col>
                </Row>
                <Row>
                    <Col><p>({data.type}){data.definition}</p></Col>
                </Row>
                <Row>
                    <Col><p>Example : {data.example}</p></Col>
                </Row>
            </Col>
            <Modal 
                   
                   show={this.state.detailsBox} 
                   animation={false} 
                   onHide={()=>this.setState({ detailsBox: false })}
                   aria-labelledby="example-modal-sizes-title-lg"
               >
                   <Modal.Header closeButton>
                        <Modal.Title>{data.word}</Modal.Title>
                   </Modal.Header>
       
                   <Modal.Body>
                   <Row>
                        <Col><h4 >{data.word}</h4></Col>
                    </Row>
                    <Row>
                        <Col><p>({data.type}){data.definition}</p></Col>
                    </Row>
                    <Row>
                        <Col><p>Example : {data.example}</p></Col>
                    </Row>
                   </Modal.Body>
       
                   <Modal.Footer className="text-center mb-3 d-flex justify-content-center">
   
                   </Modal.Footer>
               </Modal>
            </>
        )
    }
}
