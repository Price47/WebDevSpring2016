/**
 * Created by rockstar645 on 2/21/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(Configuration);

    function Configuration($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html",
                controller: "HomeController"
            })
            .when("/admin",{
                templateUrl: "views/admin/admin.view.html",
                controller: "AdminController"
            })
            .when("/forms",{
                templateUrl: "views/forms/forms.view.html",
                controller: "FormsController"
            })
            .when("/form-fields",{
                templateUrl: "views/forms/form-fields.view.html",
                controller: "FormFieldsController"
            })
            .when("/login",{
                templateUrl: "views/users/login.view.html",
                controller:"LoginController"
            })
            .when("/register",{
                templateUrl: "views/users/register.view.html",
                controller:"RegisterController"
            })
            .when("/profile",{
                templateUrl: "views/users/admin-profile.view.html",
                controller: "ProfileController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }
})();