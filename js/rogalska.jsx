import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
require('../sass/style.scss');

/*NAVIGATION*/
class LogotypeMain extends React.Component {
  render() {
  return (
    <div className='logoBox col-lg-12'>
      <p >
        <Link className='logoText logoTextName' to="/">Marzena Rogalska</Link>
      </p>
      <p>
        <Link className='logoText' to="/">STRONA OFICJALNA</Link>
      </p>
    </div>);
  }
}
class NavMain extends React.Component {
  render() {
    return(<ul className='col-lg-12 navList'>
      <li>
        <IndexLink className='decoration 'to="/aboutMe" activeClassName="active">SŁOWEM WSTĘPU</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/dziennikarka" activeClassName="active">DZIENNIKARKA</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/prezenterka" activeClassName="active">PREZENTERKA</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/pisarka" activeClassName="active">PISARKA</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/aktorka" activeClassName="active">AKTORKA</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/instagram" activeClassName="active">INSTAGRAM</IndexLink>
      </li>
      <li>
        <IndexLink className='decoration' to="/kontakt" activeClassName="active">KONTAKT</IndexLink>
      </li>
    </ul>);
  }
}
class NotFound extends React.Component {
  render() {
  return <h1>404,Nothing is here</h1>;
  }
}

class Template extends React.Component {
  render() {
  return (<div className="col-lg-2 nav">
      <LogotypeMain />
      <NavMain />
  </div>)
  }
}

class SliderHome extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className="col-lg-12 ">
        <ul className='sliderList'>
          <li>
            <img className="col-lg-12" src="./aktorka.jpg" />
          </li>
          <li className='hidden'>
            <img className="col-lg-12" src="./aktorka.jpg" />
          </li>
          <li className='hidden'>
            <img className="col-lg-12" src="./aktorka.jpg" />
          </li>
        </ul>
      </div>
      <div className='col-lg-12 sliderText '>
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <span className='sliderTextSmall'>HEJ, JESTEM</span>
          <span className='sliderTextLarge'>MARZENA ROGALSKA</span>
          <p className='sliderTextMiddle'>PISARKA / DZIENNIKARKA / PREZENTERKA / AKTORKA</p>
        </div>
      </div>
    </div>);
  }
  }
class AboutMe extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className='col-lg-12' >
        <img className="col-lg-12" src="./aktorka.jpg" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>O MNIE</h4>
          </div>
          <div className='boxContent'>
            <span className=" textContent col-lg-4">Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną.</span>
          </div>
          <div className=" tableBox ">
            <table>
              <tbody>
                <tr>
                  <td>Nazwisko</td>
                  <td>Marzena Rogalska</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td className='mailFont'>marzena@rogalska.pl</td>
                </tr>
                <tr>
                  <td>Data urodzin:</td>
                  <td>13 KWIETNIA 1970</td>
                </tr>
                <tr>
                  <td>Narodowość</td>
                  <td>polska</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}
class Dziennikarka extends React.Component {
  render() {
  return (
      <div className='row relative'>
        <div className='col-lg-12' >
          <img className="col-lg-12" src="./aktorka.jpg" />
        </div>
        <div className=" headerBox col-lg-12">
          <div className="col-lg-1"></div>
          <div className=' col-lg-11'>
            <div>
              <h4 className='headerText col-lg-7'>DZIENNIKARKA</h4>
            </div>
            <div className='offerBox'>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='col-lg-4'>
                <span className='offerHeader'>LOREM</span>
                <p className='oferText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
            </div>
          </div>
          <Timer />
        </div>
      </div>);
  }
}
  class Timer extends React.Component {
    render() {
    return (
      <div className='row '>
        <div className='timerBox'>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>2530</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>2530</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>2530</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
          <div className='textAlign col-lg-3'>
            <span className='timerTextLarge'>2530</span>
            <span className='timerTextSamll'>Godzin audycji</span>
          </div>
        </div>
      </div>);
    }
  }
class Prezenterka extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className='col-lg-12' >
        <img className="col-lg-12" src="./aktorka.jpg" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>PREZENTERKA</h4>
          </div>
          <div className='boxContent'>
            <span className=" textContent col-lg-7">Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną. Cześć, jestem pisarką i dziennikarką telewizyjną.</span>
          </div>
          <div className='row'>
            <div className='quoteData col-lg-7'>
              <div className='marginBottom col-lg-6'>
                <span className='quoteNumber'>01</span>
                <span className='quoteText'>LOREM </span>
                <span className='quoteText'>Lorem Ipsum is simply.</span>
                <span className='quoteText'>2012 – 2013</span>
              </div>
              <div  className='marginBottom col-lg-6'>
                <span className='quoteNumber'>01</span>
                <span className='quoteText'>LOREM </span>
                <span className='quoteText'>Lorem Ipsum is simply.</span>
                <span className='quoteText'>2012 – 2013</span>
              </div>
              <div  className='marginBottom col-lg-6'>
                <span className='quoteNumber'>01</span>
                <span className='quoteText'>LOREM </span>
                <span className='quoteText'>Lorem Ipsum is simply.</span>
                <span className='quoteText'>2012 – 2013</span>
              </div>
              <div  className='marginBottom col-lg-6'>
                <span className='quoteNumber'>01</span>
                <span className='quoteText'>LOREM </span>
                <span className='quoteText'>Lorem Ipsum is simply.</span>
                <span className='quoteText'>2012 – 2013</span>
              </div>
            </div>
          </div>
          <div className='quotation col-lg-7'>
            <span>Cześć, jestem pisarką i dziennikarką telewizyjną. <br /> Cześć, jestem pisarką i dziennikarką telewizyjną.</span>
          </div>
        </div>
      </div>
    </div>);
  }
}
class Pisarka extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className='col-lg-12'>
        <img className="col-lg-12" src="./aktorka.jpg" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>PISARKA</h4>
          </div>
          <div className='row'>
            <div className='marginTop col-lg-12'>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
              <div className='col-lg-2'>
                <span className='timelineHeader'>IPSUM</span>
                <span className='timelineHeader'>LOREM </span>
                <span className='timelineDate'>2012 – 2013</span>
                <span className='timelineText'>Lorem Ipsum is simply.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
