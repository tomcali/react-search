import React, {Component} from 'react';
import Section from '../section/section'
import {Col} from 'react-bootstrap';

export default class About extends Component{
	render() {
		return (
			<div className='about'>
				<Section sectionTitle='Enter your search request:'>
					<Col xs={12}>
						---
					</Col>
				</Section>
			</div>
		)
	}	
}