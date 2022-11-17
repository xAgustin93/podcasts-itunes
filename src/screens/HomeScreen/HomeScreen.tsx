import { useState, useEffect } from "react";
import { size, map } from "lodash";
import { createFilter } from "react-search-input";
import { Podcast as PodcastController } from "../../api";
import { Podcast, Search } from "../../components/Home";
import { PodcastApiModel } from "../../models";
import "./HomeScreen.scss";

const podcastController = new PodcastController();

const KEYS_TO_FILTERS = ["im:artist.label", "im:name.label"];

export function HomeScreen() {
  const [podcasts, setPodcasts] = useState<[PodcastApiModel] | null>(null);
  const [searchText, setSearchText] = useState("");
  const filteredPodcasts = podcasts?.filter(
    createFilter(searchText, KEYS_TO_FILTERS)
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await podcastController.getPodcasts();

        setPodcasts(response.feed.entry);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const onSearch = (text: string) => {
    setSearchText(text);
  };

  if (!podcasts) return null;

  return (
    <div className="home-screen">
      <div className="home-screen__search">
        <span>{size(filteredPodcasts)}</span>
        <Search onSearch={onSearch} />
      </div>

      <div className="home-screen__podcasts">
        {map(filteredPodcasts, (podcast, index) => (
          <div key={podcast.id.attributes["im:id"]}>
            <Podcast
              id={podcast.id.attributes["im:id"]}
              title={podcast["im:name"].label}
              author={podcast["im:artist"].label}
              image={podcast["im:image"][0].label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
