function AudioBar({ audioPlaying }) {
  if (!audioPlaying) {
    return <></>;
  }
  return (
    <>
      <p>Audio Playing</p>
    </>
  );
}

export default AudioBar;
