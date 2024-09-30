import React, { useState } from "react";
import ModaleErik42 from "./components/modaleErik42/modaleErik42";

export default function ModaleErik({ greetee }) {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => setIsShow(!isShow);

  return (
    <div>
      <div>{greetee}</div>
      <ModaleErik42 showModale={isShow} closeModale={toggleModal} />
      <button onClick={toggleModal}>Valider</button>
    </div>
  );
}
