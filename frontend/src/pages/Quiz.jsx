import React from 'react'
import AuthWrap from '../components/auth/AuthWrap.jsx'
import QuizBox from '../components/QuizBox.jsx'
import { quizzs_arr } from '../store/atoms.js'
import { useRecoilValueLoadable } from 'recoil'
function Quiz() {
  const quizQuestions = [
    {
      question: "What percentage of your income should ideally be saved each month?",
      options: ["10%", "20%", "30%", "50%"],
      correctAnswer: "20%"
    },
    {
      question: "What is the recommended minimum number of months' worth of living expenses to have saved in an emergency fund?",
      options: ["1 month", "3 months", "6 months", "12 months"],
      correctAnswer: "3 months"
    },
    {
      question: "What is the term for the interest rate you pay on credit card balances?",
      options: ["Annual Percentage Rate (APR)", "Fixed Rate", "Variable Rate", "Prime Rate"],
      correctAnswer: "Annual Percentage Rate (APR)"
    },
    {
      question: "What is the first step in creating a budget?",
      options: ["Track your expenses", "Set financial goals", "Calculate your income", "Review your credit score"],
      correctAnswer: "Calculate your income"
    },
      {
        question: "What is the 50/30/20 rule in personal finance?",
        options: ["Budgeting technique", "Investment strategy", "Savings plan", "Debt repayment method"],
        correctAnswer: "Budgeting technique"
      },
      {
        question: "What does APR stand for in the context of loans?",
        options: ["Average Payment Rate", "Annual Percentage Rate", "Additional Payment Requirement", "Adjusted Principal Return"],
        correctAnswer: "Annual Percentage Rate"
      },
      {
        question: "What is the concept of 'compound interest'?",
        options: ["Interest calculated on the principal amount only", "Interest calculated on the principal and interest accumulated over time", "Interest paid in advance", "Interest calculated based on market conditions"],
        correctAnswer: "Interest calculated on the principal and interest accumulated over time"
      },
      {
        question: "What does ROI stand for in finance?",
        options: ["Return on Investment", "Rate of Interest", "Risk of Inflation", "Revenue of Interest"],
        correctAnswer: "Return on Investment"
      },
      {
        question: "What is the purpose of a FICO score?",
        options: ["To assess annual income", "To determine net worth", "To evaluate credit risk", "To calculate investment returns"],
        correctAnswer: "To evaluate credit risk"
      },
      {
        question: "Which of the following is an example of a liquid asset?",
        options: ["Real estate", "401(k) account", "Stocks", "Savings account"],
        correctAnswer: "Savings account"
      },
      {
        question: "What does the term 'dollar-cost averaging' refer to?",
        options: ["Investing a fixed amount of money at regular intervals", "Investing in high-risk stocks", "Investing in foreign currencies", "Investing in commodities"],
        correctAnswer: "Investing a fixed amount of money at regular intervals"
      },
      {
        question: "What is the purpose of diversification in investment?",
        options: ["To minimize risk by spreading investments across different assets", "To maximize returns by concentrating investments in high-performing assets", "To reduce taxes on investment income", "To guarantee a fixed rate of return"],
        correctAnswer: "To minimize risk by spreading investments across different assets"
      },
      {
        question: "What is the 'Rule of 72' used for in finance?",
        options: ["To calculate mortgage payments", "To estimate the amount of time it takes for an investment to double", "To determine eligibility for a loan", "To calculate income tax deductions"],
        correctAnswer: "To estimate the amount of time it takes for an investment to double"
      },
      {
        question: "What is the primary purpose of creating a will?",
        options: ["To establish a trust fund", "To allocate assets after death", "To avoid bankruptcy", "To create a retirement plan"],
        correctAnswer: "To allocate assets after death"
      },
    
  ];
  
  const quizzLoadable = useRecoilValueLoadable(quizzs_arr);
  switch(quizzLoadable.state){
    case 'hasValue' : return (<div className='flex justify-center items-center flex-col gap-2'>
      <h2 className='text-4xl tracking-tighter text-gray-700 sans-serif'>Financial Quiz</h2>
      {quizzLoadable.contents.map((t)=> <div> <QuizBox question={t.question} options={t.options} correctAnswer={t.correctAnswer}/> </div>)}
    </div>)
    case 'hasError' : return (<div> 
      <div className='flex justify-center items-center flex-col gap-2'>
      <h2 className='text-4xl tracking-tighter text-gray-700 sans-serif'>Financial Quiz</h2>
      {quizQuestions.map((t)=> <div> <QuizBox question={t.question} options={t.options} correctAnswer={t.correctAnswer}/> </div>)}
    </div>
    </div>)
    case 'isLoading' : return (<div>
      "loading ..."
    </div>)
  }  
}

export default Quiz