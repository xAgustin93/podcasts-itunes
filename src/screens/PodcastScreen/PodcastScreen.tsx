import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../api";
import { Profile, Episodes } from "../../components/Podcast";
import { PodcastScreenTypes } from "./PodcastScreen.types";
import "./PodcastScreen.scss";
import { PodcastApiModel } from "../../models";

const podcastController = new Podcast();

export function PodcastScreen() {
  const { id = "" } = useParams();
  const [episodes, setEpisodes] = useState<PodcastScreenTypes.Episodes | null>(
    null
  );
  const [podcast, setPodcast] = useState<PodcastApiModel | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await podcastController.getPodcast(id);
        setPodcast(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await podcastController.getEpisodes(id);
        setEpisodes(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  if (!episodes || !podcast) return null;

  return (
    <div className="podcast-screen">
      <div>
        <Profile podcast={podcast} />
      </div>
      <div>
        <div className="podcast-screen__total">
          <h3>Episodes: {episodes.resultCount}</h3>
        </div>
        <div className="podcast-screen__episodes">
          <Episodes episodes={episodes.results} podcastId={id} />
        </div>
      </div>
    </div>
  );
}
