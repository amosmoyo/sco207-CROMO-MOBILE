(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<br/><br/><br/><br/>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"sub-main\">\r\n    <h2>About</h2>\r\n    <p>\r\n      CROMO MOBILE STRORE is a Simple MEANSTACK application, that  is,  its main areas are MongoDB,<br> Express, Angular and Nodejs.\r\n    </p>\r\n    <h3>Objective</h3>\r\n    <p>The objective of the project is trying to see how we can create a fullstack web application,<br>\r\n      thats is responsive, is functional and error free.\r\n    </p>\r\n    <h3>Areas of Coverage</h3>\r\n    <h4>Frontend</h4>\r\n    <p>I used Angular2, angular material, angular cdk, bootstrap, css and html5.</p>\r\n    <h4>Server</h4>\r\n    <div class=\"mid\">\r\n      <p>I used nodejs, express and  Mongoose. installed some middleware,</p>\r\n      <dl>\r\n        <h4>Middleware APIs</h4>\r\n        <dt>cors</dt>\r\n        <dd>\r\n          for resourse sharing (client-server communications).\r\n        </dd>\r\n        <dt>\r\n          body-parser/ Express.json()\r\n        </dt>\r\n        <dd>\r\n          To work with JSON data format\r\n        </dd>\r\n        <dt>\r\n          multer\r\n        </dt>\r\n        <dd>To handle images</dd>\r\n        <dt>\r\n          bcryptjs\r\n        </dt>\r\n        <dd>\r\n          To salt and  hash passwords(encryption)\r\n        </dd>\r\n        <dt>\r\n          jsonwebtoken\r\n        </dt>\r\n        <dd>\r\n          Generating data tokens for authetification purpose.\r\n        </dd>\r\n        <dt>passport and passport-jwt</dt>\r\n        <dd>To guard and protect routes.</dd>\r\n      </dl>\r\n    </div>\r\n    <br>\r\n    <h4>Key Points</h4>\r\n    <p>I used,  cors , express.json() to work with json data format, multer to hundle images, bcryptjs to hash password,  </p>\r\n    <h4>Database</h4>\r\n    <p>I used mongodb.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart-items/cart-items.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart-items/cart-items.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main\">\r\n\t<mat-card id=\"matCard\">\r\n  <div class=\"row\" id=\"row-one\">\r\n    <div class=\"col-md-7\"><p style=\"text-align: left; margin-right: 10px;\"><i class=\"fa fa-shopping-cart\"></i></p></div>\r\n    <div class=\"col-md-5\"><h2>Items In Cart</h2></div>\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n   <mat-card  class=\"col-md-9\" *ngFor=\"let item of items\" class=\"cart-item\">\r\n    <div class=\"cart-item-child\">\r\n      <span>{{item.name}}</span>\r\n      <span>{{item.price | currency}}</span>\r\n      <span><button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-one\" >CROMO</button></span>\r\n   </div>\r\n   </mat-card>\r\n  </div>\r\n  <br><br>\r\n  <div class=\"row\">\r\n    <mat-card  class=\"col-md-9\"class=\"cart-item\">\r\n     <div class=\"cart-item-child\">\r\n       <button type=\"button\" class=\"btn btn-success\" id=\"btn-one\" (click)=\"pay(total)\">BUY</button>\r\n    </div>\r\n    </mat-card>\r\n   </div>\r\n  <br><br>\r\n\r\n  <div class=\"row\">\r\n    <mat-card class=\"col-md-9\" class=\"summary\" >\r\n      <div class=\"cart-item-child\">\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-three\" [routerLink]=\"['/home/products']\">Add More/ Back</button>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"clearCart()\" >Clear Cart</button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\t</mat-card>\r\n\t<br>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" class=\"d-block mb-2\" role=\"img\" viewBox=\"0 0 24 24\" focusable=\"false\"><title>Product</title><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94\"/></svg>\r\n          <small class=\"d-block mb-3 text-muted\">&copy; 2017-2020</small>\r\n    </div>\r\n    <div class=\"col-6 col-md\">\r\n          <h5>Products</h5>\r\n          <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">Infinix</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">SumSung</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">Tecno</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">CROMO</a></li>\r\n          </ul>\r\n    </div>\r\n    <div class=\"col-6 col-md\">\r\n          <h5>Payments</h5>\r\n          <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">Stripe</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">Stripe API</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">Stripe CheckoutJs</a></li>\r\n          </ul>\r\n    </div>\r\n    <div class=\"col-6 col-md\">\r\n          <h5>Developer</h5>\r\n          <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\" href=\"https://github.com/amosmoyo\">amosmoyo</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">SCO207_WEB_PROJECT</a></li>\r\n            <li><a class=\"text-muted\" href=\"javascript:void()\">GROUP_4</a></li>\r\n            <li><a class=\"text-muted\" href=\"#\">Source_Code</a></li>\r\n          </ul>\r\n    </div>\r\n    <div class=\"col-6 col-md\">\r\n          <h5>About</h5>\r\n          <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\"  [routerLink] = \"['/']\">CROMO_STORE</a></li>\r\n            <li><a class=\"text-muted\"  [routerLink]=\"['/home/products']\">Products</a></li>\r\n            <li><a class=\"text-muted\"  routerLink=\"/user/signup\">Register</a></li>\r\n            <li><a class=\"text-muted\"  routerLink=\"/user/login\">Login</a></li>\r\n          </ul>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"head\" >\n    <div class=\"sub-head\">\n      <div class=\"heading\">\n        <h2>CROMO Mobile Stores</h2>\n        <em>home of all portable gadgets</em>\n      </div>\n      <br>\n      <div class=\"content\">\n        <p><i class=\"fa fa-shopping-cart\"></i></p>\n        <p>\n          <span class=\"content-span\">\n             We offer the best brands of phones in Kenya. Come, Connect with us and trust me you, you will never regret.\n          </span>\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"gap\">\n  </div>\n  <br>\n  <div class=\"overview\">\n    <app-overview></app-overview>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\" [routerLink] = \"['/']\">CROMO</a>\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"\n      [routerLink] = \"['/']\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions] =\"{exact:true}\"\n      >Home</a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav amos\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\"\n        [routerLink]=\"['/home/products']\"\n        routerLinkActive=\"active\">Products</a>\n    </li>\n  </ul>\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" routerLink='/home/about' routerLinkActive=\"active\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLinkActive=\"active\">Contacts</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Events\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" href=\"#\">Partnership</a>\n        </div>\n      </li>\n    </ul>\n    <div class=\"navbar-header ml-auto\">\n      <ul class=\"navbar-nav\">\n        <li  class=\"nav-item\" *ngIf=\"!!isUserAuth\">\n          <a\n            class=\"nav-link\"\n            routerLink='/user/dashboard'\n            routerLinkActive=\"active\">Dashboard</a>\n        </li>\n        <li  class=\"nav-item\" *ngIf=\"!isUserAuth\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/user/login\"\n            routerLinkActive=\"active\">Login</a>\n        </li>\n        <li  class=\"nav-item\" *ngIf=\"!isUserAuth\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/user/signup\"\n            routerLinkActive=\"active\">Signup</a>\n        </li>\n        <li  class=\"nav-item\" *ngIf=\"!!isUserAuth\">\n          <a\n            class=\"nav-link\"\n            href=\"javascript:void()\"\n            (click)=\"onLogout()\"\n          >Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<!--<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n        <a class=\"navbar-brand\" href=\"javascript:void()\">goOrganic</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n          <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/']\" >Home <span></span></a>\n                </li>\n          </ul>\n          <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" >Dashboard </a>\n                </li>\n                <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" >Profile </a>\n                </li>\n                <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/user/signin-form']\" >Login </a>\n                </li>\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n                  <a class=\"nav-link\" [routerLink]=\"['/user/signup-form']\" >Register</a>\n                </li>\n          </ul>\n        </div>\n  </nav>-->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/overview/overview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/overview/overview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br><br><br>\n  <div class=\"head\">\n   <h3 class=\"sponsor-head\">CROMO Mobile Store</h3>\n   <p>Is the leading online mobile store in kenya</p>\n   <p>\n     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quod perferendis suscipit, dolorem laboriosam sint. Cupiditate sint animi dolores. Ipsum repudiandae deserunt quam enim, sit obcaecati voluptatibus hic atque necessitatibus, esse eum consequuntur natus rerum sapiente, ducimus nisi? Aperiam rem ipsum reiciendis, quasi quae corrupti necessitatibus autem facilis nostrum iusto praesentium ipsa numquam labore quo odio tempore ducimus quod? Illum, vitae repudiandae. Minus ad totam dignissimos beatae, officiis quidem dolore veritatis rem eaque nisi quod error itaque possimus facere quas laborum earum ea, repellendus nobis mollitia. Architecto, sed? Totam tempore voluptates fuga. Nesciunt, pariatur maiores voluptas animi et dolor ipsa!\n   </p>\n  </div>\n  <br><br><br><br>\n  <mat-card class=\"card-main\" [title]=\"'Click to view product list'\">\n\n    <div class=\"row\" *ngIf=\"products\" style=\"margin: 0; padding: 0; background-color: #fff;\">\n\n      <div class=\"col-md-6\" [routerLink]=\"['/home/products']\">\n        <div  class=\"mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden pro-alternatwo\">\n                <div class=\"my-3 py-3\">\n                  <h2 class=\"display-5\">Top selling products</h2>\n                  <p class=\"lead\">This is the best selling product this month.</p>\n                </div>\n                <div class=\"bg-light shadow-sm mx-auto child \">\n                  <h3 class=\"display-5\" style=\"color: rgb(74, 146, 212);\">{{productOne.name}}</h3>\n                  <img [src]=\"productOne?.imageUrl\"  [alt]=\"productOne?.name\">\n                   <div class=\"proone-details\">\n                    <p style=\"color: rgb(74, 146, 212);\">\n                      <br>\n                      <span>{{productOne?.price | currency:\"ksh \": \"symbol\": \"1.2-2\"}}</span><br>\n                        <span>Serial: {{productOne?.productCode}}</span>\n                        <app-star [rating]=\"productOne?.starRating\"></app-star>\n                        <span>{{productOne?.description}}</span>\n                    </p>\n                   </div>\n                </div>\n        </div>\n       </div>\n\n       <div class=\"col-md-6\" [routerLink]=\"['/home/products']\">\n        <div class=\"mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden pro-alternaone\">\n                <div class=\"my-3 p-3\">\n                  <h2 class=\"display-5\" style=\"color: rgb(74, 146, 212);\">Top Brand</h2>\n                  <p class=\"lead\" style=\"color: rgb(74, 146, 212);\">This is all time best brand phone in our store.</p>\n                </div>\n                <div id=\"two\" class=\"shadow-sm mx-auto child\">\n                  <h3 class=\"display-5\">{{productTwo.name}}</h3>\n                  <img [src]=\"productTwo?.imageUrl\"  [alt]=\"productOne?.name\">\n                  <div class=\"protwo-details\">\n                    <p>\n                      <br>\n                      <span>{{productTwo?.price | currency:\"ksh \": \"symbol\": \"1.2-2\"}}</span><br>\n                        <span>Serial: {{productTwo?.productCode}}</span>\n                        <app-star [rating]=\"productTwo?.starRating\"></app-star>\n                        <span>{{productTwo?.description}}</span>\n                    </p>\n                   </div>\n                </div>\n          </div>\n       </div>\n\n    </div>\n  </mat-card>\n  <br><br><br><br>\n  <mat-card class=\"card-main\" [title]=\"'Click'\">\n    <div class=\"row\"  style=\"margin: 0; padding: 0; background-color: #fff;\">\n      <div class=\"col-md-6\">\n        <div  class=\"mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden pro-alternaone\">\n                <div class=\"my-3 py-3\">\n                  <h2 class=\"display-5\" style=\"color: rgb(74, 146, 212);\">About Us</h2>\n                  <p class=\"lead\" style=\"color: rgb(74, 146, 212);\">Learn more about CROMO Mobile Store</p>\n                </div>\n                <div class=\"shadow-sm mx-auto child\">\n                  <img src=\"assets/images/face-7.jpg\">\n                  <br>\n                  <p style=\"color: #fff;\">Learn more about us in our about page.</p>\n                </div>\n        </div>\n       </div>\n       <div class=\"col-md-6\">\n        <div class=\"mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden pro-alternatwo\">\n                <div class=\"my-3 p-3\">\n                  <h2 class=\"display-5\" style=\"color: #fff;\">Our Services</h2>\n                  <p class=\"lead\" style=\"color: #fff;\">We deal with all brand of phones.</p>\n                </div>\n                <div id=\"two\" class=\"shadow-sm mx-auto child\" style=\"background-color: #fff;\">\n                  <img src=\"assets/images/shop2.jpeg\">\n                  <br>\n                  <p style=\"color: rgb(74, 146, 212);\">Come, connect and explore the world with us.</p>\n                </div>\n          </div>\n       </div>\n    </div>\n  </mat-card>\n  <br><br><br><br>\n\n  <div class=\"sponsor\">\n    <h3><span class=\"sponsor-head\">Sponsors</span></h3>\n    <div class=\"row sponsor\">\n      <div class=\"logo amazon col-md-4\" >\n        <a href=\"https://www.amazon.com/\">\n          <img src=\"assets/images/amazon.jpg\" id=\"amazon\" alt=\"'amazon logo'\">\n        </a>\n      </div>\n      <div class=\"logo killmall col-md-4\">\n        <a href=\"https://www.kilimall.co.ke/new/help/article/2097\">\n          <img src=\"assets/images/killmall.jpg\" id=\"killmall\" alt=\"'killmall kenya logo'\">\n        </a>\n      </div>\n      <div class=\"log jumia col-md-4\">\n        <a href=\"https://www.jumia.co.ke/\">\n          <img src=\"assets/images/jumia.jpg\" id=\"jumia\" alt=\"'jumia kenya logo'\">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--<div class=\"row\">\n  <div class=\"col-md-6\">\n          <div id=\"one\" class=\"mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden\">\n                  <div class=\"my-3 py-3\">\n                    <h2 class=\"display-5\">Top Product</h2>\n                    <p class=\"lead\">This is the best selling product this month.</p>\n                  </div>\n                  <div class=\"bg-light shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0\"></div>\n          </div>\n  </div>\n  <div class=\"col-md-6\">\n          <div class=\"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n                  <div class=\"my-3 p-3\">\n                    <h2 class=\"display-5\">New Products</h2>\n                    <p class=\"lead\">Some of our products.</p>\n                  </div>\n                  <div id=\"two\" class=\"shadow-sm mx-auto\" style=\"width: 80%; height: 300px; border-radius: 21px 21px 0\"></div>\n            </div>\n  </div>\n\n      <div class=\"row mx-2 p-3 d-flex justify-content-center\">\n      <mat-card class=\"m-2\" style=\"width: 18rem;\" *ngFor=\"let product of products\"  [routerLink]=\"['/home/products']\">\n        <mat-card-header>\n          <mat-card-title>{{product?.name}}</mat-card-title>\n          <mat-card-subtitle>New brand!</mat-card-subtitle>\n\n       </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <div class=\"row\">\n             <img [src]=\"product?.imageUrl\" class=\"card-img-top\" [alt]=\"product?.name\">\n             <p>\n             <br>\n             <span>{{product?.price | currency:\"ksh \": \"symbol\": \"1.2-2\"}}</span><br>\n               <span>Serial: {{product?.productCode}}</span><br>\n               <app-star [rating]=\"product?.starRating\"></app-star><br>\n               <span>{{product?.description}}</span>\n             </p>\n           </div>\n         </mat-card-content>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, id.</p>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n</div>-->\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-detail/product-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\r\n  <div class=\"sub-main\" *ngIf=\"product\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <br>\r\n        <h2>{{product?.name}}</h2>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n      <img [src]=\"product?.imageUrl\" [alt]=\"product?.name\">\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <br>\r\n        <strong>Price: </strong><span> {{ product?.price | currency:'Ksh': 'symbol':'1.2-2'}}</span><br>\r\n        <strong>Realese Date:</strong><span> {{product?.releaseDate}}</span><br>\r\n        <strong>Product Code:</strong><span> {{product?.productCode}}</span><br>\r\n        <app-star [rating]=\"product?.starRating\"></app-star>\r\n        <div>\r\n          <h3>Product Details</h3>\r\n          <p class=\"details\">{{product?.details}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary \"  id=\"btn-one\" (click)=\"pay(total)\">___Buy</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn-two\" (click)=\"addToCart(product)\">Add to Cart</button>\r\n    </div>\r\n    <div>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"btn_three\" [routerLink]=\"['/home/products']\">___Back</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-list/product-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-list/product-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n  <h2>Product List</h2>\n  <hr>\n  <div class=\"row\">\n    <span><input type=\"text\" class=\"form-control\" [(ngModel)]=\"listfilter\" placeholder=\"search...\"></span>\n    <span><i class=\"fa fa-search\"></i></span>\n  </div>\n  <br>\n  <app-product-thumbnail [products]=\"filteredArr\" (onRoute)=\"OnRouting($event)\"></app-product-thumbnail>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-thumbnail/product-thumbnail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-thumbnail/product-thumbnail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-2 p-3 d-flex justify-content-center\">\r\n  <mat-card class=\"m-2\" style=\"width: 18rem;\" id=\"matCard\" *ngFor=\"let product of products\" (click)=\"route(product.productId)\" [title]=\"'Click to view product details'\">\r\n    <mat-card-header>\r\n      <mat-card-title  class=\"mat-card-title\">{{product?.name}}</mat-card-title>\r\n      <mat-card-subtitle>New brand!</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n    <mat-card-content>\r\n     <div class=\"row\">\r\n        <img [src]=\"product?.imageUrl\" class=\"card-img-top\" [alt]=\"product?.name\">\r\n        <p>\r\n        <br>\r\n        <span>{{product?.price | currency:\"ksh \": \"symbol\": \"1.2-2\"}}</span><br>\r\n          <span>Serial: {{product?.productCode}}</span><br>\r\n          <app-star [rating]=\"product?.starRating\"></app-star><br>\r\n          <span>{{product?.description}}</span>\r\n        </p>\r\n        <p class=\"grad\">Click to view in product-details</p>\r\n      </div>\r\n    </mat-card-content>\r\n    <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, id.</p>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>-->\r\n</mat-card>\r\n</div>\r\n\r\n<!--<div class=\"products row mx-2 p-3 d-flex justify-content-center\">\r\n  <div *ngFor=\"let product of allProducts\" class=\"card m-2\" style=\"width: 18rem;\">\r\n    <img class=\"card-img-top\" [src]=\"product.img_url\" [alt]=\"product.name\">\r\n    <div class=\"card-body\">\r\n      <h3>{{ product.name }} <div *ngIf=\"product.is_new\" class=\"badg badge-success\"></div> </h3>\r\n      <p class=\"card-text\">{{ product.description }}</p>\r\n      <button\r\n        angular-rave\r\n        [PBFPubKey] = \"\"\r\n        [customer_email] = \"'amosmoyo5300@gmail.com'\"\r\n        [amount]=\"product.price\"\r\n        [custom_title]=\"product.name\"\r\n        [txref]=\"product.name\"\r\n        (callback)=\"paymentSuccess($event)\"\r\n        (close)=\"paymentFailure()\"\r\n        class=\"btn btn-primary\">Buy for &#x20a6;{{ product.price }}</button>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/star/star.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/star/star.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\n  [style.width.px]=\"starWidth\"\n  [title]=\"rating\"\n>\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AppComponent = class AppComponent {
    constructor(auth, 
    // private serverhistrory: ServerHistoryService,
    location, router) {
        this.auth = auth;
        this.location = location;
        this.router = router;
        this.title = 'sco';
        // serverhistrory.loadRouting();
    }
    goBack() {
        this.location.back();
    }
    goForward() {
        this.location.forward();
    }
    getPath() {
        console.log(this.location.path());
    }
    ngOnInit() {
        this.auth.autoAutheticate();
        // this.previousRoute = this.serverhistrory.getPreviousUrl();
        this.router.events.subscribe(event => {
            if (this.location.path() !== '') {
                this.isRoot = false;
            }
            else {
                this.isRoot = true;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _components_users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materials/material/material.module */ "./src/app/materials/material/material.module.ts");
/* harmony import */ var _components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-thumbnail/product-thumbnail.component */ "./src/app/components/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var _components_star_star_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/star/star.component */ "./src/app/components/star/star.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cart-items/cart-items.component */ "./src/app/components/cart-items/cart-items.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
            _components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["ProductThumbnailComponent"],
            _components_star_star_component__WEBPACK_IMPORTED_MODULE_11__["StarComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"],
            _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_17__["OverviewComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            _components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_19__["CartItemsComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _materials_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_16__["appRoutes"]),
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Guard.ts":
/*!*************************************!*\
  !*** ./src/app/components/Guard.ts ***!
  \*************************************/
/*! exports provided: AuthGurds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGurds", function() { return AuthGurds; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");




let AuthGurds = class AuthGurds {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // tslint:disable-next-line: max-line-length
    canActivate(route, state) {
        const isUserAuth = this.auth.getSubjectControl();
        if (!isUserAuth) {
            this.router.navigate(['/user/login']);
        }
        return isUserAuth;
    }
};
AuthGurds.ctorParameters = () => [
    { type: _users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGurds = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGurds);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n  width: 100%;\r\n  margin-top: 0px 10px 0px 10px;\r\n  text-align: center;\r\n  padding-top: 15vh;\r\n}\r\nh1, h2, h3, h3, h4, p{\r\n  margin-top:5px; margin-bottom: 5px;\r\n  text-decoration: underline;\r\n}\r\np{\r\n  text-decoration: none;\r\n}\r\n.submain{\r\n  width:80%; margin-left: auto; margin-right: auto;\r\n  background-color: rgb(190, 194, 194);\r\n}\r\ndt{\r\n  color: #000000;\r\n  text-decoration: underline;\r\n  margin-bottom: 5px;\r\n  font-weight:bold;\r\n}\r\ndl{\r\n  text-align: center;\r\n}\r\n.mid{\r\n  background-color:#999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjLEVBQUUsa0JBQWtCO0VBQ2xDLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCO0VBQ2hELG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweCAxMHB4IDBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTV2aDtcclxufVxyXG5oMSwgaDIsIGgzLCBoMywgaDQsIHB7XHJcbiAgbWFyZ2luLXRvcDo1cHg7IG1hcmdpbi1ib3R0b206IDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5we1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnN1Ym1haW57XHJcbiAgd2lkdGg6ODAlOyBtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5NCwgMTk0KTtcclxufVxyXG5kdHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5kbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1pZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM5OTk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/cart-items/cart-items.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cart-items/cart-items.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  padding-top: 20vh;\r\n  background-color: #fff;\r\n}\r\n\r\n#matCard {\r\n  min-height: 80vh;\r\n  background-color: rgb(189, 205, 223);\r\n}\r\n\r\n#row-one {\r\n  width: 80%;\r\n  margin-left: auto; margin-right: auto;\r\n}\r\n\r\nh2{\r\n  color: rgb(11, 119, 243);\r\n}\r\n\r\n#btn-one {\r\n  color: #fff;\r\n  background-color:rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color: rgb(59, 7, 126);\r\n  background-color:#fff;\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-three {\r\n  color: #fff;\r\n  background-color:rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n}\r\n\r\n.cart-item {\r\n  width: 80%;\r\n  background-color: rgb(11, 119, 243);\r\n  color: #fff;\r\n  margin-left: auto; margin-right: auto;\r\n}\r\n\r\n.summary {\r\n  width: 80%;\r\n  background-color: rgb(100, 11, 243);\r\n  color: #fff;\r\n  margin-left: auto; margin-right: auto;\r\n}\r\n\r\n.cart-item-child {\r\n  display: flex; justify-content: space-around; align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 600px ) {\r\n  .fa-shopping-cart{\r\n    font-size: 3em; color: rgb(0, 119, 255);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px ) {\r\n\r\n  .fa-shopping-cart{\r\n    font-size: 3em; color: rgb(0, 119, 255);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 7680px ) {}\r\n\r\n@media screen and (min-width: 900px ) {}\r\n\r\n@media screen and (min-width: 1200px ) {}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWl0ZW1zL2NhcnQtaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQixFQUFFLGtCQUFrQjtBQUN2Qzs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLGlCQUFpQixFQUFFLGtCQUFrQjtBQUN2Qzs7QUFDQTtFQUNFLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLGlCQUFpQixFQUFFLGtCQUFrQjtBQUN2Qzs7QUFFQTtFQUNFLGFBQWEsRUFBRSw2QkFBNkIsRUFBRSxtQkFBbUI7QUFDbkU7O0FBRUE7RUFDRTtJQUNFLGNBQWMsRUFBRSx1QkFBdUI7RUFDekM7QUFDRjs7QUFDQTs7RUFFRTtJQUNFLGNBQWMsRUFBRSx1QkFBdUI7RUFDekM7QUFDRjs7QUFDQSx3Q0FBd0M7O0FBQ3hDLHVDQUF1Qzs7QUFDdkMsd0NBQXdDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWl0ZW1zL2NhcnQtaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbWF0Q2FyZCB7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAyMDUsIDIyMyk7XHJcbn1cclxuXHJcbiNyb3ctb25lIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaDJ7XHJcbiAgY29sb3I6IHJnYigxMSwgMTE5LCAyNDMpO1xyXG59XHJcbiNidG4tb25lIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1OSwgNywgMTI2KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNidG4tdHdvIHtcclxuICBjb2xvcjogcmdiKDU5LCA3LCAxMjYpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNidG4tdGhyZWUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDU5LCA3LCAxMjYpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY2FydC1pdGVtIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTE5LCAyNDMpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnN1bW1hcnkge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTEsIDI0Myk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcnQtaXRlbS1jaGlsZCB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4ICkge1xyXG4gIC5mYS1zaG9wcGluZy1jYXJ0e1xyXG4gICAgZm9udC1zaXplOiAzZW07IGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCApIHtcclxuXHJcbiAgLmZhLXNob3BwaW5nLWNhcnR7XHJcbiAgICBmb250LXNpemU6IDNlbTsgY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2ODBweCApIHt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4ICkge31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4ICkge31cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cart-items/cart-items.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cart-items/cart-items.component.ts ***!
  \***************************************************************/
/*! exports provided: CartItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsComponent", function() { return CartItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-service */ "./src/app/components/cart-items/cart-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product-service.service */ "./src/app/services/product-service.service.ts");
/* harmony import */ var _cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.service */ "./src/app/components/cart-items/cart/cart.service.ts");






let CartItemsComponent = class CartItemsComponent {
    constructor(cart, route, productService, payment) {
        this.cart = cart;
        this.route = route;
        this.productService = productService;
        this.payment = payment;
        this.handler = null;
    }
    ngOnInit() {
        this.items = this.cart.getItems();
        this.total = this.cart.getTotal();
        this.itemsSub = this.cart.getItemListener().subscribe(items => {
            this.items = items;
        });
        /* this.param = +this.route.snapshot.paramMap.get('id');
     
         if (this.param) {
           this.productService.getProduct(this.param).subscribe({
             next: product => {
               this.product = product;
             }
           });
         } */
    }
    amos() {
        const payload = {
            id: this.tokenId.id,
            amount: this.total,
            date: Date.now()
        };
        this.payment.buyItem(payload);
        return;
    }
    pay(amount) {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
            locale: 'auto',
            amount: '999',
            token: (obj) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                this.tokenId = obj;
                this.total = amount;
                this.amos();
                console.log('moyo', obj);
                alert('Token Created!!');
            }
        });
        handler.open({
            name: 'CROMO MOBILE',
            description: 'Online Mobile Store',
            amount: amount * 100
        });
    }
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
                this.handler = window.StripeCheckout.configure({
                    key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
                    locale: 'auto',
                    amount: 999,
                    token: function (token) {
                        // You can access the token ID with `token.id`.
                        // Get the token ID to your server-side code for use.
                        this.tokenId = token;
                        this.amos();
                        console.log('amosmoyomonica', token);
                        alert('Payment Success!!');
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    }
    ngOnChanges() {
        this.cart.getTotal();
        this.clearCart();
    }
    clearCart() {
        this.items = [];
        this.cart.clearCart();
    }
    ngOnDestroy() {
        this.itemsSub.unsubscribe();
    }
};
CartItemsComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductServiceService"] },
    { type: _cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"] }
];
CartItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-items',
        template: __webpack_require__(/*! raw-loader!./cart-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart-items/cart-items.component.html"),
        styles: [__webpack_require__(/*! ./cart-items.component.css */ "./src/app/components/cart-items/cart-items.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductServiceService"],
        _cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"]])
], CartItemsComponent);



