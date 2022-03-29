var gridItem = [0, 0]
var words

var hasWon = false

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

if (!(localStorage.getItem("alphabet"))) {
    alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x))
    localStorage.setItem("alphabet", JSON.stringify(alphabet))
} else {
    alphabet = JSON.parse(localStorage.getItem("alphabet"))
}

var word = (["avant", "hello", "pzazz", "jazzy", "unite", "shows", "parts", "leave"].map(name => name.toUpperCase())).random()

$.getJSON("words.json", function(data) {
    words = data
})

$(document).bind("keydown", function (event) {
    if (hasWon) { return }

    if (alphabet.includes((event.key).toUpperCase()) && gridItem[1] != 5) {
        document.getElementById(`${gridItem[0]},${gridItem[1]}`).innerHTML = (event.key).toUpperCase()

        gridItem = [gridItem[0], gridItem[1] + 1]
    }

    if (event.keyCode == 8 && gridItem[1] > 0) {

        if (gridItem[1] == 0) {
            gridItem[0] -= 1
            gridItem[1] = 5
        }

        document.getElementById(`${gridItem[0]},${gridItem[1]-1}`).innerHTML = ""
        gridItem = [gridItem[0], gridItem[1]-1]
    }

    if (event.keyCode == 13 && gridItem[1] == 5) {

        const combined = document.getElementById(`${gridItem[0]},0`).innerHTML +
                         document.getElementById(`${gridItem[0]},1`).innerHTML +
                         document.getElementById(`${gridItem[0]},2`).innerHTML +
                         document.getElementById(`${gridItem[0]},3`).innerHTML +
                         document.getElementById(`${gridItem[0]},4`).innerHTML

        if (combined.toLowerCase() in words) {

            var timesGreen = 0

            for (let i = 0; i < 5; i++) {
                const letterGuess = document.getElementById(`${gridItem[0]},` + String(i))
    
                if (letterGuess.innerHTML == word.substring(i, i+1)) {
                    letterGuess.style.backgroundColor = "green"
                    timesGreen += 1
                } else if (word.includes(letterGuess.innerHTML)) {
                    letterGuess.style.backgroundColor = "yellow"
                } else {
                    letterGuess.style.backgroundColor = "gray"
                }
            }

            if (timesGreen == 5) {
                alert("You Win!")
                hasWon = true
            }

            if (gridItem[0] == 5) {
                alert("You Lose!")
            }
        } else {
            
            document.getElementById(`${gridItem[0]},0`).innerHTML = ""
            document.getElementById(`${gridItem[0]},1`).innerHTML = ""
            document.getElementById(`${gridItem[0]},2`).innerHTML = ""
            document.getElementById(`${gridItem[0]},3`).innerHTML = ""
            document.getElementById(`${gridItem[0]},4`).innerHTML = "" 

            gridItem = [gridItem[0] - 1, 0]

            alert("Not a word in the bank")
       }

        gridItem[0] += 1
        gridItem[1] = 0

    }
})

// document.addEventListener('keydown', function (event) {
//     if (alphabet.includes((event.key).toUpperCase()) && gridItem[1] != 5) {
//         document.getElementById(`${gridItem[0]},${gridItem[1]}`).innerHTML = (event.key).toUpperCase()

//         gridItem = [gridItem[0], gridItem[1] + 1]
//     }

//     if (event.keyCode == 8 && gridItem[1] > 0) {

//         if (gridItem[1] == 0) {
//             gridItem[0] -= 1
//             gridItem[1] = 5
//         }

//         document.getElementById(`${gridItem[0]},${gridItem[1]-1}`).innerHTML = ""
//         gridItem = [gridItem[0], gridItem[1]-1]
//     }

//     if (event.keyCode == 13 && gridItem[1] == 5) {

//         const list = ["0",
//                       "1",
//                       "2",
//                       "3",
//                       "4"]

//         for (let i = 0; i < 5; i++) {
//             const letterGuess = document.getElementById(`${gridItem[0]},` + list[i])

//             if (letterGuess.innerHTML == word.substring(i, i+1)) {
//                 letterGuess.style.backgroundColor = "green"
//             } else if (word.includes(letterGuess.innerHTML)) {
//                 letterGuess.style.backgroundColor = "yellow"
//             } else {
//                 letterGuess.style.backgroundColor = "gray"
//             }
//         }

//         gridItem[0] += 1
//         gridItem[1] = 0

//     }
// })