# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  # <p>

# Serveur virtuel json-server

- installez JSON Server si ce n'est pas déjà fait. Vous pouvez l'installer globalement avec npm :

```json
 npm install -g json-server
```

- Créez un fichier db.json pour définir les données de votre API fictive. Par exemple :

```json
{
	"users": [
		{
			"id": 1,
			"email": "user@example.com",
			"password": "password123"
		}
	]
}
```

- Lorsque vous lancez JSON Server, spécifiez le chemin du fichier db.json avec l'option --watch. Par exemple, si vous avez déplacé db.json dans un sous-dossier appelé data, utilisez la commande suivante :

```json
json-server --watch data/db.json
```

chemin de l'API virtuelle de ce projet:

```json
./src/mock/api/db.json
```

- Pour tester un login, vous pouvez faire une requête POST à l'endpoint /users :

```json

curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"email": "user@example.com", "password": "password123"}'
```

===============================================

# Mock Service Worker

## Étape 1 : Installer

- Installez MSW en tant que dépendance en exécutant la commande suivante dans votre projet :

```json
npm install msw@latest --save-dev
```

<div style="background-color: #000; padding: 10px; border-left: 5px solid #555;">
  <p>Si vous en avez besoin, vous pouvez également installer MSW à partir d'un CDN .
</p>
</div>

## Étape 2 : Décrire

- décrivez le réseau à l'aide de gestionnaires de requêtes (par exemple http.get(), graphql.query()). Un gestionnaire de requêtes est chargé d' intercepter une requête et de gérer sa réponse , qui peut être une réponse simulée, une combinaison de la réponse réelle et d'une réponse simulée, ou rien, si vous souhaitez uniquement surveiller le trafic sans l'affecter.

Dans ce didacticiel, définissons un seul gestionnaire de requêtes HTTP pour une GET https://example.com/userrequête et répondons-y avec une réponse JSON simulée.

```javascript
// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
	// Intercept "GET https://example.com/user" requests...
	http.get("https://example.com/user", () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json({
			id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
			firstName: "John",
			lastName: "Maverick",
		});
	}),
];
```

<div style="background-color: #000; padding: 10px; border-left: 5px solid #555;">
  <p>Commencez petit avec un seul handlers.jsmodule contenant la description complète du réseau. Avec le temps, vous pourrez restructurer vos gestionnaires et apprendre à les remplacer lors de l'exécution .
</p>
</div>
<p></p>

Vous pouvez décrire différentes API, comme REST ou GraphQL, y compris en même temps dans le même handlerstableau.

## Étape 3 : Intégrer

-MSW s'intègre à tous les frameworks, bibliothèques de requêtes et autres outils car il s'applique au niveau de l'environnement, ce qui signifie que vous n'avez qu'à décider si vous souhaitez l'utiliser dans le navigateur ou dans un processus Node.js (ou les deux). Vous utilisez toujours (ré)utilisez les mêmes gestionnaires de requêtes quel que soit l'environnement dans lequel vous vous trouvez.

Pour ce tutoriel, intégrons MSW dans un processus Node.js simple en créant un module d'intégration Node.js appelénode.js :

```javascript
// src/mocks/node.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
```

<div style="background-color: #000; padding: 10px; border-left: 5px solid #555;">
  <p>Nous vous recommandons de créer des modules d'intégration dépendants de l'environnement, comme node.jset browser.js, afin de pouvoir réutiliser les mêmes intégrations dans différents outils. Tout outil JavaScript s'exécute soit dans le navigateur (navigateurs réels, Playwright, Cypress, Storybook) soit dans Node.js (Vitest, Jest, React Native). Intégrez la bonne intégration en fonction de l'environnement de votre outil, et vous êtes prêt.
</p>
</div>
<p></p>
Le node.jsmodule d'intégration que nous avons créé configure MSW pour qu'il s'exécute dans n'importe quel processus Node.js, mais ne le démarre pas encore réellement . Pour démarrer l'interception de la requête, vous devez appeler server.listen()votre processus Node.js :
<p></p>

```javascript
// src/index.js
import { server } from "./mocks/node";

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
	const response = await fetch("https://example.com/user");
	const user = await response.json();
	console.log(user);
}

app();
```

<p></p>

Vous pouvez également démarrer MSW sous certaines conditions, en fonction de process.env.NODE_ENVcertains critères ou de tout autre critère.

- L'exécution de l'application imprimera désormais la réponse simulée sans réellement effectuer de demande réseau :
<p></p>

