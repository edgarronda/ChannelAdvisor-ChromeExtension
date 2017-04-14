// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/

//Check dates, if token expiration has been outdated
//send notification.
function IsTokenActive(){
  var NowMoment = moment().format("YYYY-MM-DD h:mm:ss A");
  var TokenExpirationDate = moment(localStorage.expiration).format("YYYY-MM-DD h:mm:ss A");  
  var isbefore = moment(NowMoment).isBefore(TokenExpirationDate);  

  if(!isbefore){
    show( "Token has been expired!");
  }
}

//Send notification.
function show(message) {  
    var NowMoment = moment().format('LTS');
    new Notification(NowMoment,{
      icon: '/assets/icon128x128.png',
      body: message
    });
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.Notification) {
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { IsTokenActive(); }

  var interval = 0; // The display interval, in minutes.

  setInterval(function() {
    interval++;

    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      IsTokenActive();
      interval = 0;
    }
  }, 60000);
}