/***/ }),

/***/ "./src/app/components/cart-items/cart-service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cart-items/cart-service.ts ***!
  \*******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let CartService = class CartService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.items = [];
        this.itemsUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getItems() {
        return [...this.items];
    }
    getItemListener() {
        return this.itemsUpdate.asObservable();
    }
    getTotal() {
        if (this.items.length > 0) {
            let total = this.items.map(x => x.price).reduce((acc, cur) => (acc + cur), 0);
            return `${total / 100}`;
        }
    }
    addToCart(product) {
        const item = product;
        this.items.push(item);
        this.itemsUpdate.next([...this.items]);
        this.router.navigate(['/home/cart']);
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    shipping() {
        return this.http.get('assets/shipping.json');
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CartService);



/***/ }),

/***/ "./src/app/components/cart-items/cart/cart.service.ts":
/*!************************************************************!*\
  !*** ./src/app/components/cart-items/cart/cart.service.ts ***!
  \************************************************************/
/*! exports provided: CartServiceT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceT", function() { return CartServiceT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _users_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../users/toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CartServiceT = class CartServiceT {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
    }
    buyItem(obj) {
        console.log('data', obj);
        this.authToken = localStorage.getItem('id_token');
        // tslint:disable-next-line: prefer-const
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.authToken,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        this.http.post('http://localhost:8080/users/payme', obj, { headers }).subscribe((res) => {
            console.log('The response from server is ', res);
            console.log('Payment Done');
            // tslint:disable-next-line: max-line-length
            this.toastr.success(`_______________________________________________________________________________________________________________ PAYMENT DONE .................................................................................................................`);
            this.router.navigate(['/user/dashboard']);
        }, (err) => {
            console.log('The error is ', err);
        });
    }
    paymentInfo() {
        this.authToken = localStorage.getItem('id_token');
        // tslint:disable-next-line: prefer-const
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.authToken,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        return this.http.get('http://localhost:8080/users/getdata', { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return { data: res.docs.map(x => {
                    return {
                        id: x.id,
                        creatorId: x.creatorId,
                        // tslint:disable-next-line: radix
                        amount: parseInt(x.amount) * 100,
                        date: x.date
                    };
                }) };
        }));
    }
};
CartServiceT.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _users_toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CartServiceT = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _users_toastr__WEBPACK_IMPORTED_MODULE_4__["Toastr"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], CartServiceT);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  background-color:#222;\r\n  color: #ffffff;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  font-size: .8em;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogLjhlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n  min-height: 100%;\r\n  width: 100%;\r\n  height: 630px;\r\n  background-image: url('back4.jpg');\r\n  /*background-image: url('https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');*/\r\n  /*background-attachment: fixed;*/\r\n  background-position: center;\r\n  background-repeat:  no-repeat;\r\n  color:#fff;\r\n  background-size: cover;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr 1fr ;\r\n  grid-template-rows: 1fr 3fr 4fr;\r\n  grid-template-areas:\r\n  \"... ... ...\"\r\n  \"... divone ...\"\r\n  \"... ... ...\";\r\n}\r\n\r\n@media screen and (max-width: 600px ) {\r\n  .head{\r\n    grid-template-columns: 1fr 10fr 1fr ;\r\n    grid-template-rows: 1fr 4fr 4fr;\r\n    grid-template-areas:\r\n    \"... ... ...\"\r\n    \"... divone ...\"\r\n    \"... ... ...\";\r\n  }\r\n  .fa-shopping-cart{\r\n    font-size: 8em; color: rgb(0, 119, 255);\r\n  }\r\n  .content-span{\r\n    background-color:rgb(0, 119, 255); color: #ffffff; font-size: 0.99em;\r\n  }\r\n  .sub-head{\r\n    grid-area: divone;\r\n    text-align: center; background-color: #ffffff ; opacity: .9; border-radius: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px ) {\r\n  .head{\r\n    grid-template-columns: 1fr 3fr 1fr ;\r\n    grid-template-rows: 1fr 3fr 4fr;\r\n    grid-template-areas:\r\n    \"... ... ...\"\r\n    \"... divone ...\"\r\n    \"... ... ...\";\r\n  }\r\n  .fa-shopping-cart{\r\n    font-size: 10em; color: rgb(0, 119, 255);\r\n  }\r\n  .content-span{\r\n    background-color:rgb(0, 119, 255); color: #ffffff; font-size: 0.99em;\r\n  }\r\n  .sub-head{\r\n    grid-area: divone;\r\n    text-align: center; background-color: #ffffff ; opacity: .9; border-radius: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 7680px ) {}\r\n\r\n@media screen and (min-width: 900px ) {}\r\n\r\n@media screen and (min-width: 1200px ) {}\r\n\r\nem{\r\n  margin-top: 0px; font-size: .8em; color: #222222;\r\n}\r\n\r\nh2{\r\n  margin-bottom: 0px; color: rgb(0, 119, 255);\r\n}\r\n\r\n.heading{\r\n  text-align: center;\r\n}\r\n\r\n.gap{\r\n  height: 50px;\r\n  background-image:linear-gradient(to bottom, rgb(80, 133, 168), #666);\r\n  box-shadow: 0px -2px 2px 2px rgb(65, 124, 163), 2px 0px 2px 2px #666;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtDQUFxRDtFQUNyRCxrS0FBa0s7RUFDbEssZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUlWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQjs7O2VBR2E7QUFDZjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQjs7O2lCQUdhO0VBQ2Y7RUFDQTtJQUNFLGNBQWMsRUFBRSx1QkFBdUI7RUFDekM7RUFDQTtJQUNFLGlDQUFpQyxFQUFFLGNBQWMsRUFBRSxpQkFBaUI7RUFDdEU7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CO0VBQ2xGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0I7OztpQkFHYTtFQUNmO0VBQ0E7SUFDRSxlQUFlLEVBQUUsdUJBQXVCO0VBQzFDO0VBQ0E7SUFDRSxpQ0FBaUMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCO0VBQ3RFO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQjtFQUNsRjtBQUNGOztBQUNBLHdDQUF3Qzs7QUFDeEMsdUNBQXVDOztBQUN2Qyx3Q0FBd0M7O0FBQ3hDO0VBQ0UsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjO0FBQ2xEOztBQUNBO0VBQ0Usa0JBQWtCLEVBQUUsdUJBQXVCO0FBQzdDOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLG9FQUFvRTtFQUNwRSxvRUFBb0U7QUFDdEUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYzMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfnNyYy9hc3NldHMvaW1hZ2VzL2JhY2s0LmpwZycpO1xyXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5Nzk0MjMwNDc5Ni1iOGJjMmNjODk4ZjM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc1MCZxPTgwJyk7Ki9cclxuICAvKmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7Ki9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQ7XHJcbiAgY29sb3I6I2ZmZjtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnIgO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciA0ZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICBcIi4uLiAuLi4gLi4uXCJcclxuICBcIi4uLiBkaXZvbmUgLi4uXCJcclxuICBcIi4uLiAuLi4gLi4uXCI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4ICkge1xyXG4gIC5oZWFke1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnIgO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcIi4uLiAuLi4gLi4uXCJcclxuICAgIFwiLi4uIGRpdm9uZSAuLi5cIlxyXG4gICAgXCIuLi4gLi4uIC4uLlwiO1xyXG4gIH1cclxuICAuZmEtc2hvcHBpbmctY2FydHtcclxuICAgIGZvbnQtc2l6ZTogOGVtOyBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxuICB9XHJcbiAgLmNvbnRlbnQtc3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDExOSwgMjU1KTsgY29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMC45OWVtO1xyXG4gIH1cclxuICAuc3ViLWhlYWR7XHJcbiAgICBncmlkLWFyZWE6IGRpdm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiA7IG9wYWNpdHk6IC45OyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCApIHtcclxuICAuaGVhZHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnIgO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcIi4uLiAuLi4gLi4uXCJcclxuICAgIFwiLi4uIGRpdm9uZSAuLi5cIlxyXG4gICAgXCIuLi4gLi4uIC4uLlwiO1xyXG4gIH1cclxuICAuZmEtc2hvcHBpbmctY2FydHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTsgY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XHJcbiAgfVxyXG4gIC5jb250ZW50LXNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxMTksIDI1NSk7IGNvbG9yOiAjZmZmZmZmOyBmb250LXNpemU6IDAuOTllbTtcclxuICB9XHJcbiAgLnN1Yi1oZWFke1xyXG4gICAgZ3JpZC1hcmVhOiBkaXZvbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgOyBvcGFjaXR5OiAuOTsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4MHB4ICkge31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHggKSB7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHggKSB7fVxyXG5lbXtcclxuICBtYXJnaW4tdG9wOiAwcHg7IGZvbnQtc2l6ZTogLjhlbTsgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuaDJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyBjb2xvcjogcmdiKDAsIDExOSwgMjU1KTtcclxufVxyXG4uaGVhZGluZ3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdhcHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoODAsIDEzMywgMTY4KSwgIzY2Nik7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggMnB4IDJweCByZ2IoNjUsIDEyNCwgMTYzKSwgMnB4IDBweCAycHggMnB4ICM2NjY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  min-height: 100px !important;\r\n  z-index:1;\r\n  box-shadow: 0px .2px 0px .6px #999 !important;\r\n}\r\n\r\nli > a.active {\r\n  color: rgb(245, 74, 7) !important;\r\n}\r\n\r\nli > a:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.amos{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.amos > li{\r\n  flex: 1;\r\n}\r\n\r\n.amos:nth-child(2) {\r\n  margin-left: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixTQUFTO0VBQ1QsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDoxO1xyXG4gIGJveC1zaGFkb3c6IDBweCAuMnB4IDBweCAuNnB4ICM5OTkgIWltcG9ydGFudDtcclxufVxyXG5cclxubGkgPiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigyNDUsIDc0LCA3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5saSA+IGE6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFtb3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbW9zID4gbGl7XHJcbiAgZmxleDogMTtcclxufVxyXG4uYW1vczpudGgtY2hpbGQoMikge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/autheticate/auth.service */ "./src/app/components/users/autheticate/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NavBarComponent = class NavBarComponent {
    constructor(router, auth, toastr) {
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.isUserAuth = this.auth.getSubjectControl();
        this.subject = this.auth.getSubject()
            .subscribe(isAuth => {
            this.isUserAuth = isAuth;
        });
        if (this.isUserAuth) {
            this.deternimer = true;
        }
        else {
            this.deternimer = false;
        }
    }
    onLogout() {
        this.auth.logout();
        // tslint:disable-next-line: max-line-length
        this.toastr.success(`_______________________________________________________________________________________________________________You have successfully logout .................................................................................................................`);
        this.router.navigate(['/user/login']);
    }
    ngOnDestroy() {
        this.subject.unsubscribe();
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _users_toastr__WEBPACK_IMPORTED_MODULE_2__["Toastr"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _users_autheticate_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _users_toastr__WEBPACK_IMPORTED_MODULE_2__["Toastr"]])
], NavBarComponent);