```javascript
node ./src/index.js
{
  id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  firstName: 'John',
  lastName: 'Maverick'
}
```

### Exemples

Dans le référentiel ci-dessous, vous pouvez trouver des exemples fonctionnels, complets et minimalistes d'utilisation de Mock Service Worker avec des outils tels que Jest, Vitest, Cypress, Playwright, Angular, Svelte, Remix et autres. Utilisez-les comme référence chaque fois que vous intégrez MSW à ces outils.

https://github.com/mswjs/examples

Transformez chaque exemple d’utilisation en un référentiel de reproduction si vous rencontrez un problème !

# JWT token simulé

Pour tester la connexion sans avoir encore de backend, vous pouvez générer un token virtuel localement lors de la connexion pour simuler le comportement d'une authentification avec un token JWT. Voici une approche simple :

Créer un token JWT simulé : Utilisez la bibliothèque jsonwebtoken pour générer un token sur le frontend lorsque l'utilisateur soumet ses identifiants de connexion. Ce token ne sera pas validé par un serveur, mais servira à tester les fonctionnalités de connexion et autorisation.

Code de génération du token :

```javascript
import jwt from "jsonwebtoken";

const mockLogin = (username, password) => {
	// Simuler une réponse de connexion avec un token
	const token = jwt.sign(
		{ username: username, role: "user" }, // Payload
		"secretkey", // Clé secrète pour signer le token
		{ expiresIn: "1h" } // Expiration du token
	);

	// Stocker le token localement (par exemple, dans localStorage)
	localStorage.setItem("authToken", token);
	return token;
};

// Appeler la fonction lors de la connexion
const handleLogin = (username, password) => {
	const token = mockLogin(username, password);
	console.log("Token généré:", token);
};
```

Utilisation du token : Vous pourrez ensuite utiliser ce token généré localement pour simuler des actions authentifiées comme accéder à des routes protégées dans votre application React.

Cela vous permet de tester la logique de connexion et de gérer des tokens sans besoin d'un backend pour le moment. Une fois le backend prêt, vous remplacerez cette logique par un appel réel à l'API d'authentification.

## install

```json
npm install jsonwebtoken
```

Usage
jwt.sign(charge utile, secretOrPrivateKey, [options, rappel])
(Asynchrone) Si un rappel est fourni, le rappel est appelé avec le errou le JWT.

(Synchrone) Renvoie le JsonWebToken sous forme de chaîne

payloadpourrait être un objet littéral, un tampon ou une chaîne représentant un JSON valide.

Veuillez noter que cette exp affirmation ou toute autre affirmation n'est définie que si la charge utile est un littéral d'objet. Les charges utiles de type tampon ou chaîne ne sont pas vérifiées pour la validité JSON.

S'il payloadne s'agit pas d'un tampon ou d'une chaîne, il sera contraint en chaîne à l'aide de JSON.stringify.

secretOrPrivateKeyest une chaîne (encodée en UTF-8), un tampon, un objet ou un KeyObject contenant soit le secret pour les algorithmes HMAC, soit la clé privée encodée en PEM pour RSA et ECDSA. Dans le cas d'une clé privée avec phrase de passe, un objet { key, passphrase }peut être utilisé (sur la base de la documentation cryptographique ), dans ce cas, assurez-vous de passer l' algorithmoption. Lors de la signature avec des algorithmes RSA, la longueur minimale du module est de 2048, sauf lorsque l'option allowInsecureKeySizes est définie sur true. Les clés privées inférieures à cette taille seront rejetées avec une erreur.

options:

algorithm(défaut: HS256)
expiresIn:exprimé en secondes ou une chaîne décrivant un intervalle de temps vercel/ms .
Par exemple : 60, "2 days", "10h", "7d". Une valeur numérique est interprétée comme un nombre de secondes. Si vous utilisez une chaîne, assurez-vous de fournir les unités de temps (jours, heures, etc.), sinon l'unité milliseconde est utilisée par défaut ( "120"est égale à "120ms").

notBefore:exprimé en secondes ou une chaîne décrivant un intervalle de temps vercel/ms .
Par exemple : 60, "2 days", "10h", "7d". Une valeur numérique est interprétée comme un nombre de secondes. Si vous utilisez une chaîne, assurez-vous de fournir les unités de temps (jours, heures, etc.), sinon l'unité milliseconde est utilisée par défaut ( "120"est égale à "120ms").

