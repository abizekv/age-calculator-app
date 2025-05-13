export function calculateAge({birthDay, birthMonth, birthYear}) {

    const date = new Date()
    let currDay = date.getDate()
    let currMonth = date.getMonth() + 1
    let currYear = date.getFullYear()
   

    let dayDiff
    let monthDiff
    let yearDiff
    if (currDay >= birthDay) {
        dayDiff = currDay - birthDay
    } else {
        currMonth--
        const prevMonthDays = new Date(currYear, currMonth , 0).getDate()
        dayDiff = currDay + prevMonthDays - birthDay
    }

    if(currMonth >= birthMonth){
        monthDiff = currMonth - birthMonth
    } else{
        currYear --
        monthDiff = currMonth + 12 - birthMonth
    } 

    yearDiff = currYear - birthYear

    return {
        dayDiff,
        monthDiff,
        yearDiff
    }

}

