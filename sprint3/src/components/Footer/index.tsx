import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
             <div className={styles.box1}>
             <a href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!" target='_blank'><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
             <a href="https://www.google.com/search?q=Agencia+Porto+Seguro+mais+próxima+de+mim&client=opera-gx&sca_esv=0ab730e59f55f214&sxsrf=ADLYWIIzKKUdF_NpdaCU-W4iJC5wNsj43g%3A1715041360863&ei=UHQ5ZtGhNNOp5OUPx6uB2AQ&udm=&ved=0ahUKEwjRidv4ovqFAxXTFLkGHcdVAEsQ4dUDCBA&uact=5&oq=Agencia+Porto+Seguro+mais+próxima+de+mim&gs_lp=Egxnd3Mtd2l6LXNlcnAiKUFnZW5jaWEgUG9ydG8gU2VndXJvIG1haXMgcHLDs3hpbWEgZGUgbWltMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESJgOUJUHWJYLcAF4AZABAJgBpgGgAbICqgEDMC4yuAEDyAEA-AEBmAIDoAK6AsICChAAGLADGNYEGEfCAgQQIRgKmAMAiAYBkAYIkgcDMS4yoAfSBQ&sclient=gws-wiz-serp" target="_blank"><i className="fa-solid fa-map-location-dot"></i> Agência mais próxima</a>
             </div>
             <div className={styles.box2}>
               <div className={styles.redes}>
               <a href="https://www.facebook.com/porto" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
               <a href="https://www.tiktok.com/@porto" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
               <a href="https://www.linkedin.com/company/porto/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
               <a href="https://www.instagram.com/porto" target="_blank"><i className="fa-brands fa-instagram"></i></a>
               <a href="https://www.youtube.com/portoseguro" target="_blank"><i className="fa-brands fa-youtube"></i></a>
               </div>
                <div className={styles.direitos}>
                <p>© Copyright 2024 by Phygital Porto. Todos os direitos reservados.</p>  
                </div> 
             </div>
             <div className={styles.box3}>
                <div className={styles.baixe}>
                    <p>Baixe o app da Porto!</p>
                </div>
                <div className={styles.apps}>
                <a href="https://play.google.com/store/search?q=porto%20seguro&c=apps&hl=pt_BR&gl=US"target="_blank"><i className="fa-brands fa-google-play"></i></a>
                <a href="https://apps.apple.com/br/app/porto-seguros-cartão-e/id1511026277" target="_blank"><i className="fa-brands fa-apple"></i></a>
                </div>
             </div>

             
        </footer>


    )
}

export default Footer