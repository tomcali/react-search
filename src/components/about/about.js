import React, {Component} from 'react';
import Section from '../section/section'
import {Col} from 'react-bootstrap';

// placeholder text --- to be replaced with query form field
// for new search request
export default class About extends Component{
	render() {
		return (
			<div className='about'>
				<Section sectionTitle='Enter new search request:'>
					<Col xs={12}>
						---
					</Col>
				</Section>
			</div>
		)
	}	
}