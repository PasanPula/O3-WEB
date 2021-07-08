(function() {
    'use strict';

    angular.module('public')
        .service('SubjectService', SubjectService);


    function SubjectService() {
        var service = this;


        var Science = ["Combined Mathematics", "Physics", "Chemistry", "Information and Communication Technology (ICT)"];
        var Bio = ["Biology", " Physics", "Agricultural science", "Chemistry"];
        var Art = ["Economics", "Geography", "History", "Home Economics", "Political Sciences", "Logic and Scientific method", "Accounting", "Business Statistics", "Agriculture", "Communication and Mass media", "Information and Communication Technology"];
        var Commerce = ["Accountancy", "Business Studies", "Economics",
            "Business Statistics",
            "Geography",
            "Political Science",
            "History",
            "The logic and the scientific method",
            "English",
            "German",
            "French",
            "Agricultural Sciences",
            "Combined Mathematics",
            "Information and Communication Technology (ICT)"
        ];
        var Technology = ["Science for Technology", "Engineering Technology", "English", "Information Technology", "Economics", "Geography", "Commerce", "Accounting", "Arts"];

        service.getSubject = function(subject) {
            return eval(subject);
        };
    }

})();