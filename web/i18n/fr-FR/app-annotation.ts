const translation = {
  title: 'Annotations',
  name: 'Réponse à l\'Annotation',
  editBy: 'Réponse éditée par {{author}}',
  noData: {
    title: 'Aucune annotation',
    description: 'Vous pouvez modifier les annotations en déboguant l\'application, ou importer des annotations en masse ici pour une réponse de haute qualité.',
  },
  table: {
    header: {
      question: 'question',
      answer: 'réponse',
      createdAt: 'créé à',
      hits: 'clics',
      actions: 'actions',
      addAnnotation: 'Ajouter une Annotation',
      bulkImport: 'Importation en Vrac',
      bulkExport: 'Exportation en Vrac',
      clearAll: 'Effacer toutes les annotations',
      clearAllConfirm: 'Supprimer toutes les annotations ?',
    },
  },
  editModal: {
    title: 'Modifier la réponse à l\'annotation',
    queryName: 'Requête de l\'utilisateur',
    answerName: 'Bot conteur',
    yourAnswer: 'Votre réponse',
    answerPlaceholder: 'Tapez votre réponse ici',
    yourQuery: 'Votre requête',
    queryPlaceholder: 'Tapez votre requête ici',
    removeThisCache: 'Supprimez cette Annotation',
    createdAt: 'Créé à',
  },
  addModal: {
    title: 'Ajouter une réponse d\'annotation',
    queryName: 'Question',
    answerName: 'Réponse',
    answerPlaceholder: 'Tapez la réponse ici',
    queryPlaceholder: 'Tapez la requête ici',
    createNext: 'Ajoutez une autre réponse annotée',
  },
  batchModal: {
    title: 'Importation en masse',
    csvUploadTitle: 'Glissez et déposez votre fichier CSV ici, ou',
    browse: 'parcourir',
    tip: 'Le fichier CSV doit se conformer à la structure suivante :',
    question: 'question',
    answer: 'réponse',
    contentTitle: 'contenu du bloc',
    content: 'contenu',
    template: 'Téléchargez le modèle ici',
    cancel: 'Annuler',
    run: 'Exécuter le lot',
    runError: 'L\'exécution du lot a échoué',
    processing: 'Dans le traitement par lots',
    completed: 'Importation terminée',
    error: 'Erreur d\'Importation',
    ok: 'D\'accord',
  },
  errorMessage: {
    answerRequired: 'Une réponse est requise',
    queryRequired: 'La question est requise',
  },
  viewModal: {
    annotatedResponse: 'Réponse à l\'annotation',
    hitHistory: 'Historique des coups',
    hit: 'Clic',
    hits: 'Clics',
    noHitHistory: 'Aucun historique de recherche',
  },
  hitHistoryTable: {
    query: 'Requête',
    match: 'Correspondance',
    response: 'Réponse',
    source: 'Source',
    score: 'Score',
    time: 'Temps',
  },
  initSetup: {
    title: 'Réponse d\'Annotation Configuration Initiale',
    configTitle: 'Configuration de la Réponse d\'Annotation',
    confirmBtn: 'Enregistrer & Activer',
    configConfirmBtn: 'Enregistrer',
  },
  embeddingModelSwitchTip: 'Modèle de vectorisation de texte d\'annotation, changer de modèles entraînera une ré-intégration, ce qui entraînera des coûts supplémentaires.',
}

export default translation
