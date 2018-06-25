import { Http } from '@angular/http';
import { Component, OnInit, HostListener} from '@angular/core';
import {VideoServiceService} from './../video-service.service';
// import {Observable} from 'rxjs/Rx';
import { FilterPipe } from './../filter.pipe';
@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css'],
    providers: [Http]
})

export class VideogalleryComponent implements OnInit {
  title = 'Top 5 Articles';
  errorMessage: string;
  contentItems: any;
  response: any;
  pageNo: number;
  videoList: any = [];
  preResponseArr: any = [];
  showSearchBox: boolean;
  isScrolling: boolean;
  searchText: string;
  constructor(private videoService: VideoServiceService) {

  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.pageNo = 1;
    this.getVideos(this.pageNo);
  }
  getVideos(pageNo): void {
    this.videoService.getVideoList(pageNo).subscribe(
      result => {
        this.response = result;
        this.videoList = this.preResponseArr.concat(result['page']['content-items']['content']);
        this.preResponseArr = this.videoList;
        this.createModal(result);
      },
      error => console.log(error)
    );
  }
  createModal(articles) {
    this.contentItems = articles.page['content-items'];
    for (let i = 0; i < this.contentItems.content.length; i++) {
      this.contentItems.content[i].url = this.contentItems.content[i]['poster-image'];
    }
  }
  // Event on clicking the Search icon to searh for video from list
  searchButton() {
    this.showSearchBox = true;
  }
  // Event on clicking the back button to go back from search text box view to initial view
  backBtn() {
    this.showSearchBox = false;
    this.searchText = '';
  }
  // Scroll event when user scrolls vertically to see the video posters
  onWindowScroll(event) {
    const pos = event.target.scrollTop + event.target.offsetHeight;
    const max = event.target.scrollHeight;
    if (event.target.scrollTop > 0) {
      this.isScrolling = true;
    }
    if (pos >= max) {
      if (this.pageNo !== 3) { // this if condition provided only because mock service is used and only 3 json files are present
        this.pageNo++;
        this.getVideos(this.pageNo);
      }
    }
  }
}
