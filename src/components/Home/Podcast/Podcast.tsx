import React from "react";
import { Link } from "react-router-dom";
import { PodcastTypes } from "./Podcast.types";
import "./Podcast.scss";

export function Podcast(props: PodcastTypes.Props) {
  const { id, title, author, image } = props;

  return (
    <div className="podcast-item">
      <Link to={`/podcast/${id}`}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <span>Author: {author}</span>
      </Link>
    </div>
  );
}
