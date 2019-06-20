import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postId: number;
  list: any;
  userId: number;

  constructor(private service: DashboardService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchPost();
  }

  /**
   * to fetch the post and show them in the list on dashboard
   */
  fetchPost() {
    this.service.listPost(this.userId).subscribe(res => {
      console.log(res);
      this.list = res;
    })
  }
    
  /**
   * on View button click a post can be viewed
   */
  viewPost(id: number) {
    console.log('on click');
    this.router.navigate(['/comments', id]);
  }

  /**
   * Material dialog for edit/add posts
   * @param type 
   * @param post 
   */
  openDialog(type, post?){
    // this.router.navigate(['/dashboard/:id',]);
    console.log('on add/edit', post);
    let data;
    if(type == 'edit'){
      data = {
        type: 'Edit',
        title: post.title,
        body: post.body,
        userId: post.userId,
        id: post.id
      }
    }
    else{
      data = {
        type: 'Add',
        title: '',
        body: '',
        userId: '',
        id: ''
      }
    }
    
    const dialogRef = this.dialog.open(AddComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res == 'success'){
        this.fetchPost();
      }
    })
  }

 
}
