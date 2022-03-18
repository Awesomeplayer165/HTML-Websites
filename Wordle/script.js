var gridItem = [0, 0]

var word = "AVANT"

const alphabet = (Array.from(Array(26)).map((e, i) => i + 65)).map((x) => String.fromCharCode(x));

document.addEventListener('keydown', function (event) {
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
        // const combinedWordGuess = document.getElementById(`${gridItem[0]},` + "0").innerHTML +
                                //   document.getElementById(`${gridItem[0]},` + "1").innerHTML +
                                //   document.getElementById(`${gridItem[0]},` + "2").innerHTML +
                                //   document.getElementById(`${gridItem[0]},` + "3").innerHTML +
                                //   document.getElementById(`${gridItem[0]},` + "4").innerHTML

        // if (combinedWordGuess == word) {
        //     document.getElementById(`${gridItem[0]},${gridItem[0]}`).style.backgroundColor = "green"
        // }

        const list = ["0",
                      "1",
                      "2",
                      "3",
                      "4"]

        for (let i = 0; i < 5; i++) {
            const letterGuess = document.getElementById(`${gridItem[0]},` + list[i])

            if (letterGuess.innerHTML == word.substring(i, i+1)) {
                letterGuess.style.backgroundColor = "green"
            } else if (word.includes(letterGuess.innerHTML)) {
                letterGuess.style.backgroundColor = "yellow"
            } else {
                letterGuess.style.backgroundColor = "gray"
            }
        }

        gridItem[0] += 1
        gridItem[1] = 0

    }
});