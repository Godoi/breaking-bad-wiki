import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EpisodesService } from 'src/app/services/episodes.service';
import { take } from 'rxjs/operators';
import { IEpisodes } from 'src/app/shared/model/episodes';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  episodes: IEpisodes;

  constructor(private service: EpisodesService) {}

  ngOnInit() {
    this.setBackground();
    // this.getAllEpisodes();
    this.getEpisodeBySeason('2');
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
  getAllEpisodes() {
    this.subscriptions.add(
      this.service
        .getAllEpisodes()
        .pipe(take(1))
        .subscribe(res => {
          return (this.episodes = res);
        })
    );
  }
  getSpecificEpisode(id: number) {
    this.subscriptions.add(
      this.service
        .getSpecificEpisode(id)
        .pipe(take(1))
        .subscribe(res => {
          return (this.episodes = res);
        })
    );
  }
  getEpisodeBySeason(season: string) {
    this.subscriptions.add(
      this.service
        .getEpisodeBySeason(season)
        .pipe(take(1))
        .subscribe(res => {
          return (this.episodes = res);
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
