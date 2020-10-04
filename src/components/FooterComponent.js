import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
        <div className="footer">
        <div className="container-fluid">
            <div className="row">             
                <div className="col-12 col-sm-3 offset-sm-9">
                    <h3 className="change" id="fr">Changer la langue:</h3>
                    <h3 className="change" id="en">Change language:</h3>
                    <br/>
                    <ul className="list-unstyled inline-ul">
                        <li id="fr_click" className="button_lang current_lang inline-ul">Fr</li>
                        <li id="en_click" className="button_lang inline-ul">En</li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center"> 
            <div className="col-auto">   
                    <p id="fr"><strong>équipe: </strong> Ruxandra Grigorie, Teodora Moraru, Ionut-Gabriel Otelea, Diana-Elena Popescu, George Prodan</p>
                    <p id="en"><strong>team: </strong> Ruxandra Grigorie, Teodora Moraru, Ionut-Gabriel Otelea, Diana-Elena Popescu, George Prodan</p>
                    <p>© Copyright 2020 3psilon @ Space Apps Challenge</p>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Footer