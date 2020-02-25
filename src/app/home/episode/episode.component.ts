import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { EpisodesService } from 'src/app/services/episodes.service';
import { take, delay, finalize } from 'rxjs/operators';
import { IEpisodes } from 'src/app/shared/model/episodes';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  episodes: IEpisodes;
  loading: boolean;

  constructor(private service: EpisodesService) {}

  ngOnInit() {
    this.setBackground();
    this.getAllEpisodes();
  }
  setBackground() {
    document.getElementsByTagName('html')[0].classList.add('site-content');
  }
  getAllEpisodes() {
    this.loading = true;
    this.subscriptions.add(
      this.service
        .getAllEpisodes()
        .pipe(
          delay(150),
          finalize(() => (this.loading = false))
        )
        .subscribe(res => {
          return (this.episodes = res);
        })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
