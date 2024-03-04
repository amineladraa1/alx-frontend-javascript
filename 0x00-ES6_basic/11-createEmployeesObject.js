export default function createEmployeesObject(departmentName, employees) {
  const departement = {
    [`${departmentName}`]: [...employees],
  };
  return departement;
}
