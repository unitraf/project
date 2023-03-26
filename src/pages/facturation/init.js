import moment from "moment"
import { annee, date } from "../../helpers/render"


const secef ="...., statut(encours, terminé, envoyé, )"

export const facture = {
    nim:"IC01000228",
    compteur:"400",
    numero:"237",
    code:"1XXX-2XXX-3XXX-4XXX-5XXX-6XXX",
    date:"",
    heure:"",
    dossier:"",
    annee:annee(new Date()),
    echeance:moment().add(31, 'days').format("YYYY-MM-DD"),
  
    secef :{},
    reglement:"30",
    paiement:"chèque",
    debours:"",
    interventions:"",
    tva:"",
    net:"",
    statut:"En cours"
}