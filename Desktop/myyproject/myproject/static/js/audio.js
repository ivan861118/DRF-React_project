var player = document.getElementById('player');
const downloadLink = document.getElementById('download');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

/*
var handleSuccess = function(stream) {
    // 创建MediaStreamAudioSourceNode
    // Feed the HTMLMediaElement into it
    var audioCtx = new AudioContext();
    var source = audioCtx.createMediaStreamSource(stream);

    //创建一个可以通过JavaScript直接处理音频的ScriptProcessorNode.
    var processor = context.createScriptProcessor(1024,1,1);

    source.connect(processor);
    processor.connect(context.destination);

    processor.onaudioprocess = function(e){
    // The input buffer is the song we loaded earlier
    var inputBuffer = e.inputBuffer;

    // The output buffer contains the samples that will be modified and played
    var outputBuffer = e.outputBuffer;
    };
};
*/
var handleSuccess = function(stream){

    const options = {mimeType : "audio/webm\;codecs=opus"};
    const recordedChunks = [];
    const mediaRecorder = new MediaRecorder(stream, options);

    start.addEventListener('click',function(){
        mediaRecorder.start();
        console.log("record start!");
    });
    stop.addEventListener('click',function(){
        mediaRecorder.stop();
        console.log("record stop!");
    });

    mediaRecorder.addEventListener('dataavailable', function(e) {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    });

    mediaRecorder.addEventListener('stop', function() {
      downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
      downloadLink.download = 'acetest.wav';
    });

}


navigator.mediaDevices.getUserMedia({ audio: true, video: false })
.then(handleSuccess);



// navigator.permissions.query({name:'microphone'}).then(function(result) {
// if (result.state == 'granted') {
//     handleSuccess();
// } else if (result.state == 'prompt') {
    
// } else if (result.state == 'denied') {
//     console.log("user denied!");
// };

