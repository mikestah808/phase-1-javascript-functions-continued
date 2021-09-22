function saturdayFun(thing = 'roller-skate') {
    return `This Saturday, I want to ${thing}!`;
}

saturdayFun();




function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

mondayWork();





function wrapAdjective(words = "*"){
    return function innerFunction(adj = "a hard worker") {
        let part1 = "special";
        return `You are ${words}${adj}${words}!`; 
    }
}


