# ModaleErik42

Plugin du projet 14 Wealth Health - HR-Net "Faites passer une librairie jQuery vers React" OpenClassrooms.

## How to install ?

```cmd
npm install modaleerik42
```

## How to use ?

1. Importez le plugin dans votre projet:

```javascript
import ModaleErik42 from "modaleerik42";
```
```javascript
<ModaleErik42
    showModale={showModal}
    closeModale={handleClose}
    parameter={{ backgroundColor: 'white' }}
    message="Votre message ici"
/>
```
#### Accessoires
```json
showModale(booléen) : Contrôle la visibilité de la modale.

closeModale(fonction) : Fonction permettant de fermer la modale.

parameter(objet) : Objet de style pour personnaliser l'apparence modale.

message(string) : Message à afficher à l'intérieur de la modale.
```

2. Le state :

```javascript
const [showModal, setShowModal] = useState(false);

const handleClose = () => {
    setShowModal(false);
};
```

3. Le return :

```javascript
<>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <ModaleErik42
            showModale={showModal}
            closeModale={handleClose}
            parameter={{ backgroundColor: 'lightgrey' }}
            message="Employé créé avec succès!"
        />
    </>
```

## Customize you modal

1. paramètres de votre composant :

```javascript
const parameter = {
	backgroundColor: "",
	borderRadius: "",
	boxShadow: "",
	color: "",
	fontSize: "",
	height: "",
	padding: "",
	width: "",
};
```

```json
"repository": {
		"type": "git",
		"url": "git+https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm.git"
	},
	"bugs": {
		"url": "https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm/issues"
	},
	"homepage": "https://github.com/Erik-42/openclassroom-projet_14-wealthhealth-npm#readme"
```