/***/ }),

/***/ "./src/app/components/overview/overview.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/overview/overview.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width:120px; height: 100px;\r\n}\r\n\r\nmat-card {\r\n  margin: 0; padding: 0;\r\n}\r\n\r\n.card-main{\r\n  background-color: rgb(122, 165, 206); opacity:1;\r\n}\r\n\r\n.grad{\r\n  background-image:linear-gradient(to right, #eeeeee, rgb(122, 165, 206) );\r\n  color:  rgb(122, 165, 206);\r\n}\r\n\r\n.col-md-5:hover{\r\n  background-color: rgb(245, 105, 11); opacity:.9; border: 3px solid #ffffff;\r\n  color: #ffffff; cursor: pointer;\r\n}\r\n\r\nh3{\r\n  text-align: center; color: #ffffff;\r\n}\r\n\r\n#amazon, #killmall, #jumia{\r\n  width: 100%; height: 100px; cursor: pointer;\r\n}\r\n\r\n.sponsor h3{\r\n  font-style: italic; color: #ffffff; text-decoration: underline;\r\n}\r\n\r\n.sponsor-head{\r\n  background-color:rgb(74, 146, 212);\r\n}\r\n\r\n#two {\r\n  background-color:rgb(74, 146, 212);\r\n}\r\n\r\n.head{\r\n  text-align: center;\r\n}\r\n\r\n.proone-details {\r\n  text-align: left; margin-left: 10px;\r\n}\r\n\r\n.protwo-details {\r\n  text-align: left; margin-left: 10px;\r\n  color: #fff;\r\n}\r\n\r\n.pro-alternaone {\r\n  background-color: #fff;\r\n}\r\n\r\n.pro-alternaone:hover {\r\n  background-color: rgb(74, 146, 212, 0.4);\r\n  cursor: pointer;\r\n}\r\n\r\n.pro-alternatwo {\r\n  background-color: rgb(74, 146, 212);\r\n}\r\n\r\n.pro-alternatwo:hover{\r\n  background-color: rgb(74, 146, 212, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.pro-alternaone-child {\r\n  background-color: rgb(74, 146, 212);\r\n}\r\n\r\n@media screen and (max-width: 600px ) {\r\n  img{\r\n    margin: 0; padding: 0;\r\n    width: 100%; height: 250px; border-radius: 21px 21px 0\r\n  }\r\n  .child {\r\n    width: 90%; min-height: 300px; border-radius: 21px 21px 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 600px ) {\r\n  img{\r\n    margin: 0; padding: 0;\r\n    width: 100%; height: 300px; border-radius: 21px 21px 0\r\n  }\r\n  .child {\r\n    width: 80%; min-height: 300px; border-radius: 21px 21px 0;\r\n  }\r\n  .side{\r\n    margin-left: 0px; border-left: 3px solid rgb(74, 146, 212);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 7680px ) {}\r\n\r\n@media screen and (min-width: 900px ) {}\r\n\r\n@media screen and (min-width: 1200px ) {}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGFBQWE7QUFDNUI7O0FBRUE7RUFDRSxTQUFTLEVBQUUsVUFBVTtBQUN2Qjs7QUFDQTtFQUNFLG9DQUFvQyxFQUFFLFNBQVM7QUFDakQ7O0FBQ0E7RUFDRSx3RUFBd0U7RUFDeEUsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsbUNBQW1DLEVBQUUsVUFBVSxFQUFFLHlCQUF5QjtFQUMxRSxjQUFjLEVBQUUsZUFBZTtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLGNBQWM7QUFDcEM7O0FBQ0E7RUFDRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWU7QUFDN0M7O0FBQ0E7RUFDRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsMEJBQTBCO0FBQ2hFOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCLEVBQUUsaUJBQWlCO0FBQ3JDOztBQUNBO0VBQ0UsZ0JBQWdCLEVBQUUsaUJBQWlCO0VBQ25DLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRTtJQUNFLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFdBQVcsRUFBRSxhQUFhLEVBQUU7RUFDOUI7RUFDQTtJQUNFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEI7RUFDM0Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsU0FBUyxFQUFFLFVBQVU7SUFDckIsV0FBVyxFQUFFLGFBQWEsRUFBRTtFQUM5QjtFQUNBO0lBQ0UsVUFBVSxFQUFFLGlCQUFpQixFQUFFLDBCQUEwQjtFQUMzRDtFQUNBO0lBQ0UsZ0JBQWdCLEVBQUUsd0NBQXdDO0VBQzVEO0FBQ0Y7O0FBQ0Esd0NBQXdDOztBQUN4Qyx1Q0FBdUM7O0FBQ3ZDLHdDQUF3QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICB3aWR0aDoxMjBweDsgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxufVxyXG4uY2FyZC1tYWlue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDE2NSwgMjA2KTsgb3BhY2l0eToxO1xyXG59XHJcbi5ncmFke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlZWVlLCByZ2IoMTIyLCAxNjUsIDIwNikgKTtcclxuICBjb2xvcjogIHJnYigxMjIsIDE2NSwgMjA2KTtcclxufVxyXG4uY29sLW1kLTU6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTA1LCAxMSk7IG9wYWNpdHk6Ljk7IGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgY29sb3I6ICNmZmZmZmY7IGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4jYW1hem9uLCAja2lsbG1hbGwsICNqdW1pYXtcclxuICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDBweDsgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zcG9uc29yIGgze1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgY29sb3I6ICNmZmZmZmY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zcG9uc29yLWhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzQsIDE0NiwgMjEyKTtcclxufVxyXG4jdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3NCwgMTQ2LCAyMTIpO1xyXG59XHJcbi5oZWFke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvb25lLWRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5wcm90d28tZGV0YWlscyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDsgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnByby1hbHRlcm5hb25lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcm8tYWx0ZXJuYW9uZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCAxNDYsIDIxMiwgMC40KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByby1hbHRlcm5hdHdvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzQsIDE0NiwgMjEyKTtcclxufVxyXG4ucHJvLWFsdGVybmF0d286aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc0LCAxNDYsIDIxMiwgMC4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnByby1hbHRlcm5hb25lLWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzQsIDE0NiwgMjEyKTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICBpbWd7XHJcbiAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyNTBweDsgYm9yZGVyLXJhZGl1czogMjFweCAyMXB4IDBcclxuICB9XHJcbiAgLmNoaWxkIHtcclxuICAgIHdpZHRoOiA5MCU7IG1pbi1oZWlnaHQ6IDMwMHB4OyBib3JkZXItcmFkaXVzOiAyMXB4IDIxcHggMDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHggKSB7XHJcbiAgaW1ne1xyXG4gICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMzAwcHg7IGJvcmRlci1yYWRpdXM6IDIxcHggMjFweCAwXHJcbiAgfVxyXG4gIC5jaGlsZCB7XHJcbiAgICB3aWR0aDogODAlOyBtaW4taGVpZ2h0OiAzMDBweDsgYm9yZGVyLXJhZGl1czogMjFweCAyMXB4IDA7XHJcbiAgfVxyXG4gIC5zaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoNzQsIDE0NiwgMjEyKTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4MHB4ICkge31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHggKSB7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHggKSB7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product-service.service */ "./src/app/services/product-service.service.ts");



