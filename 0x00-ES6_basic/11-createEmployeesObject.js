export default function createEmployeesObject(departmentName, employees) {
  var departement = {
      [`${departmentName}`] : [...employees],
  }
  return departement;
}
