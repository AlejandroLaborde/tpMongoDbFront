(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\LVT6M4613\Desktop\Base de datos 2\src+json\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0DiK":
    /*!********************************************!*\
      !*** ./src/app/modelos/file-for-upload.ts ***!
      \********************************************/

    /*! exports provided: FileForUpload */

    /***/
    function DiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileForUpload", function () {
        return FileForUpload;
      });

      var FileForUpload = function FileForUpload(file) {
        _classCallCheck(this, FileForUpload);

        this.file = file;
      };
      /***/

    },

    /***/
    "2mVO":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/listado-realtime/listado-realtime.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ListadoRealtimeComponent */

    /***/
    function mVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListadoRealtimeComponent", function () {
        return ListadoRealtimeComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_servicios_mensajes_realtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/servicios/mensajes-realtime.service */
      "Om+i");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListadoRealtimeComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mensaje_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r2 == ctx_r0.currentIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mensaje_r1.mensaje, " ");
        }
      }

      var ListadoRealtimeComponent = /*#__PURE__*/function () {
        function ListadoRealtimeComponent(servicioRealTime) {
          _classCallCheck(this, ListadoRealtimeComponent);

          this.servicioRealTime = servicioRealTime;
          this.currentIndex = -1;
          this.title = '';
        }

        _createClass(ListadoRealtimeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cargarMensajes();
          }
        }, {
          key: "cargarMensajes",
          value: function cargarMensajes() {
            var _this = this;

            this.servicioRealTime.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  key: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.listadoMensajes = data;
            });
          }
        }]);

        return ListadoRealtimeComponent;
      }();

      ListadoRealtimeComponent.ɵfac = function ListadoRealtimeComponent_Factory(t) {
        return new (t || ListadoRealtimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_mensajes_realtime_service__WEBPACK_IMPORTED_MODULE_2__["MensajesRealtimeService"]));
      };

      ListadoRealtimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListadoRealtimeComponent,
        selectors: [["app-listado-realtime"]],
        decls: 4,
        vars: 1,
        consts: [[1, "list-group"], ["class", "list-group-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
        template: function ListadoRealtimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "listado Real Time!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListadoRealtimeComponent_li_3_Template, 2, 3, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listadoMensajes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLXJlYWx0aW1lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyDqqYnxSs9petOE_RJ1wFG_TNhxdbzdhfA",
          authDomain: "mongodbfront.firebaseapp.com",
          projectId: "mongodbfront",
          storageBucket: "mongodbfront.appspot.com",
          messagingSenderId: "925609533703",
          appId: "1:925609533703:web:375efc7fafb3459ea3e5a2"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "FARH":
    /*!******************************************************************!*\
      !*** ./src/app/pages/chat-firestore/chat-firestore.component.ts ***!
      \******************************************************************/

    /*! exports provided: ChatFirestoreComponent */

    /***/
    function FARH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatFirestoreComponent", function () {
        return ChatFirestoreComponent;
      });
      /* harmony import */


      var _modelos_mensajes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../modelos/mensajes */
      "WRLo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_servicios_mensajes_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/servicios/mensajes-firestore.service */
      "X6nB");
      /* harmony import */


      var src_app_servicios_mensajes_realtime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/servicios/mensajes-realtime.service */
      "Om+i");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _componentes_form_subir_archivos_form_subir_archivos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../componentes/form-subir-archivos/form-subir-archivos.component */
      "GRPC");

      var ChatFirestoreComponent = /*#__PURE__*/function () {
        function ChatFirestoreComponent(servicioFirestore, servicioRealTime) {
          _classCallCheck(this, ChatFirestoreComponent);

          this.servicioFirestore = servicioFirestore;
          this.servicioRealTime = servicioRealTime;
          this.nuevoMensaje = new _modelos_mensajes__WEBPACK_IMPORTED_MODULE_0__["Mensajes"]();
        }

        _createClass(ChatFirestoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "EnviarMensaje",
          value: function EnviarMensaje() {
            this.servicioFirestore.create(this.nuevoMensaje).then(function () {
              console.log("se envio el mensaje Fire");
            });
            this.servicioRealTime.create(this.nuevoMensaje).then(function () {
              console.log("se envio el mensaje RealTime");
            });
          }
        }]);

        return ChatFirestoreComponent;
      }();

      ChatFirestoreComponent.ɵfac = function ChatFirestoreComponent_Factory(t) {
        return new (t || ChatFirestoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_mensajes_firestore_service__WEBPACK_IMPORTED_MODULE_2__["MensajesFirestoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_mensajes_realtime_service__WEBPACK_IMPORTED_MODULE_3__["MensajesRealtimeService"]));
      };

      ChatFirestoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChatFirestoreComponent,
        selectors: [["app-chat-firestore"]],
        decls: 6,
        vars: 1,
        consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function ChatFirestoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo enviar mensaje");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatFirestoreComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.nuevoMensaje.mensaje = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatFirestoreComponent_Template_button_click_3_listener() {
              return ctx.EnviarMensaje();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Enviar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-form-subir-archivos");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nuevoMensaje.mensaje);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _componentes_form_subir_archivos_form_subir_archivos_component__WEBPACK_IMPORTED_MODULE_5__["FormSubirArchivosComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWZpcmVzdG9yZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "GRPC":
    /*!**********************************************************************************!*\
      !*** ./src/app/componentes/form-subir-archivos/form-subir-archivos.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: FormSubirArchivosComponent */

    /***/
    function GRPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormSubirArchivosComponent", function () {
        return FormSubirArchivosComponent;
      });
      /* harmony import */


      var _modelos_file_for_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../modelos/file-for-upload */
      "0DiK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_firebase_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../servicios/firebase/file-upload.service */
      "N3El");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          width: a0
        };
      };

      function FormSubirArchivosComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.percentage + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx_r0.percentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.percentage, "% ");
        }
      }

      var FormSubirArchivosComponent = /*#__PURE__*/function () {
        function FormSubirArchivosComponent(uploadService) {
          _classCallCheck(this, FormSubirArchivosComponent);

          this.uploadService = uploadService;
          this.percentage = 0;
        }

        _createClass(FormSubirArchivosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            this.selectedFiles = event.target.files;
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this2 = this;

            if (this.selectedFiles) {
              var file = this.selectedFiles.item(0);
              this.selectedFiles = undefined;

              if (file) {
                this.currentFileUpload = new _modelos_file_for_upload__WEBPACK_IMPORTED_MODULE_0__["FileForUpload"](file);
                this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (percentage) {
                  _this2.percentage = Math.round(percentage ? percentage : 0);
                }, function (error) {
                  console.log(error);
                });
              }
            }
          }
        }]);

        return FormSubirArchivosComponent;
      }();

      FormSubirArchivosComponent.ɵfac = function FormSubirArchivosComponent_Factory(t) {
        return new (t || FormSubirArchivosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_firebase_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"]));
      };

      FormSubirArchivosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormSubirArchivosComponent,
        selectors: [["app-form-subir-archivos"]],
        decls: 5,
        vars: 2,
        consts: [["type", "file", 1, "text-nowrap", "text-truncate", 3, "change"], [1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["class", "progress mt-2", 4, "ngIf"], [1, "progress", "mt-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", 3, "ngStyle"]],
        template: function FormSubirArchivosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormSubirArchivosComponent_Template_input_change_1_listener($event) {
              return ctx.selectFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormSubirArchivosComponent_Template_button_click_2_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Upload ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormSubirArchivosComponent_div_4_Template, 3, 5, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedFiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentFileUpload);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXN1YmlyLWFyY2hpdm9zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "N3El":
    /*!***********************************************************!*\
      !*** ./src/app/servicios/firebase/file-upload.service.ts ***!
      \***********************************************************/

    /*! exports provided: FileUploadService */

    /***/
    function N3El(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadService", function () {
        return FileUploadService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");

      var FileUploadService = /*#__PURE__*/function () {
        function FileUploadService(db, storage) {
          _classCallCheck(this, FileUploadService);

          this.db = db;
          this.storage = storage;
          this.basePath = '/uploads';
        }

        _createClass(FileUploadService, [{
          key: "pushFileToStorage",
          value: function pushFileToStorage(fileUpload) {
            var _this3 = this;

            var filePath = "".concat(this.basePath, "/").concat(fileUpload.file.name);
            var storageRef = this.storage.ref(filePath);
            var uploadTask = this.storage.upload(filePath, fileUpload.file);
            uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["finalize"])(function () {
              storageRef.getDownloadURL().subscribe(function (downloadURL) {
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;

                _this3.saveFileData(fileUpload);
              });
            })).subscribe();
            return uploadTask.percentageChanges();
          }
        }, {
          key: "saveFileData",
          value: function saveFileData(fileUpload) {
            this.db.list(this.basePath).push(fileUpload);
          }
        }, {
          key: "getFiles",
          value: function getFiles(numberItems) {
            return this.db.list(this.basePath, function (ref) {
              return ref.limitToLast(numberItems);
            });
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(fileUpload) {
            var _this4 = this;

            this.deleteFileDatabase(fileUpload.key).then(function () {
              _this4.deleteFileStorage(fileUpload.name);
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteFileDatabase",
          value: function deleteFileDatabase(key) {
            return this.db.list(this.basePath).remove(key);
          }
        }, {
          key: "deleteFileStorage",
          value: function deleteFileStorage(name) {
            var storageRef = this.storage.ref(this.basePath);
            storageRef.child(name)["delete"]();
          }
        }]);

        return FileUploadService;
      }();

      FileUploadService.ɵfac = function FileUploadService_Factory(t) {
        return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
      };

      FileUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FileUploadService,
        factory: FileUploadService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Om+i":
    /*!********************************************************!*\
      !*** ./src/app/servicios/mensajes-realtime.service.ts ***!
      \********************************************************/

    /*! exports provided: MensajesRealtimeService */

    /***/
    function OmI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensajesRealtimeService", function () {
        return MensajesRealtimeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var MensajesRealtimeService = /*#__PURE__*/function () {
        function MensajesRealtimeService(db) {
          _classCallCheck(this, MensajesRealtimeService);

          this.db = db;
          this.dbPath = '/MensajesReal';
          this.MensajesRef = db.list(this.dbPath);
        }

        _createClass(MensajesRealtimeService, [{
          key: "getAll",
          value: function getAll() {
            return this.MensajesRef;
          }
        }, {
          key: "create",
          value: function create(unMensajes) {
            return this.MensajesRef.push(unMensajes);
          }
        }, {
          key: "update",
          value: function update(key, value) {
            return this.MensajesRef.update(key, value);
          }
        }, {
          key: "delete",
          value: function _delete(key) {
            return this.MensajesRef.remove(key);
          }
        }, {
          key: "deleteAll",
          value: function deleteAll() {
            return this.MensajesRef.remove();
          }
        }]);

        return MensajesRealtimeService;
      }();

      MensajesRealtimeService.ɵfac = function MensajesRealtimeService_Factory(t) {
        return new (t || MensajesRealtimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
      };

      MensajesRealtimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MensajesRealtimeService,
        factory: MensajesRealtimeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "SX83":
    /*!************************************************************************!*\
      !*** ./src/app/pages/listado-firestore/listado-firestore.component.ts ***!
      \************************************************************************/

    /*! exports provided: ListadoFirestoreComponent */

    /***/
    function SX83(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListadoFirestoreComponent", function () {
        return ListadoFirestoreComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_servicios_mensajes_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/servicios/mensajes-firestore.service */
      "X6nB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListadoFirestoreComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mensaje_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r2 == ctx_r0.currentIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mensaje_r1.mensaje, " ");
        }
      }

      var ListadoFirestoreComponent = /*#__PURE__*/function () {
        function ListadoFirestoreComponent(serviceFirestore) {
          var _this5 = this;

          _classCallCheck(this, ListadoFirestoreComponent);

          this.serviceFirestore = serviceFirestore;
          this.currentIndex = -1;
          this.title = '';
          serviceFirestore.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (changes) {
            return changes.map(function (c) {
              return Object.assign({}, c.payload.doc.data());
            });
          })).subscribe(function (data) {
            _this5.listadoMensajes = data;
          });
        }

        _createClass(ListadoFirestoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListadoFirestoreComponent;
      }();

      ListadoFirestoreComponent.ɵfac = function ListadoFirestoreComponent_Factory(t) {
        return new (t || ListadoFirestoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_mensajes_firestore_service__WEBPACK_IMPORTED_MODULE_2__["MensajesFirestoreService"]));
      };

      ListadoFirestoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListadoFirestoreComponent,
        selectors: [["app-listado-firestore"]],
        decls: 4,
        vars: 1,
        consts: [[1, "list-group"], ["class", "list-group-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
        template: function ListadoFirestoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "listado Fire store!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListadoFirestoreComponent_li_3_Template, 2, 3, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listadoMensajes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLWZpcmVzdG9yZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var src_app_modelos_mensajes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/modelos/mensajes */
      "WRLo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-firebase-firestore2021';
        this.unMensaje = new src_app_modelos_mensajes__WEBPACK_IMPORTED_MODULE_0__["Mensajes"]();
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto"], [1, "container", "mt-3"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ticketera");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WRLo":
    /*!*************************************!*\
      !*** ./src/app/modelos/mensajes.ts ***!
      \*************************************/

    /*! exports provided: Mensajes */

    /***/
    function WRLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mensajes", function () {
        return Mensajes;
      });

      var Mensajes = function Mensajes() {
        _classCallCheck(this, Mensajes);

        this.id = "";
        this.usuario = "";
        this.mensaje = "";
        this.estado = false;
      };
      /***/

    },

    /***/
    "X6nB":
    /*!*********************************************************!*\
      !*** ./src/app/servicios/mensajes-firestore.service.ts ***!
      \*********************************************************/

    /*! exports provided: MensajesFirestoreService */

    /***/
    function X6nB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensajesFirestoreService", function () {
        return MensajesFirestoreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var MensajesFirestoreService = /*#__PURE__*/function () {
        function MensajesFirestoreService(db) {
          _classCallCheck(this, MensajesFirestoreService);

          this.db = db;
          this.dbPath = '/mensajesFire';
          this.MensajesRef = db.collection(this.dbPath);
        }

        _createClass(MensajesFirestoreService, [{
          key: "getAll",
          value: function getAll() {
            return this.MensajesRef;
          }
        }, {
          key: "create",
          value: function create(mensajes) {
            return this.MensajesRef.add(Object.assign({}, mensajes));
          }
        }, {
          key: "update",
          value: function update(id, data) {
            return this.MensajesRef.doc(id).update(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.MensajesRef.doc(id)["delete"]();
          }
        }]);

        return MensajesFirestoreService;
      }();

      MensajesFirestoreService.ɵfac = function MensajesFirestoreService_Factory(t) {
        return new (t || MensajesFirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      MensajesFirestoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MensajesFirestoreService,
        factory: MensajesFirestoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_chat_firestore_chat_firestore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/chat-firestore/chat-firestore.component */
      "FARH");
      /* harmony import */


      var _pages_listado_firestore_listado_firestore_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/listado-firestore/listado-firestore.component */
      "SX83");
      /* harmony import */


      var _pages_listado_realtime_listado_realtime_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/listado-realtime/listado-realtime.component */
      "2mVO");
      /* harmony import */


      var _componentes_form_subir_archivos_form_subir_archivos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./componentes/form-subir-archivos/form-subir-archivos.component */
      "GRPC");
      /* harmony import */


      var _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/tickets/tickets.component */
      "eLMG");
      /* harmony import */


      var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-json-viewer */
      "xWP1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxJsonViewerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_chat_firestore_chat_firestore_component__WEBPACK_IMPORTED_MODULE_7__["ChatFirestoreComponent"], _pages_listado_firestore_listado_firestore_component__WEBPACK_IMPORTED_MODULE_8__["ListadoFirestoreComponent"], _pages_listado_realtime_listado_realtime_component__WEBPACK_IMPORTED_MODULE_9__["ListadoRealtimeComponent"], _componentes_form_subir_archivos_form_subir_archivos_component__WEBPACK_IMPORTED_MODULE_10__["FormSubirArchivosComponent"], _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_11__["TicketsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxJsonViewerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "eLMG":
    /*!****************************************************!*\
      !*** ./src/app/pages/tickets/tickets.component.ts ***!
      \****************************************************/

    /*! exports provided: TicketsComponent */

    /***/
    function eLMG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketsComponent", function () {
        return TicketsComponent;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_servicios_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/servicios/ticket.service */
      "hBTW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-json-viewer */
      "xWP1");

      function TicketsComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var boton_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.traerResultado(boton_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var boton_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](boton_r8.descripcion);
        }
      }

      function TicketsComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.changeExpand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Expandir Todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TicketsComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TicketsComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.changeExpand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contraer todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TicketsComponent_select_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TicketsComponent_select_11_Template_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.selectedOptionType = $event;
          })("change", function TicketsComponent_select_11_Template_select_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.getTicketTypeParametros();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "all");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "desperfecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "cambioPlan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "baja");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "alta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.selectedOptionType);
        }
      }

      function TicketsComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Date From");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_div_12_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.getTicketTypeParametros();
          })("ngModelChange", function TicketsComponent_div_12_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.dateFrom = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Date To");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_div_12_Template_input_change_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.getTicketTypeParametros();
          })("ngModelChange", function TicketsComponent_div_12_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.dateTo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.dateFrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.dateTo);
        }
      }

      function TicketsComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Date From");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_div_13_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.filtrarPorFechas();
          })("ngModelChange", function TicketsComponent_div_13_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.dateFrom = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Date To");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TicketsComponent_div_13_Template_input_change_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.filtrarPorFechas();
          })("ngModelChange", function TicketsComponent_div_13_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.dateTo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.dateFrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.dateTo);
        }
      }

      function TicketsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-json-viewer", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx_r6.expandido)("json", ctx_r6.respuesta);
        }
      }

      function TicketsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No se encontraron resultados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var TicketsComponent = /*#__PURE__*/function () {
        function TicketsComponent(ticketService) {
          _classCallCheck(this, TicketsComponent);

          this.ticketService = ticketService;
          this.respuesta = "...";
          this.expandido = false;
          this.selectedOptionType = "Select type";
          this.ultimaEjecucion = {
            descripcion: null,
            link: null
          };
          this.botones = [{
            descripcion: "Obtener Todos los tickets",
            link: "/"
          }, {
            descripcion: "Cada cuanto y que desperfecto",
            link: "cadaCuanto"
          }, {
            descripcion: "Obtiene los tickets por tipo",
            link: "type"
          }, {
            descripcion: "Que usuario atiende mas tickets",
            link: "AtiendeMasTickets"
          }, {
            descripcion: "Horas en las que hay mas trabajo",
            link: "findHoraMasTrabajo"
          }, {
            descripcion: "Tickets Cerrados",
            link: "findClosedTickets"
          }, {
            descripcion: "Tickets Abiertos",
            link: "findOpenTickets"
          }, {
            descripcion: "Que centros atienden por zona",
            link: "findCentroAtencionPorZona"
          }, {
            descripcion: "Cliente que genera mas tickets",
            link: "findClienteMasTickets"
          }, {
            descripcion: "Clientes con tickets pendientes",
            link: "findClienteTicketsPendientes"
          }, {
            descripcion: "Empleado que genero tickets",
            link: "findEmpleadoTicket"
          }];
        }

        _createClass(TicketsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var parametros = {
              typo: "sasdas",
              dateTo: "2021",
              dateFrom: "asd"
            };

            for (var key in parametros) {
              if (Object.prototype.hasOwnProperty.call(parametros, key)) {
                console.log(key);
                var i = key + "";
                console.log(parametros['dateFrom']);
              }
            }
          }
        }, {
          key: "traerResultado",
          value: function traerResultado(boton) {
            var _this6 = this;

            this.ticketService.callMethod(boton.link).then(function (datos) {
              datos.subscribe(function (response) {
                _this6.dateFrom = undefined;
                _this6.dateTo = undefined;
                _this6.ultimaEjecucion = boton;
                _this6.respuesta = response;
              });
            });
          }
        }, {
          key: "getTicketTypeParametros",
          value: function getTicketTypeParametros() {
            var _this7 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("type", this.selectedOptionType).set("dateTo", this.dateTo.toString()).set("dateFrom", this.dateFrom.toString());
            this.ticketService.callMethod(this.ultimaEjecucion.link, params).then(function (datos) {
              datos.subscribe(function (response) {
                if (response.length == 0) {
                  _this7.respuesta = "...";
                } else {
                  _this7.respuesta = response;
                }
              });
            });
          }
        }, {
          key: "filtrarPorFechas",
          value: function filtrarPorFechas() {
            var _this8 = this;

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set("dateTo", this.dateTo.toString()).set("dateFrom", this.dateFrom.toString());
            this.ticketService.callMethod(this.ultimaEjecucion.link, params).then(function (datos) {
              datos.subscribe(function (response) {
                if (response.length == 0) {
                  _this8.respuesta = "...";
                } else {
                  _this8.respuesta = response;
                }
              });
            });
          }
        }, {
          key: "changeExpand",
          value: function changeExpand() {
            this.expandido = !this.expandido;
          }
        }]);

        return TicketsComponent;
      }();

      TicketsComponent.ɵfac = function TicketsComponent_Factory(t) {
        return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_servicios_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"]));
      };

      TicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TicketsComponent,
        selectors: [["app-tickets"]],
        decls: 16,
        vars: 8,
        consts: [[2, "display", "flex"], [2, "display", "grid", "margin", "20px"], ["style", "margin: 5px; width: 250px;", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngFor", "ngForOf"], ["style", "margin: 10px;", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["style", "margin: 10px;", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["style", "margin: 10px;", "class", "form-select", "aria-label", "Default select example", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["style", "margin: 5px;display: flex; align-items: center;", 4, "ngIf"], ["style", "padding: 5px ;border: double;max-width: 1000px;", "class", "overflow-auto", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 2, "margin", "5px", "width", "250px", 3, "click"], [1, "btn", "btn-secondary", 2, "margin", "10px", 3, "click"], [1, "btn", "btn-danger", 2, "margin", "10px", 3, "click"], ["aria-label", "Default select example", 1, "form-select", 2, "margin", "10px", 3, "ngModel", "ngModelChange", "change"], ["selected", ""], ["value", "all"], ["value", "desperfecto"], ["value", "cambioPlan"], ["value", "baja"], ["value", "alta"], [2, "margin", "5px", "display", "flex", "align-items", "center"], ["type", "datetime-local", "id", "birthdaytime", "name", "birthdaytime", 3, "ngModel", "change", "ngModelChange"], [1, "overflow-auto", 2, "padding", "5px", "border", "double", "max-width", "1000px"], [3, "expanded", "json"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function TicketsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TicketsComponent_button_4_Template, 2, 1, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Respuestas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TicketsComponent_button_9_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TicketsComponent_button_10_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TicketsComponent_select_11_Template, 13, 1, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TicketsComponent_div_12_Template, 7, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TicketsComponent_div_13_Template, 7, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TicketsComponent_div_14_Template, 2, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TicketsComponent_div_15_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.botones);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.expandido);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expandido);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ultimaEjecucion.link == "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ultimaEjecucion.link == "type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ultimaEjecucion.link == "/" || ctx.ultimaEjecucion.link == "cadaCuanto" || ctx.ultimaEjecucion.link == "findClosedTickets" || ctx.ultimaEjecucion.link == "findOpenTickets");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.respuesta == "..."));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.respuesta == "...");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_5__["NgxJsonViewerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "hBTW":
    /*!*********************************************!*\
      !*** ./src/app/servicios/ticket.service.ts ***!
      \*********************************************/

    /*! exports provided: TicketService */

    /***/
    function hBTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketService", function () {
        return TicketService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TicketService = /*#__PURE__*/function () {
        function TicketService(http) {
          _classCallCheck(this, TicketService);

          this.http = http;
          this.url = "https://tp-mongodb.herokuapp.com/ticket/";
        }

        _createClass(TicketService, [{
          key: "callMethod",
          value: function callMethod(path, param) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!param) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 3;
                      return this.http.get(this.url + path, {
                        params: param
                      });

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                      _context.next = 6;
                      return this.http.get(this.url + path);

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "callMethodWithParams",
          value: function callMethodWithParams(path, params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var headers, parametros;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.url);
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                      parametros = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
                      _context2.next = 5;
                      return this.http.get(this.url + path, {
                        headers: headers,
                        params: parametros
                      });

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return TicketService;
      }();

      TicketService.ɵfac = function TicketService_Factory(t) {
        return new (t || TicketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TicketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: TicketService,
        factory: TicketService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_chat_firestore_chat_firestore_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/chat-firestore/chat-firestore.component */
      "FARH");
      /* harmony import */


      var _pages_listado_firestore_listado_firestore_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/listado-firestore/listado-firestore.component */
      "SX83");
      /* harmony import */


      var _pages_listado_realtime_listado_realtime_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/listado-realtime/listado-realtime.component */
      "2mVO");
      /* harmony import */


      var _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/tickets/tickets.component */
      "eLMG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: 'operacionesTicket',
        pathMatch: 'full'
      }, {
        path: 'chat',
        component: _pages_chat_firestore_chat_firestore_component__WEBPACK_IMPORTED_MODULE_1__["ChatFirestoreComponent"]
      }, {
        path: 'listadoFireStore',
        component: _pages_listado_firestore_listado_firestore_component__WEBPACK_IMPORTED_MODULE_2__["ListadoFirestoreComponent"]
      }, {
        path: 'listadoRealtime',
        component: _pages_listado_realtime_listado_realtime_component__WEBPACK_IMPORTED_MODULE_3__["ListadoRealtimeComponent"]
      }, {
        path: 'operacionesTicket',
        component: _pages_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map