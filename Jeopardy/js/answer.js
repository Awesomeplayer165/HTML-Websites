var dict = {
	"0": {
		"subjectName": "Integrated Language Arts",
		"100": ["What does a sentence do?", "What does it tell what someone or something do"],
		"200": ["What is a a question with a sentence ending with a question", "What is an interrogative question?"],
		"300": ["Samantha, I can’t eat or sleep when you are gone. I need to hear your scratchy voice and see your lovely toothless smile. I miss that special way that you eat soup with your fingers. Please come home soon! What is the main idea of this paragraph? ", "What is Samantha, I miss you"],
		"400": ["Someday we will all have robots that will be our personal servants. They will look and behave much like real humans. We will be able to talk to these mechanical helpers and they will be able to respond in kind. Amazingly, the robots of the future will be able to learn from experience. They will be smart, strong, and untiring workers whose only goal will be to make our lives easier. What sentence from the paragraph expresses the main idea? ", "What is someday we will all have robots that will be our personal servants."]
	},
	"1": {
		"subjectName": "Maths",
		"100": ["If the events have the same theoretical probability of happening, then they are called?", "What are equally likely events?"],
		"200": ["Calculate P(3, 2)", "What is 6"],
		"300": ["What is the symbol which denotes the symmetric difference of sets?", "What is `Δ` (a small triangle glyph)"],
		"400": ["Let A = {4,5,6,7} and B = {4,5,6,7}If f is one to one from A to B then which of the following is correct?", "What is f may or may not be bijective?"]
	},
	"2": {
		"subjectName": "Science",
		"100": ["What is the most common term used in genetics to describe the observable physical characteristics of an organism caused by the expression of a gene or set of genes?", "What is a phenotype?"],
		"200": ["What is the biological term most often used for the act of a cell engulfing a particle by extending its pseudopodia (read as: SU-doe-POH-dee-ah) around the particle?", "What is a phagocytosis?"],
		"300": ["Find the mass of 1 mole of cuprous oxide, or Cu 2 O. Assume the atomic mass of copper is 64 and oxygen is 16.", "What is 144?"],
		"400": ["Rounded to the nearest whole number, how many feet does light travel in one-billionth of one second?", "What is `1`?"]
	},
	"3": {
		"subjectName": "Computer Science",
		"100": ["Software that is often distributed free of charge and usually intended for sale after a trial period is called", "What is freeware?"],
		"200": ["The binary number 10101 (read as: one, zero, one, zero, one) is equivalent to what decimal number?", "What is `21`?"],
		"300": ["The file extension .MID (read as: dot, M, I, D) usually means that the file can be opened by what type of program:", "What are music programs?"],
		"400": ["In the Windows environment, which of the following file extensions represents a hidden file to replace pages or segments of data in memory:", "What is `.swp`?"]
	}
}

const urlParam = new URLSearchParams(window.location.search)
var s = urlParam.get("s")
var p = urlParam.get("p")

// Current URL: https://my-website.com/page_a

const nextURL = `${window.location.origin}/Jeopardy/Question/`
const nextTitle = 'Jeopardy | Question'
const nextState = { additionalInformation: 'Updated the URL with JS' }

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL)

// This will replace the current entry in the browser's history, without reloading
window.history.replaceState(nextState, nextTitle, nextURL)

if ((!p && !localStorage.getItem("p")) && (!s && !localStorage.getItem("s"))) {
	var message = "Unknown Subject and Points. Go back to the Jeopardy Home Page."
	console.log(message)
	alert(message)
} else {
	if (!(p && s)) {
		if (!s && localStorage.getItem("s")) {
			s = localStorage.getItem("s")
		}
		
		if (!p && localStorage.getItem("p")) {
			p = localStorage.getItem("p")
		}
	}
	
	var topData = dict[s]
	var data = topData[p]
	document.getElementById("question").innerHTML = `Question: ${data[0]}`
	document.getElementById("subject") .innerHTML = `Subject: ${topData["subjectName"]}`
	document.getElementById("points")  .innerHTML = `Number of Points: ${p}`
	
	localStorage.setItem("s", s)
	localStorage.setItem("p", p)

	window.addEventListener('popstate', function(event) {
		window.location.assign(`${window.location.origin}/Jeopardy/`);
	});

	localStorage.setItem("currentPointValue", p)
}

function showAnswer() {
	alert(data[1])
}