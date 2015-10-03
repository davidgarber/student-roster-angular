studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.sudentName });
    $scope.studentName = null;
  };
});
