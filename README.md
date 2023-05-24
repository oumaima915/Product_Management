# productManagement
Les technologies et outils utilisés:
Nodejs 
Postman
Mongodb
Vscode

1-Définir la structure de base :
Création le fichier de base app.js Création deux repertoires models et routers  
Le fichier app.js pour configurer Express et mongoDb et pour configurer les routes et le path des apis pour les produits, categories et utilisateurs.
 
2.Définir les modèles de données :
Dans le répertoire models, on a créer les fichiers product.js, category.js et user.js pour définir les modèles de données correspondants en utilisant Mongoose. Définir les schémas, les champs et les relations entre les entités.

 3.Définir les routes
 Dans le fichier routes.js, définir les routes pour les opérations CRUD (Get, Post, Update, Delete) sur les produits, les catégories et les utilisateur.

4.Intégrer MongoDB :
connexion à MongoDB Atlas.
Création cluster en  MongoDB Atlas en utilisant la chaîne de connexion fournie par MongoDB Atlas.

Utilisation Mongoose pour créer une connexion à la base de données dans le fichier app.js en utilisant la méthode mongoose.connect(process.env.CONNECTION_STRING,{
        dbName:'eshop-database'})

Utilisation de  la connexion établie pour interagir avec la base de données dans vos les modèles définis.

5.Test et validation:
Test les API en utilisant l'outils  Postman  pour envoyer des requêtes HTTP et vérifier les réponses.
Exécutez l'application en exécutant la commande npm start dans le terminal.
