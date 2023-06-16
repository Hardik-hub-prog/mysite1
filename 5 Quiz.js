
var quizdata = [

    {
         question: 'Which framework is related to js',
         a: '.net',
         b: 'flask',
         c:  'react',
         d: 'danjo',

         correct: 'c'


    },

    {
       
        question: 'Which is not a programming language',
        a: 'html',
        b: 'python',
        c:  'c++',
        d: 'java',

        correct: 'a'



    },

    {
        
        question: 'Which is the Indian indegenous aircraft',
        a: 'Rafale',
        b: 'F-16',
        c:  'Prachand',
        d: 'Tejas',

        correct: 'd'

    },

    {

        
        question: 'which is the Indain indegenous aircraft carrier',
        a: 'INS vikramaditya',
        b: 'INS virat',
        c:  'INS vikrant II',
        d: 'INS vikrant I',

        correct: 'c'

    }
    
]



var quiz = document.getElementById('quiz')

var question = document.getElementById('question')

var answer = document.querySelectorAll('.answer')

var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

 var currentQuestion =0
 var quizScore =0



  loadQuiz()

  function loadQuiz(){

      deselect()

      question.innerHTML = quizdata[currentQuestion].question
      option_a.innerText = quizdata[currentQuestion].a
      option_b.innerText = quizdata[currentQuestion].b
      option_c.innerText = quizdata[currentQuestion].c
      option_d.innerText = quizdata[currentQuestion].d
  }

  function deselect(){

       answer.forEach(answer=>answer.checked =false)
  }

      submitbtn.addEventListener('click' , ()=>{


        var selectedOption;

        answer.forEach(answer=>{

            if(answer.checked){

                selectedOption = answer.id
            }
        })

        if(selectedOption == quizdata[currentQuestion].correct){

            quizScore = quizScore+1
        }

        currentQuestion = currentQuestion+1

       if(currentQuestion== quizdata.length){

        document.getElementById('quizdiv').innerHTML = `<h1> You have answered ${quizScore} correctly out of ${quizdata.length} </h1>`
       }

       else{

        loadQuiz()
       }

})
