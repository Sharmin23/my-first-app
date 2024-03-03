// export default function Todo({task,isDone}) {
//     return (
//         <div>
//            <li>Task:{task}</li> 
//         </div>
//     );
// }

// Conditional rendaring option :1

// export default function Todo({task,isDone}){
//    if(isDone === true){
//     return(
//         <>
//         <div>
//             <li>Finished:{task}</li>
//         </div>
//         </>
//     );
//    }

//    else{
//     return <li>Work on:{task}</li>
//    }
// }

//Conditional rendaring option:2

// export default function Todo ({task,isDone}){
//     if(isDone){
//         return<li>Finish:{task}</li>
//     }
//     return<li>Work on:{task}</li>
// }


//condiional rendaring option :3(ternary operator )
//  export default function Todo({task,isDone}){
//     return (
//         <li>{isDone? 'Finished' : 'work on'}:{task}</li>
//     )
//  }


//conditonal rendaring option:4 using && operator
  
// export default function Todo({task ,isDone}){
//     return (
//         <li>{task} { isDone && ':it is done'}</li>
//     )
// }


// //conditonal rendaring option:5 using OR(||) operator
  
export default function Todo({task ,isDone}){
    return (
        <li>{task} { isDone ||':Do it'}</li>
    )
}