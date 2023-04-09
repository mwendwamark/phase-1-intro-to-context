// Your code here
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  function createTimeInEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseFloat(hour, 10),
      date ,
    });
  
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseFloat(hour, 10),
      date ,
    });
  
    return employeeRecord;
  }
  
    function calculatePayroll(){

    }

    function hoursWorkedOnDate(employeeRecord, date ){
      const timeIn = employeeRecord.timeInEvents.find((event) => event.date === date)
      const timeOut = employeeRecord.timeOutEvents.find((event) => event.date === date)
      return (timeOut.hour - timeIn.hour)/100 
      
    }
    function allWagesFor(){

      
    }

    function wagesEarnedOnDate(){
      
    }
    function calculatePayroll(employeeRecords) {
      let totalPayroll = 0;
      for (let i = 0; i < employeeRecords.length; i++) {
        totalPayroll += allWagesFor(employeeRecords[i]);
      }
      return totalPayroll;
    }
    
    function allWagesFor(employeeRecord) {
      const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
      let totalWages = 0;
      for (let i = 0; i < datesWorked.length; i++) {
        totalWages += wagesEarnedOnDate(employeeRecord, datesWorked[i]);
      }
      return totalWages;
    }
    
    function wagesEarnedOnDate(employeeRecord, date) {
      const timeIn = employeeRecord.timeInEvents.find((event) => event.date === date);
      const timeOut = employeeRecord.timeOutEvents.find((event) => event.date === date);
      const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
      return hoursWorked * employeeRecord.payPerHour;
    }
    
        
    
        
    
