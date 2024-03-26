import { FormEvent, useState } from "react";
import "./addNewCompanyForm.scss";
import { noFileChoose } from "../../assets/lorem/lorem";
import { FiUpload } from "react-icons/fi";
const AddNewCompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    companyNumber: "",
    companyLogo: "",
  });

  const [fileName, setFileName] = useState(noFileChoose);

  const handleUploadImage = (event: any) => {
    setCompanyData({ ...companyData, companyLogo: event.target.files[0] });
    setFileName(event.target.files[0].name);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleAddCompany = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData();
      data.append("companyName", companyData.companyName);
      data.append("companyNumber", companyData.companyNumber);
      data.append("image", companyData.companyLogo);
      console.log(companyData.companyLogo);

      fetch("http://localhost:4000/admin/add-company", {
        method: "POST",
        body: data,
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addNewCompanyForm">
      <form onSubmit={handleAddCompany}>
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder={"שם חברה"}
          value={companyData.companyName}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          name="companyNumber"
          id="companyNumber"
          placeholder={"מספר חברה"}
          value={companyData.companyNumber}
          onChange={handleInputChange}
        />
        <br />
        <div className="uploadFileDiv">
          <label htmlFor="img">
            <span>
              <p> הוספת לוגו חברה</p>
              <FiUpload color="var(--primary-bg-color)" />
            </span>
          </label>
          <input type="file" name="image" onChange={handleUploadImage} />
          <div
            className={
              fileName == noFileChoose
                ? "fileNameBox-empty"
                : "fileNameBox-choose"
            }
          >
            <p>{fileName}</p>
          </div>
        </div>
        <br />
        <br />
        <button type="submit" className="green-btn">
          הוסף
        </button>
      </form>
    </div>
  );
};

export default AddNewCompanyForm;
