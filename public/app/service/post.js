System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map', '../service/headers', '../service/login'], function(exports_1, context_1) {
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
    var http_1, core_1, headers_1, login_1;
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            PostService = class PostService {
                constructor(_http, _headerService, _loginService) {
                    this._http = _http;
                    this._headerService = _headerService;
                    this._loginService = _loginService;
                }
                getPosts() {
                    return this._http
                        .get('./api/posts')
                        .map(res => res.json());
                }
                insert(p) {
                    return this._http
                        .post('./api/posts', JSON.stringify(p), this._headerService.getJsonHeaders(this._loginService.getToken()))
                        .map(res => res.json());
                }
                delete(p) {
                    return this._http
                        .delete('./api/posts/' + p._id, this._headerService.getJsonHeaders(this._loginService.getToken()))
                        .map(res => res.json());
                }
            };
            PostService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, headers_1.HeadersService, login_1.LoginService])
            ], PostService);
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.js.map