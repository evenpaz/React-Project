import AddNewCompanyForm from "../../components/addNewCompanyForm/AddNewCompanyForm";
import AdminCompaniesBox from "../../components/adminCompaniesBox/AdminCompaniesBox";
import "./app_adminPage.scss";

const App_adminPage = () => {
  return (
    <div className="app_adminPage">
      <h1>רשימת חברות פעילות</h1>
      <AdminCompaniesBox />
      <h1>הוספת חברה חדשה</h1>
      <AddNewCompanyForm />
    </div>
  );
};

export default App_adminPage;
