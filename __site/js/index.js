/* global angular */
var app = angular.module('MadLib', []);
app.controller('MainCtrl', function($scope) {
    $scope.story = "Enter the required text and press Ready!";
    $scope.data = [
        {
            "intro": "Every time you eat meat, you view the entire life story of the animal it came from up until its death. It used to bother you, but eventually you become numb to it. One day your significant other serves you dinner, and you see the life of the person you cheated with 3 years ago flash before your eyes."
        },
        {
            "intro": "You've been cursed to be horribly influential, little side jokes you've made such as \"the world is flat\" and \"vaccines cause autism\" have spawned entire movements of avid followers. Today you accidentally said something that will turn out drastically worse..."
        },
        {
            "intro": "You find a mysterious castle in the sky that houses all of the balloons that were let go by children."
        },
        {
            "intro": "You are a hobo that one day, while intensely people-watching, comes to realise something unexpected..."
        },
        {
            "intro": "You are caught in the grip of a monster that feeds off your mind. Your only way to make it let you go is to feed it the cringiest, most awkward memories you can bring up."
        },
        {
            "intro": "She's not the first cat you've rescued from the shelter, but she's the only one you're pretty sure must have once belonged to a wizard."
        },
        {
            "intro": "You have the power to freeze time. However, when time is frozen you act like a five-year old."
        },
        {
            "intro": "Doctor Strange must defend Earth once more from destruction, but today he comes to ask you for help; this time, the villain is Nicholas Cage."
        },
        {
            "intro": "Dueling to the death is back in style. Someone is flirting with your significant other and you challenge them to such a duel"
        },
        {
            "intro": "You're cleaning up your closet when something falls to the floor and bites your ankle, the type of bite that probably carries superpowers with it."
        },
        {
            "intro": "You always shout out the names of your special moves before attacking. However, you purposely shout out the wrong ones to catch your opponents off guard"
        },
        {
            "intro": "As you stare at the inside of the coffin lid, you think back with some amusement at how it all came down to this."
        }
    ];
    $scope.verbs = [];
    $scope.nouns = [];
    $scope.generateStory = function() {
        $scope.verbs.push($scope.Verb1);
        $scope.verbs.push($scope.Verb2);
        $scope.verbs.push($scope.Verb3);
        $scope.verbs.push($scope.Verb4);
        $scope.verbs.push($scope.Verb5);
        $scope.nouns.push($scope.Noun1);
        $scope.nouns.push($scope.Noun2);
        $scope.nouns.push($scope.Noun3);
        $scope.nouns.push($scope.Noun4);
        $scope.nouns.push($scope.Noun5);
        $scope.story = $scope.First + " " + $scope.Last + " " + $scope.Place + " ";
        for (var i in $scope.verbs) {
            $scope.story += $scope.verbs[i] + " ";
        }
        for (var j in $scope.nouns) {
            $scope.story += $scope.nouns[j] + " ";
        }
    };
});
