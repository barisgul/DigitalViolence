// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const Url = "https://35sooetx1a.execute-api.eu-west-1.amazonaws.com/python-mail"
function setScreenshotUrl(url) {
  document.getElementById('target').src = url;
  //console.log("setScreenshotUrl:"+url);
}

function setCurrentUrl(url) {
  currentUrl = url;
  document.getElementById("url").innerHTML = currentUrl;
}

function setCurrentUrl(url) {
  currentUrl = url;
  console.log("ActiveUrl:" + url);
  console.log("CurrentUrl:" + currentUrl);
  document.getElementById("url").innerHTML = currentUrl;
}

function prepareData() {
  return new Promise(function (resolve, reject) {

    data = {
      img_code: document.getElementById('target').src,
      name_surname: document.getElementsByName('name_surname')[0].value,
      subject: document.getElementsByName('subject')[0].value,
      message: document.getElementsByName('message')[0].value,
      email: document.getElementsByName('email')[0].value,
      url: document.getElementById('url').innerHTML

    }
    if (data)
      resolve(data)
    else
      reject({})

  });
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('submit');


  button.addEventListener('click', function (e) {
    e.preventDefault()
    prepareData()
      .then((re) => {

        var request = new XMLHttpRequest();

        request.open("POST", Url, true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.setRequestHeader("Access-Control-Allow-Origin", Url)
        request.setRequestHeader("Access-Control-Allow-Origin", "*")

        request.send(JSON.stringify(re));

      })
      .catch((er) => { ; console.log(er); })

    console.log("click me");
  }, false);
}, false);

