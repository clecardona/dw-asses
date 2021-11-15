export default function Progress({ progress }) {
  return (
    <div className="progress">
      <p>You're {progress}% done</p>
      <div className="bar-container">
        <div className="bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
