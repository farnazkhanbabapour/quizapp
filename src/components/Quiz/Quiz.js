import React from 'react';
import './Quiz.css'

// import AnswerQuestion from './AnswerQuestion';

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {   questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { id:1,answerText: '1', isCorrect: false },
                        {id:2, answerText: '4', isCorrect: false },
                        { id:3,answerText: '6', isCorrect: false },
                        { id:4,answerText: '7', isCorrect: true },
                    ],
                    
                },
                {
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { id:1,answerText: 'Jeff Bezos', isCorrect: false },
                        {id:2, answerText: 'Elon Musk', isCorrect: true },
                        { id:3,answerText: 'Bill Gates', isCorrect: false },
                        { id:4,answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { id:1,answerText: 'Apple', isCorrect: true },
                        { id:2,answerText: 'Intel', isCorrect: false },
                        { id:3,answerText: 'Amazon', isCorrect: false },
                        { id:4,answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    questionText: 'Where is Iran capital?',
                    answerOptions: [
                        {id:1,answerText: 'Tehran', isCorrect: true },
                        {id:2,answerText: ' Gorgan', isCorrect: false },
                        {id:3,answerText: 'Tabriz', isCorrect: false },
                        {id:4,answerText: 'Shiraz', isCorrect: false },
                       
                        
                    ],
                 
                },
            ],
            currentQuestion: 1,
            score: 0,
            showScore: false,
           
        }
    }

    answerQuestionHandler(isCorrect) {
            if((isCorrect === true || isCorrect === false )&& this.state.currentQuestion === this.state.questions.length){
                this.setState((prevstate)=>{
                    return { score: prevstate.score +1 , showScore: true};
                    
                })

            }
        
       
            else if(isCorrect === true) {
                this.setState((prevstate)=>{
                    return { score: prevstate.score +1 , currentQuestion: prevstate.currentQuestion +1 };
                    
                
        
                })
             
            }
            else if(isCorrect === false) {
                this.setState((prevstate)=>{
                    return {currentQuestion: prevstate.currentQuestion +1 };
       
                })

            }
            // if(this.state.currentQuestion-1 >= this.state.questions.length){
            //     return(
            //         this.setState({ showScore : true})

            //     )
                
            // }
          
              
                
           
             console.log(this.state.score)

    }

    render() {
        
        const question = this.state.questions[this.state.currentQuestion-1].questionText;
        const answers = this.state.questions[this.state.currentQuestion-1 ].answerOptions.map((answerOption)=>{
           return( <button key={answerOption.id} onClick={()=>this.answerQuestionHandler(answerOption.isCorrect)}>{answerOption.answerText}</button>)
          
        })

      
       

       
        
        console.log(this.state.score)
        return (
            <div className='app'>
                {this.state.showScore === true && 
                     <div className='score-section'>
                        You scored {this.state.score} out of 4
                    </div>
                }
                
                {this.state.showScore === false &&
                <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span> Question {this.state.currentQuestion} / {this.state.questions.length}</span> 
                        </div>
                        <div className='question-text'>
                            {question}
                        </div>
                    </div>
                    <div className='answer-section'>
                        { answers}
                    </div> 
                    </div>
                       }
            </div>            
            
        )
    }
}
