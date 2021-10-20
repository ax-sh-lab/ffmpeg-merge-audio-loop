const editly = require("editly");

async function mergeAudioToVideo({ video, audio, output, ...options }) {
  const params = {
    defaults: {},
    // loopAudio: true,

    clips: [{ layers: [{ type: "video", path: video }] }],
    outPath: output,
    audioFilePath: audio,
    ...options,
  };
  await editly(params).catch(console.error);
}

mergeAudioToVideo({
  video: "/Users/axmin/Downloads/production ID_4812203.mp4",
  audio: "/Users/axmin/Desktop/OWL-KNIGHT/yoru_ni_kakeru.mp3",
  output: "./output.mp4",
  // width: 1920,
  // enableFfmpegLog: true,
  fast: false,
  // verbose: true,
});
