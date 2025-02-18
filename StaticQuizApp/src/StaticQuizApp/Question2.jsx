function Question2(props) {
  
    return (
      <div className="h-60 w-120 bg-white shadow-md rounded-xl">
        <h1 className="text-xl font-mono pt-3 pl-2 pb-3">{props.answer}</h1>

        <p className="pb-1 pl-5">
            <p className="bg-red-200 h-10 w-100 rounded-sm">
                <p className="text-lg pt-2 pl-2 ">{props.answer1}</p>
            </p>
        </p>

        <p className="pb-1 pl-5">
            <p className="bg-green-200 h-10 w-100 rounded-sm">
                <h1 className="text-lg pt-2 pl-2">{props.answer2}</h1>
            </p>
        </p>

        <p className="pb-1 pl-5">
            <p className="bg-red-200 h-10 w-100 rounded-sm"> 
                <h1 className="text-lg pt-2 pl-2">{props.answer3}</h1>
            </p>
        </p>

        <p className="pb-1 pl-5">
            <p className="bg-red-200 h-10 w-100 rounded-sm">
                <h1 className="text-lg pt-2 pl-2">{props.answer4}</h1>
            </p>
        </p>
      </div>
    )
  }
  
  export default Question2
  