const CONFIGINIT = {

  Boissons:
  {
    table: 'BOISSONS',
    nomBD: 'ficheboissons',
    index: '',
    incrementBasique: 'numero_boisson',
    nom: 'Boissons',
    tableActif: true,
    champs: [
      { increment: 'numero_boisson', label: 'N° Boisson', champ: 'numero_boisson', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand'], itemspossibles: ['Italien', 'Français', 'Allemand'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Café', 'Thé', 'Chocolat'], itemspossibles: ['Café', 'Aucune', 'Construction', 'Destruction', 'Occupation', 'Indeterminé'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], itemspossibles: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Description', champ: 'description', type: 'text', largeur: 12, typeinput: 'text', champActif: true }
    ]
  },

  Fruitslegumes:
  {
    table: 'FRUITS & LEGUMES',
    nomBD: 'fichefruitsetlegumes',
    index: '',
    incrementBasique: 'numero_fruitoulegume',
    nom: 'Fruitslegumes',
    tableActif: true,
    champs: [
      { increment: 'numero_fruitoulegume', label: 'N° Fruit ou Légume', champ: 'numero_fruitoulegume', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand'], itemspossibles: ['Italien', 'Français', 'Allemand'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Café', 'Thé', 'Chocolat'], itemspossibles: ['Café', 'Aucune', 'Construction', 'Destruction', 'Occupation', 'Indeterminé'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], itemspossibles: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Description', champ: 'description', type: 'text', largeur: 12, typeinput: 'text', champActif: true }
    ]
  },

  Boulangerie:
  {
    table: 'BOULANGERIE',
    nomBD: 'ficheboulangerie',
    index: '',
    incrementBasique: 'numeroboulangerie',
    nom: 'Boulangerie',
    tableActif: true,
    champs: [
      { increment: 'numero_boulangerie', label: 'N° Boulangerie', champ: 'numero_boulangerie', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand'], itemspossibles: ['Italien', 'Français', 'Allemand'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Café', 'Thé', 'Chocolat'], itemspossibles: ['Café', 'Aucune', 'Construction', 'Destruction', 'Occupation', 'Indeterminé'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], itemspossibles: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Description', champ: 'description', type: 'text', largeur: 12, typeinput: 'text', champActif: true }
    ]
  },

  Fromagerie:
  {
    table: 'FROMAGERIE',
    nomBD: 'fichefromagerie',
    index: '',
    incrementBasique: 'numero_fromagerie',
    nom: 'Fromagerie',
    tableActif: true,
    champs: [
      { increment: 'numero_fromagerie', label: 'N° Fromagerie', champ: 'numero_fromagerie', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand'], itemspossibles: ['Italien', 'Français', 'Allemand'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Café', 'Thé', 'Chocolat'], itemspossibles: ['Café', 'Aucune', 'Construction', 'Destruction', 'Occupation', 'Indeterminé'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], itemspossibles: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true }, // SELECT
      { label: 'Description', champ: 'description', type: 'text', largeur: 12, typeinput: 'text', champActif: true }
    ]
  }

}

export default CONFIGINIT
