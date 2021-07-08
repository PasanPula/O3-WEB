(function() {
    'use strict';

    angular.module('public')
        .controller('SubjectController', SubjectController);


    SubjectController.$inject = ['Subject']

    function SubjectController(Subject) {

        this.subjectList = Subject;
    }

})();