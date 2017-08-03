module.exports = [
    {
        text   : 'Lee Ale­xan­der McQu­een uro­dził się w Le­wi­sham w East Lon­don. Je­go oj­ciec był tak­sów­ka­rzem, a ma­ma pra­cow­ni­kiem na­uko­wym. Oprócz nie­go je­go ro­dzi­ce mie­li jesz­cze piąt­kę dzie­ci. W wie­ku 16 lat po­rzu­cił szko­łę, aby móc re­ali­zo­wać ma­rze­nia – chciał pro­jek­to­wać. Zna­lazł pra­cę na Sa­vi­le Row, w ta­kich za­kła­dach kra­wiec­kich jak An­der­son and She­phard i Gie­ves & Haw­kes- tam wła­śnie uczył się kra­wiec­twa. Lee Ale­xan­der McQu­een uro­dził się w Le­wi­sham w East Lon­don. Je­go oj­ciec był tak­sów­ka­rzem, a ma­ma pra­cow­ni­kiem na­uko­wym. Oprócz nie­go je­go ro­dzi­ce mie­li jesz­cze piąt­kę dzie­ci.',
        name: 'Rodzina',


    },
    {
        text   : 'W wie­ku 16 lat po­rzu­cił śred­nią szko­łę, aby móc re­ali­zo­wać ma­rze­nia – chciał pro­jek­to­wać. Zna­lazł pra­cę na Sa­vi­le Row, w ta­kich za­kła­dach kra­wiec­kich jak An­der­son and She­phard i Gie­ves & Haw­kes- tam wła­śnie uczył się kra­wiec­twa. McQu­een roz­po­czął na­ukę na wy­dzia­le pro­jek­to­wa­nia w słyn­nej szko­le Cen­tral Sa­int Mar­tins Col­le­ge of Art. and De­sign. Ukoń­czył ją w 1992 ro­ku, a je­go dy­plo­mo­wa ko­lek­cja, któ­rej po­kaz od­był się rok wcze­śniej, w ca­ło­ści wy­ku­pio­na zo­sta­ła przez Isa­bel­lę Blow -eks­tra­wa­ganc­ką bry­tyj­ską sty­list­kę i mi­ło­śnicz­kę mo­dy. Tak na­ro­dził się je­den z naj­waż­niej­szych związ­ków w ży­ciu McQu­eena. Ich przy­jaźń prze­rwa­ła sa­mo­bój­cza śmier­ci Isa­bel­li w 2007 ro­ku.',
        name    : 'Nauka',

    },

    {
        text   : 'Ale­xan­der McQu­een czte­ry ra­zy z rzę­du wy­róż­nio­ny zo­stał na­gro­dą Bri­tish Fa­shion Awards w ka­te­go­rii pro­jek­tant ro­ku. W 2004 ro­ku zdo­był rów­nież na­gro­dę Me­n`s We­ar De­si­gner of the Ye­ar. Rok wcze­śniej wy­róż­nio­ny zo­stał tak­że przez CFDA na­gro­dą dla naj­lep­sze­go mię­dzy­na­ro­do­we­go kre­ato­ra. Za swo­je za­słu­gi dla po­pu­la­ry­zo­wa­nia Wiel­kiej Bry­ta­nii w świe­cie otrzy­mał z rąk kró­lo­wej Elż­bie­ty II Or­der Im­pe­rium Bry­tyj­skie­go.',
        name    : 'Nagrody',

    },


];
/*
class HamburgerNav extends React.Component {
	constructor() {
		super();
		this.state = {
			open: [false, true, false, true],
			display : 'none',
		};
  }
	handleClick(id) {
		let { open } = this.state;
    this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
			display:'block',
		});
		if (this.state.display==='block') {
			this.setState({
				display:'none'
			})
		}
		else {
			this.setState ({
				display:'block',
			})
		}
	}
	render() {
		return (
			<div className='hamN'>
				<div className='col-xsm-12 hamburger'>
					<div className='col-xsm-9'></div>
					<div className='hamburgerCross menu-row col-xsm-3'>
						<HamburgerMenu
							onClick={() => this.handleClick}
							isOpen={this.state.open[1]}
							menuClicked={this.handleClick.bind(this, 1)}
							width={54}
							height={45}
							strokeWidth={3}
							rotate={0}
							color='red'
							borderRadius={5}
							animationDuration='0.4'
						></HamburgerMenu>
					</div>
				</div>
				<div>
						<nav style={{display:this.state.display}}
							className=' col-xsm-12  navv'>
	            <ul className=' navList'>
	              <li> <IndexLink  to="/aboutMe" className='aboutMeLi decoration hover paddingTop' onClick={() => scrollToComponent(this.AboutMe, {align: 'middle',ease:'inCirc',  duration: 1000})}>McQueen</IndexLink></li>
	              <li> <IndexLink  to="/biografia" className='biografiaLi decoration hover' onClick={() => scrollToComponent(this.Biografia, {align: 'middle', ease:'inCirc', duration: 1000})}>BIOGRAFIA</IndexLink></li>
	              <li> <IndexLink  to="/moda" className='modaLi decoration hover' onClick={() => scrollToComponent(this.Moda, {align: 'middle', ease:'inCirc', duration: 1000})}>MODA</IndexLink></li>
	              <li> <IndexLink  to="/kolekcje" className='kolekcjeLi decoration hover' onClick={() => scrollToComponent(this.Kolekcje, { align: 'middle',ease:'inCirc', duration: 1000})}>KOLEKCJE</IndexLink></li>
	              <li> <IndexLink  to="/aktorka" className='aktorkaLi decoration hover' onClick={() => scrollToComponent(this.Aktorka, { align: 'middle',ease:'inCirc', duration: 1000})}>IDEA</IndexLink></li>
	              <li> <IndexLink  to="/kontakt" className='kontaktLi decoration hover' onClick={() => scrollToComponent(this.Kontakt, {align: 'middle',ease:'inCirc',  duration: 1000})}>KONTAKT</IndexLink></li>
	            </ul>
	          </nav>
	          <div className="  mainFloatRight">
	            <section  className='sliderHome' ref={(section) => { this.SliderHome = section; }}><SliderHome/></section>
	            <section  className='aboutMe' ref={(section) => { this.AboutMe = section; }}><AboutMe/></section>
	            <section  className='biografia' ref={(section) => { this.Biografia = section; }}><Biografia/></section>
	            <section  className='moda' ref={(section) => { this.Moda = section; }}><Moda/></section>
	            <section  className='kolekcje' ref={(section) => { this.Kolekcje = section; }}><Kolekcje/></section>
	            <section  className='aktorka' ref={(section) => { this.Aktorka = section; }}><Aktorka/></section>
	            <section  className='kontakt' ref={(section) => { this.Kontakt = section; }}><Kontakt/></section>
						</div>
				</div>
			</div>
		);
	}
};


*/
