import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });
    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log('Fragment: ', fragment);
    });
  }

  showIdsProgram(): void {
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true },
      fragment: 'program-fragment',
    });
  }
}
