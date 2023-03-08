import { useErrorStore } from "../../store/store";

export const ErrorDisplay = () => {
  const { error, errorFlag } = useErrorStore((state) => state);
  const test = error ? error.message : null;

  return errorFlag ? (
    <div className="error container">
      <a className="error error-message ">{test}</a>
    </div>
  ) : null;
};
