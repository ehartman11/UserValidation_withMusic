function validateInput(){
    //get the values of the input fields
    let zipCode = document.getElementById('zipCode').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    //combine the first and last name with a space in between. To be used in the instance the submittal is valid
    let combinedNames = firstName + ' ' + lastName;
    //remove the spaces from the name inputs then combine them in order to check for total characters present
    let namesTotalChar = (firstName.replace(/\s+/g, '')) + (lastName.replace(/\s+/g, ''));
    //check if total name length is exceeded
    if (namesTotalChar.length > 20){
        overLength = combinedNames.length - 20;
        // play the alert audio clip
        playAudio(alertAudio);
        // if the total length of the first and last name is invalid, inform the user and prevent the form from being submitted by returning false
        alert('You have ' + overLength + ' too many characters between your first and last name');
        return false;
    }
    //check if the zipcode is exactly 5 characters in length
    else if (zipCode.length != 5){
        // play the alert audio clip
        playAudio(alertAudio);
        // if the zipcode is not valid, alert the user and prevent the form from being submitted by returning false
        alert('Your zipcode requires a length of 5 digits');
        return false;
    }

    else{
        // play the approval audio clip
        playAudio(approvedAudio);
        //if validation checks are SAT then inform the user and process the submittal
        alert(combinedNames + '\n Your Submittal was Accepted');
    }
}

// create new audio clip objects 
// this increases the loading speed of the function
// and reduces the delay time of rendering and playing the audio clip after an event triggers it
alertAudio = new Audio('alert.mp3');
approvedAudio = new Audio('approved.mp3');

// a function to play a chosen audio clip 
// default looping is false
function playAudio(soundClip, _loop=false){
    soundClip.loop = _loop;
    soundClip.play();
}

