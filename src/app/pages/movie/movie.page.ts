import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  allMovie = [];
  curPage: number = 1;
  imageUrl = environment.images

  constructor(private loadCtrl:LoadingController,private comService: CommonService) { }

  ngOnInit() {
    this.getMovies();
  }

  async getMovies(event?) {
    const loading = await this.loadCtrl.create({
      message: "Please wait..",
      spinner: "bubbles"
    })

    await loading.present();
    this.comService.getMovie(this.curPage).subscribe((res) => {
      this.allMovie.push(...res.results);
      loading.dismiss();
      event?.target.complete();

      if(event){
        event.target.disabled = res.total_pages === this.curPage;
      }
    });
  }

  loadMore(event){
    this.curPage++;
    this.getMovies(event);
  }

}
