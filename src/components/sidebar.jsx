import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Luiz Felipe</a></h1>
              <span className="email"><i className="icon-mail"></i> luizfelipebasile@gmail.com</span>
              <span className="email"><i className="icon-phone3"></i>(42) 98831-3783 </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#introdução" data-nav-section="home">Introdução</a></li>
                  <li><a href="#sobre" data-nav-section="about">Sobre</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/luiz-felipe-ribeiro-filho-46583572" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/lfbrf" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://web.whatsapp.com/send?phone=5542988313783&text=Olá Luiz Felipe, vi seu perfil em seu portfólio, podemos conversar?" target="_blank" rel="noopener noreferrer"><i className="icon-whatsapp"></i></a></li>
              </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
