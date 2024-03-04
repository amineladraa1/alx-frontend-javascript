export default function createReportObject(employeesList) {
  const allemployeess = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return allemployeess;
}
