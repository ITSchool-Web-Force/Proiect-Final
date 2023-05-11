import react from "react";

const Titlu = ({title}) => {
    return (
        <div className="titlu-box">
            <div className="titlu"></div>
            <h1 className="text-h1">{title}</h1>
            <div className="titlu"></div>
        </div>
    )
}

export default Titlu