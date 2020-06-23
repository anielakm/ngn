import React from "react"
import SEO from "../components/seo"
import { theme } from "../utilis/theme"
import dictionary from '../utilis/dictionary'
import Header from "../components/index/header"
import About from "../components/index/about"
import Blog from "../components/index/blog"
import Yt from "../components/index/yt"
import Ig from "../components/index/ig"
import Footer from "../components/footer"
import Nav from '../components/index/nav'
import Rellax from 'rellax'
import Glide from '@glidejs/glide'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
// import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'



import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


  body {
   font-family: ${theme.fonts.lato};
   font-size: 16px;
   padding:0;
    margin:0;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.beigeUltraTransparent};

   @media(min-width: 1200px){
    font-size: 18px;
   }
   
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${theme.fonts.playf};
  }

  a {
      text-decoration: none;
  }

  *, *::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
      outline: none;
  }

  body {
      font-size: 12px;

      @media (orientation: portrait){
          @media (min-width: 768px){
              font-size: 22px;
          }
          @media (min-width: 1024px){
              font-size: 28px;
          }
      }

      @media (min-width: 1366px) {
          font-size: 24px;

      }
  }


  .white_block{

    display: block;
    width: 200%;
    height: 40%;
    background: rgba(255,255,255,.8);
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -120%;
    box-shadow: 5px 5px 5px rgba(0,0,0,.025)
  }


  .d-none {
    &-xs {
      @media (max-width: 767px) {
        display: none;
      }
    }

    &-sm {
      @media (max-width: 919px) {
        display: none;
      }
    }
    &-lg {
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }

  h2 {
      font-family: ${theme.fonts.playf};
      color: ${theme.colors.gray};
      font-size: 2.3em;
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: .5em;

      @media (orientation: portrait){
          @media (min-height: 600px){
            font-size: 3em;
          }
      }

      @media (min-width: 768px) {
          //font-size: 48px;
      }
  }

  p {

      font-family: ${theme.fonts.lato};
      font-size: .55em;
      line-height: 1.85em;

      @media (orientation: portrait){
          @media (min-height: 600px){
              font-size: 1em;
              line-height: 1.9em;
          }
      }

      @media (orientation: landscape){
          font-size: .75em;
          line-height: 1.65em;
          @media(min-width: 920px){
              font-size: 0.55em;
          }
      }


  }

  .container {
      padding: 0 30px;

      @media (orientation: portrait){
          @media (min-height: 1024px){
              padding: 60px;
          }
      }

      @media (min-width: 1366px) {
          max-width: 1200px;
          margin: auto;
      }
  }

  .container-fixed {
      @media(min-width: 1200px){
          max-width: 1140px;
          margin: auto;
      }
  }

  ul {
      list-style: none;
      margin: 0;
  }

  img {
      max-width: 100%;
      max-height: 100%;
  }

  .bg-gray {
      background-color: ${theme.colors.beigeLight};
  }


`


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dictionary,
      lang: 'pl'
    };
  }
  componentDidMount() {

    AOS.init();

    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      bound: true,
      rewind: false,
      perView: 3,
      gap: 0,
      breakpoints: {

        820: {
          perView: 3
        },

        768: {
          perView: 2
        },
        400: {
          perView: 1
        }
      }

    }).mount();

    // const dropdown = document.querySelectorAll('.footer-list h3');
    // dropdown.forEach(item => {
    //   item.addEventListener('click', () => {

    //     //if parent is active
    //     if (item.parentNode.classList.contains('active')) {
    //       item.parentNode.classList.remove('active');
    //     } else {

    //       //if any of footer list is active
    //       if (document.querySelector('.footer .active')) {
    //         document.querySelector('.footer .active').classList.remove('active')
    //       }

    //       item.parentNode.classList.add('active');
    //     }

    //   })
    // });


    var rellax = new Rellax('.rellax', {
      center: true,
    });

    if (window.innerWidth < 768) {
      rellax.destroy();
    }

  }

  changeLang = (lang) => {
    this.setState({ lang }, () => {
      console.log(this.state.lang)
    });

  }

  handleMenu = () => {
    document.querySelector('header .nav').classList.toggle('active');
  }


  render() {

    return (
      <>

        <SEO title="Home" />
        <GlobalStyle />

        <header>
          <Nav dictionary={this.state.dictionary} lang={this.state.lang} handleMenu={this.handleMenu} />
          <Header lang={this.state.lang} changeLang={this.changeLang} handleMenu={this.handleMenu} /></header>

        <main id="scroll" >
          <About dictionary={this.state.dictionary} lang={this.state.lang} />
          <Blog dictionary={this.state.dictionary} lang={this.state.lang} />
          <Yt dictionary={this.state.dictionary} lang={this.state.lang} />
          <Ig dictionary={this.state.dictionary} lang={this.state.lang} />
        </main>

        <footer>
          <Footer dictionary={this.state.dictionary} lang={this.state.lang} />
        </footer>

      </>
    )
  }
}
export default IndexPage
