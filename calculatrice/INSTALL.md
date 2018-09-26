Projet de base React
====================

Bienvenue dans ce modèle/template de projet React !

## Première utilisation

Récupérez une copie du modèle :

``` sh
git clone git@github.com:O-clock-Hyperspace/React-modele.git
cd React-modele
```

Vous pouvez vérifier que tout fonctionne :

``` sh
yarn # installer les dépendances du projet
yarn start # compiler le projet avec Parcel
# rdv sur http://localhost:1234/
```

## Utilisation pour démarrer sur un challenge

En pratique, on peut se baser sur React-modele pour démarrer un *nouveau* projet, ou travailler sur un challenge.

Il s'agit essentiellement de copier/coller les parties intéressantes du modèle dans le dossier du projet/challenge, sans écraser d'éventuels fichiers spécifiques :

``` sh
# Exemple : après avoir cloné un challenge dans le dossier challenge/ :
cd challenge
cp ../React-modele/* .      # copie des fichiers non-cachés présents à la racine du modèle
cp ../React-modele/.* .     # copie des fichiers cachés présents à la racine du modèle
cp -r ../React-modele/src . # copie du dossier src/
yarn
yarn start
```

## Configuration

### Babel (ES6/JSX -> ES5)

``` sh
yarn add --dev babel-preset-env # vocabulaire ES6 -> ES5 de base
yarn add --dev babel-plugin-transform-class-properties
yarn add --dev babel-plugin-transform-object-rest-spread
yarn add --dev babel-preset-react
yarn add react react-dom
```

* .babelrc

### ESLint

``` sh
yarn add --dev eslint eslint-config-airbnb babel-eslint
yarn add --dev eslint-import-resolver-alias
yarn add --dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

* eslintrc
* .eslintignore

### CSS (Stylus, PostCSS, Autoprefixer)

``` sh
yarn add --dev stylus postcss-modules autoprefixer stylint
```

* .stylintrc
* .postcssrc
* .browserslistrc

### Utilitaires

``` sh
yarn add --dev babel-polyfill
```
## Outils pratiques

* Extension React Dev Tools
  * [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
