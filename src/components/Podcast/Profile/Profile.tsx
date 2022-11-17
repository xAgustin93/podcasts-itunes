import { ProfileTypes } from "./Profile.types";
import "./Profile.scss";

export function Profile(props: ProfileTypes.Props) {
  const { podcast } = props;

  return (
    <div className="podcast-profile">
      <img src={podcast["im:image"][1].label} alt={podcast["im:name"].label} />

      <h2>{podcast["im:name"].label}</h2>
      <span>by {podcast["im:artist"].label}</span>

      <span>Description</span>
      <p>{podcast.summary.label}</p>
    </div>
  );
}
