// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("Started to working");

function setScreenshotUrl(url) {
  document.getElementById('target').src = url; 
  //console.log("setScreenshotUrl:"+url);
}   

function setCurrentUrl(url){
  console.log("ActiveUrl:"+url);
}   
 
