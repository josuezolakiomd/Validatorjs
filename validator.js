'use strict'

//---------- Refresh Page with sessionStorage -----------------
const refreshPage = () => {
  sessionStorage.setItem("reloaded", "true");
  window.location.reload();
}

const deleteRefreshSession = () => {
  const reloaded = sessionStorage.getItem('reloaded');

  if(reloaded) {
    sessionStorage.removeItem('reloaded')
  }
}
//--------------------------------------------------------------

// It's Checking if some var is set up

const IsSet = (myVar) => {
  return (myVar) ? true : false;
};

// It's typeof some var (String or Number)

const typeofInputValidate = (inputValue) => {
  const inputValueNaN = isNaN(inputValue);

  if(inputValueNaN) {
    return 'string';
  } else {
    return 'number';
  }
};





