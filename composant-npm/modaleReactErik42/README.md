# ModaleErik42

Plugin du projet 14 Wealth Health - HR-Net "Faites passer une librairie jQuery vers React" OpenClassrooms.

## How to install ?

```cmd
npm i modalereacterik42
```

## How to use ?

1. Importez le plugin dans votre projet:

```javascript
import ModaleErik42 from "modalereacterik42";
```

2. Le state :

```javascript
const [displayModale, setDisplayModale] = useState(false);
```

3. Le return :

```javascript
<ModaleErik42
	key={modaleReset}
	id="id-modale"
	showModale={displayModale}
	closeModale={() => setDisplayModale(false)}
	parameter={modalParameter}
	message="votre message"
/>
```

## Customize you modal

1. paramètres de votre composant :

```javascript
const modaleParameter = {
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
