import React from 'react';
var Status = React.createClass({

	getInitialState(){
		return{
			PhaseDecription : 'klik en box for at se hvad der sker hos dig i den process'
			Phases: 
		}
	}

	getTextPhaseDecription(){


	}

	render(){
		return(
			<div className>
				<h1> Vælg det projekt du ønsker information omkring</h1>
				<select>{2-2}
				</select>
				{}
				<div> Tilmeldinger </div>
				<div> Planlægning </div>
				<div> Gravning af kabler </div>
				<div> Opsætning af fiberstik </div>
				<div> Installations Teknikker </div>
				<div> Re-etablering </div>
				<div> <p> {this.props.PhaseDecription}</p></div>
			</div>

		)
	}

})

const Phases = [{
		Name : 'Tilmeldinger',
		Description: 'Vi er [bne for tilmeldinger til tilslutning af projektet, prisen for tilslutning kan varriere efter antal af tilmeldte, se tilmeldings side omkring dette'
		StartDate : 22022017,
		EndDate: 24042017,
		PhaseNumber: 1,
	},{
		Name : 'Planlægning',
		Description: ' Kort text omkring gravning'
		StartDate : 01032017,
		EndDate: 01042017,
		PhaseNumber: 2,
	},{
		Name : 'Gravning',
		Description: 'kort text omkring gravning'
		StartDate : 01052017,
		EndDate: 01052017,
		PhaseNumber: 3,
	},{
		Name : 'Opsætning af fiberstik',
		Description: 'kort text omkring stik opsæt'
		StartDate : 01052017,
		EndDate: 20052017,
		PhaseNumber: 4,
	},{
		Name : 'Installations Teknikker',
		Description: 'Text omkring Installations Teknikker'
		StartDate : 05022017,
		EndDate: 01062017,
		PhaseNumber: 5,
	},{
		Name : 'Re-etablering',
		Description: 'kort text omkring Re-etablering'
		StartDate : 05062017,
		EndDate: 20052017,
		PhaseNumber: 6,
	},
],


