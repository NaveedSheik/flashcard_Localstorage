
//access to the flashcard containers
const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];

//access to the text area
const question = document.getElementById("question");
const answer = document.getElementById("answer");

//creating an Array,check anything already there in the local storage ?
//If there then load the items from the local stoge & fill the content array[]
let contentArray = localStorage.getItem('items') ? 
JSON.parse(localStorage.getItem('items')) : [];

//loading existed flashccard in the array- local storage
contentArray.forEach(divMaker);
//divmaker fn coz each flashcard is div elements
function divMaker(text){
    //creating elemets div-> Q&A
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    //css setting fill up in the div class
    div.className = 'flashcard';

    h2_question.setAttribute('style', 
    "border-top:1px solid red; padding: 15px; margin-top:30px")
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style",
    "text-align: center; display: none; color: green;")
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none";
    });

    flashcards.appendChild(div);
}

//Save button- adding the flashcard with filled value of Q&A info
function addFlashcard(){
    //user input - create dictionary
    var flashcard_info = {
        //loading the values of Q&A in to the Key
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    //pushing dictionary values in Array
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    //display flashcard on screen. so, creating divmaker fn & pass the array with index
    divMaker(contentArray[contentArray.length -1])
    question.value = '';
    answer.value = '';
}

//If not using local stoage, Creat new array
function delFlashCards(){
    //clearing the local storage
    localStorage.clear();
    //after deleting returns empty string
    flashcards.innerHTML = '';
    //set array to empty[]
    contentArray = [];
}

//new card button- to reappear
function showCreateCardBox(){
    createBox.style.display = "block";
}

//close button- hides the flash card
function hideCreateBox(){
    createBox.style.display = 'none';
}
