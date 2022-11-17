import { createBrowserRouter } from "react-router-dom";
import { BasicLayout } from "../layouts";
import { HomeScreen, PodcastScreen, EpisodeScreen } from "../screens";
import { combineLayoutScreen } from "../utils";

export const router = createBrowserRouter([
  {
    path: "/",
    element: combineLayoutScreen(BasicLayout, HomeScreen),
  },
  {
    path: "/podcast/:id",
    element: combineLayoutScreen(BasicLayout, PodcastScreen),
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: combineLayoutScreen(BasicLayout, EpisodeScreen),
  },
]);
