import { useContext, useState } from "react";
import "./currentRota.scss";
import { CostumersContext } from "../../context/CostumersProvider";

const CurrentRota = () => {
  const { state: companyData } = useContext(CostumersContext);
  const [rotaArr, setRotaArr] = useState(
    companyData.rota ? companyData.rota : []
  );
  return (
    <div className="currentRota-container">
      <h2>המשמרות שלי</h2>
      <div className="currentRota-box">
        {rotaArr.length > 0 ? (
          rotaArr.map((shift) => {
            return <div className="box">{shift}</div>;
          })
        ) : (
          <div className="box">לא קבלת משמרות השבוע</div>
        )}
      </div>
    </div>
  );
};

export default CurrentRota;
