import React, { ReactNode } from 'react';
import styles from './App.module.css'

import BG from './components/BG/BG';
import MenuBar from './components/MenuBar/MenuBar';
import MenuButton from './components/MenuButton/MenuButton';
import Nothing from './components/Nothing/Nothing';
import ScrollingBars from './components/ScollingBars/ScrollingBars';
import TextBG from './components/TextBG/TextBG';
import AboutMe from './components/MainPages/AboutMe/AboutMe';
import Contact from './components/MainPages/Contact/Contact';
import Comissions from './components/MainPages/Comissions/Comissions';
import Portfolio from './components/MainPages/Portfolio/Portfolio';
import { warn } from 'console';
interface Props {

}
interface State {
	page: Number
	voided: Boolean
}

class App extends React.Component<Props, State>{

	AboutMeClickCount: number;
	PortfolioClickCount: number;
	CommissionsClickCount: number;
	ContactClickCount: number;
	constructor(props: Props) {
		super(props)
		this.state = {
			page: 1,
			voided: false
		}
		this.AboutMeClickCount = 0;
		this.PortfolioClickCount = 0;
		this.CommissionsClickCount = 0;
		this.ContactClickCount = 0;
		
	};
	//functions
	VoidWebpage = () => {
		this.setState({voided: true})
	}
	HandleSwitchToAboutMe = () => {
		this.setState({ page: 1 });
		this.AboutMeClickCount += 1;
		if (this.AboutMeClickCount === 50) {
			alert("Wow, you really want to know a lot about me!")
		}
	}
	HandleSwitchToPortfolio = () => {

		this.setState({ page: 2 })
		this.PortfolioClickCount += 1;
		if (this.PortfolioClickCount === 50) {
			alert("Are you that desperate to see what im working on?")
		}
	}

	HandleSwitchToCommissions = () => {

		this.setState({ page: 3 })
		this.CommissionsClickCount += 1;
		if (this.CommissionsClickCount === 50) {
			alert("just commission me already!")
		}

	}
	HandleSwitchToContact = () => {

		this.setState({ page: 4 })
		this.ContactClickCount += 1;
		if (this.ContactClickCount === 50) {
			alert("You trynna cyberstalk me or smth?")
		}
	}
	
	render = () => {
		if (this.state.voided) {
			return <Nothing/>
		}
		let main_page = <></>
		switch (this.state.page) {
			case 1:
				main_page = <AboutMe/>
				break
			case 2:
				main_page = <Portfolio/>
				break
			case 3:
				main_page = <Comissions/>
				break
			case 4:
				main_page = <Contact/>
				break
		}
		return (
			<div className={styles.Main}>
				<BG>
				</BG>
				<MenuBar Voided={this.VoidWebpage}>
					<MenuButton method={this.HandleSwitchToAboutMe}>About Me</MenuButton>
					<MenuButton method={this.HandleSwitchToPortfolio}>Portfolio</MenuButton>
					<MenuButton method={this.HandleSwitchToCommissions}>Commissions</MenuButton>
					<MenuButton method={this.HandleSwitchToContact}>Contact</MenuButton>
				</MenuBar>
				{main_page}
				<ScrollingBars/>
			</div>
		)
	}
}

export default App;