audience
issuer
jwtid
subject
noTimestamp
header
keyid
mutatePayload: si la valeur est true, la fonction sign modifiera directement l'objet payload. Ceci est utile si vous avez besoin d'une référence brute à la charge utile après que des revendications lui ont été appliquées mais avant qu'elle n'ait été codée dans un jeton.
allowInsecureKeySizes: si vrai, permet aux clés privées avec un module inférieur à 2048 d'être utilisées pour RSA
allowInvalidAsymmetricKeyTypes: si vrai, autorise les clés asymétriques qui ne correspondent pas à l'algorithme spécifié. Cette option est destinée uniquement à la compatibilité ascendante et doit être évitée.
Il n'existe aucune valeur par défaut pour expiresIn, notBefore, audience, subject, issuer. Ces revendications peuvent également être fournies directement dans la charge utile avec exp, nbf, aud, subet issrespectivement, mais vous ne pouvez pas les inclure aux deux endroits.

N'oubliez pas que exp, nbfet iatsont NumericDate , voir Expiration du jeton associé (exp claim)

L'en-tête peut être personnalisé via l' options.headerobjet.

Les jwts générés incluront une iatréclamation (issued at) par défaut, sauf si noTimestampelle est spécifiée. Si iatelle est insérée dans la charge utile, elle sera utilisée à la place de l'horodatage réel pour calculer d'autres éléments, comme expun intervalle de temps donné dans options.expiresIn.

Signe synchrone par défaut (HMAC SHA256)

var jwt = require ( 'jsonwebtoken' ) ;
var jeton = jwt . signe ( { foo : 'bar' } , 'chut' ) ;
Signe synchrone avec RSA SHA256

// signer avec RSA SHA256
var privateKey = fs . readFileSync ( 'private.key' ) ;
var token = jwt . sign ( { foo : 'bar' } , privateKey , { algorithm : 'RS256' } ) ;
Signer de manière asynchrone

jwt . sign ( { foo : 'bar' } , privateKey , { algorithme : 'RS256' } , fonction ( err , jeton ) {
console . log ( jeton ) ;
} ) ;
Antidater un JWT de 30 secondes

