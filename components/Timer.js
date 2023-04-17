import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer({ onFinish }) {
  return (
    <div className="fixed top-4 right-4">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        strokeWidth={6}
        size={100}
        colors={[
          ["#218380", 0.33],
          ["#EF798A", 0.33],
          ["#3F88C5", 0.33],
        ]}
        onComplete={onFinish}
      >
        {({ remainingTime }) => (
          <div className="text-white">
            {/* <h2>Time Remaining:</h2> */}
            <div>{remainingTime}s</div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