class Aktorka extends React.Component {
  render() {
  return (
      <div className='row relative'>
        <div className='col-lg-12'>
          <img className="col-lg-12" src="./aktorka.jpg" />
        </div>
        <div className='actBox col-lg-12'>
          <div className="col-lg-5"></div>
          <div className="col-lg-7">
            <p className='actText col-lg-12'>"Oto powieść. Świetnie napisana, z niezwykłą biegłością, wrażliwością, czułością dla świata i&nbsp;ludzi. Dobra powieść – pełna tajemnicy, miłości, przyjaźni. Nie dajcie się zwieść. To nie dziennikarka telewizyjna Marzena Rogalska napisała książkę. To pisarka Marzena Rogalska pracuje w telewizji. Z wielką przyjemnością, bezinteresownie, z własnej i nieprzymuszonej woli o tym zaświadczam"</p>
            <p className='actTexSmall col-lg-12'>Katarzyna Grochola</p>
          </div>
        </div>
      </div>);
  }
}
class Instagram extends React.Component {
  render() {
  return (
    <div className='row relative'>
            <iframe
              src="//users.instush.com/bee-gallery-v2/?cols=3&rows=2&size=extra&border=10&round=false&space=10&sl=true&bg=transparent&brd=true&na=false&pin=false&hc=e72476&ltc=3f3f3f&lpc=ffffff&fc=ffffff&user_id=1518133627&username=basic2727&sid=-1&susername=-1&tag=-1&stype=mine&t=999999EvCVNpwn5gLOIiHsvvawCAfW6OGm7cPx04HwrNw8PRkj0WIeLELHsaXw4zswv28jVuTRIbQ9TY8"
              frameBorder="0"
              scrolling="no"
              style={style} >
            </iframe>
    </div>);
  }
}
const style = {
  display:'block',
  width:'980px',
  height:'660px',
  border:'none',
  overflow:'visible',
  marginLeft: '20px',
}
class Kontakt extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className='col-lg-12'>
        <img className="col-lg-12" src="./aktorka.jpg" />
      </div>
      <div className=" headerBox col-lg-12">
        <div className="col-lg-1"></div>
        <div className=' col-lg-11'>
          <div>
            <h4 className='headerText col-lg-7'>KONTAKT</h4>
          </div>
          <div className='boxContent'>
            <p className='textContent '>Wyłączny przedstawiciel: Iza Ziemińska </p>
            <p className='textContentEmail '>Kontakt e-mail: iza@inmanagement.pl</p>
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
            textButton: 'WYŚLIJ WIADOMOŚĆ DO AGENTKI!',

        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleMailChange = (e) => {
        this.setState({
            mail: e.target.value
        })
    }
    handleDepChange = (e) => {
        this.setState({
            dep: e.target.value
        })
    }
    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
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
    render(){
        return(
            <div>
              <div className='row '>
                <div className='boxContact col-lg-5'>
                  <div className='inputBox '>
                    <input className='inputText name'
                      onChange={this.handleNameChange}
                      value={this.state.name}
                      placeholder=''
                      >
                    </input>
                    <label
                      className=' labelText labelTextName'></label>
                    <p style={ {color: this.state.infoColorName} }
                      className=' messageText'>{this.state.messageToRenderName}</p>
                  </div>
                  <div className='inputBox'>
                    <input className='inputText email'
                      onChange={this.handleMailChange}

                      placeholder="">
                    </input>
                    <label className='labelText labelTextEmail'></label>
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
                    <label className='labelText labelTextMessage'></label>
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
          <p className='textFooter'>Marzena Rogalska 2017  ©  Treść serwisu prawnie chroniona | Stworzono z nieukrywaną radością przez  <a href=" http://www.webdawca.pl/" target="_blank">webdawca.pl</a></p>
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
    <div className="col-lg-10 mainFloatRight">
      <SliderHome />
      <AboutMe />
      <Dziennikarka />
      <Prezenterka />
      <Pisarka />
      <Aktorka />
      <Instagram />
      <Kontakt />
      <Footer />
  </div>)
  }
}

class NavMainRouter extends React.Component {
  render() {
  return <Router history={hashHistory}>
      <Route path='/' component={Template}>
        <IndexRoute component={AboutMe} />
        <Route path='/dziennikarka' component={Dziennikarka} />
        <Route path='/prezenterka' component={Prezenterka} />
        <Route path='/pisarka' component={Pisarka} />
        <Route path='/aktorka' component={Aktorka} />
        <Route path='/instagram' component={Instagram} />
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
      <NavMainRouter/>
      <Content/>
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
