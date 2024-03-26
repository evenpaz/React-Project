import { CiCirclePlus } from "react-icons/ci";
import ToggleBtn from "../toggleBtn/ToggleBtn";
import "./emptyShiftBox.scss";

const EmptyShiftBox = () => {
  return (
    <div
      className="addEmployeeToShiftBox"
      onClick={() => {
        // handleAddEmployeeToShiftBox();
      }}
    >
      <ToggleBtn
        btnArr={[
          {
            id: "addEmployeeToShiftBox__Btn",
            text: <CiCirclePlus size="3em" color="var(--icon-color)" />,
            subList: (
              <ul id="">
                <li></li>
              </ul>
            ),
          },
        ]}
      />
    </div>
  );
};

export default EmptyShiftBox;
