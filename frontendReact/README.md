<div align="center">
<p>Projet OpenClassRoom</p>
</div>
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1>Wealth Health</h1>
  <a href="https://github.com/Erik-42">
	<img src="./frontendReact/src/assets/img/logo/logo-wealthhealth-nobackground.svg" alt="Logo Wealth Health" width="300" height="200">
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
	<li> <a href="#about-the-project">About The Project</a></li>
	<li><a href="#built-with">Built With</a></li>
	<li><a href="#testez-le-projet">Testez le projet</a></li>
	<li><a href="#license">License</a></li>
	<li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![wakatime repo](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_14-wealthhealth.svg)](https://wakatime.com/badge/github/Erik-42/openclassroom-projet_14-wealthhealth)

</div>
Faites passer une librairie jQuery vers React
<p></p>
L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables

Voici un récapitulatif des principales tâches :

Il faut mettre à jour HRnet et le convertir en React !
-Convertir l'ensemble du projet HRNet en React.
-Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux importer depuis des libraires existantes si tu manques de temps.
-Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.
il faudra faire des tests de performance et fournir des rapports.

### Le projet se décompose en deux phases :

## Phase 1:

Passé l'application HR-Net à 100% React et 0% jQuery

Voici le <a href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end">repo HRnet</a> actuel. N'oublie pas que toute l'application HRNet doit être convertie en React :

Tu devras faire une nouvelle version des pages "Create Employee" et "Employee List" avec React.

Tu devras ajouter un système de gestion d'état
(la version actuelle utilise un stockage local).

Tu dois aussi t'assurer que tout est cohérent au niveau du style.

Pour cela, tu n'es pas obligé de refaire le design de l'application, mais si tu veux changer le style pour quelque chose de plus moderne, tu es le bienvenu.

Si tu as le temps, tu peux tester le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires.

## Phase 2:

### Conversion des plugins

Pour les plugins, il faut consulter l'onglet Issues pour avoir plus de contexte sur les problèmes que les utilisateurs rencontrent avec les plugins jQuery existants : <a href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1">issue sur les sélecteurs de date</>, <a href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3">issues de fenêtres modales</a>, <a href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4">issue sur menus déroulants</a>, et <a href="https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2">issue sur les tableaux</a>.

Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis :

<a href="https://github.com/xdan/datetimepicker">Plugin de sélection de date</a>
<br>
<a href="https://github.com/kylefox/jquery-modal">Plugin de fenêtre modale - jQuery.modal.js</a>
<br>
<a href="https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js">Menus déroulants</a>
<br>
<a href="https://github.com/DataTables/DataTables">Plugin pour les tables de données</a>

De plus, lors de la conversion d'un plugin jQuery en un composant React, il faut garder à l'esprit de ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin. Par exemple, si un plugin jQuery inclut du code AJAX, tu n’as pas besoin de le convertir. Si tu convertis un plugin jQuery pour une fenêtre modale, concentre-toi sur la création d'un composant React qui fonctionne comme une fenêtre modale, et rien d'autre.

Nous voulons également mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) pour nous assurer que la conversion de l'application à React améliore effectivement les performances. Pour cela, fais bien des audits de performance Lighthouse. Pour comparer, tu devras en faire un pour l'application jQuery HRnet actuelle, puis un autre une fois que l'application et le plugin jQuery choisi seront convertis en React.

Penses bien à faire un build de l'application avant de faire ton audit. Ça impactera grandement les performances de ton application.

Une fois que l'application HRnet en React fonctionne, tu peux publier le composant React sur npm sous forme de package et partager le lien pour que nous puissions l'utiliser si nécessaire. Si tu as du mal avec npm, tu peux utiliser les paquets GitHub comme alternative.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built with

<p> </p>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=html&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=css&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=sass&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/sass.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=javascript&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=reactjs&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'> </a>
<a href=https://github.com/Erik-42?tab=repositories&q=&type=&language=redux&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/redux.svg'> </a>
<a href= https://github.com/Erik-42?tab=repositories&q=&type=&language=github&sort= > <img width ='32px' height='32px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg'> </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation:

<div>
<a href=https://nodejs.org>NodeJS</a> & <a href=https://github.com/coreybutler/nvm-windows>NVM</a>
</div>
<div>
<a href=https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm>le package développé pour ce projet</a> & <a href=https://www.npmjs.com/package/modaleerik42>La modal sur npm développé pour ce projet</a>
</div>

