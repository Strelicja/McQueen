import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import scrollToComponent from 'react-scroll-to-component';
import { Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
import InstagramEmbed from 'react-instagram-embed';
import AtvImg from 'react-atv-img';
import CountTo from 'react-count-to';
import request from 'superagent';
import collections from './collections';
import biography from './biography';
import style from '../sass/style.scss';
import { ResponsiveComponent } from "react-responsive-component";
require('../css/style.css');
//./node_modules/.bin/webpack-dev-server --hot
var Scroll = require('react-scroll');
var ScrollArea = require('react-scrollbar');
require('../sass/style.scss');
"use strict";

/*LOGOTYPE*/
class LogotypeMain extends React.Component {
  render() {
  return (
    <div className=' col-lg-'>
      <p className='logoText logoTextName hoverLogo'>
        <img className="logoImg" src='img/Alexander-McQueen.jpg'/>
      </p>
      <a href='http://www.mcq.com/pl' target='blanc'className='logoText hoverLogo'>McQ
      </a>
    </div>);
  }
}
/*NAVIGATION*/
class Section extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
            color: '',
            percent: 0
        }
      }
  componentDidMount() {
    scrollToComponent(this.SliderHome);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
     var winHeight = window.innerHeight;
     var body = document.body;
     var html = document.documentElement;
     var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                     html.clientHeight, html.scrollHeight, html.offsetHeight );
     var value = document.body.scrollTop;
     var el = document.getElementById('app');
     var minPixel = el.offsetTop;
     var maxPixel = minPixel + el.scrollHeight;
     var value = document.body.scrollTop;
     var percent = (value - minPixel)/(maxPixel - minPixel);
     percent = Math.min(1,Math.max(percent, 0))*100;
     console.log(docHeight,percent);
  }
  render() {
    return (
      <div >
        <div className='col-lg-12'>
          <nav className='col-lg-2 nav'>
            <ul className='col-lg-12 navList'>
              <li className='logoBox ' onClick={() => scrollToComponent(this.SliderHome, { align: 'middle',ease:'inCirc', duration: 500})}><LogotypeMain/></li>
              <li> <IndexLink activeStyle={active} to="/aboutMe" className='decoration hover paddingTop' onClick={() => scrollToComponent(this.AboutMe, {align: 'middle',ease:'inCirc',  duration: 1000})}>McQueen</IndexLink></li>
              <li> <IndexLink activeStyle={active} to="/biografia" className='decoration hover' onClick={() => scrollToComponent(this.Biografia, {align: 'middle', ease:'inCirc', duration: 1000})}>BIOGRAFIA</IndexLink></li>
              <li> <IndexLink activeStyle={active} to="/moda" className='decoration hover' onClick={() => scrollToComponent(this.Moda, {align: 'middle', ease:'inCirc', duration: 1000})}>MODA</IndexLink></li>
              <li> <IndexLink activeStyle={active} to="/kolekcje" className='decoration hover' onClick={() => scrollToComponent(this.Kolekcje, { align: 'middle',ease:'inCirc', duration: 1000})}>KOLEKCJE</IndexLink></li>
              <li> <IndexLink activeStyle={active} to="/aktorka" className='decoration hover' onClick={() => scrollToComponent(this.Aktorka, { align: 'middle',ease:'inCirc', duration: 1000})}>IDEA</IndexLink></li>
              <li> <IndexLink activeStyle={active} to="/kontakt" className='decoration hover' onClick={() => scrollToComponent(this.Kontakt, {align: 'middle',ease:'inCirc',  duration: 1000})}>KONTAKT</IndexLink></li>
            </ul>
          </nav>
          <div className="col-lg-10 mainFloatRight">
            <section  className='sliderHome' ref={(section) => { this.SliderHome = section; }}><SliderHome/></section>
            <section  className='aboutMe' ref={(section) => { this.AboutMe = section; }}><AboutMe/></section>
            <section  className='biografia' ref={(section) => { this.Biografia = section; }}><Biografia/></section>
            <section  className='moda' ref={(section) => { this.Moda = section; }}><Moda/></section>
            <section  className='kolekcje' ref={(section) => { this.Kolekcje = section; }}><Kolekcje/></section>
            <section  className='aktorka' ref={(section) => { this.Aktorka = section; }}><Aktorka/></section>
            <section  className='kontakt' ref={(section) => { this.Kontakt = section; }}><Kontakt/></section>
          <Footer/>
          </div>
        </div>
      </div>
    )
  }
}
      const active = {
      color: '#626262'
  }
