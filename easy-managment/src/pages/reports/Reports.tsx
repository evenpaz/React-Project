import { FaFileExcel } from "react-icons/fa";
import IconAndTextBtn from "../../components/iconAndTextBtn/IconAndTextBtn";
import NavbarApp from "../../components/navbar-app/NavbarApp";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";
import "./reports.scss";
import { TbReportMoney } from "react-icons/tb";

const Reports = () => {
  const handleShowWorkHoursReport = () => {
    alert("clicked");
  };
  const handleExportToExcel = () => {
    alert("excel");
  };

  return (
    <div className="reportsPage">
      <NavbarApp />
      <div className="reportsPage__container">
        <div className="reportsPage__container-btnBox">
          <IconAndTextBtn
            flexDisplay="in_flex_row"
            iconAndTextBtnArr={[
              {
                id: "greenBtn",
                logoSrc: <FaFileExcel size="2em" />,
                text: "ייצוא לאקסל",
                linkTo: "",
                onclick() {
                  handleExportToExcel();
                },
              },
              {
                id: `blueBtn`,
                logoSrc: <TbReportMoney size="2em" />,
                text: " צור דוח שעות",
                linkTo: "",
                onclick() {
                  handleShowWorkHoursReport();
                },
              },
            ]}
          />
        </div>
        <div className="reportsPage__container-workHoursReport"></div>
      </div>
      <WhatsAppBtn />
    </div>
  );
};

export default Reports;
