import React from 'react'


function Informatii(){
    const data=[
        {
            "Destinatie":"Maldive",
            "Pret":"2500 Euro",
            "Tip":"Ultra all inclusive"
        },
        {
           "Destinatie":"Thailanda",
            "Pret":"1500 Euro",
            "Tip":"Demipensiune"
        },
        {
            "Destinatie":"Filipine",
            "Pret":"2000 Euro",
            "Tip":"All inclusive"
        },
        {
           "Destinatie":"Bali",
           "Pret":"1200 Euro",
           "Tip":"Mic dejun"
        }
    ]
    const tableRows=data.map(
        (element)=>{
            return( 
                
              <tr>
                <td>{element.Destinatie}</td>
                <td>{element.Pret}</td>
                <td>{element.Tip}</td>
              </tr>
                
            )
        }
    )
    return(
        <div className='tabel' id="info">
            
          <table>
              <thead>
                <tr>    
                  <th>Destinatie</th>
                  <th>Pret sejur</th>
                  <th>Tip sejur</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </table>      
              
        </div>
    )
  }

export default Informatii