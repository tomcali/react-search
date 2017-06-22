import React, {Component} from 'react';
import {Modal, Popover, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';

const Help = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover className="modal-popover" title="queries">
        A query is a search request, what you type into the search bar of a search engine such as Google.
      </Popover>
    );
    const annotate = (
      <Popover className="modal-popover">
        To annotate is to make comments or to otherwise tag or rate search results. Your annotation could be a description (such as a sentence or summary paragraph), keywords, or ratings. Keywords may be used to organize search results into categories, and ratings may be associated with these keywords or categories.
      </Popover>
    );
    const elasticsearch = (
        <Tooltip className="modal-tooltip">
           Elasticsearch is an open-source document database with extensive search capabilities. Developed and supported by Elastic Company and built on Lucene and the Java Virtual Machine, Elasticsearch is the most widely installed information retrieval system in the world.
        </Tooltip>
    );



      return (
      <div>
        {/*<p>Click to get the full Modal experience!</p>*/}
        <hr />
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Search Utility Help
        </Button>
        <p></p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Search Utility Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Save time in searching the web by . . .</h4>
            {/*<p>. . . by saving and commenting on past search results.</p>*/}

            <h4>Making productive queries</h4>
            <p>Use nouns in <OverlayTrigger overlay={popover}><a href="#">queries,</a></OverlayTrigger> not other forms of speach. The more nouns you can enter into the search bar, the better. Verbs, adverbs, prepositions, and conjunctions are of little value. Adjectives in front of nouns are sometimes useful. Try to spell words correctly.</p>

            <h4>Storing and annotating search results</h4>
            <p>If you store and <OverlayTrigger overlay={annotate}><a href="#">annotate</a></OverlayTrigger> search results, then they will be available for future reference.</p>

            <hr />

            <h4>Benefit from the hours you spend searching the web.</h4>
            <p>This tool builds on the power of <OverlayTrigger overlay={elasticsearch}><a href="#">Elasticsearch</a></OverlayTrigger> to provide a search and information storage tool that will help you be more productive.</p>
            <p>Turn your search time into a personal information store, a resource that you can use to be a more efficient student, teacher, or knowledge worker.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

// ReactDOM.render(<HelpMessage />, mountNode);

export default Help;