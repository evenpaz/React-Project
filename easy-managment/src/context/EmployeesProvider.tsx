// import axios from "axios";
// import { createContext, useCallback, useEffect, useState } from "react";

// // export type EmployeesProps = {
// //   id: string;
// //   personalId: string;
// //   firstName: string;
// //   lastName: string;
// //   phone: string;
// //   email: string;
// //   image: string;
// //   birth: Date;
// //   gender: string;
// //   userName: string;
// //   password: string;
// //   employeeType: string;
// //   employeePosition: string;
// //   companyId: string;
// // };

// type EmployeesContextType = {
//   state: EmployeesProps[];
//   dispatch: (employees: EmployeesProps[]) => void;
// };

// export const EmployeesContext = createContext<EmployeesContextType>({
//   state: [],
//   dispatch: () => {},
// });

// const EmployeesProvider = ({ children }) => {
//   const [employees, setEmployees] = useState<EmployeesProps[]>([]);

//   const showEmployees = useCallback(() => {
//     axios
//       .get("http://localhost:4000/employees")
//       .then((res) => {
//         setEmployees(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     showEmployees();
//   }, []);

//   const providerValue = {
//     state: employees,
//     dispatch: setEmployees,
//   };

//   return (
//     <EmployeesContext.Provider value={providerValue}>
//       {children}
//     </EmployeesContext.Provider>
//   );
// };

// export default EmployeesProvider;
