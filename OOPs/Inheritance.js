//Single Inheritance:
// var __extends = (this && this.__extends) || (function () {
//   var extendStatics = function (d, b) {
//       extendStatics = Object.setPrototypeOf ||
//           ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//           function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//       return extendStatics(d, b);
//   };
//   return function (d, b) {
//       if (typeof b !== "function" && b !== null)
//           throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//       extendStatics(d, b);
//       function __() { this.constructor = d; }
//       d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//   };
// })();
// var Father = /** @class */ (function () {
//   function Father() {
//   }
//   Father.prototype.Fproperty = function () {
//       console.log("Father");
//   };
//   return Father;
// }());
// var Son = /** @class */ (function (_super) {
//   __extends(Son, _super);
//   function Son() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Son.prototype.Sproperty = function () {
//       console.log("Son");
//   };
//   return Son;
// }(Father));

//=======================================================================================================================================

//Multilevel Inheritance:
// var __extends = (this && this.__extends) || (function () {
//   var extendStatics = function (d, b) {
//       extendStatics = Object.setPrototypeOf ||
//           ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//           function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//       return extendStatics(d, b);
//   };
//   return function (d, b) {
//       if (typeof b !== "function" && b !== null)
//           throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//       extendStatics(d, b);
//       function __() { this.constructor = d; }
//       d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//   };
// })();
// var GrandFather = /** @class */ (function () {
//   function GrandFather() {
//   }
//   GrandFather.prototype.GFproperty = function () {
//       console.log("Moving");
//   };
//   return GrandFather;
// }());
// var Father = /** @class */ (function (_super) {
//   __extends(Father, _super);
//   function Father() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Father.prototype.Fproperty = function () {
//       console.log("Father");
//   };
//   return Father;
// }(GrandFather));
// var Son = /** @class */ (function (_super) {
//   __extends(Son, _super);
//   function Son() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Son.prototype.Sproperty = function () {
//       console.log("Son");
//   };
//   return Son;
// }(Father));

//=======================================================================================================================================

//Hierarchical Inheritance:
// var __extends = (this && this.__extends) || (function () {
//   var extendStatics = function (d, b) {
//       extendStatics = Object.setPrototypeOf ||
//           ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//           function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//       return extendStatics(d, b);
//   };
//   return function (d, b) {
//       if (typeof b !== "function" && b !== null)
//           throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//       extendStatics(d, b);
//       function __() { this.constructor = d; }
//       d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//   };
// })();
// var Father = /** @class */ (function () {
//   function Father() {
//   }
//   Father.prototype.Fproperty = function () {
//       console.log("Father");
//   };
//   return Father;
// }());
// var Son = /** @class */ (function (_super) {
//   __extends(Son, _super);
//   function Son() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Son.prototype.Sproperty = function () {
//       console.log("Son");
//   };
//   return Son;
// }(Father));
// var Daughter = /** @class */ (function (_super) {
//   __extends(Daughter, _super);
//   function Daughter() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Daughter.prototype.Dproperty = function () {
//       console.log("Daughter");
//   };
//   return Daughter;
// }(Father));

//=======================================================================================================================================

// Multiple inheritance:
// var Son = /** @class */ (function () {
//   function Son() {
//   }
//   Son.prototype.Fproperty = function () { console.log("Father property for son"); };
//   Son.prototype.Mproperty = function () { console.log("Mother property for son"); };
//   Son.prototype.Sproperty = function () {
//       console.log("Son");
//   };
//   return Son;
// }());

//=======================================================================================================================================

//Hybrid Inheritance:
// var __extends = (this && this.__extends) || (function () {
//   var extendStatics = function (d, b) {
//       extendStatics = Object.setPrototypeOf ||
//           ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//           function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//       return extendStatics(d, b);
//   };
//   return function (d, b) {
//       if (typeof b !== "function" && b !== null)
//           throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//       extendStatics(d, b);
//       function __() { this.constructor = d; }
//       d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//   };
// })();
// var GrandFather = /** @class */ (function () {
//   function GrandFather() {
//   }
//   GrandFather.prototype.GFproperty = function () {
//       console.log("Moving");
//   };
//   return GrandFather;
// }());
// var Son = /** @class */ (function (_super) {
//   __extends(Son, _super);
//   function Son() {
//       return _super !== null && _super.apply(this, arguments) || this;
//   }
//   Son.prototype.Fproperty = function () { console.log("Father property for son"); };
//   Son.prototype.Mproperty = function () { console.log("Mother property for son"); };
//   Son.prototype.Sproperty = function () {
//       console.log("Son");
//   };
//   return Son;
// }(GrandFather));



