import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../api";
import { Profile } from "../../components/Podcast";
import { EpisodeApiModel, PodcastApiModel } from "../../models";
import "./EpisodeScreen.scss";

const podcastController = new Podcast();

export function EpisodeScreen() {
  const { podcastId = "", episodeId = "" } = useParams();
  const [podcast, setPodcast] = useState<PodcastApiModel | null>(null);
  const [episode, setEpisode] = useState<EpisodeApiModel | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await podcastController.getPodcast(podcastId);
        setPodcast(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await podcastController.getEpisode(
          podcastId,
          episodeId
        );
        setEpisode(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  if (!podcast || !episode) return null;

  return (
    <div className="episode-screen">
      <div>
        <Profile podcast={podcast} />
      </div>
      <div>
        <div className="episode-screen__info">
          <h3>{episode.trackName}</h3>
          <p dangerouslySetInnerHTML={{ __html: episode.description }} />
          <audio src={episode.previewUrl} controls />
        </div>
      </div>
    </div>
  );
}
