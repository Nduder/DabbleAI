// current Icons : ImageIcon, TextIcon

export const ImageIcon = ({
  clickSelectThisFeature,
  featureName,
  currentFeature,
}) => {
  const activeStatus = currentFeature == featureName ? "active" : "inactive";
  console.log(activeStatus);
  return (
    <a
      className={"icon-container " + activeStatus}
      onClick={(e) => clickSelectThisFeature(featureName)}
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
      className={"icon-container " + activeStatus}
      onClick={(e) => clickSelectThisFeature(featureName)}
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
