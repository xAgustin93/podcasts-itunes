import { EpisodeApiModel } from "../../models";

export namespace PodcastScreenTypes {
  export type Episodes = {
    resultCount: number;
    results: [EpisodeApiModel];
  };
}
