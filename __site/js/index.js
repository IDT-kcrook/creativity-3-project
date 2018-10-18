/* global angular */
var app = angular.module('MadLib', []);
app.controller('MainCtrl', function($scope) {
    $scope.intro = "Enter the required text and press Ready!";
    $scope.story = "";
    $scope.data = [
        {
            "intro": "Every time you eat meat, you view the entire life story of the animal it came from up until its death. It used to bother you, but eventually you become numb to it. One day your significant other serves you dinner, and you see the life of the person you cheated with 3 years ago flash before your eyes.",
            "story": "Immediately you jumped to your feet, brandishing a {Noun1}. \"What have you done?!\" You shouted, {Verb4} backwards toward the {Noun2} in shock. Your significant other, sitting smugly at the table, {Verb5} a {Noun3} and set it down on their plate. \"I did what I had to do. I told you I would {Verb3} you one day.\" Menacingly, they {Verb2} a {Noun4} and pointed it at you. Without hesitation, you {Verb1} your {Noun5} and leaped out the window."
            
        },
        {
            "intro": "You are caught in the grip of a monster that feeds off your mind. Your only way to make it let you go is to feed it the cringiest, most awkward memories you can bring up.",
            "story": "Immediately you came to the realization of a memory of legendary cringey quality: your first mutual date. You and your date decided to {Verb3} {Noun1}s together, but you forgot to bring the {Noun2}. When it couldn't possibly get worse, the {Noun3} was broken and your date {Verb2} {Noun4}s all over your car floor. While {Verb4} the mess, a {Noun5} {Verb5} from the glovebox. Both uncomfortable, you and your date {Verb1} home."
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
