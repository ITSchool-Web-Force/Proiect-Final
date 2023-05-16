import React, {useState} from "react";
import styles from '../styles/Home.module.css';


export default function EstimatePrice () {

 const [sourceLanguageState, setSourceLanguageState] = useState({language:"", reason: ""});
 const handleSourceLanguageChange = (e) => {
  setSourceLanguageState({ ...sourceLanguageState, [e.target.name]: e.target.value });
 }

 const [finalLanguageState, setFinalLanguageState] = useState({language:"", reason: ""});
 const handleFinalLanguageChange = (e) => {
  setFinalLanguageState({ ...finalLanguageState, [e.target.name]: e.target.value });
 }

 const [pageNumberState, setPageNumberState] = useState(0);
 const handlePageNumberChange = (e) => {
  if (e.target.value <= 0) {
    setPageNumberState(0);
    return;
  }

  setPageNumberState(e.target.value);
 }

 const [showErrorState, setShowErrorState] = useState(false);

 const handleButtonClick = (e) => {
  if(pageNumberState <= 0)
    setShowErrorState(true);

  setPriceState(getPrice())
 }

const [priceState, setPriceState] = useState(0);

const getPrice = () => {
  const priceMultiplier = new Map([
    ['english', 1],
    ['german', 2],
    ['french', 3],
    ['romanian',4]])
  
  return priceMultiplier.get(sourceLanguageState.language) * 
        priceMultiplier.get(finalLanguageState.language) *
        pageNumberState;
}


 return (
    <div className={styles.conversion}>
      <h3>Limba sursa:</h3>
        <select 
          name="language" 
          value={sourceLanguageState.language} 
          onChange={handleSourceLanguageChange}>
          <option disabled={true} value="">Selecteaza o limba</option>
          <option value="english">Engleza</option>
          <option value="german">Germana</option>
          <option value="french">Franceza</option>
        </select>
      <h3>Limba țintă:</h3>
        <select 
          name="language" 
          value={finalLanguageState.language} 
          onChange={handleFinalLanguageChange}>
          <option disabled={true} value="">Selecteaza o limba</option>
          <option value="romanian">Romana</option>
        </select>  
      <h3>Număr de pagini:</h3>
        <input 
          type="number" 
          name="number"
          value={pageNumberState}
          onChange={handlePageNumberChange}/>
      {pageNumberState==0 && showErrorState && 
        <p>Acest camp trebuie sa fie mai mare decat 0</p>
      }
      <button
        onClick={handleButtonClick}>
          Calculeaza
      </button>
      <div>Preț orientativ: {priceState} RON</div>
    </div>

  )
}


