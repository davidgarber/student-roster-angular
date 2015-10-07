studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
  // $scope.students = [];
  // $scope.addStudent = function() {
  //   $scope.students.push({ name: $scope.studentName });
  //   $scope.studentName = null;
  // };
  // $scope.deleteStudent = function(student) {
  //   var index = $scope.students.indexOf(student)
  //   $scope.students.splice(index, 1);
  // };
});
