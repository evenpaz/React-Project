import { ReactNode } from "react";
import "./dataTable.scss";

type DataTableProps = {
  dataArr: { data: ReactNode }[];
  tableName: string;
};

const DataTable = ({ dataArr, tableName }: DataTableProps) => {
  return (
    <div className="dataTable">
      <div></div>
      <div className={tableName}>
        {dataArr.length > 0 ? (
          dataArr.map((d) => {
            return (
              <>
                <ul>
                  <li>{d.data}</li>
                </ul>
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

export default DataTable;