let OverviewComponent = class OverviewComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: x => {
                this.products = x.filter((product) => product.productId < 3);
                this.productOne = this.products[0];
                this.productTwo = this.products[1];
            }
        });
    }
};
OverviewComponent.ctorParameters = () => [
    { type: src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"] }
];
OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview',
        template: __webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/overview/overview.component.html"),
        styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/components/overview/overview.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]])
], OverviewComponent);



/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 300px; height: 200px;\r\n}\r\n\r\nh3{\r\n  color:rgb(0, 119, 255);\r\n}\r\n\r\nh2{\r\n  background-color:rgb(0, 119, 255); color: white;\r\n}\r\n\r\n.details{\r\n  background-color:rgb(0, 119, 255); color: white;\r\n  padding-left: 5px; padding-right: 5px;\r\n}\r\n\r\n#btn-one {\r\n  color: #fff;\r\n  background-color:rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n}\r\n\r\n#btn-two {\r\n  color: rgb(107, 19, 103);\r\n  background-color: #fff;\r\n}\r\n\r\n#btn_three {\r\n  color: #fff;\r\n  margin-top: 20px;\r\n  background-color:rgb(59, 7, 126);\r\n  margin-right: 10px;\r\n  min-width: 100px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  img{\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  img{\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  img{\r\n    width: 35%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  img{\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  img{\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFFLGFBQWE7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQ0FBaUMsRUFBRSxZQUFZO0FBQ2pEOztBQUNBO0VBQ0UsaUNBQWlDLEVBQUUsWUFBWTtFQUMvQyxpQkFBaUIsRUFBRSxrQkFBa0I7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOiAzMDBweDsgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuaDN7XHJcbiAgY29sb3I6cmdiKDAsIDExOSwgMjU1KTtcclxufVxyXG5oMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxMTksIDI1NSk7IGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGV0YWlsc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxMTksIDI1NSk7IGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDsgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4jYnRuLW9uZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTksIDcsIDEyNik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jYnRuLXR3byB7XHJcbiAgY29sb3I6IHJnYigxMDcsIDE5LCAxMDMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNidG5fdGhyZWUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTksIDcsIDEyNik7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/product-detail/product-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product-service.service */ "./src/app/services/product-service.service.ts");
/* harmony import */ var _cart_items_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart-items/cart-service */ "./src/app/components/cart-items/cart-service.ts");
/* harmony import */ var _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-items/cart/cart.service */ "./src/app/components/cart-items/cart/cart.service.ts");






