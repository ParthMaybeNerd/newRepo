function showModal() {
    var birthdate = document.getElementById("birthdate").value;
    var name = document.getElementById("name").value;

    // Validation
    if (!birthdate || !name) {
        alert("Please enter both birthdate and name.");
        return;
    }

    // Perform calculation
    var parts = birthdate.split("-");
    var day = parseInt(parts[2]);
    var month = parseInt(parts[1]);
    var year = parseInt(parts[0]);

    var total = day + month + year;
    var ultimateSum = reduceToSingleDigit(total);
    var daySum = reduceToSingleDigit(day);
    var nameSum = calculateNameSum(name);

    var planet = getResult(daySum);

    var resultMessage = "Mulaank: " + daySum + "<br><br>" +
                        "Bhagyank: " + ultimateSum + "<br><br>" +
                        "Ruling Planet: " + planet + "<br><br>" +
                        "Name Ultimate Sum: " + nameSum;

    document.getElementById("result").innerHTML = resultMessage;

    // Show modal
    document.getElementById("modalOverlay").style.display = "flex";

    // Set planet image
    document.getElementById("planetImg").src = "planet_" + planet.toLowerCase() + ".png"; // Replace with the actual file names
}

function closeModal() {
    // Close modal
    document.getElementById("modalOverlay").style.display = "none";
}

function reduceToSingleDigit(num) {
    var sum = num;
    while (sum > 9) {
        sum = sum % 10 + Math.floor(sum / 10);
    }
    return sum;
}

function calculateNameSum(name) {
    var sum = 0;
    var charMap = {
        'a': 1, 'i': 1, 'j': 1, 'q': 1, 'y': 1,
        'b': 2, 'k': 2, 'r': 2,
        'c': 3, 'g': 3, 'l': 3, 's': 3,
        'd': 4, 'm': 4, 't': 4,
        'e': 5, 'h': 5, 'n': 5, 'x': 5,
        'u': 6, 'v': 6, 'w': 6,
        'o': 7, 'z': 7,
        'f': 8, 'p': 8
    };
    for (var i = 0; i < name.length; i++) {
        var c = name[i].toLowerCase();
        if (charMap.hasOwnProperty(c)) {
            sum += charMap[c];
        }
    }
    return reduceToSingleDigit(sum);
}

function getResult(ultimateSum) {
    switch (ultimateSum) {
        case 1:
            return "SUN";
        case 2:
            return "Moon";
        case 3:
            return "Jupiter";
        case 4:
            return "Rahu";
        case 5:
            return "Budh";
        case 6:
            return "Venus";
        case 7:
            return "Ketu";
        case 8:
            return "Saturn";
        case 9:
            return "Mars";
        default:
            return "Invalid input. Please enter a valid birthdate.";
    }
}





