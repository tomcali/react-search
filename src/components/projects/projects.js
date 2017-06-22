import React, {Component} from 'react';
import {Col, Image} from 'react-bootstrap';
import Section from '../section/section';
import placeholder from './placeholder.gif';
import './projects.css';
import faker from 'faker';  // used for development purposes

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProject: {
				projectName: '',  // empty to be filled in later
				description: '' // empty to be filled in later
			},
			projects: [
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraphs()
				},
                {
                    projectName: faker.name.title(),
                    description: faker.lorem.paragraphs()
                },
                {
                    projectName: faker.name.title(),
                    description: faker.lorem.paragraphs()
                }

			]
		}
	}	

	renderTiles = () => {
		return this.state.projects.map(item => {
			return (
				<Image src={placeholder} className='tile' onClick={() => this.handleSelectProject(item)} />
			)
		})
	}

	handleSelectProject = (project) => {
		this.setState({selectedProject: project})
	}

	renderProject = () => {

		return (
			<div>
				<h3>{this.state.selectedProject.projectName}</h3>
				<p>{this.state.selectedProject.description}</p>
			</div>
		)
	}

	render() {
		return (
			<div className='projects'>

				<Section sectionTitle='Past Search Results'>
					<Col xs={4}>
							{this.renderProject()}
					</Col>
					<Col xs={6}>
						{this.renderTiles()}
					</Col>
				</Section>
				
			</div>
		)
	}
}