var older_token = jwt . sign ( { foo : 'bar' , iat : Math . floor ( Date . now ( ) / 1000 ) - 30 } , 'chut' ) ;
Expiration du jeton (réclamation d'exp)

Expiration du jeton (réclamation d'exp)
La norme JWT définit une expdemande d'expiration. L'expiration est représentée par une date numérique :

Valeur numérique JSON représentant le nombre de secondes depuis 1970-01-01T00:00:00Z UTC jusqu'à la date/heure UTC spécifiée, en ignorant les secondes intercalaires. Cela équivaut à la définition de la norme IEEE Std 1003.1, édition 2013 [POSIX.1] « Secondes depuis l'époque », dans laquelle chaque jour correspond exactement à 86 400 secondes, à ceci près que des valeurs non entières peuvent être représentées. Voir la RFC 3339 [RFC3339] pour plus de détails concernant les dates/heures en général et UTC en particulier.

Cela signifie que le expchamp doit contenir le nombre de secondes depuis l'époque.

Signature d'un token avec 1 heure d'expiration :

jwt . sign ( {
exp : Math . floor ( Date . now ( ) / 1000 ) + ( 60 \* 60 ) ,
données : 'foobar'
} , 'secret' ) ;
Une autre façon de générer un jeton comme celui-ci avec cette bibliothèque est :

jwt . sign ( {
données : 'foobar'
} , 'secret' , { expiresIn : 60 \* 60 } ) ;

//ou encore mieux :

jwt . sign ( {
données : 'foobar'
} , 'secret' , { expiresIn : '1h' } ) ;

=================================

https://fullstackopen.com/en/part4/token_authentication

Authentification par jeton
Les utilisateurs doivent pouvoir se connecter à notre application, et lorsqu'un utilisateur est connecté, ses informations utilisateur doivent être automatiquement jointes à toutes les nouvelles notes qu'il crée.

Nous allons maintenant implémenter la prise en charge de l’authentification basée sur des jetons sur le backend.

Les principes de l’authentification basée sur des jetons sont représentés dans le diagramme de séquence suivant :

diagramme de séquence de l'authentification par jeton
L'utilisateur commence par se connecter à l'aide d'un formulaire de connexion implémenté avec React

Nous ajouterons le formulaire de connexion au frontend dans la partie 5
Cela amène le code React à envoyer le nom d'utilisateur et le mot de passe à l'adresse du serveur /api/login sous la forme d'une requête HTTP POST.
Si le nom d'utilisateur et le mot de passe sont corrects, le serveur génère un jeton qui identifie d'une manière ou d'une autre l'utilisateur connecté.

Le jeton est signé numériquement, ce qui le rend impossible à falsifier (par des moyens cryptographiques)
Le backend répond avec un code d’état indiquant que l’opération a réussi et renvoie le jeton avec la réponse.
Le navigateur enregistre le jeton, par exemple dans l'état d'une application React.
Lorsque l'utilisateur crée une nouvelle note (ou effectue une autre opération nécessitant une identification), le code React envoie le jeton au serveur avec la requête.
Le serveur utilise le jeton pour identifier l'utilisateur
Commençons d'abord par implémenter la fonctionnalité de connexion. Installez la bibliothèque jsonwebtoken , qui nous permet de générer des jetons Web JSON .

npm install jsonwebtoken
copie
Le code pour la fonctionnalité de connexion va dans le fichier controllers/login.js .

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
const { username, password } = request.body

const user = await User.findOne({ username })
const passwordCorrect = user === null
? false
: await bcrypt.compare(password, user.passwordHash)

if (!(user && passwordCorrect)) {
return response.status(401).json({
error: 'invalid username or password'
})
}

const userForToken = {
username: user.username,
id: user.\_id,
}

const token = jwt.sign(userForToken, process.env.SECRET)

response
.status(200)
.send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter
copie
Le code commence par rechercher l'utilisateur dans la base de données par le nom d'utilisateur attaché à la demande.

const user = await User.findOne({ username })
copie
Ensuite, il vérifie le mot de passe , également joint à la demande.

const passwordCorrect = user === null
? false
: await bcrypt.compare(password, user.passwordHash)
copie
Étant donné que les mots de passe eux-mêmes ne sont pas enregistrés dans la base de données, mais que les hachages sont calculés à partir des mots de passe, la méthode bcrypt.compare est utilisée pour vérifier si le mot de passe est correct :

await bcrypt.compare(password, user.passwordHash)
copie
Si l'utilisateur n'est pas trouvé ou si le mot de passe est incorrect, la requête reçoit le code d'état 401 non autorisé . La raison de l'échec est expliquée dans le corps de la réponse.

if (!(user && passwordCorrect)) {
return response.status(401).json({
error: 'invalid username or password'
})
}
copie
Si le mot de passe est correct, un jeton est créé avec la méthode jwt.sign . Le jeton contient le nom d'utilisateur et l'identifiant de l'utilisateur sous une forme signée numériquement.

const userForToken = {
username: user.username,
id: user.\_id,
}

const token = jwt.sign(userForToken, process.env.SECRET)
copie
Le jeton a été signé numériquement à l'aide d'une chaîne de la variable d'environnement SECRET comme secret . La signature numérique garantit que seules les parties qui connaissent le secret peuvent générer un jeton valide. La valeur de la variable d'environnement doit être définie dans le fichier .env .

Une demande réussie reçoit une réponse avec le code d'état 200 OK . Le jeton généré et le nom d'utilisateur de l'utilisateur sont renvoyés dans le corps de la réponse.

response
.status(200)
.send({ token, username: user.username, name: user.name })
copie
Il ne reste plus qu'à ajouter le code de connexion à l'application en ajoutant le nouveau routeur à app.js .

const loginRouter = require('./controllers/login')

//...

app.use('/api/login', loginRouter)
copie
Essayons de nous connecter à l'aide du client REST de VS Code :

post de repos vscode avec nom d'utilisateur/mot de passe
Cela ne fonctionne pas. Le message suivant s'affiche sur la console :

(node:32911) UnhandledPromiseRejectionWarning: Error: secretOrPrivateKey must have a value
at Object.module.exports [as sign] (/Users/mluukkai/opetus/\_2019fullstack-koodit/osa3/notes-backend/node_modules/jsonwebtoken/sign.js:101:20)
at loginRouter.post (/Users/mluukkai/opetus/\_2019fullstack-koodit/osa3/notes-backend/controllers/login.js:26:21)
(node:32911) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
copie
La commande jwt.sign(userForToken, process.env.SECRET) échoue. Nous avons oublié de définir une valeur pour la variable d'environnement SECRET . Il peut s'agir de n'importe quelle chaîne. Lorsque nous définissons la valeur dans le fichier .env (et redémarrons le serveur), la connexion fonctionne.

Une connexion réussie renvoie les détails de l'utilisateur et le jeton :

vs code rest réponse montrant les détails et le jeton
Un nom d'utilisateur ou un mot de passe incorrect renvoie un message d'erreur et le code d'état approprié :

vs code rest réponse pour informations de connexion incorrectes
Limiter la création de nouvelles notes aux utilisateurs connectés
Modifions la création de nouvelles notes afin qu'elle ne soit possible que si la demande de publication est associée à un jeton valide. La note est ensuite enregistrée dans la liste de notes de l'utilisateur identifié par le jeton.

Il existe plusieurs façons d'envoyer le jeton du navigateur au serveur. Nous utiliserons l' en-tête Authorization . L'en-tête indique également quel schéma d'authentification est utilisé. Cela peut être nécessaire si le serveur propose plusieurs façons de s'authentifier. L'identification du schéma indique au serveur comment les informations d'identification jointes doivent être interprétées.

Le schéma Bearer est adapté à nos besoins.

En pratique, cela signifie que si le jeton est, par exemple, la chaîne eyJhbGciOiJIUzI1NiIsInR5c2VybmFtZSI6Im1sdXVra2FpIiwiaW , l'en-tête Authorization aura la valeur :

Porteur eyJhbGciOiJIUzI1NiIsInR5c2VybmFtZSI6Im1sdXVra2FpIiwiaW

copie
La création de nouvelles notes changera comme suit ( controllers/notes.js ) :

const jwt = require('jsonwebtoken')

// ...
const getTokenFrom = request => {
const authorization = request.get('authorization')
if (authorization && authorization.startsWith('Bearer ')) {
return authorization.replace('Bearer ', '')
}
return null
}

notesRouter.post('/', async (request, response) => {
const body = request.body
const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
if (!decodedToken.id) {
return response.status(401).json({ error: 'token invalid' })
}
const user = await User.findById(decodedToken.id)

const note = new Note({
content: body.content,
important: body.important === undefined ? false : body.important,
user: user.\_id
})

const savedNote = await note.save()
user.notes = user.notes.concat(savedNote.\_id)
await user.save()

response.json(savedNote)
})
copie
La fonction d'assistance getTokenFrom isole le jeton de l' en-tête d'autorisation . La validité du jeton est vérifiée avec jwt.verify . La méthode décode également le jeton ou renvoie l'objet sur lequel le jeton est basé.

const decodedToken = jwt.verify(token, process.env.SECRET)
copie
Si le jeton est manquant ou non valide, l'exception JsonWebTokenError est générée. Nous devons étendre le middleware de gestion des erreurs pour prendre en charge ce cas particulier :

const errorHandler = (error, request, response, next) => {
if (error.name === 'CastError') {
return response.status(400).send({ error: 'malformatted id' })
} else if (error.name === 'ValidationError') {
return response.status(400).json({ error: error.message })
} else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
return response.status(400).json({ error: 'expected `username` to be unique' })
} else if (error.name === 'JsonWebTokenError') {
return response.status(401).json({ error: 'token invalid' })
}

next(error)
}
copie
L'objet décodé à partir du jeton contient les champs nom d'utilisateur et identifiant , qui indiquent au serveur qui a effectué la demande.

Si l'objet décodé à partir du jeton ne contient pas l'identité de l'utilisateur ( decodedToken.id n'est pas défini), le code d'état d'erreur 401 non autorisé est renvoyé et la raison de l'échec est expliquée dans le corps de la réponse.

