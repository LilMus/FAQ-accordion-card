const questions = document.getElementsByTagName("h2");
const arrows = document.getElementsByClassName("arrows");
const paragraphs = document.getElementsByTagName("p");

function resetClickedAttribute() {
	for (let question of questions) {
		question.setAttribute("isClicked", false);
	}
}

function setClickedAttribute(element) {
	return element.setAttribute("isClicked", true);
}

function resetQuestionWeight() {
	for (let element of questions) {
		element.style = "font-weight : 400";
	}
}

function changeQuestionWeight(element) {
	return (element.style = "font-weight : 700");
}

function displayParagraph(paragraph) {
	paragraph.style = "display: block";
	paragraph.style.transition = "1s";
}

function hideParagraph() {
	for (let paragraph of paragraphs) {
		paragraph.style = "display : none";
	}
}

function transformArrow(arrow) {
	arrow.style.transform = "rotate(180deg)";
	arrow.style.transition = "0.3s";
}

function resetArrow() {
	for (let arrow of arrows) {
		arrow.style = "transform: null";
		arrow.style.transition = "0.3s";
	}
}

function addClickListener() {
	for (let i = 0; i < questions.length; i++) {
		questions[i].addEventListener("click", function (e) {
			const question = questions[i];
			//Pour refermer l'onglet si jamais je reclique dessus
			if (question.getAttribute("isClicked") == "true") {
				resetClickedAttribute();
				resetQuestionWeight();
				hideParagraph();
				resetArrow();
				return;
			}
			resetClickedAttribute();
			setClickedAttribute(question);
			resetQuestionWeight();
			changeQuestionWeight(question);
			hideParagraph();
			displayParagraph(paragraphs[i]);
			resetArrow();
			transformArrow(arrows[i]);
		});
	}
}

resetClickedAttribute();
addClickListener();
