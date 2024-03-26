import { ReactNode } from "react";
import "./dataTableTitles.scss";

type DataTableTitlesProps = {
  tableName: string;
  titlesArr: { title: string | ReactNode; id?: string }[];
};

const DataTableTitles = ({ titlesArr, tableName }: DataTableTitlesProps) => {
  return (
    <div className="dataTableTitles">
      <div className={tableName}>
        {titlesArr.length > 0 ? (
          titlesArr.map((t) => {
            return (
              <>
                <div className="dataTable__titlesTitles">
                  <h4 id={t.id}>{t.title}</h4>
                </div>
              </>
            );
          })
        ) : (
          <div>
            <p>not working</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTableTitles;
