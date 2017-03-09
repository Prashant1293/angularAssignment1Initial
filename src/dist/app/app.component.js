"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const app_service_1 = require("./app.service");
let AppComponent = class AppComponent {
    // myInterns: Intern[];
    // formDate: Date[]=[];
    // formTitle: string[]=[];
    // formDescription: string[]=[];
    // formPriority: string[]=[];
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        //this.myInterns = this.service.interns;
        this.tasks = this.service.tasks;
    }
    // clickMe(param: string) {
    //   alert(param)
    // }
    // submit() {
    //   alert(JSON.stringify(this.intern.id))
    // }
    //  showFormValues(){
    //   alert("Tasks are :  "+this.service.tasks(0));
    //   //alert("date selected is "+this.formDate);
    //
    // }
    // saveTask(date:Date,title : string, desc : string, priority : string){
    //   this.service.tasks.push(new Task(date,title,desc,priority));
    //   this.tasks = this.service.tasks;
    //   alert("Task Created");
    // }
    showValues() {
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        providers: [app_service_1.AppService]
    }), 
    __metadata('design:paramtypes', [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map