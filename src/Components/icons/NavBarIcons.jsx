// current Icons : ImageIcon, TextIcon

const onEnterKey = (e, selectFeature, featureName) => {
  if (e.code == "Enter") selectFeature(featureName);
};

export const ImageIcon = ({
  clickSelectThisFeature,
  featureName,
  currentFeature,
}) => {
  const activeStatus = currentFeature == featureName ? "active" : "inactive";
  console.log(activeStatus);
  return (
    <a
      className={featureName + " icon-container " + activeStatus}
      onClick={(e) => clickSelectThisFeature(featureName)}
      tabIndex={2}
      onKeyDown={(e) => onEnterKey(e, clickSelectThisFeature, featureName)}
    >
      <svg
        className="imageI icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z" />
      </svg>
    </a>
  );
};

export const TextGenIcon = ({
  clickSelectThisFeature,
  featureName,
  currentFeature,
}) => {
  const activeStatus = currentFeature == featureName ? "active" : "inactive";
  return (
    <a
      className={featureName + " icon-container " + activeStatus}
      onClick={(e) => clickSelectThisFeature(featureName)}
      tabIndex={1}
      onKeyDown={(e) => onEnterKey(e, clickSelectThisFeature, featureName)}
    >
      <svg
        className="textI icon "
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </svg>
    </a>
  );
};

export const SettingsIcon = ({
  clickSelectThisFeature,
  featureName,
  currentFeature,
}) => {
  const activeStatus = currentFeature == featureName ? "active" : "inactive";
  return (
    <a
      className={featureName + " icon-container " + activeStatus}
      onClick={(e) => clickSelectThisFeature(featureName)}
      tabIndex={3}
      onKeyDown={(e) => onEnterKey(e, clickSelectThisFeature, featureName)}
    >
      <svg
        className="settingsI icon "
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </g>
      </svg>
    </a>
  );
};
