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
      { increment: 'numero_Boissons', label: 'N° Boisson', champ: 'numero_article', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand', 'Américain', 'Brésilien', 'Anglais', 'Indien'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Café', 'Thé', 'Chocolat', 'Soda', 'Eau gazeuse'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true },
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
      { increment: 'numero_Fruitslegumes', label: 'N° Fruit ou Légume', champ: 'numero_article', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand', 'Américain'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Tomate', 'Carotte', 'Fraise', 'Courgette'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true },
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
      { increment: 'numero_Boulangerie', label: 'N° Boulangerie', champ: 'numero_article', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français', 'Allemand'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Baguette', 'Pain aux céréales', 'Chocolatine'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true },
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
      { increment: 'numero_Fromagerie', label: 'N° Fromagerie', champ: 'numero_article', type: 'number', largeur: 6, typeinput: 'number', champActif: true },
      { label: 'Nom Produit', champ: 'nom_produit', type: 'text', largeur: 12, typeinput: 'text', champActif: true },
      { label: 'Origine', champ: 'tag_origine', type: 'text', items: ['Italien', 'Français'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Type Produit', champ: 'tag_typeproduit', type: 'text', items: ['Cheddar', 'Bleu', 'Yaourt'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Devise', champ: 'devise', type: 'text', items: ['$', '€'], largeur: 12, typeinput: 'select', champActif: true },
      { label: 'Description', champ: 'description', type: 'text', largeur: 12, typeinput: 'text', champActif: true }
    ]
  }

}

export default CONFIGINIT
