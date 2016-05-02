angular.module('raoweb').
controller('courseViewCtrl', function ($scope, $location,   $stateParams,courseviewService,sessionService, $state) {
        $scope.course = $stateParams.course;
        $scope.user = sessionService.get('user');
        if(sessionStorage.length===0){
            $location.path('/login');
        }
        if (sessionService.get('type') == 'teacher'){
            courseviewService.teachercourseview($scope.course);
            $state.go('dashboard.courseview',{course:$scope.course})
            courseviewService.getattendance($scope.course);
            

        }
        else{
            courseviewService.studentcourseview($scope.course);    
            $state.go('studentcourseview',{course:$scope.course})
            courseviewService.studentstatistics($scope.user,$scope.course);
            
        }
        
        $scope.modalStatistics = function(){
            $('#modalStatistics').openModal();
        };
        
        

});