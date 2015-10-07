studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});

// studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
//   $scope.studentsWithPermisssion = [{name: "Jane Doe"}, {name: "John Doe"}]
// });
