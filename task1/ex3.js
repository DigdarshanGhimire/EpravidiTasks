function createCode(name, dob){
    let letters = name.slice(0,3);
    let nums  = dob.split("-")[0].slice(2);
    let survey_code = letters.toUpperCase() + nums;
    console.log(survey_code)
}

createCode("John","1995-06-15")