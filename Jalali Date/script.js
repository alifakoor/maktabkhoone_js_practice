var calculateAllDays = function(year, dayOfMonth, month, day)
{
    let helperYear = (month > 2) ? (year + 1) : year
    let days = 355666 + (365 * year) + parseInt((helperYear + 3) / 4) - parseInt((helperYear + 99) / 100) + parseInt((helperYear + 399) / 400) + day + dayOfMonth[month - 1]
    return days
}

var convertGregorianToJalali = function(year, month, day) 
{
    let dayOfMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    
    let allDays = calculateAllDays(year, dayOfMonth, month, day)
    
    let jalaliYear = -1595 + (33 * parseInt(allDays / 12053))
    
    allDays %= 12053
    
    jalaliYear += 4 * parseInt(allDays / 1461)
    
    allDays %= 1461
    
    if (allDays > 365) {
      jalaliYear += parseInt((allDays - 1) / 365)
      allDays = (allDays - 1) % 365
    }

    let jalaliMonth, jalaliDay
    if (allDays < 186) {
      jalaliMonth = parseInt(allDays / 31) + 1
      jalaliDay = (allDays % 31) + 1
    } else {
      jalaliMonth = parseInt((allDays - 186) / 30) + 7
      jalaliDay = ((allDays - 186) % 30) + 1
    }

    return { jalaliYear, jalaliMonth, jalaliDay }
}

var showTodayDate = function()
{
    var today = new Date()
    var fullYear = today.getFullYear()
    var month = today.getMonth() + 1
    var day = today.getDate()
    var jalali = convertGregorianToJalali(fullYear, month, day)
    document.getElementById("date").innerHTML = jalali.jalaliYear + '/' + jalali.jalaliMonth + '/' + jalali.jalaliDay
}