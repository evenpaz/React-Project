import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export type EmployeesProps = {
  id: string;
  personalId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: string;
  birth: Date;
  gender: string;
  userName: string;
  password: string;
  employeeType: string;
  employeePosition: string;
  companyId: string;
  employeeId: string;
  shiftRequests: Boolean[];
};

type CostumersProps = {
  logo: string;
  companyId: string;
  employees: EmployeesProps[];
  employeeData: {};
  rota: string[][];
};

type CostumersContextType = {
  state: CostumersProps;
  dispatch: (companyData: CostumersProps) => void;
};

export const CostumersContext = createContext<CostumersContextType>({
  state: {
    logo: "",
    companyId: "",
    employees: [],
    employeeData: {},
    rota: [],
  },
  dispatch: () => {},
});

const CostumersProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState<CostumersProps>({
    logo: "",
    companyId: "",
    employeeData: {},
    employees: [],
    rota: [],
  });
  console.log(companyData);

  const showCompanyData = useCallback(() => {
    axios
      .get("http://localhost:4000/companies/api")
      .then((res) => setCompanyData(res.data));
  }, []);

  useEffect(() => {
    showCompanyData();
  }, []);

  const providerValue = {
    state: companyData,
    dispatch: setCompanyData,
  };

  return (
    <CostumersContext.Provider value={providerValue}>
      {children}
    </CostumersContext.Provider>
  );
};

export default CostumersProvider;
