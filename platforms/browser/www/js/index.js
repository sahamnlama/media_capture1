function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}


// device APIs are available
//
function onDeviceReady() {
document.getElementById("audioCapture").addEventListener("click", audioCapture);
}
/*
      */
      function mediaSuccess(){

      };

      function audioCapture() {
        alert('dsfsdf1');
        alert(navigator.device.capture);
   var options = {
      limit: 1,
      duration: 10
   };
   navigator.device.capture.captureAudio(onSuccess, onError, options);
alert('dsfsdf');
   function onSuccess(mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         console.log(mediaFiles);
         alert(mediaFiles);
      }
   }

   function onError(error) {
      alert('Error code: ' + error.code, null, 'Capture Error');
   }
}
