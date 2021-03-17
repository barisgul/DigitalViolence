// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const errorStatusCode = [300, 400, 401, 402, 403, 404, 405, 500, 501, 502]

const Url = "https://2120epnw02.execute-api.us-east-2.amazonaws.com/DigitalViolence"
function setScreenshotUrl(url) {
  document.getElementById('target').src = url; 
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
function sendMail(data) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = "./messages/success.html"
    }
    else if (errorStatusCode.includes(this.status)) {
      window.location.href = "./messages/error.html"
    }
  };


  request.open("POST", Url, true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.setRequestHeader("Access-Control-Allow-Origin", Url)
  request.setRequestHeader("Access-Control-Allow-Origin", "*")
  request.send(JSON.stringify(data));

}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('submit');


  button.addEventListener('click', function (e) {
    e.preventDefault()
    prepareData()
      .then((re) => {

        sendMail(re)

      })
      .catch((er) => { ; console.log(er); })

    console.log("click me");
  }, false);
}, false);

