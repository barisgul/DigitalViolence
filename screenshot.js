// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
console.log("Started to working");
function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
} 
 
var currentURL;

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
function(tabs){
	getCurrentURL(tabs[0].url);
});

function getCurrentURL(tab){
	currentURL = tab;
}

console.log("Current url is: "+window.location.href);
console.log("Finished working");