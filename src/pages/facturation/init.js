import moment from "moment"
import { annee, date } from "../../helpers/render"


const secef ="...., statut(encours, terminé, envoyé, )"

export const facture = {
    nim:"IC01000228-1",
    compteur:"",
    numero:"",
    code:"1XXX-2XXX-3XXX-4XXX-5XXX-6XXX",
    date: moment(new Date()).format("YYYY-MM-DD"),
    seconde:moment(new Date()).format("ss"),
    heure:moment(new Date()).format("hh:mm"),
    dossier:"",
    annee:annee(new Date()),
    client:{nom:""},
    echeance:moment(new Date()).format("YYYY-MM-DD"),
  
    reglement:"Comptant",
    paiement:"chèque",

    valeur:"",
    total:"",
    debours:"",
    interventions:"",
    tva:"",
    net:"",
    ht:"78",
    status:"En cours"
}