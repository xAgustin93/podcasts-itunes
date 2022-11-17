import { EpisodeApiModel } from "../../../models";

export namespace EpisodesTypes {
  export type Props = {
    podcastId: string;
    episodes: [EpisodeApiModel];
  };
}