let ProductDetailComponent = class ProductDetailComponent {
    constructor(route, productService, cart, router, payment) {
        this.route = route;
        this.productService = productService;
        this.cart = cart;
        this.router = router;
        this.payment = payment;
        this.handler = null;
    }
    ngOnInit() {
        this.param = +this.route.snapshot.paramMap.get('id');
        if (this.param) {
            this.productService.getProduct(this.param).subscribe({
                next: product => {
                    this.product = product;
                    this.total = `${this.product.price / 100}`;
                }
            });
        }
    }
    addToCart(item) {
        this.cart.addToCart(item);
    }
    amos() {
        const payload = {
            id: this.tokenId.id,
            amount: this.total,
            date: Date.now()
        };
        console.log(payload);
        this.payment.buyItem(payload);
        return;
    }
    pay(amount) {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
            locale: 'auto',
            amount: '999',
            token: (obj) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                this.tokenId = obj;
                this.total = amount;
                this.amos();
            }
        });
        handler.open({
            name: 'CROMO MOBILE',
            description: 'Online Mobile Store',
            amount: amount * 100
        });
    }
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
                this.handler = window.StripeCheckout.configure({
                    key: 'pk_test_VkJ8y5HG6QjIHyBR6aBM3fB000bigg8HhF',
                    locale: 'auto',
                    amount: 999,
                    token: function (token) {
                        // You can access the token ID with `token.id`.
                        // Get the token ID to your server-side code for use.
                        this.tokenId = token;
                        this.amos();
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"] },
    { type: _cart_items_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/components/product-detail/product-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"],
        _cart_items_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _cart_items_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartServiceT"]])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa{\r\n  margin-left: 10px; color: rgb(0, 119, 255); font-size: 24px;\r\n}\r\ninput{\r\n  height: 20px;\r\n  margin-left: 5px;\r\n}\r\nh2{\r\n  background-color:rgb(0, 119, 255); color: white; margin-top: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxlQUFlO0FBQzdEO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQ0FBaUMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IGNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpOyBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuaDJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwgMTE5LCAyNTUpOyBjb2xvcjogd2hpdGU7IG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product-service.service */ "./src/app/services/product-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductListComponent = class ProductListComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.listfilter = '';
    }
    get listfilter() {
        return this._listfilter;
    }
    set listfilter(value) {
        this._listfilter = value;
        this.filteredArr = this.listfilter ? this.performFilter(this.listfilter) : this.products;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredArr = this.products;
                console.log(this.products);
            }
        });
    }
    performFilter(value) {
        value = value.toLocaleLowerCase();
        return this.products.filter((x) => x.name.toLocaleLowerCase().indexOf(value) !== -1);
    }
    OnRouting(id) {
        this.productService.getProduct(+id).subscribe({
            next: x => {
                this.router.navigate([`/home/products/${id}`]);
            }
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-list/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product-list/product-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/components/product-thumbnail/product-thumbnail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/product-thumbnail/product-thumbnail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width:220px; height: 35vh;\r\n}\r\n\r\n#matCard {\r\n  margin-bottom: 10px; margin-left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-card-title{\r\n  color:rgb(0, 119, 255);\r\n}\r\n\r\n#matCard:hover {\r\n  background-color: #cbbdd8;\r\n}\r\n\r\n.grad{\r\n  background-image:linear-gradient(to right, #eeeeee, rgb(122, 165, 206) );\r\n  color:  rgb(122, 165, 206); margin-left: 10px; height: 6vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXRodW1ibmFpbC9wcm9kdWN0LXRodW1ibmFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLFlBQVk7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSxpQkFBaUI7RUFDdEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdFQUF3RTtFQUN4RSwwQkFBMEIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXO0FBQzVEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXRodW1ibmFpbC9wcm9kdWN0LXRodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOjIyMHB4OyBoZWlnaHQ6IDM1dmg7XHJcbn1cclxuXHJcbiNtYXRDYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxle1xyXG4gIGNvbG9yOnJnYigwLCAxMTksIDI1NSk7XHJcbn1cclxuXHJcbiNtYXRDYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiZGQ4O1xyXG59XHJcblxyXG4uZ3JhZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSwgcmdiKDEyMiwgMTY1LCAyMDYpICk7XHJcbiAgY29sb3I6ICByZ2IoMTIyLCAxNjUsIDIwNik7IG1hcmdpbi1sZWZ0OiAxMHB4OyBoZWlnaHQ6IDZ2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/product-thumbnail/product-thumbnail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-thumbnail/product-thumbnail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductThumbnailComponent", function() { return ProductThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductThumbnailComponent = class ProductThumbnailComponent {
    constructor() {
        // tslint:disable-next-line: no-output-on-prefix
        this.onRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    route(id) {
        this.onRoute.emit(id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ProductThumbnailComponent.prototype, "products", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductThumbnailComponent.prototype, "onRoute", void 0);
ProductThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-thumbnail',
        template: __webpack_require__(/*! raw-loader!./product-thumbnail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-thumbnail/product-thumbnail.component.html"),
        styles: [__webpack_require__(/*! ./product-thumbnail.component.css */ "./src/app/components/product-thumbnail/product-thumbnail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductThumbnailComponent);



/***/ }),

/***/ "./src/app/components/star/star.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/star/star.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop{\r\n  overflow: hidden;\r\n}\r\ndiv {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFyL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Rhci9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmRpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/star/star.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/star/star.component.ts ***!
  \***************************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StarComponent = class StarComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges() {
        this.starWidth = this.rating * (75 / 5);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], StarComponent.prototype, "rating", void 0);
StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-star',
        template: __webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/star/star.component.html"),
        styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/components/star/star.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StarComponent);



/***/ }),

