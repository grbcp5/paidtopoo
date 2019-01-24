function onWageTypeSelected() {
  var hourlyChecked = document.getElementById("hourly").checked;
  var salaryChecked = document.getElementById("salary").checked;

  if( hourlyChecked && salaryChecked || !hourlyChecked && !salaryChecked ) {
    alert( "Please select either hourly or salary" );
    return;
  }

  var wageInputPlaceholder = "";
  if( hourlyChecked ) {
    wageInputPlaceholder = "Hourly wage";
  } else if( salaryChecked ) {
    wageInputPlaceholder = "Annual salary";
  }

  document.getElementById("wageInputPlaceholder").innerHTML = wageInputPlaceholder;
}

function onSubmit() {
 var hourlyChecked = document.getElementById("hourly").checked;
 var salaryChecked = document.getElementById("salary").checked;

  if( hourlyChecked && salaryChecked || !hourlyChecked && !salaryChecked ) {
    alert( "Please select either hourly or salary" );
    return;
  }
 
  var minutes = document.getElementById("minutes").value;
  var wages = document.getElementById("wages").value;

  var hrsPerYear = (minutes * 5 * 52) / 60;

  var paidToPoo = 0;
  if( hourlyChecked ) {
    paidToPoo = wages * hrsPerYear; 
  } else if( salaryChecked ) {
    var hrlyWage = wages / ( 52 * 40 );
    paidToPoo = hrlyWage * hrsPerYear;
  }

  alert( "You are paid $" + paidToPoo + " every year just to poop!" ); 
}
