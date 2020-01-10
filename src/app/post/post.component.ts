import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, // private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    // this.post = this.activatedRoute.snapshot.data.post;

    this.activatedRoute.data.subscribe((data) => {
      this.post = data.post;
    });

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   // console.log('Params: ', params);
    //   this.post = this.postsService.getById(parseInt(params.id, 10));
    // });
  }

  loadPost(): void {
    this.router.navigate(['/posts', 44]);
  }
}