### Frontend Dependencies:

	"@babel/register": "^7.24.6",
	"@emotion/react": "^11.13.3",
	"@emotion/styled": "^11.13.0",
	"@fontsource/manrope": "^5.0.21",
	"@fontsource/roboto": "^5.0.15",
	"@mui/icons-material": "^6.0.2",
	"@mui/material": "^6.0.2",
	"@reduxjs/toolkit": "^2.2.7",
	"@vercel/speed-insights": "^1.0.12",
	"axios": "^1.7.7",
	"babel": "^6.23.0",
	"express": "^4.21.0",
	"jsonwebtoken": "^9.0.2",
	"modaleerik42": "^1.0.4",
	"node-fetch": "^3.3.2",
	"prop-types": "^15.8.1",
	"react": "^18.3.1",
	"react-dom": "^18.3.1",
	"react-redux": "^9.1.2",
	"react-router": "^6.26.2",
	"react-router-dom": "^6.26.2",
	"redux": "^5.0.1",
	"sass": "^1.79.3",
	"shallowequal": "^1.1.0",
	"styled-components": "^6.1.13",
	"vercel": "^32.3.0"

## Launching the project

Fork the repository<br>
Clone it on your computer.

### Frontend

`npm install` command wil allow you to install the depencies.

### Available Scripts

In the project frontend directory , you can run:

`npm run preview`

Runs the app .\
Open [http://localhost:4173](http://localhost:4173) to view it in your browser.

or

`npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

================================

Si vous souhaitez exporter la structure du projet,mettez `export-file-structure.js` dans le repertoir racine et dans le terminal, lancez la commande:

`node export-file-structure.js`

================================

<a href=[text](./frontendReact/docs/Rapport-performances.pdf)>Le rapport de performance</a>

================================

## Testez le projet

Github: [https://erik-42.github.io/openclassroom-projet_14-wealthhealth/](https://erik-42.github.io/openclassroom-projet_14-wealthhealth/)

<a href='https://openclassroom-projet-14-wealthhealth-fs3dt96b5-erik42s-projects.vercel.app/'>Wealth Health en React</a>

<a href='https://erik-42.github.io/openclassroom-projet_14-wealthhealth/frontendJquery/'>Wealth Health en Jquery</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

Formation OpenClassRoom Développeur d'application - JavaScript React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<div align="center">

[![GitHub followers][github followers-shield]][github followers-url]
[![Stargazers][stars-shield]][stars-url]
[![GitHub repo][github repo-shield]][github repo-url]
[![wakatime](https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg)](https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5)

[![Github Badge][github badge-shield]][github badge-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<a href = 'https://basillecorp.dev'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/portfolio.png"/> basillecorp.dev</a>

mesen.erik@gmail.com

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./images/screenshot.png
[wakatime-shield]: https://wakatime.com/badge/user/f84d00d8-fee3-4ca3-803d-3daa3c7053a5.svg
[wakatime-url]: https://wakatime.com/@f84d00d8-fee3-4ca3-803d-3daa3c7053a5
[github badge-shield]: https://img.shields.io/badge/Github-Erik--42-155?style=for-the-badge&logo=github
[github badge-url]: https://github.com/Erik-42
[github repo-shield]: https://img.shields.io/badge/Repositories-48-blue
[github repo-url]: https://github.com/Erik-42/Erik-42?tab=repositories
[github repo file count (file type)-shield]: https://img.shields.io/github/directory-file-count/Erik-42/openclassroom-projet_14-wealthhealth
[github repo file count (file type)-url]: https://github.com/directory-file-count/Erik-42/openclassroom-projet_14-wealthhealth
[github followers-shield]: https://img.shields.io/github/followers/Erik-42
[github followers-url]: https://github.com/followers/Erik-42
[github all releases-shield]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/total
[github all releases-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/releases
[github repo size-shield]: https://img.shields.io/github/repo-size/Erik-42/openclassroom-projet_14-wealthhealth
[github repo size-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth
[contributors-shield]: https://img.shields.io/github/contributors/Erik-42/openclassroom-projet_14-wealthhealth
[contributors-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Erik-42/openclassroom-projet_14-wealthhealth
[forks-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/forks
[stars-shield]: https://img.shields.io/github/stars/Erik-42
[stars-url]: https://github.com/Erik-42?tab=stars
[issues-shield]: https://img.shields.io/github/issues-raw/Erik-42/openclassroom-projet_14-wealthhealth
[issues-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/issues
[license-shield]: https://img.shields.io/github/license/Erik-42/openclassroom-projet_14-wealthhealth
[license-url]: https://github.com/Erik-42/openclassroom-projet_14-wealthhealth/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/erik-mesen/
[html-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[html-url]: https://html.spec.whatwg.org/
[css-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[css-url]: https://www.w3.org/TR/CSS/#css
[javascript-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[javascript-url]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
