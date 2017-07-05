import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';
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
        <img className="col-lg-12" src="./aktorka.jpg" />
          <div className='headerBox col-lg-12'>
            <div className="col-lg-1"></div>
            <h4 className='headerText col-lg-7'>INSTAGRAM</h4>
        </div>
        <div>
          <span>CZEŚĆ, JESTEM</span>
          <span>MARZENA ROGALSKA</span>
          <span>PISARKA / DZIENNIKARKA / PREZENTERKA / AKTORKA</span>
        </div>
      </div>);
  }
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
          <Form />
        </div>
      </div>
    </div>);
  }
}
class Form extends React.Component {
  render() {
  return (
      <div className='row '>
        <div className='boxContact'>
          <div>
            <input></input>
            <label></label>
          </div>
          <div>
            <input></input>
            <label></label>
          </div>
          <div>
            <input></input>
            <label></label>
          </div>
          <div>
            <button>Wyślij wiadomość do agentki!</button>
          </div>
        </div>
      </div>);
  }
}
/*FOOTER*/
class Footer extends React.Component {
  render() {
  return (
    <div className='row relative'>
      <div className="col-lg-10">
        <div>
          <p>
            <Link to="https://www.facebook.com/">Facebook</Link>
          </p>
          <p>
            <Link to="https://instagram.com/">Instagram</Link>
          </p>
        </div>
        <div>
          <p>Marzena Rogalska 2017  ©  Treść serwisu prawnie chroniona | Stworzono z nieukrywaną radością przez  <a href="http://www.webdawca.pl/" target="_blank">webdawca.pl</a></p>
        </div>
      </div>
  </div>);
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
