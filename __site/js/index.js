/* global angular */
var app = angular.module('MadLib', []);
app.controller('MainCtrl', function($scope) {
    $scope.intro = "Enter the required text and press Ready!";
    $scope.story = "";
    $scope.data = [
        {
            "intro": "Every time you eat meat, you view the entire life story of the animal it came from up until its death. It used to bother you, but eventually you become numb to it. One day your significant other serves you dinner, and you see the life of the person you cheated with 3 years ago flash before your eyes.",
            "story": "This is a story: {Verb1}{Verb2}{Verb3}{Verb4}{Verb5}{Noun1}{Noun2}{Noun3}{Noun4}{Noun5}"
            
        }
    ];
    $scope.generateStory = function() {
        var num_stories = $scope.data.length;
        var index = parseInt(Math.random() * num_stories);

        var storyData = $scope.data[index]['story'];
        storyData = storyData.replace('{Verb1}', $scope.Verb1);
        storyData = storyData.replace('{Verb2}', $scope.Verb2);
        storyData = storyData.replace('{Verb3}', $scope.Verb3);
        storyData = storyData.replace('{Verb4}', $scope.Verb4);
        storyData = storyData.replace('{Verb5}', $scope.Verb5);
        storyData = storyData.replace('{Noun1}', $scope.Noun1);
        storyData = storyData.replace('{Noun2}', $scope.Noun2);
        storyData = storyData.replace('{Noun3}', $scope.Noun3);
        storyData = storyData.replace('{Noun4}', $scope.Noun4);
        storyData = storyData.replace('{Noun5}', $scope.Noun5);
        $scope.intro = $scope.data[index]['intro'];
        $scope.story = storyData;
    };
});
