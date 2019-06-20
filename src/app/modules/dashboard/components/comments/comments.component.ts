import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: number;
  details;
  comments;

  constructor(private service: DashboardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      if (this.id) {
        forkJoin(
          this.service.fetchComments(this.id),
          this.service.fetchDetails(this.id)
        ).subscribe(res => {
          this.handleComments(res[0]);
          this.handleDetails(res[1]);
          
        })
      }
      else {
      
      }
    });
  }

  handleDetails(data){
    this.details = data;
    console.log(this.details)
  }

  handleComments(data){
    this.comments = data;
    console.log(this.comments)
  }

}
