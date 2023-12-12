import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  postArray: Array<object> | any;
  // categoryObj: any;
  categoryArray: Array<object> | any;
  constructor(private route: ActivatedRoute, private postService: PostService, private catService: CategoriesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      // console.log(val)
      // this.categoryObj = val;
      this.catService.loadOneCat(val['id']).subscribe(cat=>{
        this.categoryArray = cat
      })
      this.postService.loadCategoryPost(val['id']).subscribe(post => {
        this.postArray = post
      })
    })
  }

}