if (!decodedToken.id) {
return response.status(401).json({
error: 'token invalid'
})
}
copie
Lorsque l’identité de l’auteur de la demande est résolue, l’exécution continue comme avant.

Une nouvelle note peut désormais être créée à l'aide de Postman si l' en-tête d'autorisation reçoit la valeur correcte, la chaîne Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ , où la deuxième valeur est le jeton renvoyé par l' opération de connexion .

En utilisant Postman, cela ressemble à ceci :

facteur ajoutant un jeton porteur
et avec le client REST de Visual Studio Code

exemple d'ajout d'un jeton porteur dans vscode
Le code d'application actuel peut être trouvé sur GitHub , branche part4-9 .

Si l'application possède plusieurs interfaces nécessitant une identification, la validation de JWT doit être séparée dans son propre middleware. Une bibliothèque existante comme express-jwt peut également être utilisée.

Problèmes liés à l'authentification par jeton
L'authentification par jeton est assez simple à mettre en œuvre, mais elle comporte un problème. Une fois que l'utilisateur de l'API, par exemple une application React, obtient un jeton, l'API a une confiance aveugle envers le détenteur du jeton. Que se passe-t-il si les droits d'accès du détenteur du jeton doivent être révoqués ?

Il existe deux solutions au problème. La plus simple consiste à limiter la durée de validité d'un jeton :

