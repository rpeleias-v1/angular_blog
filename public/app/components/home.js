System.register(['@angular/core', '../service/post', '../service/login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_1, login_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            HomeComponent = class HomeComponent {
                constructor(_postService, _loginService) {
                    this._postService = _postService;
                    this._loginService = _loginService;
                    this.showLoading = false;
                    this.loadAllPosts();
                }
                loadAllPosts() {
                    this.showLoading = true;
                    this._postService.getPosts().subscribe(p => this.onLoadAllPostsResults(p), err => console.log(err));
                }
                onLoadAllPostsResults(p) {
                    this.posts = p;
                    this.showLoading = false;
                }
                logout(event) {
                    this._loginService.logout();
                }
                checkPost(p) {
                    try {
                        if (p.user == null)
                            return false;
                        if (!this._loginService.isLogged())
                            return false;
                        return p.user._id == this._loginService.getUser()._id;
                    }
                    catch (error) {
                        return false;
                    }
                }
                deletePost(p) {
                    this._postService.delete(p).subscribe(result => this.onDeletePostResult(result), error => this.onDeletePostError(error));
                }
                onDeletePostResult(result) {
                    this.loadAllPosts();
                }
                onDeletePostError(error) {
                    console.log(error);
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    providers: [post_1.PostService],
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
                }), 
                __metadata('design:paramtypes', [post_1.PostService, login_1.LoginService])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map