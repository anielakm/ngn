import React from "react"
import SEO from "../components/seo"
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
import GlobalStyle from '../styles/globalStyles'




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
      perView: 4,
      gap: 0,
      breakpoints: {

        // 820: {
        //   perView: 4
        // },

        // 768: {
        //   perView: 2
        // },
        // 400: {
        //   perView: 1
        // }
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
