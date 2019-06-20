import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
/**
 * lists all the posts
 * @param userId 
 */
  listPost(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', userId);
  }

  /**
   * 
   * @param id 
   */
  fetchDetails(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /**
   * fetching the list of comments
   * @param id 
   */
  fetchComments(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');

  }
  /**
   * add a new post
   * @param data 
   */
  createPost(data){
    return this.http.post('https://jsonplaceholder.typicode.com/posts/',data);
  }

  /**
   * updating a post
   * @param data 
   */
  updatePost(data){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/',data);
  }

}