loginRouter.post('/', async (request, response) => {
const { username, password } = request.body

const user = await User.findOne({ username })
const passwordCorrect = user === null
? false
: await bcrypt.compare(password, user.passwordHash)

if (!(user && passwordCorrect)) {
return response.status(401).json({
error: 'invalid username or password'
})
}

const userForToken = {
username: user.username,
id: user.\_id,
}

// token expires in 60*60 seconds, that is, in one hour
const token = jwt.sign(
userForToken,
process.env.SECRET,
{ expiresIn: 60*60 }
)

response
.status(200)
.send({ token, username: user.username, name: user.name })
})
copie
Une fois le jeton expiré, l'application cliente doit obtenir un nouveau jeton. En général, cela se produit en forçant l'utilisateur à se reconnecter à l'application.

Le middleware de gestion des erreurs doit être étendu pour générer une erreur appropriée dans le cas d'un jeton expiré :

const errorHandler = (error, request, response, next) => {
logger.error(error.message)

if (error.name === 'CastError') {
return response.status(400).send({ error: 'malformatted id' })
} else if (error.name === 'ValidationError') {
return response.status(400).json({ error: error.message })
} else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
return response.status(400).json({
error: 'expected `username` to be unique'
})
} else if (error.name === 'JsonWebTokenError') {
return response.status(401).json({
error: 'invalid token'
})
} else if (error.name === 'TokenExpiredError') {
return response.status(401).json({
error: 'token expired'
})
}

next(error)
}
copie
Plus le délai d'expiration est court, plus la solution est sûre. Ainsi, si le jeton tombe entre de mauvaises mains ou si l'accès de l'utilisateur au système doit être révoqué, le jeton n'est utilisable que pendant une durée limitée. D'un autre côté, un délai d'expiration court peut entraîner des difficultés pour l'utilisateur, qui doit se connecter au système plus fréquemment.

L'autre solution consiste à enregistrer les informations sur chaque token dans la base de données principale et à vérifier pour chaque requête API si les droits d'accès correspondant aux tokens sont toujours valides. Avec ce schéma, les droits d'accès peuvent être révoqués à tout moment. Ce type de solution est souvent appelé session côté serveur .

L'aspect négatif des sessions côté serveur est la complexité accrue du backend et également l'effet sur les performances puisque la validité du jeton doit être vérifiée pour chaque demande d'API à la base de données. L'accès à la base de données est considérablement plus lent que la vérification de la validité du jeton lui-même. C'est pourquoi il est assez courant d'enregistrer la session correspondant à un jeton dans une base de données clé-valeur telle que Redis , qui est limitée en fonctionnalités par rapport à MongoDB ou à une base de données relationnelle, par exemple, mais extrêmement rapide dans certains scénarios d'utilisation.

Lorsque des sessions côté serveur sont utilisées, le jeton est souvent simplement une chaîne aléatoire, qui n'inclut aucune information sur l'utilisateur, comme c'est souvent le cas lorsque des jetons jwt sont utilisés. Pour chaque requête API, le serveur récupère les informations pertinentes sur l'identité de l'utilisateur dans la base de données. Il est également assez courant qu'au lieu d'utiliser l'en-tête d'autorisation, des cookies soient utilisés comme mécanisme de transfert du jeton entre le client et le serveur.

Notes de fin
De nombreuses modifications ont été apportées au code, ce qui a entraîné un problème typique d'un projet logiciel au rythme rapide : la plupart des tests sont cassés. Comme cette partie du cours est déjà bourrée de nouvelles informations, nous laisserons la correction des tests à un exercice non obligatoire.

Les noms d'utilisateur, les mots de passe et les applications utilisant l'authentification par jeton doivent toujours être utilisés via HTTPS . Nous pourrions utiliser un serveur HTTPS Node dans notre application à la place du serveur HTTP (cela nécessite plus de configuration). D'autre part, la version de production de notre application est dans Fly.io, donc notre application reste sécurisée : Fly.io achemine tout le trafic entre un navigateur et le serveur Fly.io via HTTPS.

Nous allons implémenter la connexion au frontend dans la partie suivante .

REMARQUE : à ce stade, dans l’application de notes déployée, il est prévu que la fonctionnalité de création d’une note cesse de fonctionner, car la fonctionnalité de connexion au backend n’est pas encore liée au frontend.

Exercices 4.15.-4.23.
