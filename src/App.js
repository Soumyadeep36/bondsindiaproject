import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import WordCard from './components/WordCard'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      dictionary : [
        { word: "brave", type: "Adjective", definition: "ready to face and endure danger or pain; showing courage", example: "a brave soldier::she was very brave about the whole thing"},
        { word: "authentic", type: "Adjective", definition: "of undisputed origin and not a copy; genuine", example: "the letter is now accepted as an authentic document"},
        { word: "vivid", type: "Adjective", definition: "producing powerful feelings or strong, clear images in the mind", example: "memories of that evening were still vivid"},
        { word: "hasten", type: "Verb", definition: "be quick to do something", example: "he hastened to refute the assertion"},
        { word: "lexical", type: "Adjective", definition: "relating to the words or vocabulary of a language", example: "lexical analysis"},
        { word: "home", type: "Noun", definition: "the place where one lives permanently, especially as a member of a family or household", example: "the floods forced many people to flee their homes"},
        { word: "home", type: "Noun", definition: "the place where one lives permanently, especially as a member of a family or household", example: "the floods forced many people to flee their homes"},
        { word: "home", type: "Noun", definition: "the place where one lives permanently, especially as a member of a family or household", example: "the floods forced many people to flee their homes"},
        { word: "instance", type: "Noun", definition: "an example or single occurrence of something", example: "a serious instance of corruption"},
        { word: "indeed", type: "Adverb", definition: "used to emphasize a statement or response confirming something already suggested", example: "it was not expected to last long, and indeed it took less than three weeks"},
        { word: "new", type: "Adjective", definition: "produced, introduced, or discovered recently or now for the first time; not existing before", example: "the new Madonna album"},
        { word: "testing", type: "Adjective", definition: "revealing a person's capabilities by putting them under strain; challenging", example: "it's been quite a testing time for all of us"},
      ],
    }
  }

  render() {
    const { dictionary } = this.state
    return (
      <div className="App">
       <Container className = "topshank" fluid>
        <Row className = "topshank-row">
            <Col xl = {12} lg = {12} md = {12} sm = {12} xs = {12} className = "titleheading">
              <h2 className = "title-heading">VOCABULARY</h2>
            </Col>
          </Row>
       </Container>
       <Container className = "body" fluid>
          <Row >
            <Col style = {{borderBottom : '0.1px solid grey',boxSizing : 'border-box',marginBottom : '0'}}>
                <p className = "sub-title">Words List</p>
            </Col>
          </Row>
          <br />
          <Row>
          {dictionary.map((data,index)=><WordCard key = { index } data = { data } />)}
          </Row>
       </Container>
       </div>
    )
  }
}
