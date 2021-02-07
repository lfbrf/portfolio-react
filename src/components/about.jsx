import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre mim</span>
                    <h2 className="colorlib-heading">Quem sou eu?</h2>
                    <p>Sou graduado em Sitemas para Internet(UTFPR, 2018). Amo programar seguindo boas práticas. Gosto muito de um café (sem leite e açucar).</p>
                    <p>Meu esporte predileto é a natação e meus hobbies são jogos(PC) e séries.</p>
                    <p>Valorizo muito a contribuição, e acredito que uma boa equipe é formada por um time unido.</p>
                    <p>Tenho facilidade em estudar novos assuntos.
                        A principal ferramenta que tenho experiência é com o google. 
                        Pode parecer estranho, mas na minha opinião quem sabe fazer uma boa pesquisa economiza tempo. </p>
                        <p>Hoje moro em região metropolitana de Curitiba-PR e tenho preferência por oportunidades remotas.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Oque eu faço?</span>
                <h2 className="colorlib-heading">Principais habilidades técnicas</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Desenvolvimento back-end </h3>
                    <p>Já construi API'S com: Java, PHP e C#</p>
                    <p>Frameworks/bibliotecas: Spring, JSF, Laravel</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Desenvolvimento front-end</h3>
                    <p>Criei telas com tecnologias fundamentais como: HTML, CSS, Javascript, Bootstrap</p>
                    <p>Frameworks/bibliotecas: React, React Native e Angular JS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Banco de Dados</h3>
                    <p>Trabalhei com relacionais: Mysql, Oracle, SQL Server, Postgres</p>
                    <p>Frameworks: Hibernate</p>
                </div>
                </div>
            </div>
            
            </div>

            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Servidores / Deploy</h3>
                    <p>Nos projetos em que atuei já usei: Spring boot, Jboss, tomcat.</p>
                    <p>Já fiz deploy na digital ocean, heroku, webhost e subindo war direto no servidor(linux/windows).</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Versionador de código</h3>
                    <p>Já trabalhei com Git abrindo PR'S e revisando códigos. Tive contato com SVN também.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Outras ferramentas</h3>
                    <p>IDES: Intelij, Eclipse, VS Code, STS, PHP Storm </p>
                    <p>Junit/Mockito, Docker, Jira/Confluence, Trello, Websphere, API Rest e SOAP. </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
