import Question1 from "./StaticQuizApp/Question1" 
import Question2 from "./StaticQuizApp/Question2"
import Question3 from "./StaticQuizApp/Question3"

function App() {
  
  return (
    <div className="ml-170">
      <h1 className="text-4xl font-mono">Static Quiz App</h1>
      <br/>
      <br/>

      <Question1
      answer = "What is the capital of france?"
      answer1 = "Berlin"
      answer2 = "Madrid"
      answer3 = "Paris"
      answer4 = "Lisbon"
      />
      
      <br/>
      <br/>

    <Question2 
      answer = "Who developed Reactjs?"
      answer1 = "Google"
      answer2 = "Facebook"
      answer3 = "Microsoft"
      answer4 = "Apple"
      />

      <br/>
      <br/>

    <Question3 
      answer = "Which Programming Used For?"
      answer1 = "Python"
      answer2 = "Java"
      answer3 = "JavaScript"
      answer4 = "C++"
      />

    </div>
  )
}

export default App
