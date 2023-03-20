//CHALLENGE 1

//create function which takes in students mark and returns corresponding grades
//prompt pop up to instruct teacher to  input student marks
//create if statements that return the appropriate mark in relation to the value of the grade

function studentMarks (mark){
    let mark = prompt("intput student marks")
    if(mark>79){
        return("A")
    }else if(mark<=79 && mark>=60){
        return("B")
    }else if(mark<=59 && mark>=40){
        return("c")
    }else if(mark<=49 && mark>=40){
        return("D")
    }else {
        return("E")
    }
    
}