class NotFound extends React.Component {
  render() {
  return <h1>404,Nothing is here</h1>;
  }
}
/*MAIN*/
class SliderHome extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div  className="col-lg-12 ">
        <div className='sliderList' >
          <AtvImg className="heightImgSH col-lg-12"
              layers={[
                'https://s-media-cache-ak0.pinimg.com/originals/f3/cd/d5/f3cdd55111a32999cc04bff4f1944d41.jpg',
                //'http://kloc.pm/images/front.png',
              ]}
              staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"/>
          </div>
      </div>
      <div className='col-lg-12 sliderText '>
        <div className="col-lg-1 col-md-"></div>
        <div className="col-lg-9 col-md-">
          <span className='sliderTextSmall'>„There is no better designer than nature”</span>
          <span className='sliderTextLarge'>Alexander McQeen</span>
          <p className='sliderTextMiddle'>ARTIST / DESIGNER </p>
        </div>
      </div>
    </div>);
  }
  }
class AboutMe extends React.Component {
  render() {
  return (
    <div className='test1 row relative'>
      <div className='col-lg-12' >
        <img className="heightImgAM col-lg-12"  />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText headerTextBlack col-lg-7'>McQueen</h4>
          </div>
          <div className='boxContent'>
            <span className=" textContent col-lg-4">Jednen z najsłynniejszych projektantów młodego pokolenia. Pomimo jego samobójczej śmierci, potęga jego nazwiska i geniuszu nie słabną. <br />Lee Alexander McQueen - niepokorna dusza współczesnego świata mody</span>
          </div>
          <div className=" tableBox ">
            <table>
              <tbody>
                <tr>
                  <td>Nazwisko</td>
                  <td> Lee Alexander McQueen </td>
                </tr>
                <tr>
                  <td>Zawód</td>
                  <td>Artysta</td>
                </tr>
                <tr>
                  <td>Data urodzin:</td>
                  <td>17 marca 1969</td>
                </tr>
                <tr>
                  <td>Data śmierci:</td>
                  <td>11 lutego 2010</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}






class Biografia extends React.Component {

  render() {
  return (
      <div className='test2 row relative'>
        <div className='col-lg-12' >
          <img className="heightImgDz col-lg-12"  />
        </div>
        <div className=" headerBox col-lg-12">
          <div className="col-lg-1"></div>
          <div className=' col-lg-11'>
            <div>
              <h4 className='headerText col-lg-7'>BIOGRAFIA</h4>
            </div>
            <div className='col-lg-12'>
              <div className='offerNameBox col-lg-2'>
                {listOfBiographyName}
              </div>
              <div className='offerBox col-lg-10'>
                {listOfBiography}
              </div>
          </div>
        </div>
        </div>
      </div>);
  }
}
////////NAME
      class BiographyName extends React.Component {
        constructor(props){
          super(props);
          this.state = {
            newArr: [],
            display: 'none',
          }
        }
        showText = (e) =>{
          this.setState({
            display: 'block',
          })
          console.log("klik działa");
        }
        render() {
          return(
            <div className='offerName col-lg-'>
              <p className='offerHeaderName'>{this.props.name}</p>
              <div className='offerOpacityBox'
                onClick = {this.showText}>
              </div>
            </div>
          )}
        }
      const listOfBiographyName = biography.map(biography => {
        return (
          <BiographyName
          key={biography.name}
          name={biography.name}/>
        )
      })

///////TEXT
      class BiographyList extends React.Component {
        render() {
          return(
            <div className='offer col-lg-'>
              <p className='offerText'>{this.props.text} </p>
            </div>
          )}
        }
      const listOfBiography = biography.map(biography => {
        return (
          <BiographyList
          key={biography.name}
          text={biography.text}/>
        )
      })



/*
class Biografia extends React.Component {

  render() {
  return (
      <div className='test2 row relative'>
        <div className='col-lg-12' >
          <img className="heightImgDz col-lg-12"  />
        </div>
        <div className=" headerBox col-lg-12">
          <div className="col-lg-1"></div>
          <div className=' col-lg-11'>
            <div>
              <h4 className='headerText col-lg-7'>BIOGRAFIA</h4>
            </div>
            <div className='col-lg-12'>
              {listOfBiographyName}
          </div>
        </div>
        </div>
      </div>);
  }
}
      class BiographyName extends React.Component {
        constructor(props){
          super(props);
          this.state = {
            newArr: [],
            display: 'none',
          }
        }
        showText = (e) =>{
          setState({
            display: 'block'
          })

        }
        render() {
          return(
            <div>
            <div className='offerNameBox col-lg-2'>
              <div className='offerName col-lg-'>
                <p className='offerHeaderName'>{this.props.name}</p>
                <div className='offerOpacityBox'>
                </div>
              </div>
            </div>
            <div className='offerBox col-lg-10'>
              <div className='offer col-lg-'>
                <p className='oferText'
                >{this.props.text} </p>
              </div>
            </div>
            </div>
          )}
        }
      const listOfBiographyName = biography.map(biography => {
        return (
          <BiographyName
          key={biography.name}
          name={biography.name}
          text={biography.text}/>
        )
      })
      */

      class Timer extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        to: 0,
      };
      this.onComplete = this.onComplete.bind(this);
      this.callback = this.callback.bind(this);
      this.renderCountTo = this.renderCountTo.bind(this);
      this.renderLoading = this.renderLoading.bind(this);
    }

    componentDidMount() {
      request
        .get('https://api.github.com/repos/facebook/react')
        .end(this.callback);
    }

    onComplete() {
      console.log('completed!');
    }

    callback(err, res) {
      this.setState({
        isLoading: false,
        to: res.body.stargazers_count,
      });
    }

    renderLoading() {
      return (
        <span>Loading...</span>
      );
    }

    renderCountTo() {
      return (
        <CountTo
          to={this.state.to}
          speed={10000}
          onComplete={this.onComplete} />
      );
    }
    render() {
    return (
      <div className='row '>
        <div className='timerBox'>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>{this.state.isLoading ? this.renderLoading() :this.renderCountTo()}</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>{this.state.isLoading ? this.renderLoading() : this.renderCountTo()}</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>{this.state.isLoading ? this.renderLoading() : this.renderCountTo()}</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>{this.state.isLoading ? this.renderLoading() : this.renderCountTo()}</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
        </div>
      </div>);
    }
  }
