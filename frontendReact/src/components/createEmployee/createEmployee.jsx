import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "shallowequal";
import styles from "./createEmployee.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";
import stateData from "../../assets/data/states.json";
import countryData from "../../assets/data/country.json";
import jobData from "../../assets/data/job.json";
import departmentData from "../../assets/data/department.json";
import Dropdown from "../dropdown/dropdown";
import EmployeeInfo from "../employeeInfo/employeeInfo";
import ModaleErik42 from "modaleerik42";

// Fonction pour gérer les modifications de fichiers (image d'avatar)
function handleFileChange(e, setEmployee) {
  const file = e.target.files[0];
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner un fichier image valide.(.jpg, .png, .gif");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setEmployee((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  }
}

// Fonction pour gérer la soumission de formulaire
function handleSubmit(e, employee, onAddEmployee, setEmployee) {
  e.preventDefault();
  onAddEmployee(employee);
  // Reset form
  setEmployee({
    avatar: "",
    firstName: "",
    lastName: "",
    birthday: "",
    street: "",
    city: "",
    state: stateData[0]?.abbreviation || "",
    zipCode: "",
    country: countryData[0]?.abbreviation || "",
    department: "",
    function: "",
    startWork: "",
    endWork: "",
  });
}

// Fonction de réinitialisation du formulaire d'employé
function handleReset(setEmployee) {
  setEmployee({
    avatar: "",
    firstName: "",
    lastName: "",
    birthday: "",
    street: "",
    city: "",
    state: stateData[0]?.abbreviation || "",
    zipCode: "",
    country: countryData[0]?.abbreviation || "",
    department: "",
    function: "",
    startWork: "",
    endWork: "",
  });
}

// Fonction permettant de gérer les modifications d'entrée
function handleChange(e, setEmployee) {
  const { name, value } = e.target;
  setEmployee((prev) => ({ ...prev, [name]: value }));
}

// Gestion des modifications de la liste déroulante
const handleDropdownChange = (value, field, setEmployee) => {
  setEmployee((prev) => ({ ...prev, [field]: value }));
};

// // Fonction pour confirmer l'archivage
// function confirmArchive(showArchiveModal) {
//   setShowArchiveModal(false);
// }

// // Fonction pour annuler l'archivage
// function cancelArchive(showArchiveModal) {
//   setShowArchiveModal(false);
// }

export default function CreateEmployee({
  // eslint-disable-next-line react/prop-types
  onAddEmployee = () => {},
  onCancel = () => {},
}) {
  const [showModale, setShowModale] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showEmployeeInfo, setShowEmployeeInfo] = useState(false);
  const fileInputRef = useRef(null);
  const selectedEmployee = useSelector(
    (state) => state.employee.selectedEmployee
  );
  const [employee, setEmployee] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    birthday: "",
    street: "",
    city: "",
    state: stateData[0]?.abbreviation || "",
    zipCode: "",
    country: countryData[0]?.abbreviation || "",
    department: "",
    function: "",
    startWork: "",
    endWork: "",
  });

  // Gestion de l'ouverture/fermeture modale
  const handleValidSubmit = () => {
    setShowModale(true);
  };

  // Ferme la modal
  const handleValidClose = () => {
    setShowModale(false);
  };

  // Initialiser le formulaire avec les données de l'employé sélectionné si disponibles
  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      handleReset(setEmployee);
    }
  }, [selectedEmployee]);

  // Modal close on Escape key
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape" && ModaleErik42.isOpen()) {
        ModaleErik42.close();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.createEmployee}>
      {!showEmployeeInfo ? (
        <>
          <h2>Modifier Employés</h2>
          <form
            key={employee.firstName + employee.lastName}
            onSubmit={(e) =>
              handleSubmit(e, employee, onAddEmployee, setEmployee)
            }
            className={styles.form}
          >
            {/* Avatar Section */}
            <div className={styles.avatarSection}>
              <img
                src={
                  employee.avatar || selectedEmployee?.avatar || defaultAvatar
                }
                alt="Employee Avatar"
                className={styles.avatar}
                onClick={() => fileInputRef.current.click()}
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e, setEmployee)}
              />
              <label htmlFor="avatar" className={styles.avatar__text}>
                Cliquez sur la photo pour la changer
              </label>
            </div>

            {/* General Information */}
            <div className={styles.generalInfos}>
              <h3>Informations Générales</h3>
              <div className={styles.infoGroup}>
                <div>
                  <label>Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={employee.firstName || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                    placeholder="John"
                  />
                </div>

                <div>
                  <label>Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={employee.lastName || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label>Date de Naissance</label>
                  <input
                    type="date"
                    name="birthday"
                    value={employee.birthday || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className={styles.addressInfo}>
              <h3>Informations Adresse</h3>
              <div className={styles.infoGroup}>
                <div>
                  <label>Rue</label>
                  <input
                    type="text"
                    name="street"
                    value={employee.street || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                    placeholder="123 Main St"
                  />
                </div>

                <div>
                  <label>Ville</label>
                  <input
                    type="text"
                    name="city"
                    value={employee.city || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                    placeholder="New York"
                  />
                </div>

                <div>
                  <label>État</label>
                  <Dropdown
                    name="state"
                    onChangeDropdown={(value) =>
                      handleDropdownChange(value, "state", setEmployee)
                    }
                    optionsList={stateData}
                    value={employee.state || ""}
                  />
                </div>

                <div>
                  <label>Code Postal</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={employee.zipCode || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                    placeholder="10001"
                  />
                </div>

                <div>
                  <label>Pays</label>
                  <Dropdown
                    name="country"
                    onChangeDropdown={(value) =>
                      handleDropdownChange(value, "country", setEmployee)
                    }
                    optionsList={countryData}
                    value={employee.country || ""}
                  />
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div className={styles.workInfo}>
              <h3>Informations Professionnelles</h3>
              <div className={styles.infoGroup}>
                <div>
                  <label>Department</label>
                  <Dropdown
                    name="department"
                    onChangeDropdown={(value) =>
                      handleDropdownChange(value, "department", setEmployee)
                    }
                    optionsList={departmentData}
                    value={employee.department || ""}
                  />
                </div>

                <div>
                  <label>Fonction</label>
                  <Dropdown
                    name="function"
                    onChangeDropdown={(value) =>
                      handleDropdownChange(value, "function", setEmployee)
                    }
                    optionsList={jobData}
                    value={employee.function || ""}
                  />
                </div>

                <div>
                  <label>Date de Début</label>
                  <input
                    type="date"
                    name="startWork"
                    value={employee.startWork || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                  />
                </div>

                <div>
                  <label>Date de Fin</label>
                  <input
                    type="date"
                    name="endWork"
                    value={employee.endWork || ""}
                    onChange={(e) => handleChange(e, setEmployee)}
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.btn}>
              <div>
                <button
                  type="button"
                  className={styles.btn__modif}
                  onClick={handleValidSubmit}
                >
                  Valider
                  <ModaleErik42
                    showModale={() => setShowModale(true)}
                    closeModale={() => setShowModale(false)}
                    parameter={{ backgroundColor: "darkmagenta" }}
                    message="Votre employé a été ajouté avec succès."
                  />
                </button>
                {/* {showModale && (
                  <ModaleErik42
                    showModale={() => showModale}
                    closeModale={() => setShowModale(false)}
                    parameter={{ backgroundColor: "white" }}
                    message="Votre employé a été ajouté avec succès"
                  />
                )} */}
              </div>

              <button
                type="button"
                className={styles.btn__reset}
                onClick={() => handleReset(setEmployee)}
              >
                Reset
              </button>

              <button
                type="button"
                className={styles.btn__supp}
                onClick={() => confirmArchive(setShowArchiveModal)}
              >
                ⚠️ Archiver Employé ⚠️
              </button>
            </div>

            {/* Confirmation modal */}
            {showArchiveModal && (
              <div className={styles.confirmationModal}>
                <p>Êtes-vous sûr de vouloir archiver cet employé ?</p>
                <button onClick={onCancel}>Oui</button>
                <button onClick={() => setShowArchiveModal(false)}>Non</button>
              </div>
            )}
          </form>
        </>
      ) : (
        <EmployeeInfo employee={selectedEmployee} />
      )}
    </div>
  );
}
