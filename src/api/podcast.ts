import { Storage } from "./storage";
import { EpisodeApiModel, PodcastApiModel } from "../models";

const storage = new Storage();

export class Podcast {
  private apiUrl = process.env.REACT_APP_API_URL;

  async getPodcasts() {
    try {
      const localResult = storage.getPodcasts();
      if (localResult) return localResult;

      const url = `${this.apiUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      storage.savePoscasts(result);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPodcast(id: string): Promise<PodcastApiModel> {
    try {
      const result = await this.getPodcasts();
      const podcasts: [PodcastApiModel] = result.feed.entry;

      const podcast = podcasts.find((item) => {
        return item.id.attributes["im:id"] === id;
      });

      if (!podcast) throw "Podcast no encontrado";

      return podcast;
    } catch (error) {
      throw error;
    }
  }

  async getEpisodes(podcastId: string) {
    try {
      const localResult = storage.getPodcast(podcastId);
      if (localResult) return localResult;

      const url = `${this.apiUrl}/lookup?id=${podcastId}&entity=podcastEpisode`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      storage.savePoscast(podcastId, result);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getEpisode(
    podcastId: string,
    episodeId: string
  ): Promise<EpisodeApiModel> {
    try {
      const result = await this.getEpisodes(podcastId);
      const episodes: [EpisodeApiModel] = result.results;

      const episode = episodes.find((item) => {
        return item.trackId === Number(episodeId);
      });

      if (!episode) throw "Episodio no encontrado";

      return episode;
    } catch (error) {
      throw error;
    }
  }
}
