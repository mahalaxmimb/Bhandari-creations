import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredpostArray : Array<object> | any;
  latestpostArray : Array<object> | any;
  constructor(private postService: PostService) {
    this.postService.loadFeatured().subscribe(val=>{
      this.featuredpostArray = val;
    })

    this.postService.loadLatest().subscribe(val=>{
      this.latestpostArray = val;
    })

   }

  ngOnInit(): void {

  }

}
