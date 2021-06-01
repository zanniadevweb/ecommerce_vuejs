import Dexie from 'dexie'

export class Database extends Dexie {
  constructor (fiche) {
    super('myNewDB') // Appelle constructeur de Dexie

    // Création des tables IndexedDB
    // Il n'est pas utile de déclarer les propriétés non incrémentables. IndexedDB a pour but de prendre en charge l'incrément (CRUD). Les autres propriétés sont ajoutées via le formulaire aux tables correspondantes.
    // Les indexs composés (compound index) ne sont nécessaires dans ce projet que pour les tables qui ont plus de deux propriétés incrémentables (hors id).
    this.version(1).stores({
      ficheboissons: '++id, numero_boisson',
      fichefruitsetlegumes: '++id, numero_fruitoulegume',
      ficheboulangerie: '++id, numero_boulangerie',
      fichefromagerie: '++id, numero_epicerie'
    })

    // ouverture pour être sur
    this.open()

    // pour plus de facilite
    this.fichecourante = this.table(fiche)
  }

  listerFicheCourante () {
    return this.fichecourante.toArray()
  }

  ajouterFiche (fiche) {
    return this.fichecourante.add(fiche)
  }

  modifierFiche (fiche) {
    return this.fichecourante.update(fiche.id, fiche)
  }

  chargerFiche (id) {
    return this.fichecourante.get(id)
  }

  effacerFiche (id) {
    return this.fichecourante.delete(id)
  }
}
