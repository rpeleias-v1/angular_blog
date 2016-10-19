import { Component } from '@angular/core';
import { PostService } from '../service/post';
import { Post } from '../model';
import { LoginService } from '../service/login';
import { User } from '../model';

@Component({
    providers: [PostService],
    template: `
    <div class="alert alert-info" *ngIf="showLoading">
        Aguarde...
    </div>
    <div *ngIf="!showLoading">
        <div *ngIf="_loginService.isLogged()" class="alert alert-success">
            Olá {{_loginService.getUser().name}}
            <a #href="" (click)="logout($event)" class="pull-right">Sair</a>
        </div>
        <div class="jumbotron" *ngFor="let p of posts">
            <h1>{{p.title}}</h1>
            <p>{{p.text}}</p>
            <p>Por: {{p.user?.name}}</p>
            <a href="#" (click)="deletePost(p)" *ngIf="checkPost(p)">Apagar</a>
        </div>
    </div>
    `
})
export class HomeComponent {

    public posts: Array<Post>;
    private showLoading: boolean = false;

    constructor(private _postService: PostService, private _loginService: LoginService) {
        this.loadAllPosts();
    }

    loadAllPosts() {
        this.showLoading = true;
        this._postService.getPosts().subscribe(
            p => this.onLoadAllPostsResults(p),
            err => console.log(err)
        );
    }

    onLoadAllPostsResults(p) {
        this.posts = p;
        this.showLoading = false;
    }

    logout(event) {
        this._loginService.logout();
    }

    checkPost(p:Post) {
        try {
            if(p.user == null) return false;
            if(!this._loginService.isLogged()) return false;
            return p.user._id == this._loginService.getUser()._id;
        } catch (error) {
            return false;
        }
    }

    deletePost(p) {
        this._postService.delete(p).subscribe(
            result => this.onDeletePostResult(result),
            error => this.onDeletePostError(error)
        )
    }

    onDeletePostResult(result) {
        this.loadAllPosts();
    }

    onDeletePostError(error) {
        console.log(error);
    }
}