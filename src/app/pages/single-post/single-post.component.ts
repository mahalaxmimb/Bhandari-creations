import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postArray: any;
  similarPostArray : Array<object> | any;
  singlePostId: any;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.postService.countViews(val['id']);
      this.postService.loadOnePost(val['id']).subscribe(post => {
        this.postArray = post;
        this.singlePostId = val['id'];
        // console.log(this.singlePostId)
        this.loadSimilarPost(this.postArray.category.categoryId, this.singlePostId)
      })

    })

  }

  loadSimilarPost(catId:any, postId: any){
    this.postService.loadSimilar(catId,postId).subscribe(val=>{
      this.similarPostArray = val;
      // console.log(val)
    })
  }

}