class  Moda extends React.Component {
  render() {
  return (
    <div className='test3 row relative'>
      <div className='col-lg-12' >
        <img className="heightImgDesigner col-lg-12" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>MODA</h4>
          </div>
          <div className='boxContent'>
            <span className=" textContent col-lg-7">Po udanym debiucie i akceptacji hermetycznego środowiska mody, młodym geniuszem zainteresował się prezydent koncernu LVMH - Bernard Arnault. <br />
            <br />W 2000 roku Gucci odkupiło 51 procent udziałów we marce McQueena, który całą swoją energię poświęcił na jej rozwój. Nowy inwestor pozwolił na otworzenie butików marki w Nowym Jorku, Mediolanie, Londynie, Las Vegas i Los Angeles. A także na spełnianie najbardziej ekstrawaganckich wizji projektowych oraz realizację spektakularnych pokazów.
            </span>
          </div>
          <div className='row'>
            <div className='quoteData col-lg-7'>
              <div className='marginBottom col-lg-6'>
                <span className='quoteNumber'>GIVENCHY</span>
                <span className='quoteText'>stanowisko: </span>
                <span className='quoteText'>dyrektor kreatywny domu mody </span>
                <span className='quoteText'>od 1996</span>
              </div>
              <div className='marginBottom col-lg-6'>
                <span className='quoteNumber'>GUCCI</span>
                <span className='quoteText'>wspólnicy: </span>
                <span className='quoteText'>wspołwłaściciel marki McQueen</span>
                <span className='quoteText'>od 2001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
class Kolekcje extends React.Component {
  render() {
  return (
    <div className='test4 row relative'>
      <div className='col-lg-12'>
        <img className="heightImgCollection col-lg-12" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>KOLEKCJE</h4>
          </div>
          <div className='row'>
            <div className='opacityDiv'></div>
            <div className=' overflow marginTop col-lg-12'>
              {listOfCollections}
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
      class CollectionsList extends React.Component {
        render() {
          return(
            <div className='margin-right col-lg-'>
              <span className='timelineHeader'>{this.props.name}</span>
              <img className='imgCollection' src={this.props.url}></img>
              <span className=' timelineDate'>{this.props.year}</span>
            </div>)
          }
      }
      const listOfCollections = collections.map(collection => {
    return (
      <CollectionsList
      key={collection.name}
      name={collection.name}
      year={collection.year}
      url={collection.url}/>
    )
  })
class Aktorka extends React.Component {
  render() {
  return (
      <div className='test5 row relative'>
        <div className='col-lg-12'>
          <img className="heightImgSS col-lg-12"  />
        </div>
        <div className='actBox col-lg-12'>
          <div className="col-lg-5"></div>
          <div className="col-lg-7">
            <p className='actText col-lg-12'>„Z nieba do piekła i z powrotem.<br /> Życie jest zabawne. <br />Piękno <br />może <br />wyłonić się <br /> z najdziwniejszych <br />miejsc, <br />nawet tych <br />najbardziej <br />obrzydliwych”</p>
            <p className='actTexSmall col-lg-12'>Lee McQueen</p>
          </div>
        </div>
      </div>);
  }
}
class Kontakt extends React.Component {
  render() {
  return (
    <div className=' test7 row relative'>
      <div className='col-lg-12'>
        <img className="heightImgContact col-lg-12" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText headerTextBlack col-lg-7'>KONTAKT</h4>
          </div>
          <div className='boxContent'>
            <p className='textContent textBlack'>Masz pytanie? Napisz do McQ.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>);
  }
}
      class ContactForm extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: "",
                mail: "",
                message: "",
                messageToRenderName: "",
                messageToRenderEmail: '',
                messageToRenderMessage: '',
                infoColorName: "green",
                infoColorEmail: "green",
                infoColorMessage: "green",
                textButton: 'WYŚLIJ WIADOMOŚĆ!',
                class:'',
                class2:'',
                class3:'',
                display:'',
            }
        }
        handleNameChange = (e) => {
          this.setState({
              name: e.target.value,
              class: e.target.value != '' ? 'newLabel' : ''
            })
        }

        handleMessageChange = (e) => {
            this.setState({
                message: e.target.value,
                class3: e.target.value != '' ? 'newLabel3' : ''
            })
        }
        handleMailChange = (e) => {
            this.setState({
                mail: e.target.value,
                class2: e.target.value != '' ? 'newLabel' : ''
            })
        }


        handleSubmit = (e) => {
            e.preventDefault();
            this.state.name === ""
              ? this.setState({
                    messageToRenderName: "✘",
                    infoColorName: "red"
                })
              : this.setState({
                      messageToRenderName: "✔",
                      infoColorName: "green",
                    }
                  );
            this.state.mail.indexOf("@")< 0
              ? this.setState({
                    messageToRenderEmail: "✘",
                    infoColorEmail: "red"
                })
              : this.setState({
                      messageToRenderEmail: "✔",
                      infoColorEmail: "green"
                    }
                  );
            this.state.message === ""
              ? this.setState({
                    messageToRenderMessage: "✘",
                    infoColorMessage: "red"
                })
              : this.setState({
                      messageToRenderMessage: "✔",
                      infoColorMessage: "green"
                    }
                  );
        }
        componentDidMount(){
            this.myInterval = setInterval(() => {
               this.state.messageToRenderName == "✔" && this.state.messageToRenderEmail ==  "✔" && this.state.messageToRenderMessage == "✔"
               ? this.setState({
                     display: 'none',
                     displayNone: 'block'
               })
               : this.setState({
                     display: '',
                     displayNone: 'none'
               })
         },3000);}

            render(){
            return(
                <div>
                  <div className='row '>
                    <div className='boxContact col-lg-5'
                          style={{display: this.state.display}}>
                      <div className='inputBox '>
                        <input className='inputText name'
                          onChange={this.handleNameChange}
                          value={this.state.name}
                          placeholder=''
                          type='text'
                          >
                        </input>
                        <label
                          className= {this.state.class + ' labelText labelTextName'}>Wpisz swoje imię!</label>
                        <p style={ {color: this.state.infoColorName} }
                          className='messageText'>{this.state.messageToRenderName}</p>
                      </div>
                      <div className='inputBox'>
                        <input className='inputText email'
                          onChange={this.handleMailChange}
                          value={this.state.mail}
                          placeholder=""
                          type='text'>
                        </input>
                        <label className= {this.state.class2 + ' labelText labelTextEmail'}>Wpisz swój adres e-mail!</label>
                        <p style={ {color: this.state.infoColorEmail} }
                          className=' messageText'>{this.state.messageToRenderEmail}
                        </p>
                      </div>
                      <div className='inputBox'>
                        <textarea className='textareaText comment'
                          onChange={this.handleMessageChange}
                          value={this.state.message}
                          placeholder="">
                        </textarea>
                        <label className= {this.state.class3 + ' labelText labelTextMessage'}>Wpisz swoją wiadomość!</label>
                        <p style={ {color: this.state.infoColorMessage} }
                          className=' messageText messageTextarea'>{this.state.messageToRenderMessage}
                        </p>
                      </div>
                      <div className='buttonBox '>
                        <button className='buttonText'
                          type="submit"
                          onClick={this.handleSubmit}>{this.state.textButton}</button>
                      </div>
                    </div>
                  </div>
                  <div className='boxContactHidden col-lg-5'
                    style={{display: this.state.displayNone}}>
                    <div className='boxTextHidden'>Dziękujemy! <br />  Wiadomość została wysłana do przedstawicieli marki McQueen.</div>
                </div>
                </div>
            )
        }
      }
/*FOOTER*/
class Footer extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className="col-lg-12">
        <div className='iconBox col-lg-2'>
          <IconsFooter />
        </div>
        <div className='col-lg-10'>
          <p className='textFooter'>projekt i wykonanie  Iwona janiak  2017   © kod serwisu prawnie chroniony :-) </p>
        </div>
      </div>
  </div>);
  }
}
      class IconsFooter extends React.Component {
    render() {
        return (
          <div>
            <a href='https://www.facebook.com' target='_blank' className='iconSocial'><FaFacebookOfficial /></a>
            <a href='https://www.instagram.com' target='_blank' className='iconSocial'><FaInstagram /></a>
          </div>)
    }
}
/*TOTAL CONTENT*/
class Content extends React.Component {
  render() {
  return (
    <NavMainRouter/>
  )}
}
class NavMainRouter extends React.Component {
  render() {
  return <Router history={hashHistory}>
      <Route path='/' component={Section}>
        <IndexRoute component={AboutMe} />
        <Route path='/biografia' component={Biografia} />
        <Route path='/moda' component={Moda} />
        <Route path='/kolekcje' component={Kolekcje} />
        <Route path='/aktorka' component={Aktorka} />
        <Route path='/kontakt' component={Kontakt} />
        <Route path='*' component={NotFound}/>
      </Route>
  </Router>
  }
}
/*END*/
class App extends React.Component {
  render() {
    return(<div>
        <Content/>
      </div>)
    }
  }
ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
