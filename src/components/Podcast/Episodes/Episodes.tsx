import { Link } from "react-router-dom";
import { map } from "lodash";
import { convertMsToHM, formatDate } from "../../../utils";
import { EpisodesTypes } from "./Episodes.types";
import "./Episodes.scss";

export function Episodes(props: EpisodesTypes.Props) {
  const { episodes, podcastId } = props;

  return (
    <table className="episodes">
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </tr>

      {map(episodes, (episode) => (
        <tr key={episode.trackId}>
          <td>
            <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
              {episode.trackName}
            </Link>
          </td>
          <td>{formatDate(episode.releaseDate)}</td>
          <td>{convertMsToHM(episode.trackTimeMillis)}</td>
        </tr>
      ))}
    </table>
  );
}
