// import { CgDetailsMore } from "react-icons/cg";
// import { useContext } from "react";
// import DataTable from "../dataTable/DataTable";
// import { CostumersContext } from "../../context/CostumersProvider";
// import "./employeeDataTableRender.scss";

// const EmployeeDataTableRender = () => {
//   const { state: employees } = useContext(CostumersContext);

//   return (
//     <div>
//       <DataTable
//         tableName={"employeeDataTable"}
//         colArr={[
//           {
//             title: "תמונה",
//             data: employees.map((e) => {
//               return (
//                 <>
//                   <img
//                     src={e.employees.img}
//                     alt={`${e.employees.firstName} photo`}
//                   ></img>
//                 </>
//               );
//             }),
//           },
//           {
//             title: "שם",
//             data: employees.map((e) => {
//               return (
//                 <>
//                   <p>{`${e.employees.firstName} ${e.employees.lastName}`}</p>
//                 </>
//               );
//             }),
//           },
//           {
//             title: "טלפון",
//             data: employees.map((e) => {
//               return (
//                 <>
//                   <p>{e.employees.phone}</p>
//                 </>
//               );
//             }),
//           },
//           {
//             title: "שלח/ה אילוצים",
//             data: employees.map((e) => {
//               return (
//                 <>
//                   <p>{e.employees.email}</p>
//                 </>
//               );
//             }),
//           },
//           {
//             title: "עריכה",
//             data: employees.map((e) => {
//               return (
//                 <>
//                   <button>
//                     {e.employees.gender}
//                     <CgDetailsMore />
//                   </button>
//                 </>
//               );
//             }),
//           },
//         ]}
//       />
//     </div>
//   );
// };

// export default EmployeeDataTableRender;
