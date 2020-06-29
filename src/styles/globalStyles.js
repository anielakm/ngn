import { createGlobalStyle } from 'styled-components'
import { theme } from "../utilis/theme"

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
      padding: 0;
  }

  img {
      max-width: 100%;
      max-height: 100%;
  }

  .bg-gray {
      background-color: ${theme.colors.beigeLight};
  }


`

export default GlobalStyle