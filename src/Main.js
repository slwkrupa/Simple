import React from 'react';
import classes from "./Main.module.css";
import Photo from "./images/photo.png";
import Home from "./images/home_03.png"
import SideMenu from "./SideMenu.js";

const Main = () => {
    return(
        <div className={classes.Container}>
            <div className={classes.sideMenu}>
                <SideMenu/>
            </div>

            <div className={classes.topRow}>
                <img src={Home}/>
                <h2>O FIRMIE</h2>
                <hr/>
                <p>SIMPLE - z nami biznes jest prostszy!</p>
            </div>
            
            <div className={classes.leftInfo}>
                <img src={Photo}/>
                <p>
                <br/><br/>
                PONAD 24 LATA DOŚWIADCZENIA
                SIMPLE S.A. jest wiodącym w kraju producentem rozwiązań informatycznych do wspomagania zarządzania przedsiębiorstwami. Będąc producentem oprogramowania, dajemy pełną gwarancję dotyczącą jego działania oraz dostosowania do zmieniających się warunków biznesowych i przepisów prawa oraz szybkiej reakcji na zmieniające się potrzeby klientów.
                <br/><br/>
                PONAD 3 500 KLIENTÓW
                Działamy na polskim rynku producentów rozwiązań klasy ERP już od ponad 24 lat! Dostarczamy rozwiązania, które sprawdziły się w wielu zróżnicowanych branżach i doskonale znamy biznes naszych klientów. Nasza oferta dostosowana jest do potrzeb głównych sektorów polskiego rynku. Ze współpracy z nami skorzystało już blisko ponad 3,5 tysiąca firm.
                <br/><br/>
                PONAD 23 000 UŻYTKOWNIKÓW
                Nasze produkty zawsze charakteryzowały się udanym połączeniem: innowacyjności, szerokiej funkcjonalności, adaptowalności i skalowalności jak również dbałości o rozsądny budżet, dostosowany do możliwości naszych Klientów. Dlatego w 2010 roku liczba naszych użytkowników przekroczyła 25 tysiące
                <br/><br/>
                NASI ODBIORCY
                Odbiorcami naszych rozwiązań są głównie firmy budowlane, 
                </p>
            </div>
            <div className={classes.spaceBetween}></div>
            <div className={classes.rightInfo}>
                <p>
                przedsiębiorstwa produkcyjne, uczelnie wyższe, jednostki medyczne oraz firmy usługowe i handlowe. Widzimy i wspólnie wykorzystujemy możliwości jakie daje proces integracji Polski z Unią Europejską.
                <br/><br/>
                ZINTEGROWANE ROZWIĄZANIA DLA KAŻDEJ BRANŻY 
                SIMPLE posiada kompleksowe rozwiązania, dedykowane największym sektorom naszej gospodarki. W naszej ofercie znajdą Państwo rozwiązania dla firm o różnych profilach działalności (produkcyjnym, budowlanym, usługowym, handlowym), dla uczelni wyższych, jednostek medycznych, instytutów badawczych czy jednostek rządowych. 
                Nasze doświadczenia obejmują realizacje systemów dedykowanych pod indywidualne potrzeby klientów oraz integrację wszelkich rozwiązań wspomagających zarządzanie.
                <br/><br/>
                CERTYFIKATY I REKOMENDACJE
                SIMPLE S.A. posiada istotne na polskim rynku rekomendacje od Polskiego Towarzystwa Ekonomicznego oraz Stowarzyszenia Księgowych w Polsce, które potwierdzają, że oprogramowanie SIMPLE jest dostosowywane do zmieniających się polskich przepisów prawnych oraz wymagań Unii Europejskiej.  Ponadto SIMPLE S.A. wprowadziło i stosuje system zarządzania jakością ISO 90001:2008 w zakresie: projektowania, produkcji i wdrażania systemów informatycznych, a także  sprzedaż i instalacja sprzętu komputerowego oraz szkolenia.
                <br/><br/>
                Oprogramowanie SIMPLE zostało wyróżnione również: GAZELĄ BIZNESU, MEDALEM EUROPEJSKIM, statuetką TopBuilder oraz posiada status Microsoft Gold Certified Partner oraz BRE Partner Gold CERTIFICATE.  Osiągnięte wyniki pozwoliły zająć SIMPLE S.A. 30 miejsce w rankingu DIAMENTÓW FORBESA dla województwa mazowieckiego. Firma SIMPLE otrzymała również tytuł "Najlepszy dostawca IT dla przemysłu 2010 w kategorii ERP/MRP II (system polski)- producent".
                <br/><br/>
                ZAWSZE BLISKO CIEBIE
                SIMPLE S.A. wraz z Partnerami prowadzi szeroko zakrojoną sprzedaż do Klientów na terenie całego kraju. Chcemy być jak najbliżej naszych klientów, dlatego wciąż dążymy do poszerzania sieci naszej sprzedaży.Unią Europejską.  
                </p>
            </div>
        </div>
    )
}

export default Main;
