import "./Loading.css";
const Loading = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-button"></div>
      <ul className="skeleton-list">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <li key={item} className="skeleton-item">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton-actions">
              <div className="skeleton skeleton-action-btn"></div>
              <div className="skeleton skeleton-action-btn"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;
