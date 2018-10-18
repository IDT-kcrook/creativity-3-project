/* global angular */
var app = angular.module('MadLib', []);
app.controller('MainCtrl', function($scope) {
    $scope.intro = "Enter the required text and press Ready!";
    $scope.story = "";
    $scope.data = [{
            "intro": "Every time you eat meat, you view the entire life story of the animal it came from up until its death. It used to bother you, but eventually you become numb to it. One day your significant other serves you dinner, and you see the life of the person you cheated with 3 years ago flash before your eyes.",
            "story": "Immediately you jumped to your feet, brandishing a {Noun1}. \"What have you done?!\" You shouted, {Verb4} backwards toward the {Noun2} in shock. Your significant other, sitting smugly at the table, {Verb5} a {Noun3} and set it down on their plate. \"I did what I had to do. I told you I would {Verb3} you one day.\" Menacingly, they {Verb2} a {Noun4} and pointed it at you. Without hesitation, you {Verb1} your {Noun5} and leaped out the window."

        },
        {
            "intro": "You are caught in the grip of a monster that feeds off your mind. Your only way to make it let you go is to feed it the cringiest, most awkward memories you can bring up.",
            "story": "Immediately you came to the realization of a memory of legendary cringey quality: your first mutual date. You and your date decided to {Verb3} {Noun1}s together, but you forgot to bring the {Noun2}. When it couldn't possibly get worse, the {Noun3} was broken and your date {Verb2} {Noun4}s all over your car floor. While {Verb4} the mess, a {Noun5} {Verb5} from the glovebox. Both uncomfortable, you and your date {Verb1} home."
        },
        {
            "intro": "Dueling to the death is back in style. Someone is flirting with your significant other and you challenge them to such a duel",
            "story": "It was almost like a {Noun4} out of an old western movie. You {Verb1} your {Noun2}. Your opponent {Verb2} their {Noun1}. All was quiet in the peaceful little town as a tumbleweed {Verb5} across the lonely street between you and your foe. At the draw, {Verb4} your weapon, you saw a {Noun3} in the distance and jumped in shock. You ran away from the duel, leaving a {Noun5} in your wake. Today was not the day to {Verb3}..."
        },
        {
            "intro": "Doctor Strange must defend Earth once more from destruction, but today he comes to ask you for help; this time, the villain is Nicholas Cage.",
            "story": "Stealing the Declaration of Independence wasn't enough for him. He wanted more. In a fit of evil ingenuity, he decided to try to {Verb3} the {Noun5}. With no time to assemble the Avengers, you and Dr. Strange {Verb1} near Nick's hideout, {Verb4} a brand new, state-of-the-art {Noun1} in tow. Unfortunately, Cage detected your approach, and he {Verb5} around the corner. Dr. Strange screamed and {Verb2} beneath a {Noun2}, taking with him your secret weapon. It was all up to you. Cage approached, wielding a menacing {Noun3}. To his surprise, however, you pulled a {Noun4} from your pocket and Nick Cage fled in terror. The threat to humanity was repelled."
        },
        {
            "intro": "You're a villain that always shouts out the names of your special moves before attacking. However, you purposely shout out the wrong ones to catch your opponents off guard",
            "story": "On a regular Tuesday night, while menacing the citizens of City B with flaming {Noun1}, you encountered a bald man in a yellow suit. At first you thought nothing of him, but beneath that polished dome of a head, you realized that there was the body of a {Noun2}. Immediately you {Verb1}, {Verb4} a fist and cried \"{Noun3} of Death!\". The bald man was unimpressed, and the attack barely phased him. He {Verb2} up to you, saying, \"You shouldn't be throwing {Noun4} all over the place, that's just rude.\" Angry at his boredom, you {Verb5} him in the head with all your strength, crying out \"Lightning {Noun5}!\". The City shook around you and people screamed, but the bald, boring man was again unphased. The last thing you remember was that he began to {Verb3} his fist and everything went black."
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
