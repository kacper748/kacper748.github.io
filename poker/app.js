var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Card = /** @class */ (function () {
    function Card(url, number) {
        this.url = url;
        this.number = number;
    }
    return Card;
}());
// Create all clubs
var Club = /** @class */ (function (_super) {
    __extends(Club, _super);
    function Club(url, number) {
        var _this = _super.call(this, url, number) || this;
        _this.type = "clubs";
        return _this;
    }
    Club.numberOfCards = 13;
    return Club;
}(Card));
var ALL_CLUBS = [];
var ALL_CLUBS_URLS = [
    "..\\poker\\images\\clubs2.jpg",
    "..\\poker\\images\\clubs3.jpg",
    "..\\poker\\images\\clubs4.jpg",
    "..\\poker\\images\\clubs5.jpg",
    "..\\poker\\images\\clubs6.jpg",
    "..\\poker\\images\\clubs7.jpg",
    "..\\poker\\images\\clubs8.jpg",
    "..\\poker\\images\\clubs9.jpg",
    "..\\poker\\images\\clubs10.jpg",
    "..\\poker\\images\\clubs11.jpg",
    "..\\poker\\images\\clubs12.jpg",
    "..\\poker\\images\\clubs13.jpg",
    "..\\poker\\images\\clubsA.jpg",
];
for (var i = 0; i < Club.numberOfCards; i++) {
    ALL_CLUBS[i] = new Club(ALL_CLUBS_URLS[i], (i + 2));
}
// Create all diamonds
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond(url, number) {
        var _this = _super.call(this, url, number) || this;
        _this.type = "diamonds";
        return _this;
    }
    Diamond.numberOfCards = 13;
    return Diamond;
}(Card));
var ALL_DIAMONDS = [];
var ALL_DIAMONDS_URLS = [
    "..\\poker\\images\\diamonds2.jpg",
    "..\\poker\\images\\diamonds3.jpg",
    "..\\poker\\images\\diamonds4.jpg",
    "..\\poker\\images\\diamonds5.jpg",
    "..\\poker\\images\\diamonds6.jpg",
    "..\\poker\\images\\diamonds7.jpg",
    "..\\poker\\images\\diamonds8.jpg",
    "..\\poker\\images\\diamonds9.jpg",
    "..\\poker\\images\\diamonds10.jpg",
    "..\\poker\\images\\diamonds11.jpg",
    "..\\poker\\images\\diamonds12.jpg",
    "..\\poker\\images\\diamonds13.jpg",
    "..\\poker\\images\\diamondsA.jpg"
];
for (var i = 0; i < Diamond.numberOfCards; i++) {
    ALL_DIAMONDS[i] = new Diamond(ALL_DIAMONDS_URLS[i], (i + 2));
}
// Create all hearts
var Heart = /** @class */ (function (_super) {
    __extends(Heart, _super);
    function Heart(url, number) {
        var _this = _super.call(this, url, number) || this;
        _this.type = "hearts";
        return _this;
    }
    Heart.numberOfCards = 13;
    return Heart;
}(Card));
var ALL_HEARTS = [];
var ALL_HEARTS_URLS = [
    "..\\poker\\images\\hearts2.jpg",
    "..\\poker\\images\\hearts3.jpg",
    "..\\poker\\images\\hearts4.jpg",
    "..\\poker\\images\\hearts5.jpg",
    "..\\poker\\images\\hearts6.jpg",
    "..\\poker\\images\\hearts7.jpg",
    "..\\poker\\images\\hearts8.jpg",
    "..\\poker\\images\\hearts9.jpg",
    "..\\poker\\images\\hearts10.jpg",
    "..\\poker\\images\\hearts11.jpg",
    "..\\poker\\images\\hearts12.jpg",
    "..\\poker\\images\\hearts13.jpg",
    "..\\poker\\images\\heartsA.jpg"
];
for (var i = 0; i < Heart.numberOfCards; i++) {
    ALL_HEARTS[i] = new Heart(ALL_HEARTS_URLS[i], (i + 2));
}
// Create all spades
var Spade = /** @class */ (function (_super) {
    __extends(Spade, _super);
    function Spade(url, number) {
        var _this = _super.call(this, url, number) || this;
        _this.type = "spades";
        return _this;
    }
    Spade.numberOfCards = 13;
    return Spade;
}(Card));
var numberOfSpades = 13;
var ALL_SPADES = [];
var ALL_SPADES_URLS = [
    "..\\poker\\images\\spades2.jpg",
    "..\\poker\\images\\spades3.jpg",
    "..\\poker\\images\\spades4.jpg",
    "..\\poker\\images\\spades5.jpg",
    "..\\poker\\images\\spades6.jpg",
    "..\\poker\\images\\spades7.jpg",
    "..\\poker\\images\\spades8.jpg",
    "..\\poker\\images\\spades9.jpg",
    "..\\poker\\images\\spades10.jpg",
    "..\\poker\\images\\spades11.jpg",
    "..\\poker\\images\\spades12.jpg",
    "..\\poker\\images\\spades13.jpg",
    "..\\poker\\images\\spadesA.jpg"
];
for (var i = 0; i < Spade.numberOfCards; i++) {
    ALL_SPADES[i] = new Spade(ALL_SPADES_URLS[i], (i + 2));
}
// Create a deck of cards
var DECK_OF_CARDS = [ALL_CLUBS, ALL_DIAMONDS, ALL_HEARTS, ALL_SPADES];
var CARD_TYPES = [Club, Diamond, Heart, Spade];
var Player = /** @class */ (function () {
    function Player(playerNumber) {
        this.hand = [];
        this.money = 1000;
        this.raise = 0;
        this.check = false;
        this.allCards = [];
        this.allNumbers = [];
        this.allRepeatedCards = [];
        this.allRepeatedNumbers = [];
        this.highestCard = 0;
        this.firstRepeatedNumber = [];
        this.secondRepeatedNumber = [];
        this.thirdRepeatedNumber = [];
        this.pair = 0;
        this.twoPairs = 0;
        this.threeOfAKind = 0;
        this.straight = 0;
        this.cardsInFlush = [];
        this.flushHighestNumber = 0;
        this.fullHouse = 0;
        this.fourOfAKind = 0;
        this.straightFlush = 0;
        this.royalFlush = 0;
        this.powerOfCards = 0;
        this.playerNumber = playerNumber;
    }
    return Player;
}());
var winner;
var winner2;
var player = new Player(0);
var player2 = new Player(1);
var player3 = new Player(2);
var player4 = new Player(3);
var player5 = new Player(4);
var player6 = new Player(5);
var ALL_PLAYERS = [player, player2, player3, player4, player5, player6];
var currentPhase = 0;
var currentType;
var currentNumber;
var BOARD = [];
function startTheGame() {
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        dealPlayer(ALL_PLAYERS[i], i);
    }
    checkForTheCombinations();
}
function playNextPhase() {
    raiseValue = 0;
    bet = false;
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        ALL_PLAYERS[i].raise = 0;
    }
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        ALL_PLAYERS[i].check = false;
    }
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        $("#player" + ALL_PLAYERS[i].playerNumber + "_action").text("");
    }
    if (currentPhase == 0) {
        dealBoardFirstTime();
        checkForTheCombinations();
        currentPhase++;
    }
    else if (currentPhase == 1) {
        dealBoardSecondTime();
        checkForTheCombinations();
        currentPhase++;
    }
    else if (currentPhase == 2) {
        dealBoardThirdTime();
        checkForTheCombinations();
        currentPhase++;
    }
    else if (currentPhase == 3) {
        $(".hidden").css("display", "none");
        $(".player-cards").css("display", "initial");
        checkForTheWinner();
    }
}
function dealPlayer(targetPlayer, i) {
    var j = 1;
    getRandomCard();
    $("#player" + i + "_" + j + "").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    targetPlayer.hand[0] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
    j++;
    getRandomCard();
    $("#player" + i + "_" + j + "").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    targetPlayer.hand[1] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
}
function dealBoardFirstTime() {
    getRandomCard();
    $("#board1").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    BOARD[0] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
    getRandomCard();
    $("#board2").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    BOARD[1] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
    getRandomCard();
    $("#board3").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    BOARD[2] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
}
function dealBoardSecondTime() {
    getRandomCard();
    $("#board4").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    BOARD[3] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
}
function dealBoardThirdTime() {
    getRandomCard();
    $("#board5").attr("src", DECK_OF_CARDS[currentType][currentNumber].url);
    BOARD[4] = DECK_OF_CARDS[currentType][currentNumber];
    getThatCardOutOfTheDeck();
}
function getRandomCard() {
    currentType = Math.floor(Math.random() * 4);
    currentNumber = Math.floor(Math.random() * CARD_TYPES[currentType].numberOfCards);
}
function getThatCardOutOfTheDeck() {
    DECK_OF_CARDS[currentType].splice(currentNumber, 1);
    CARD_TYPES[currentType].numberOfCards -= 1;
}
function checkForTheCombinations() {
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        collectAllCards(ALL_PLAYERS[i]);
        checkForTheHighestCard(ALL_PLAYERS[i]);
        checkForTheRepeatedNumbers(ALL_PLAYERS[i]);
        checkForThePairs(ALL_PLAYERS[i]);
        checkForTheStraight(ALL_PLAYERS[i]);
        checkForTheFlush(ALL_PLAYERS[i]);
        checkForTheStraightFlush(ALL_PLAYERS[i]);
    }
    checkForTheStrongestCombination();
    displayTheBestCombinationForTheHumanPlayer();
}
function collectAllCards(targetPlayer) {
    if (BOARD.length == 0) {
        targetPlayer.allNumbers.push(targetPlayer.hand[0]["number"]);
        targetPlayer.allCards.push(targetPlayer.hand[0]);
        targetPlayer.allNumbers.push(targetPlayer.hand[1]["number"]);
        targetPlayer.allCards.push(targetPlayer.hand[1]);
    }
    else if (BOARD.length == 3) {
        targetPlayer.allNumbers.push(BOARD[0]["number"]);
        targetPlayer.allCards.push(BOARD[0]);
        targetPlayer.allNumbers.push(BOARD[1]["number"]);
        targetPlayer.allCards.push(BOARD[1]);
        targetPlayer.allNumbers.push(BOARD[2]["number"]);
        targetPlayer.allCards.push(BOARD[2]);
    }
    else if (BOARD.length == 4) {
        targetPlayer.allNumbers.push(BOARD[3]["number"]);
        targetPlayer.allCards.push(BOARD[3]);
    }
    else if (BOARD.length == 5) {
        targetPlayer.allNumbers.push(BOARD[4]["number"]);
        targetPlayer.allCards.push(BOARD[4]);
    }
}
function checkForTheHighestCard(targetPlayer) {
    for (var i = 0; i < targetPlayer.allCards.length; i++) {
        if (targetPlayer.allCards[i]["number"] > targetPlayer.highestCard) {
            targetPlayer.highestCard = targetPlayer.allCards[i]["number"];
        }
    }
}
function checkForTheRepeatedNumbers(targetPlayer) {
    for (var i = 0; i < targetPlayer.allCards.length - 1; i++) {
        for (var j = i + 1; j < targetPlayer.allCards.length; j++) {
            if (targetPlayer.allCards[i]["number"] == targetPlayer.allCards[j]["number"]) {
                if (!targetPlayer.allRepeatedCards.includes(targetPlayer.allCards[i])) {
                    targetPlayer.allRepeatedCards.push(targetPlayer.allCards[i]);
                    targetPlayer.allRepeatedNumbers.push(targetPlayer.allCards[i]["number"]);
                }
                if (!targetPlayer.allRepeatedCards.includes(targetPlayer.allCards[j])) {
                    targetPlayer.allRepeatedCards.push(targetPlayer.allCards[j]);
                    targetPlayer.allRepeatedNumbers.push(targetPlayer.allCards[j]["number"]);
                }
            }
        }
    }
}
function checkForThePairs(targetPlayer) {
    if (targetPlayer.allRepeatedNumbers.length > 0) {
        targetPlayer.allRepeatedNumbers.sort(function (a, b) { return b - a; });
        if (targetPlayer.allRepeatedNumbers.length == 2 && targetPlayer.allRepeatedNumbers.every(function (val, k, arr) { return val === arr[0]; })) {
            targetPlayer.pair = targetPlayer.allRepeatedNumbers[0];
        }
        else if (targetPlayer.allRepeatedNumbers.length == 3 && targetPlayer.allRepeatedNumbers.every(function (val, k, arr) { return val === arr[0]; })) {
            targetPlayer.threeOfAKind = targetPlayer.allRepeatedNumbers[0];
        }
        else if (targetPlayer.allRepeatedNumbers.length == 4 && targetPlayer.allRepeatedNumbers.every(function (val, k, arr) { return val === arr[0]; })) {
            targetPlayer.fourOfAKind = targetPlayer.allRepeatedNumbers[0];
        }
        else {
            for (var i = 0; i < targetPlayer.allRepeatedNumbers.length - 1; i++) {
                if (targetPlayer.allRepeatedNumbers[i] != targetPlayer.allRepeatedNumbers[i + 1]) {
                    targetPlayer.firstRepeatedNumber = targetPlayer.allRepeatedNumbers.slice(0, i + 1);
                    targetPlayer.secondRepeatedNumber = targetPlayer.allRepeatedNumbers.slice(i + 1, targetPlayer.allRepeatedNumbers.length);
                    for (var j = 0; j < targetPlayer.secondRepeatedNumber.length; j++) {
                        if (targetPlayer.secondRepeatedNumber[j] != targetPlayer.secondRepeatedNumber[j + 1]) {
                            targetPlayer.thirdRepeatedNumber = targetPlayer.secondRepeatedNumber.slice(j + 1, targetPlayer.secondRepeatedNumber.length);
                            targetPlayer.secondRepeatedNumber = targetPlayer.secondRepeatedNumber.slice(0, j + 1);
                            if (targetPlayer.firstRepeatedNumber.length == 3 || targetPlayer.secondRepeatedNumber.length == 3 || targetPlayer.thirdRepeatedNumber.length == 3) {
                                targetPlayer.fullHouse = 1;
                            }
                            else {
                                targetPlayer.twoPairs = 1;
                            }
                        }
                    }
                    if (targetPlayer.firstRepeatedNumber.length == 2 && targetPlayer.secondRepeatedNumber.length == 2) {
                        targetPlayer.twoPairs = 1;
                    }
                    else if ((targetPlayer.firstRepeatedNumber.length == 3 && targetPlayer.secondRepeatedNumber.length == 2) ||
                        (targetPlayer.firstRepeatedNumber.length == 2 && targetPlayer.secondRepeatedNumber.length == 3)) {
                        targetPlayer.fullHouse = 1;
                    }
                    break;
                }
            }
        }
    }
}
function checkForTheStraight(targetPlayer) {
    for (var i = 0; i < targetPlayer.allNumbers.length; i++) {
        if (targetPlayer.allNumbers[i] == 14) {
            targetPlayer.allNumbers[i] = 1;
        }
    }
    targetPlayer.allNumbers.sort(function (a, b) { return a - b; });
    var uniqueNumbers = targetPlayer.allNumbers.filter(function (v, i) { return targetPlayer.allNumbers.indexOf(v) == i; });
    var counterOfStraight = 0;
    for (var j = 0; j < uniqueNumbers.length - 1; j++) {
        if (uniqueNumbers[j] == uniqueNumbers[j + 1] - 1) {
            counterOfStraight++;
            if (counterOfStraight >= 4) {
                targetPlayer.straight = uniqueNumbers[j + 1]; // The highest straight possible
            }
        }
        else {
            counterOfStraight = 0;
        }
    }
    for (var k = 0; k < targetPlayer.allNumbers.length; k++) {
        if (targetPlayer.allNumbers[k] == 1) {
            targetPlayer.allNumbers[k] = 14;
        }
    }
    targetPlayer.allNumbers.sort(function (a, b) { return a - b; });
    var uniqueNumbers = targetPlayer.allNumbers.filter(function (v, i) { return targetPlayer.allNumbers.indexOf(v) == i; });
    var counterOfStraight = 0;
    for (var l = 0; l < uniqueNumbers.length - 1; l++) {
        if (uniqueNumbers[l] == uniqueNumbers[l + 1] - 1) {
            counterOfStraight++;
            if (counterOfStraight >= 4) {
                targetPlayer.straight = uniqueNumbers[l + 1]; // The highest straight possible
            }
        }
        else {
            counterOfStraight = 0;
        }
    }
}
function checkForTheFlush(targetPlayer) {
    var counterOfSpadeFlush = [];
    var counterOfDiamondFlush = [];
    var counterOfHeartFlush = [];
    var counterOfClubFlush = [];
    for (var i = 0; i < targetPlayer.allCards; i++) {
        if (targetPlayer.allCards[i]["type"] == "spades") {
            counterOfSpadeFlush.push(targetPlayer.allCards[i]);
            if (counterOfSpadeFlush.length == 4) {
                targetPlayer.counterOfSpadeFlush.sort(function (a, b) { return a - b; });
                targetPlayer.cardsInFlush = counterOfSpadeFlush;
                targetPlayer.flushHighestNumber = counterOfSpadeFlush[4]["number"];
            }
        }
        else if (targetPlayer.allCards[i]["type"] == "diamonds") {
            counterOfDiamondFlush.push(targetPlayer.allCards[i]);
            if (counterOfDiamondFlush.length == 4) {
                targetPlayer.counterOfDiamondFlush.sort(function (a, b) { return a - b; });
                targetPlayer.cardsInFlush = counterOfDiamondFlush;
                targetPlayer.flushHighestNumber = counterOfDiamondFlush[4]["number"];
            }
        }
        else if (targetPlayer.allCards[i]["type"] == "hearts") {
            counterOfHeartFlush.push(targetPlayer.allCards[i]);
            if (counterOfHeartFlush.length == 4) {
                targetPlayer.counterOfHeartFlush.sort(function (a, b) { return a - b; });
                targetPlayer.cardsInFlush = counterOfHeartFlush;
                targetPlayer.flushHighestNumber = counterOfHeartFlush[4]["number"];
            }
        }
        else if (targetPlayer.allCards[i]["type"] == "clubs") {
            counterOfClubFlush.push(targetPlayer.allCards[i]);
            if (counterOfClubFlush.length == 4) {
                targetPlayer.counterOfClubFlush.sort(function (a, b) { return a - b; });
                targetPlayer.cardsInFlush = counterOfClubFlush;
                targetPlayer.flushHighestNumber = counterOfClubFlush[4]["number"];
            }
        }
    }
}
function checkForTheStraightFlush(targetPlayer) {
    if (targetPlayer.flushHighestNumber > 0 && targetPlayer.straight > 0) {
        var counterOfStraightFlush = 0;
        for (var i = 0; i < 5; i++) {
            if (targetPlayer.cardsInFlush[i]["number"] == (targetPlayer.straight - 4 + i)) {
                counterOfStraightFlush++;
                if (counterOfStraightFlush == 5) {
                    targetPlayer.straightFlush = targetPlayer.straight;
                    checkForTheRoyalFlush(targetPlayer);
                }
            }
        }
    }
}
function checkForTheRoyalFlush(targetPlayer) {
    if (targetPlayer.straightFlush == 14) {
        targetPlayer.royalFlush = 1;
    }
}
function checkForTheStrongestCombination() {
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        if (ALL_PLAYERS[i].royalFlush > 0) {
            ALL_PLAYERS[i].powerOfCards = 10;
        }
        else if (ALL_PLAYERS[i].straightFlush > 0) {
            ALL_PLAYERS[i].powerOfCards = 9;
        }
        else if (ALL_PLAYERS[i].fourOfAKind > 0) {
            ALL_PLAYERS[i].powerOfCards = 8;
        }
        else if (ALL_PLAYERS[i].fullHouse > 0) {
            ALL_PLAYERS[i].powerOfCards = 7;
        }
        else if (ALL_PLAYERS[i].flushHighestNumber > 0) {
            ALL_PLAYERS[i].powerOfCards = 6;
        }
        else if (ALL_PLAYERS[i].straight > 0) {
            ALL_PLAYERS[i].powerOfCards = 5;
        }
        else if (ALL_PLAYERS[i].threeOfAKind > 0) {
            ALL_PLAYERS[i].powerOfCards = 4;
        }
        else if (ALL_PLAYERS[i].twoPairs > 0) {
            ALL_PLAYERS[i].powerOfCards = 3;
        }
        else if (ALL_PLAYERS[i].pair > 0) {
            ALL_PLAYERS[i].powerOfCards = 2;
        }
        else {
            ALL_PLAYERS[i].powerOfCards = 1;
        }
    }
}
function displayTheBestCombinationForTheHumanPlayer() {
    var combination = $("#combination");
    switch (player.powerOfCards) {
        case 1:
            combination.text("High Card");
            break;
        case 2:
            combination.text("One Pair");
            break;
        case 3:
            combination.text("Two Pairs");
            break;
        case 4:
            combination.text("Three of a Kind");
            break;
        case 5:
            combination.text("Straight");
            break;
        case 6:
            combination.text("Flush");
            break;
        case 7:
            combination.text("Full House");
            break;
        case 8:
            combination.text("Four of a Kind");
            break;
        case 9:
            combination.text("Straight Flush");
            break;
        case 10:
            combination.text("Royal Flush");
            break;
    }
}
function checkForTheWinner() {
    var largestPower = 0;
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        if (ALL_PLAYERS[i].powerOfCards > largestPower) {
            largestPower = ALL_PLAYERS[i].powerOfCards;
            winner = ALL_PLAYERS[i];
        }
        else if (ALL_PLAYERS[i].powerOfCards == largestPower) {
            if (largestPower == 10) {
                winner2 = ALL_PLAYERS[i];
            }
            else if (largestPower == 9) {
                if (ALL_PLAYERS[i].straight > winner.straight) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].straight == winner.straight) {
                    winner2 = ALL_PLAYERS[i];
                }
            }
            else if (largestPower == 8) {
                if (ALL_PLAYERS[i].fourOfAKind > winner.fourOfAKind) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].fourOfAKind == winner.fourOfAKind) {
                    if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                        winner = ALL_PLAYERS[i];
                    }
                    else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                        winner2 = ALL_PLAYERS[i];
                    }
                }
            }
            else if (largestPower == 7) {
                var playerThree;
                var winnerThree;
                if (ALL_PLAYERS[i].firstRepeatedNumber.length == 3) {
                    playerThree = ALL_PLAYERS[i].firstRepeatedNumber;
                }
                else if (ALL_PLAYERS[i].secondRepeatedNumber.length == 3) {
                    playerThree = ALL_PLAYERS[i].secondRepeatedNumber;
                }
                else if (ALL_PLAYERS[i].thirdRepeatedNumber.length == 3) {
                    playerThree = ALL_PLAYERS[i].thirdRepeatedNumber;
                }
                if (winner.firstRepeatedNumber.length == 3) {
                    winnerThree = winner.firstRepeatedNumber;
                }
                else if (winner.secondRepeatedNumber.length == 3) {
                    winnerThree = winner.secondRepeatedNumber;
                }
                else if (winner.thirdRepeatedNumber.length == 3) {
                    winnerThree = winner.thirdRepeatedNumber;
                }
                if (playerThree > winnerThree) {
                    winner = ALL_PLAYERS[i];
                }
                else if (playerThree == winnerThree) {
                    var playerTwo;
                    var winnerTwo;
                    if (ALL_PLAYERS[i].firstRepeatedNumber.length == 2) {
                        playerTwo = ALL_PLAYERS[i].firstRepeatedNumber;
                    }
                    else if (ALL_PLAYERS[i].secondRepeatedNumber.length == 2) {
                        playerTwo = ALL_PLAYERS[i].secondRepeatedNumber;
                    }
                    else if (ALL_PLAYERS[i].thirdRepeatedNumber.length == 2) {
                        playerTwo = ALL_PLAYERS[i].thirdRepeatedNumber;
                    }
                    if (winner.firstRepeatedNumber.length == 2) {
                        winnerTwo = winner.firstRepeatedNumber;
                    }
                    else if (winner.secondRepeatedNumber.length == 2) {
                        winnerTwo = winner.secondRepeatedNumber;
                    }
                    else if (winner.thirdRepeatedNumber.length == 2) {
                        winnerTwo = winner.thirdRepeatedNumber;
                    }
                    if (playerTwo > winnerTwo) {
                        winner = ALL_PLAYERS[i];
                    }
                    else if (playerTwo == winnerTwo) {
                        if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                            winner = ALL_PLAYERS[i];
                        }
                        else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                            winner2 = ALL_PLAYERS[i];
                        }
                    }
                }
            }
            else if (largestPower == 6) {
                if (ALL_PLAYERS[i].flushHighestNumber > winner.flushHighestNumber) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].flushHighestNumber == winner.flushHighestNumber) {
                    winner2 = ALL_PLAYERS[i];
                }
            }
            else if (largestPower == 5) {
                if (ALL_PLAYERS[i].straight > winner.straight) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].straight == winner.straight) {
                    winner2 = ALL_PLAYERS[i];
                }
            }
            else if (largestPower == 4) {
                if (ALL_PLAYERS[i].threeOfAKind > winner.threeOfAKind) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].threeOfAKind == winner.threeOfAKind) {
                    if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                        winner = ALL_PLAYERS[i];
                    }
                    else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                        winner2 = ALL_PLAYERS[i];
                    }
                }
            }
            else if (largestPower == 3) {
                if (ALL_PLAYERS[i].firstRepeatedNumber > winner.firstRepeatedNumber && ALL_PLAYERS[i].firstRepeatedNumber > winner.secondRepeatedNumber ||
                    ALL_PLAYERS[i].secondRepeatedNumber > winner.firstRepeatedNumber && ALL_PLAYERS[i].secondRepeatedNumber > winner.secondRepeatedNumber) {
                    winner = ALL_PLAYERS[i];
                }
                else if (winner.firstRepeatedNumber > ALL_PLAYERS[i].firstRepeatedNumber && winner.firstRepeatedNumber > ALL_PLAYERS[i].secondRepeatedNumber ||
                    winner.secondRepeatedNumber > ALL_PLAYERS[i].firstRepeatedNumber && winner.secondRepeatedNumber > ALL_PLAYERS[i].secondRepeatedNumber) {
                    winner = winner;
                }
                else {
                    if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                        winner = ALL_PLAYERS[i];
                    }
                    else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                        winner2 = ALL_PLAYERS[i];
                    }
                }
            }
            else if (largestPower == 2) {
                if (ALL_PLAYERS[i].pair > winner.pair) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].pair == winner.pair) {
                    if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                        winner = ALL_PLAYERS[i];
                    }
                    else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                        winner2 = ALL_PLAYERS[i];
                    }
                }
            }
            else if (largestPower == 1) {
                if (ALL_PLAYERS[i].highestCard > winner.highestCard) {
                    winner = ALL_PLAYERS[i];
                }
                else if (ALL_PLAYERS[i].highestCard == winner.highestCard) {
                    winner2 = ALL_PLAYERS[i];
                }
            }
        }
    }
    winner.money += currentPot;
    currentPot = 0;
    $("#player" + winner.playerNumber + "_money").text(winner.money);
    $("#currentPot").text(currentPot);
}
document.getElementById("check").addEventListener("click", function () { playerChecks(player); });
document.getElementById("call").addEventListener("click", function () { playerCalls(player); });
document.getElementById("bet").addEventListener("click", function () { playerBets(player); });
document.getElementById("raise").addEventListener("click", function () { playerRaises(player); });
document.getElementById("fold").addEventListener("click", function () { playerFolds(player, 0); });
var raiseValue = 0;
var currentPot = 0;
var bet;
var difference;
var someoneFolded;
var humanPlayer = 1; // To check if the human player is still in game
function playerChecks(targetPlayer) {
    if (targetPlayer.playerNumber > 0) {
        $("#player" + targetPlayer.playerNumber + "-description").css("animation", "none");
    }
    targetPlayer.check = true;
    $("#player" + targetPlayer.playerNumber + "_action").text("Check");
    if (testIfEverybodyChecks()) {
        playNextPhase();
    }
    if (targetPlayer.playerNumber == 0) {
        $(':button').prop('disabled', true);
        $(':button').css('color', 'green');
        var delayForTheEnabling = (ALL_PLAYERS.length - 1) * 3000;
        setTimeout(function () { $(':button').prop('disabled', false); $(':button').css('color', 'white'); }, delayForTheEnabling);
        computerPlayersMakeMoves();
    }
}
function playerCalls(targetPlayer) {
    if (targetPlayer.playerNumber > 0) {
        $("#player" + targetPlayer.playerNumber + "-description").css("animation", "none");
    }
    $("#player" + targetPlayer.playerNumber + "_action").text("Call");
    difference = raiseValue - targetPlayer.raise;
    if (difference < 0) {
        difference = targetPlayer.money;
    }
    targetPlayer.money -= difference;
    currentPot += difference;
    $("#player" + targetPlayer.playerNumber + "_money").text(targetPlayer.money);
    $("#currentPot").text(currentPot);
    targetPlayer.check = true;
    if (testIfEverybodyChecks()) {
        playNextPhase();
    }
    if (targetPlayer.playerNumber == 0) {
        computerPlayersMakeMoves();
    }
}
function playerBets(targetPlayer) {
    if (targetPlayer.playerNumber > 0) {
        $("#player" + targetPlayer.playerNumber + "-description").css("animation", "none");
    }
    $("#player" + targetPlayer.playerNumber + "_action").text("Bet");
    raiseValue += 100;
    targetPlayer.raise += 100;
    currentPot += targetPlayer.raise;
    targetPlayer.money -= targetPlayer.raise;
    $("#player" + targetPlayer.playerNumber + "_money").text(targetPlayer.money);
    $("#currentPot").text(currentPot);
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        ALL_PLAYERS[i].check = false;
    }
    targetPlayer.check = true;
    bet = true;
    if (targetPlayer.playerNumber == 0) {
        computerPlayersMakeMoves();
    }
}
function playerRaises(targetPlayer) {
    if (targetPlayer.playerNumber > 0) {
        $("#player" + targetPlayer.playerNumber + "-description").css("animation", "none");
    }
    $("#player" + targetPlayer.playerNumber + "_action").text("Raise");
    difference = raiseValue - targetPlayer.raise + 100;
    if (difference < 0) {
        difference = targetPlayer.money;
        targetPlayer.raise = targetPlayer.money;
    }
    else {
        raiseValue += 100;
        targetPlayer.raise += 100;
    }
    targetPlayer.money -= difference;
    currentPot += difference;
    $("#player" + targetPlayer.playerNumber + "_money").text(targetPlayer.money);
    $("#currentPot").text(currentPot);
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        ALL_PLAYERS[i].check = false;
    }
    targetPlayer.check = true;
    bet = true;
    if (targetPlayer.playerNumber == 0) {
        computerPlayersMakeMoves();
    }
}
function playerFolds(targetPlayer, playerNumberInArray) {
    $("#player" + targetPlayer.playerNumber + "_action").text("Fold");
    someoneFolded = true;
    targetPlayer.check = true;
    var splicingDelay = (ALL_PLAYERS.length - playerNumberInArray) * 3000;
    setTimeout(function () {
        for (var i = 0; i < ALL_PLAYERS.length; i++) {
            if (targetPlayer == ALL_PLAYERS[i]) {
                $(".folded" + targetPlayer.playerNumber).css("display", "initial");
                ALL_PLAYERS.splice(i, 1);
            }
        }
    }, splicingDelay);
    $(".player" + targetPlayer.playerNumber).css("left", "25%");
    $(".player" + targetPlayer.playerNumber).css("top", "25%");
    setTimeout(function () { $(".player" + targetPlayer.playerNumber).css("display", "none"); }, 2000);
    if (ALL_PLAYERS.length == 1) {
        currentPhase = 3;
        playNextPhase();
    }
    if (testIfEverybodyChecks()) {
        playNextPhase();
    }
    if (targetPlayer.playerNumber == 0) {
        humanPlayer = 0;
        someoneFolded = false;
        $(".moves").css("display", "none");
        for (var i = currentPhase; i < 4; i++) {
            computerPlayersMakeMoves();
        }
    }
}
function testIfEverybodyChecks() {
    var checkCounter = 0;
    for (var i = 0; i < ALL_PLAYERS.length; i++) {
        if (ALL_PLAYERS[i].check == true) {
            checkCounter++;
        }
    }
    if (checkCounter == ALL_PLAYERS.length) {
        return true;
    }
}
function computerPlayersMakeMoves() {
    var randomDigit;
    var delayForTheRotation = 0;
    var delayForTheMove = 3000;
    var _loop_1 = function (i) {
        setTimeout(function () { loadingRotation(); }, delayForTheRotation);
        setTimeout(function () { nextComputerMove(); }, delayForTheMove);
        delayForTheRotation = delayForTheMove;
        delayForTheMove += 3000;
        function loadingRotation() {
            $("#player" + ALL_PLAYERS[i].playerNumber + "-description").css("animation", "rotation 2s linear");
        }
        function nextComputerMove() {
            randomDigit = Math.floor(Math.random() * 4);
            if (ALL_PLAYERS[i].money == 0) {
                playerChecks(ALL_PLAYERS[i]);
            }
            // Bluff
            else if (randomDigit == 0) {
                randomDigit = Math.floor(Math.random() * 2);
                if (bet == true) {
                    if (randomDigit == 0) {
                        playerCalls(ALL_PLAYERS[i]);
                    }
                    else if (randomDigit == 1) {
                        playerRaises(ALL_PLAYERS[i]);
                    }
                }
                else {
                    if (randomDigit == 0) {
                        playerBets(ALL_PLAYERS[i]);
                    }
                    else if (randomDigit == 1) {
                        playerChecks(ALL_PLAYERS[i]);
                    }
                }
            }
            else {
                if (currentPhase == 0) {
                    if (ALL_PLAYERS[i].powerOfCards > 1) {
                        if (bet == true) {
                            playerCalls(ALL_PLAYERS[i]);
                        }
                        else {
                            playerRaises(ALL_PLAYERS[i]);
                        }
                    }
                    else {
                        if (bet == true) {
                            playerFolds(ALL_PLAYERS[i], i);
                        }
                        else {
                            playerChecks(ALL_PLAYERS[i]);
                        }
                    }
                }
                else if (currentPhase == 1) {
                    if (bet == true) {
                        if (ALL_PLAYERS[i].powerOfCards > 1) {
                            playerCalls(ALL_PLAYERS[i]);
                        }
                        else {
                            playerFolds(ALL_PLAYERS[i], i);
                        }
                    }
                    else {
                        if (ALL_PLAYERS[i].powerOfCards > 2) {
                            playerRaises(ALL_PLAYERS[i]);
                        }
                        else {
                            playerChecks(ALL_PLAYERS[i]);
                        }
                    }
                }
                else if (currentPhase == 2) {
                    if (bet == true) {
                        if (ALL_PLAYERS[i].powerOfCards > 2) {
                            playerCalls(ALL_PLAYERS[i]);
                        }
                        else {
                            playerFolds(ALL_PLAYERS[i], i);
                        }
                    }
                    else {
                        if (ALL_PLAYERS[i].powerOfCards > 3) {
                            playerRaises(ALL_PLAYERS[i]);
                        }
                        else {
                            playerChecks(ALL_PLAYERS[i]);
                        }
                    }
                }
                else if (currentPhase == 3) {
                    if (bet == true) {
                        if (ALL_PLAYERS[i].powerOfCards > 3) {
                            playerCalls(ALL_PLAYERS[i]);
                        }
                        else {
                            playerFolds(ALL_PLAYERS[i], i);
                        }
                    }
                    else {
                        if (ALL_PLAYERS[i].powerOfCards > 4) {
                            playerRaises(ALL_PLAYERS[i]);
                        }
                        else {
                            playerChecks(ALL_PLAYERS[i]);
                        }
                    }
                }
            }
            if (someoneFolded == true) {
                i--;
                someoneFolded = false;
            }
            if (bet == true) {
                $("#check").css("display", "none");
                $("#bet").css("display", "none");
                $("#raise").css("display", "initial");
                $("#call").css("display", "initial");
            }
            else if (bet == false) {
                $("#raise").css("display", "none");
                $("#call").css("display", "none");
                $("#check").css("display", "initial");
                $("#bet").css("display", "initial");
            }
        }
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = humanPlayer; i < ALL_PLAYERS.length; i++) {
        _loop_1(i);
        i = out_i_1;
    }
}
startTheGame();
