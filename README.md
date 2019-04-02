# Test technique Le Hibou

Ce test technique te permettra de décrocher le saint graal des développeurs, le poste de CTO de __Le Hibou__ :octocat:!

### De quoi s'agit-il ?

Ce test vise à vérifier ta capacité à (toujours en Javascript, avec NodeJS):
- Créer des __API Rest__;
- Gérer des __bases de données MySQL__;
- Créer des __scrappeurs__;
- __Tester__ ton code;

### Le challenge :fire:

Tu vas devoir créer un scrappeur qui soit capable d'effectuer une recherche sur le site "seloger.com", récupérer les résultats de recherche, et les inscrire via une API Rest sur une base de données MySQL.
_La base de données est déjà configurée et fonctionne_.

L'API doit:
- Utiliser __Sequelize__ pour interagir avec la base de données. La connexion est déjà configurée et nous avons créé pour toi un modèle de "Flat" ("appartement" en anglais :uk:) et la migration correspondante. Libre à toi de revoir le modèle si tu veux stocker plus d'informations que celles que nous avons prévues;
- Exposer un CRUD complet permettant d'interagir avec la base de données. Tu es libre de les paramétrer comme bon te semble;
- Inutile de mettre en place une authentification (tu peux le faire si tu le souhaites), ce n'est pas exigé;

Le scrappeur doit:
- Se relancer automatiquement à intervalles réguliers (paramétrables);
- Effectuer sa recherche sur "seloger.com" à partir de variables d'environnement modulables (lieu, budget, surface, etc. sens-toi libre de définir autant de variables que tu le souhaites :smile:);
- Il ajoute toute nouvelle annonce dans la base de données;
- Il update les annonces existantes si nécessaire;
- Il supprime les annonces qui n'apparaissent plus dans la recherche;

Ton code devra comporter des __tests unitaires__. Nous te laissons le choix des tests que tu juges nécessaires d'implémenter, notre philosophie est que le test à outrance est contre productif. Nous utilisons __Jest__ comme framework de test, tu es libre d'en utiliser un autre si tu le souhaites, mais nous t'encourageons à utiliser nos outils :wink:.

### L'environnement

Nous avons pré-créé un template pour le projet, qui se compose de 3 containers Docker (une base de données MySQL, une API, et un bot). Tu n'es pas obligé de l'utiliser, même si c'est vivement recommandé (il a été créé pour t'éviter de perdre du temps :wink:). Aucune compétence en Docker n'est nécessaire pour le poste (même si c'est un plus!), et tu n'as normalement pas besoin d'être un expert en Docker pour utiliser ce template.

La configuration de la base de données se trouve dans "api/db.env".

### Installation

Après avoir installé docker et docker-compose il suffit de lancer (depuis la racine du projet):

```
docker-compose -f docker-compose.yml up -d
```

### Bonus

Si ce test n'est pas suffisant pour nous exposer l'étendu de ton talent, n'hésite pas à ajouter:
- Une interface web (dans un nouveau container bien-sûr :wink:)
- Une authentification pour l'API

### Bonne chance!