/***/ "./src/app/components/users/autheticate/auth.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/users/autheticate/auth.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toastr */ "./src/app/components/users/toastr.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(http, toastr, router) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.subjectControl = false;
    }
    getSubject() {
        return this.subject.asObservable();
    }
    getSubjectControl() {
        return this.subjectControl;
    }
    getToken() {
        return this.authToken;
    }
    getUser() {
        return this.user;
    }
    register(user) {
        this.http.post('http://localhost:8080/users/register', user).subscribe((res) => {
            if (res.success) {
                this.toastr.success(res.message);
                this.router.navigate(['/user/login']);
            }
            else {
                this.toastr.warning(res.message);
            }
        }, (err) => {
            console.log('The error is ', err);
        });
    }
    login(user) {
        // tslint:disable-next-line: max-line-length
        return this.http.post('http://localhost:8080/users/authenticate', user)
            .subscribe((res) => {
            const token = res.token;
            const expiryTime = res.expiresIn;
            const now = new Date();
            const expiryDate = new Date(now.getTime() + (expiryTime * 1000));
            if (token) {
                this.setAuthData(token, expiryDate, res.user);
                this.reset(expiryTime * 1000);
                this.subjectControl = true;
                this.subject.next(true);
                this.user = res.user;
                // tslint:disable-next-line: max-line-lengt
                this.router.navigate(['/user/dashboard']);
            }
            else {
                this.toastr.warning(res.message);
                this.router.navigate(['/user/login']);
            }
        }, (err) => {
            console.log('The error is ', err);
        });
    }
    getDashboard() {
        const tokenInfo = this.getAuthData();
        this.authToken = tokenInfo.token;
        // tslint:disable-next-line: prefer-const
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: this.authToken,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        // tslint:disable-next-line: object-literal-shorthand
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://localhost:8080/users/profile', { headers });
    }
    logout() {
        this.authToken = null;
        this.user = null;
        this.subjectControl = false;
        this.subject.next(false);
        this.clearAuthData();
    }
    autoAutheticate() {
        const tokenInfo = this.getAuthData();
        if (!tokenInfo) {
            return;
        }
        const now = new Date();
        const expiresIn = tokenInfo.expiryDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.authToken = tokenInfo.token;
            this.reset(expiresIn);
            this.subjectControl = true;
            this.subject.next(true);
        }
    }
    reset(data) {
        setTimeout(() => {
            this.logout();
        }, data);
    }
    // set data
    setAuthData(token, expiryDate, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('expiry', expiryDate);
        localStorage.setItem('user', JSON.stringify(user));
    }
    // clear data
    clearAuthData() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiry');
    }
    // get items  C:\Users\PROBOOK 440\AppData\Local\.meteor
    getAuthData() {
        const tokenData = localStorage.getItem('id_token');
        const expiryData = localStorage.getItem('expiry');
        const user = localStorage.getItem('user');
        if (!tokenData || !expiryData) {
            return;
        }
        return {
            token: tokenData,
            expiryDate: new Date(expiryData),
            user
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _toastr__WEBPACK_IMPORTED_MODULE_3__["Toastr"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/components/users/toastr.ts":
/*!********************************************!*\
  !*** ./src/app/components/users/toastr.ts ***!
  \********************************************/
/*! exports provided: Toastr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toastr", function() { return Toastr; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Toastr = class Toastr {
    success(data, option) {
        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            onclick: null,
            showDuration: '300',
            hideDuration: '1000',
            timeOut: '7000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        };
        toastr.success(data, option);
    }
    warning(data, option) {
        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: false,
            positionClass: 'toast-bottom-center',
            preventDuplicates: false,
            onclick: null,
            showDuration: '300',
            hideDuration: '1000',
            timeOut: '10000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        };
        toastr.error(data, option);
    }
};
Toastr = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Toastr);



/***/ }),

/***/ "./src/app/materials/material/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/materials/material/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"]
        ],
        exports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-detail/product-detail.component */ "./src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var _components_Guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Guard */ "./src/app/components/Guard.ts");
/* harmony import */ var _components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart-items/cart-items.component */ "./src/app/components/cart-items/cart-items.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");






const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home/about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'home/products', component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"] },
    { path: 'home/cart', component: _components_cart_items_cart_items_component__WEBPACK_IMPORTED_MODULE_4__["CartItemsComponent"], canActivate: [_components_Guard__WEBPACK_IMPORTED_MODULE_3__["AuthGurds"]] },
    { path: 'home/products/:id', component: _components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"], canActivate: [_components_Guard__WEBPACK_IMPORTED_MODULE_3__["AuthGurds"]] },
    { path: 'user', loadChildren: () => __webpack_require__.e(/*! import() | components-users-user-user-module */ "components-users-user-user-module").then(__webpack_require__.bind(null, /*! ./components/users/user/user.module */ "./src/app/components/users/user/user.module.ts")).then((m) => m.UserModule) }
];


/***/ }),

/***/ "./src/app/services/product-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductServiceService", function() { return ProductServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const URL = 'api/products.json';
let ProductServiceService = class ProductServiceService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get(URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => x), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProduct(id) {
        return this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => {
            return products.find(x => x.productId === id);
        }));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProductServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PROBOOK 440\Desktop\HOME\scos\project\sco\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map