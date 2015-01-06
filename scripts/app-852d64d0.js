"use strict";angular.module("sfmaker",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","mm.foundation"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("sfmaker").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("sfmaker").controller("MainCtrl",["$scope",function(e){e.awesomeThings=[{strengthNum:"strength1",title:"1st Strength"},{strengthNum:"strength2",title:"2nd Strength"},{strengthNum:"strength3",title:"3rd Strength"},{strengthNum:"strength4",title:"4th Strength"},{strengthNum:"strength5",title:"5th Strength"}],e.strength=[{name:"Achiever"},{name:"Activator"},{name:"Adaptability"},{name:"Analytical"},{name:"Arranger"},{name:"Belief"},{name:"Command"},{name:"Communication"},{name:"Competition"},{name:"Connectedness"},{name:"Consistency / Fairness"},{name:"Context"},{name:"Deliberative"},{name:"Developer"},{name:"Discipline"},{name:"Empathy"},{name:"Focus"},{name:"Futuristic"},{name:"Harmony"},{name:"Ideation"},{name:"Inclusiveness / Includer"},{name:"Individualization"},{name:"Input"},{name:"Intellection"},{name:"Learner"},{name:"Maximizer"},{name:"Positivity"},{name:"Relator"},{name:"Responsibility"},{name:"Restorative"},{name:"Self-Assurance"},{name:"Significance"},{name:"Strategic"},{name:"Woo"}],this.countries=[{label:"USA",id:1},{label:"India",id:2},{label:"Other",id:3}],this.selectedCountryId=2,this.selectedCountry=this.countries[1]}]),angular.module("sfmaker").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>Strengths Finder Maker</h1></div></div></div><div class="row"><div class="large-12"><p class="text-center">Please choose your top 5 strengths.</p></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in awesomeThings"><div class="caption"><h3>{{awesomeThing.title}}</h3><select ng-model="strengths"><option value="">- Select your Strength -</option><option ng-repeat="strength in strength" value="{{strength.name}}">{{strength.name}}</option></select></div></div></div><div class="row"><div class="large-12 text-center"><button>Submit</button></div></div><div class="row"><div class="large-12 columns"><hr><p>With ♥ from <a href="https://twitter.com/ZKM">@ZKM</a></p></div></div></div>'),e.put("components/navbar/navbar.html",'<nav class="top-bar row" ng-controller="NavbarCtrl"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp &amp; Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="left"><li><a ng-href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</a></li></ul></section></nav>')}]);