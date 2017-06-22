import React, {Component} from 'react';
import Section from '../section/section'
import {Col} from 'react-bootstrap';

// placeholder text --- to be replaced with query form field
// for search request on past searches
export default class SearchPast extends Component{
	render() {
		return (
			<div className='searchpast'>
				<Section sectionTitle='Search information store about:'>
					<Col xs={12}>
						---
					</Col>
				</Section>
			</div>
		)
	}	
}