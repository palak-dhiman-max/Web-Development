 
 const questions=[

    //0th object
    {
          question: "Which is the largest animal in the world? ",
          answers:[
            {text:"Shark" , correct:"false"},
           {text:"Blue Whale" , correct:"true"},
           {text:"Elephant" , correct:"false"},
           {text:"Giraffe" , correct:"false"}
          ]
    },

    //1th object
    {
          question: "Which is the smallest country in the World?",
          answers:[
            {text:"Vatican city" , correct:"true"},
           {text:"Bhutan" , correct:"false "},
           {text:"Nepal" , correct:"false"},
            {text:"Shri-Lanka" , correct:"false"}
          ]
    },

    //2th object
     {
          question: "Which is the largest Desert in the World?",
          answers:[
            {text:"Kalahari" , correct:"false"},
           {text:"Gobi" , correct:"false"},
           {text:"Sahara" , correct:"false"},
            {text:"Antarctica" , correct:"true"}
          ]
    },

    //3th object
    {
          question: "Which is the smallest continent in the World",
          answers:[
            {text:"Asia" , correct:"false"},
           {text:"Austalia" , correct:"true"},
           {text:"Arctic" , correct:"false"},
            {text:"Africa" , correct:"false"}
          ]
    }
 ]

 //selecting elemnts
 const ques_elemnt = document.querySelector(".element");
 const answer_button = document.querySelector(".answer-buttons");
 const next = document.querySelector(".next-btn");


 let currentQuestion = 0;
 let score = 0;


 //start the quiz

 function startQuiz(){
    currentQuestion =0;
    score = 0;

    //it will show question and answers
    showQuestion();

 }



 //show questions
 function showQuestion(){

    //takki purane question remove ho jaye aur naye aa jaye
    resetQuestion();

    //question
    ques_elemnt.innerHTML= currentQuestion + 1 +". "+ questions[currentQuestion].question;
    

    //next button
    next.innerHTML="Next";
    //answers
    questions[currentQuestion].answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answer_button.append(button);
        if(answer.correct){
              button.dataset.correct =answer.correct;
        }
        button.addEventListener('click',(e)=>{
           
              if(e.target.dataset.correct ==="true" ){
                button.classList.add("correct");
                score++;
              }
              else{
                button.classList.add("incorrect");
                            }

              // here we use array.from in order to convert html collection into array which is given by
              //  .children (answerbutton.children) se sare button ka collection mil jayega

              Array.from(answer_button.children).forEach(button=>{

                if(button.dataset.correct === "true"){
                  button.classList.add("correct");

                }button.disabled = true;
              })

               next.style.display="block";
        })





    })

    
 }


 
 //for reseting questions
 function resetQuestion(){
    while(answer_button.firstChild){
         answer_button.removeChild(answer_button.firstChild);
    }

    next.style.display="none";
 }


 function showScore(){
resetQuestion();
  ques_elemnt.innerHTML=`Your Scoreed  ${score} out of ${questions.length}!`
  next.style.display="flex";
  next.innerHTML="Play Again";  
   
 }

 function handleQuestion(){

  currentQuestion++;
  if(currentQuestion<questions.length){
    showQuestion();
  }
  else{
showScore();
  }
 }

 next.addEventListener('click' ,()=>{

  if(currentQuestion<questions.length){
    handleQuestion();
  }

  else{
    startQuiz();
  }
       
      
 })






 startQuiz();