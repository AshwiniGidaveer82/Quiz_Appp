import React, {useState} from 'react'
import {data} from './data'
import './quizstyle.css'

export default function Quizapp() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinish] = useState(false);
    const correctAnswers = ['Option1', 'Option1','Option1','Option1','Option1','Option1','Option1',
        'Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1'];

    const handleNext = ()=> {
        if (index < data.length-1) {
            if (correctAnswers[index] === option) {
                setScore(score+1);
            }
            setIndex(index+1);
            setOption(null);
        }
        else {
            if (correctAnswers[index] === option) {
                setScore(score + 1);
            }
            setFinish(true);
        }
    }
    if (finished) {
    return (
        <div className='scorePage'>
            <h1>Quiz Finished</h1>
            <h3>Your score is {score} out of {data.length}</h3>
        </div>
    )
}
    const handSelect = (optn)=> {
        setOption(optn);
    }
    return (
    <div className = 'quiz'>
        <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'Option1'? 'selected': ''} 
            onClick={()=> {handSelect('Option1')}}>{data[index].Option1}</li>
            <li className={option === 'Option2'? 'selected': ''} 
            onClick={()=> {handSelect('Option2')}}>{data[index].Option2}</li>
            <li className={option === 'Option3'? 'selected': ''} 
            onClick={()=> {handSelect('Option3')}}>{data[index].Option3}</li>
            <li className={option === 'Option4'? 'selected': ''} 
            onClick={()=> {handSelect('Option4')}}>{data[index].Option4}</li>
        </ul>
        <button onClick={handleNext} disabled={!option}>Next</button>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
    )
}