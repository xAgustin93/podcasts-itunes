import { hasExpired } from "../utils";

export class Storage {
  private SAVE_HOURS = 24;

  private PODCASTS = "podcasts";
  private PODCASTS_SAVE_TIME = "podcasts_save_time";

  savePoscasts(podcasts: []) {
    localStorage.setItem(this.PODCASTS, JSON.stringify(podcasts));

    const limitDate = new Date();
    limitDate.setHours(limitDate.getHours() + this.SAVE_HOURS);
    localStorage.setItem(
      this.PODCASTS_SAVE_TIME,
      JSON.stringify(limitDate.getTime())
    );
  }

  getPodcasts() {
    const date: string | null = localStorage.getItem(this.PODCASTS_SAVE_TIME);
    if (!date) return null;

    const expired = hasExpired(JSON.parse(date));
    if (expired) return null;

    const data: string | null = localStorage.getItem(this.PODCASTS);
    if (!data) return null;

    return JSON.parse(data);
  }

  savePoscast(id: string, podcast: any) {
    localStorage.setItem(id, JSON.stringify(podcast));

    const limitDate = new Date();
    limitDate.setHours(limitDate.getHours() + this.SAVE_HOURS);
    localStorage.setItem(`${id}_TIME`, JSON.stringify(limitDate.getTime()));
  }

  getPodcast(id: string) {
    const date: string | null = localStorage.getItem(`${id}_TIME`);
    if (!date) return null;

    const expired = hasExpired(JSON.parse(date));
    if (expired) return null;

    const data: string | null = localStorage.getItem(id);
    if (!data) return null;

    return JSON.parse(data);
  }
}
