import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Home.module.css'

function Home() {
    const [accordion, setAccordion] = useState(0)

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.menu}>
                    <ul>
                        <li><a href="#servico">Nosso serviço</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#problema">Relatar problema</a></li>
                        <li><a href="#oficinas">Oficinas próximas</a></li>
                        <li><a href="#integrantes">Integrantes</a></li>
                    </ul>
                </div>
                <section id="servico">
                    <div className={styles.cont1}>
                        <h1>O que oferecemos?</h1>
                        <p>A Phygital Porto é uma plataforma inteligente de agendamento de consertos mecânicos, que facilita a vida de donos de veículos ao fornecer precisão na hora de achar a oficina certa para você. Nosso sistema possuí uma Inteligência artificial que analisa os sintomas de seu veículo e fornece um possível problema e orçamento, já te redirecionando a oficinas prontas para consertar seu veículo. </p>
                    </div>
                </section>
                <div className={styles.cont2}>
                    <div className={styles.cards}>
                        <i className="fa-solid fa-gears"></i>
                        <p>Obtenha um diagnóstico detalhado e preciso dos problemas do seu veículo, com total confiança.</p>
                    </div>
                    <div className={styles.cards}>
                        <i className="fa-solid fa-scale-balanced"></i>
                        <p>Obtenha uma estimativa clara e transparente dos custos antes de iniciar qualquer serviço.</p>
                    </div>
                    <div className={styles.cards}>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <p>Escolha entre mecânicas qualificadas e altamente recomendadas para um serviço confiável.</p>
                    </div>
                </div>
                <div className={styles.cont3}>
                    <img src="../../../public/carro-e-mecanico.svg" alt="Carro e mecanico" />
                    <div className={styles.comecar}>
                        <p>Informe os sintomas do seu veículo e receba uma avaliação detalhada, orçamento estimado e as melhores mecânicas próximas a você.</p>
                        <a href="#problema">Começar agora</a>
                    </div>
                </div>
                <section id="faq">
                    <div className={styles.cont4}>
                        <h1>Dúvidas Frequentes</h1>
                        <div className={styles.duvidas}>
                            <div className={styles.duv1}>
                                <div onClick={() => setAccordion(accordion === 1 ? 0 : 1)} className={`${styles.accordionBox} ${accordion === 1 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>Quais informações são necessárias para o diagnóstico? </h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>Para um diagnóstico mais preciso, forneça detalhes sobre os sintomas que seu veículo está apresentando, o modelo e o ano do carro, e, se possível, o histórico de manutenção. Quanto mais informações você fornecer, mais preciso será o diagnóstico preliminar.</p>
                                    </div>
                                </div>
                                <div onClick={() => setAccordion(accordion === 2 ? 0 : 2)} className={`${styles.accordionBox} ${accordion === 2 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>Como são escolhidas as mecânicas parceiras?</h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>Selecionamos nossas mecânicas parceiras com base em critérios rigorosos, incluindo certificações, experiência, e avaliações de clientes. Apenas mecânicas que atendem aos nossos padrões de qualidade e confiabilidade são incluídas em nossa rede.</p>
                                    </div>
                                </div>
                                <div onClick={() => setAccordion(accordion === 3 ? 0 : 3)} className={`${styles.accordionBox} ${accordion === 3 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>Como meus dados são protegidos?</h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>Levamos a proteção de dados muito a sério. Todos os dados que você fornece são criptografados e armazenados de acordo com as leis de proteção de dados vigentes. Apenas informações necessárias para o diagnóstico e o agendamento são compartilhadas com as mecânicas parceiras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.duv2}>
                                <div onClick={() => setAccordion(accordion === 4 ? 0 : 4)} className={`${styles.accordionBox} ${accordion === 4 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>Existe um custo para usar o sistema?</h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>O uso do nosso sistema para diagnóstico e recomendação de mecânicas é gratuito para os clientes. Eventuais custos relacionados ao serviço de reparo ou manutenção são diretamente cobrados pela mecânica escolhida.</p>
                                    </div>
                                </div>
                                <div onClick={() => setAccordion(accordion === 5 ? 0 : 5)} className={`${styles.accordionBox} ${accordion === 5 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>Como posso entrar em contato com o suporte?</h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>Você pode entrar em contato com nosso suporte através do formulário de contato disponível em nosso site, ou enviando um e-mail para (phygitalporto@gmail.com). Também oferecemos suporte via chat ao vivo durante o horário comercial.</p>
                                    </div>
                                </div>
                                <div onClick={() => setAccordion(accordion === 6 ? 0 : 6)} className={`${styles.accordionBox} ${accordion === 6 ? styles.accordionBoxOpen : ""}`}>
                                    <div className={styles.accordionHeader}><h3>O que fazer se não encontrar uma mecânica perto de mim?</h3> <i className="fa-solid fa-angle-down"></i></div>
                                    <div className={styles.accordionText}>
                                        <p>Se você não encontrar uma mecânica próxima à sua localização, é possível que ainda não tenhamos uma parceira na sua área. Entre em contato com nosso suporte para verificar outras opções ou para solicitar a inclusão de uma nova mecânica em nossa rede.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="problema">
                    <form className={styles.cont5}>
                        <h1>Relate seu problema, <br />preencha o formulário abaixo: </h1>
                        <div className={styles.formulario}>
                            <div className={styles.form}>
                                <p>Seus Dados</p>
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" name="nome" placeholder="Digite seu nome..." required></input>

                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF..." required></input>

                                <label htmlFor="nascimento">Data de Nascimento:</label>
                                <input type="date" id="nascimento" name="nascimento" required min="1900-01-01" max="2006-31-12"></input>

                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." required></input>

                                <label htmlFor="tel">Telefone:</label>
                                <input type="tel" id="tel" name="tel" placeholder="Digite seu telefone..." required></input>
                            </div>
                            <div className={styles.form}>
                                <p>Endereço</p>
                                <label htmlFor="cep">CEP:</label>
                                <input type="number" id="cep" name="cep" placeholder="Digite seu CEP..." required></input>

                                <label htmlFor="logradouro">Logradouro:</label>
                                <input type="text" id="logradouro" name="logradouro" placeholder="Digite seu logradouro..." required></input>

                                <label htmlFor="bairro">Data de Bairro:</label>
                                <input type="text" id="bairro" name="bairro" placeholder="Digite seu bairro..."></input>

                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade..." required></input>

                                <label htmlFor="estado">Estado:</label>
                                <input type="text" id="estado" name="estado" placeholder="Digite seu estado..." required></input>
                            </div>
                            <div className={styles.form}>
                                <p>Veículo</p>
                                <label htmlFor="placa">Placa:</label>
                                <input type="text" id="placa" name="placa" placeholder="Digite a placa..." required></input>

                                <label htmlFor="modelo">Modelo:</label>
                                <input type="text" id="modelo" name="modelo" placeholder="Digite o modelo..." required></input>

                                <label htmlFor="ano">Ano:</label>
                                <input type="number" id="ano" name="ano" min="1900" max="2100" placeholder="Digite o ano..." required></input>

                                <label htmlFor="km">Kilometragem:</label>
                                <input type="text" id="km" name="km" placeholder="Digite a kilometragem..." required></input>

                                <label htmlFor="problemas">Problemas apresentados:</label>
                                <input type="text" id="problemas" name="problemas" placeholder="Digite os seus problemas..." required></input>
                            </div>
                        </div>
                        <button>Enviar!</button>
                    </form>
                </section>
                <section id="oficinas">
                    <div className={styles.cont6}>
                        <div className={styles.loc1}>
                            <p>Procure a oficina da Porto <br /> mais próxima de você!</p>
                            <img src="../../../public/localizacao.svg" alt="Ponto de localização" />
                        </div>
                        <div className={styles.loc2}>
                            <div className={styles.oficina}>
                                <h3>Reycar</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua LUIS GAMA 185 - MOOCA - SAO PAULO/SP <br /> (11) 32091166</p>
                                <a href="https://www.google.com/search?q=Reycar&client=opera-gx&hs=7vo&sca_esv=91e3e3360bc36966&sxsrf=ADLYWIJ0mL9p2RaauVEn--qNJShWjCwDAA%3A1726149611947&ei=6_PiZt20OdfZ1sQP-cWioAI&ved=0ahUKEwid1suzyL2IAxXXrJUCHfmiCCQQ4dUDCA8&uact=5&oq=Reycar&gs_lp=Egxnd3Mtd2l6LXNlcnAiBlJleWNhcjIKECMYgAQYJxiKBTIQEC4YgAQYQxjHARiKBRivATILEC4YgAQYxwEYrwEyBxAAGIAEGAoyEBAuGIAEGMcBGAoYjgUYrwEyBRAAGIAEMgcQABiABBgKMg0QLhiABBjHARgKGK8BMg0QLhiABBixAxiDARgKMgcQABiABBgKMh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBSLALUNUFWPIIcAF4AZABAJgBuAGgAYkGqgEDMC41uAEDyAEA-AEBmAIGoAKrBsICBxAjGLADGCfCAgoQABiwAxjWBBhHwgITEC4YgAQYsAMYQxjHARiKBRivAcICDRAAGIAEGLADGEMYigXCAgQQIxgnwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgIHEC4YgAQYCpgDAIgGAZAGCLoGBggBEAEYFJIHAzEuNaAH93Q&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Canaã Funilaria e Pintura</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua CONSELHEIRO RAMALHO 487 - BELA VISTA - SAO PAULO/SP <br /> (11) 31047760</p>
                                <a href="https://www.google.com/search?q=Canaa+Funelaria+e+Pintura&client=opera-gx&hs=HDB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIJXDaqFrvKJT_MfB87hKdFbz_REtw%3A1726155796726&ei=FAzjZqOILJW85OUPwdWSgAs&ved=0ahUKEwij4ty4372IAxUVHrkGHcGqBLAQ4dUDCA8&uact=5&oq=Canaa+Funelaria+e+Pintura&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUNhbmFhIEZ1bmVsYXJpYSBlIFBpbnR1cmEyBxAAGIAEGA0yCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEiuR1DNQ1jNQ3AGeACQAQCYAYgBoAGIAaoBAzAuMbgBA8gBAPgBAvgBAZgCB6ACsQHCAg0QABiABBiwAxhDGIoFwgIREAAYgAQYsAMYsQMYgwEYigXCAggQABiABBiwA8ICDhAAGIAEGLADGLEDGIMBwgIaEC4YgAQYsAMYsQMY0QMYgwEYxwEYyAPYAQHCAhcQLhiABBiwAxjHARjIAxiOBRivAdgBAcICFBAuGIAEGLADGNEDGMcBGMgD2AEBwgIOEC4YgAQYsAMYyAPYAQGYAwCIBgGQBhS6BgYIARABGAiSBwM2LjGgB78E&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Oficina RN Service Car</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua HELVETIA 468 - CAMPOS ELISEOS - SAO PAULO/SP <br /> (11) 33618677</p>
                                <a href="https://www.google.com/search?q=Oficina+RN+Service+Car&client=opera-gx&hs=kEB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIImO8PG-LfTDQab4cuxnpfcLy6iiw%3A1726155887875&ei=bwzjZuiENazM5OUPkcOimAE&ved=0ahUKEwio-Jfk372IAxUsJrkGHZGhCBMQ4dUDCA8&uact=5&oq=Oficina+RN+Service+Car&gs_lp=Egxnd3Mtd2l6LXNlcnAiFk9maWNpbmEgUk4gU2VydmljZSBDYXIyBRAAGIAEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEiPB1CyA1iyA3AAeASQAQCYAaYBoAGmAaoBAzAuMbgBA8gBAPgBAvgBAZgCBKACsgHCAgQQABhHmAMA4gMFEgExIECIBgGQBgOSBwMzLjGgB4QC&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Stop Car Bem</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua DOUTOR FREIRE 192 - BRÁS - SÃO PAULO/SP <br /> (11) 930040738</p>
                                <a href="https://www.google.com/search?q=Stop+Car+Bem&client=opera-gx&hs=mwV&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIKbJO0L24gPCVrfbFmzHurjFde35g%3A1726156056901&ei=GA3jZuzYNqfU1sQP6-CZoAg&ved=0ahUKEwjsxOS04L2IAxUnqpUCHWtwBoQQ4dUDCA8&uact=5&oq=Stop+Car+Bem&gs_lp=Egxnd3Mtd2l6LXNlcnAiDFN0b3AgQ2FyIEJlbTILEC4YgAQYxwEYrwEyAhAmMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYogQYiQUyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSOYGUOwDWOwDcAN4AJABAJgBuwGgAbsBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoALMAcICCBAAGIAEGLADwgILEAAYgAQYsAMYogSYAwCIBgGQBgS6BgYIARABGBSSBwMzLjGgB6sI&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Clubcar Veículos Cambuci</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua CLIMACO BARBOSA 191 - CAMBUCI - SAO PAULO/SP <br /> (11) 33462582</p>
                                <a href="https://www.google.com/search?q=Clubcar+Veiculos+Cambuci&client=opera-gx&hs=UIB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIKdvo3lYIrgYNbCrezS1C-viTEerQ%3A1726156119631&ei=Vw3jZq2TJuu91sQPtoa2qAg&ved=0ahUKEwjtmtnS4L2IAxXrnpUCHTaDDYUQ4dUDCA8&uact=5&oq=Clubcar+Veiculos+Cambuci&gs_lp=Egxnd3Mtd2l6LXNlcnAiGENsdWJjYXIgVmVpY3Vsb3MgQ2FtYnVjaTILEC4YgAQYxwEYrwEyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSPkFUMMDWMMDcAN4AZABAJgBtwGgAbcBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoALHAcICChAAGLADGNYEGEeYAwCIBgGQBgi6BgYIARABGBSSBwMzLjGgB70F&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Ribeiro Renovadora de Veículos</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua JOSE BENTO 50 - CAMBUCI - SAO PAULO/SP <br /> (11) 32092954</p>
                                <a href="https://www.google.com/search?q=Ribeiro+Renovadora+de+Veículos&client=opera-gx&hs=jfq&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWILJ5zyDMO6vtFWrktslzYFiOhYY3Q%3A1726156282714&ei=-g3jZv-YK7_L1sQPy-6fmA4&ved=0ahUKEwj__bqg4b2IAxW_pZUCHUv3B-MQ4dUDCA8&uact=5&oq=Ribeiro+Renovadora+de+Veículos&gs_lp=Egxnd3Mtd2l6LXNlcnAiH1JpYmVpcm8gUmVub3ZhZG9yYSBkZSBWZcOtY3Vsb3MyCxAuGIAEGMcBGK8BMgYQABgWGB4yBhAAGBYYHjICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjUB1AAWABwAHgAkAEAmAG8AaABvAGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAsgBmAMAugYGCAEQARgUkgcDMi0xoAevCA&sclient=gws-wiz-serp#cobssid=s" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Quality AutoTec</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua SALVADOR LEME 291 - BOM RETIRO - SAO PAULO/SP <br /> (11) 33269947</p>
                                <a href="https://www.google.com/search?q=Quality+AutoTec&client=opera-gx&hs=s1V&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWII7Hct6QllOIBG2pJYHD9Sqh9FyZQ%3A1726156372261&ei=VA7jZrTQD-225OUP05CH0Qg&ved=0ahUKEwi0ypTL4b2IAxVtG7kGHVPIIYoQ4dUDCA8&uact=5&oq=Quality+AutoTec&gs_lp=Egxnd3Mtd2l6LXNlcnAiD1F1YWxpdHkgQXV0b1RlYzILEC4YgAQYxwEYrwEyBhAAGBYYHjICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUioB1DJBFjJBHADeACQAQCYAagBoAGoAaoBAzAuMbgBA8gBAPgBAvgBAZgCBKACtwHCAgkQABiwAxgIGB7CAgsQABiABBiwAxiiBJgDAIgGAZAGBboGBggBEAEYFJIHAzMuMaAHqQc&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Trend Auto Service</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua CONSELHEIRO NÉBIAS 1530 - CAMPOS ELISEOS - SAO PAULO/SP <br /> (11) 996751794</p>
                                <a href="https://www.google.com/search?q=Trend+Studio+oficina&client=opera-gx&hs=siq&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIK4FLHmNOAshcCjKQDvAgoVLdOshw%3A1726156477697&ei=vQ7jZvGeKoLe5OUP-5ut8Ac&ved=0ahUKEwix8bf94b2IAxUCL7kGHftNC34Q4dUDCA8&uact=5&oq=Trend+Studio+oficina&gs_lp=Egxnd3Mtd2l6LXNlcnAiFFRyZW5kIFN0dWRpbyBvZmljaW5hMgUQIRigATIFECEYoAFIsBpQ0AlY4hlwAXgAkAEAmAHKAaAB5A-qAQYwLjEzLjG4AQPIAQD4AQGYAg6gAs4OwgIKEAAYsAMY1gQYR8ICCxAuGIAEGMcBGK8BwgIIEAAYgAQYsQPCAgUQLhiABMICDhAuGIAEGMcBGI4FGK8BwgIFEAAYgATCAgQQABgDwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgoQABiABBgUGIcCwgIIEAAYgAQYywHCAg4QLhiABBjHARjLARivAcICDhAuGIAEGNEDGMcBGMsBwgIGEAAYFhgewgIIEAAYgAQYogTCAgQQIRgVmAMAiAYBkAYCugYGCAEQARgUkgcEMS4xM6AHp3w&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Oficina Globo</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Estrada PRT 163 S/N - ZONA RURAL - CAPITÃO LEÔNIDAS MARQUES/PR <br /> (45) 32861419</p>
                                <a href="https://www.google.com/search?q=Oficina+Globo&client=opera-gx&hs=Nlq&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWILrNmNSagJ3CQ33w6aQOiiZsJ-5VQ%3A1726156632825&ei=WA_jZsKEMs_Q5OUPu9HHiAQ&ved=0ahUKEwjCkLTH4r2IAxVPKLkGHbvoEUEQ4dUDCA8&uact=5&oq=Oficina+Globo&gs_lp=Egxnd3Mtd2l6LXNlcnAiDU9maWNpbmEgR2xvYm8yDhAuGIAEGMcBGI4FGK8BMgYQABgHGB4yBRAAGIAEMggQABgHGAoYHjIGEAAYBxgeMgYQABgHGB4yCxAuGIAEGMcBGK8BMgsQLhiABBjHARivATIEEAAYHjIEEAAYHjIdEC4YgAQYxwEYjgUYrwEYlwUY3AQY3gQY4ATYAQFI9gZQqgRYqQZwAHgCkAEAmAGiAaABogGqAQMwLjG4AQPIAQD4AQGYAgKgAq8BwgIEEAAYR5gDAIgGAZAGCLoGBggBEAEYFJIHAzEuMaAHsA0&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Nicola Garage Serviços Automotivos</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua BARRA FUNDA 308 - BARRA FUNDA - SAO PAULO/SP <br /> (11) 36666655</p>
                                <a href="https://www.google.com/search?q=Nicola+Garage+Serviços+Automotivos&client=opera-gx&hs=W7V&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIJlNnJK1oHKfX7bs3K0H_dslkNp5Q%3A1726156722805&ei=sg_jZrLpMMPm1sQPquDa0Ao&ved=0ahUKEwiyiqjy4r2IAxVDs5UCHSqwFqoQ4dUDCA8&uact=5&oq=Nicola+Garage+Serviços+Automotivos&gs_lp=Egxnd3Mtd2l6LXNlcnAiI05pY29sYSBHYXJhZ2UgU2VydmnDp29zIEF1dG9tb3Rpdm9zMgsQLhiABBjHARivATICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AECSKMFUKUDWKUDcAN4AJABAJgBhAGgAYQBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoAKYAcICDRAAGIAEGLADGEMYigXCAggQABiABBiwA8ICCRAAGLADGAcYHsICCxAAGLADGAcYChgewgIHEAAYsAMYHsICCRAAGLADGAgYHsICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhkQLhiABBiwAxgUGMcBGIcCGMgDGK8B2AEBmAMAiAYBkAYLugYECAEYCLoGBggCEAEYFJIHAzMuMaAH8QY&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Oficina 4 Rodas Mais - Funilaria Express</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua ORVILLE DERBY 140 - MOOCA - SAO PAULO/SP <br /> (11) 26973057</p>
                                <a href="https://www.google.com/search?q=Oficina+4+Rodas+Mais+-+Funilaria+Express&client=opera-gx&hs=H8V&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIJjGxeoPwGhnqWhactEDpJvKuz3ZA%3A1726156769768&ei=4Q_jZtrFLt2I4dUPpLqKkAQ&ved=0ahUKEwiautqI472IAxVdRLgEHSSdAkIQ4dUDCA8&uact=5&oq=Oficina+4+Rodas+Mais+-+Funilaria+Express&gs_lp=Egxnd3Mtd2l6LXNlcnAiKE9maWNpbmEgNCBSb2RhcyBNYWlzIC0gRnVuaWxhcmlhIEV4cHJlc3MyCxAuGIAEGMcBGK8BMgYQABgWGB4yAhAmMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyGhAuGIAEGMcBGK8BGJcFGNwEGN4EGOAE2AEBSOYIUNkCWNkCcAJ4AZABAJgBtAGgAbQBqgEDMC4xuAEDyAEA-AEB-AECmAIDoALKAagCFMICBxAjGCcY6gLCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAZgDCboGBggBEAEYC5IHAzIuMaAH2Ag&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Repair Solution Centro Automotivo</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua DOS ITALIANOS 708 - BOM RETIRO - SAO PAULO/SP <br /> (11) 32253200</p>
                                <a href="https://www.google.com/search?q=Repair+Solution+Centro+Automotivo&client=opera-gx&hs=fUB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWII9UM7W7j6nDl2bUrUWRlGBFeTEkw%3A1726156874397&ei=ShDjZpb3F5nY1sQP-bWhkQo&ved=0ahUKEwiWxMy6472IAxUZrJUCHflaKKIQ4dUDCA8&uact=5&oq=Repair+Solution+Centro+Automotivo&gs_lp=Egxnd3Mtd2l6LXNlcnAiIVJlcGFpciBTb2x1dGlvbiBDZW50cm8gQXV0b21vdGl2bzILEC4YgAQYxwEYrwEyBhAAGBYYHjIGEAAYFhgeMgIQJjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI2gdQ2AFY2AFwAXgBkAEAmAGzAaABswGqAQMwLjG4AQPIAQD4AQH4AQKYAgKgAsIBqAIQwgIHECMYJxjqAsICFBAAGIAEGOMEGLQCGOkEGOoC2AEBwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBAcICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQGYAwi6BgYIARABGAGSBwMxLjGgB-cH&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Auto Perfect</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua BARRA FUNDA 867 - BARRA FUNDA - SAO PAULO/SP <br /> (11) 36602727</p>
                                <a href="https://www.google.com/search?q=Auto+Perfect&client=opera-gx&hs=dWB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIIohpelRF2DuI6HmjP1ymNxQUOhfw%3A1726156996291&ei=xBDjZpq7EYmq1sQPzdnUiQ8&ved=0ahUKEwiardz0472IAxUJlZUCHc0sNfEQ4dUDCA8&uact=5&oq=Auto+Perfect&gs_lp=Egxnd3Mtd2l6LXNlcnAiDEF1dG8gUGVyZmVjdDIKECMYgAQYJxiKBTIQEC4YgAQYQxjHARiKBRivATILEC4YgAQYxwEYrwEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyDhAuGIAEGMcBGMsBGK8BMggQABiABBjLATIOEC4YgAQYxwEYywEYrwEyCBAAGIAEGMsBMh8QLhiABBhDGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AECSPUGULQDWLQDcAN4AZABAJgBlgGgAZYBqgEDMC4xuAEDyAEA-AEC-AEBmAIEoAKsAcICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAcICGRAuGIAEGLADGNEDGEMYxwEYyAMYigXYAQGYAwCIBgGQBgm6BgQIARgIugYGCAIQARgUkgcDMy4xoAfqEQ&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Renovação Centro Automotivo</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua LEONOR FERNANDES COSTA ZACHARIAS 1912 - VILA GUILHERME - SAO PAULO/SP <br /> (11) 22070583</p>
                                <a href="https://www.google.com/search?q=Renovação+Centro+Automotivo&client=opera-gx&hs=gCW&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIJzsrpxsDhNyezgWILvX0oFHS8Qqw%3A1726157042888&ei=8hDjZpDwNcHM1sQPmYq6oQE&ved=0ahUKEwiQsfiK5L2IAxVBppUCHRmFLhQQ4dUDCA8&uact=5&oq=Renovação+Centro+Automotivo&gs_lp=Egxnd3Mtd2l6LXNlcnAiHVJlbm92YcOnw6NvIENlbnRybyBBdXRvbW90aXZvMgUQABiABDILEC4YgAQYxwEYrwEyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yAhAmMggQABiiBBiJBTIIEAAYgAQYogRI8ARQqwFYqwFwAXgAkAEAmAHIAaAByAGqAQMyLTG4AQPIAQD4AQH4AQKYAgKgAtYBqAIUwgIHECMYJxjqAsICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AEBmAMLugYGCAEQARgLkgcFMS4wLjGgB-0I&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                            <div className={styles.oficina}>
                                <h3>Grupo Dencar Auto Service</h3>
                                <p><i className="fa-solid fa-location-dot"></i> Rua BARAO DE MONTE SANTO 435 - MOOCA - SAO PAULO / SP <br /> (11) 42551000</p>
                                <a href="https://www.google.com/search?q=Grupo+Dencar+Auto+Service%0D%0A&client=opera-gx&hs=FYB&sca_esv=398c3b20e5904a3d&sxsrf=ADLYWIJgVkuqjy3nLoeYM0d_r6kKKZrWYg%3A1726157096242&ei=KBHjZsi3DuLe1sQP9-6fmAM&ved=0ahUKEwjI67Ck5L2IAxVir5UCHXf3BzMQ4dUDCA8&uact=5&oq=Grupo+Dencar+Auto+Service%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiGkdydXBvIERlbmNhciBBdXRvIFNlcnZpY2UKMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQLhgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQLhgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBSIgIUPwCWPwCcAF4AJABAJgBAKABAKoBALgBA8gBAPgBAfgBApgCAaACCqgCFJgDCboGBggBEAEYC5IHATGgBwA&sclient=gws-wiz-serp" target="_blank">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="integrantes">
                    <div className={styles.cont7}>
                        <h1>Conheça os nossos integrantes!</h1>
                        <div className={styles.integrantes}>
                            <div className={styles.int}>
                                <img src="../../../public/integrante-gustavo.jpeg" alt="Integrante Gustavo" />
                                <p><span>Gustavo Camargo de Andrade</span></p>
                                <p>RM555562</p>
                                <p>1TDSPF</p>
                                <a href="https://github.com/tcguus" target="_blank">https://github.com/tcguus</a>
                            </div>
                            <div className={styles.int}>
                                <img src="../../../public/integrante-rodrigo.jpeg" alt="Integrante Rodrigo" />
                                <p><span>Rodrigo Souza Mantovanello</span></p>
                                <p>RM555451</p>
                                <p>1TDSPF</p>
                                <a href="https://github.com/rsmanto" target="_blank">https://github.com/rsmanto</a>
                            </div>
                            <div className={styles.int}>
                                <img src="../../../public/integrante-leonardo.jpeg" alt="Integrante Leonardo" />
                                <p><span>Leonardo César Nascimento</span></p>
                                <p>RM558373</p>
                                <p>1TDSPF</p>
                                <a href="https://github.com/leoc7sar" target="_blank">https://github.com/leoc7sar</a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home
