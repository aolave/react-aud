var webpackLibs = (function(e) {
	function t(t) {
		for (var n, i, c = t[0], l = t[1], s = t[2], d = 0, p = []; d < c.length; d++)
			(i = c[d]), Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), (o[i] = 0);
		for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
		for (u && u(t); p.length; ) p.shift()();
		return r.push.apply(r, s || []), a();
	}
	function a() {
		for (var e, t = 0; t < r.length; t++) {
			for (var a = r[t], n = !0, c = 1; c < a.length; c++) {
				var l = a[c];
				0 !== o[l] && (n = !1);
			}
			n && (r.splice(t--, 1), (e = i((i.s = a[0]))));
		}
		return e;
	}
	var n = {},
		o = { 0: 0 },
		r = [];
	function i(t) {
		if (n[t]) return n[t].exports;
		var a = (n[t] = { i: t, l: !1, exports: {} });
		return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
	}
	(i.m = e),
		(i.c = n),
		(i.d = function(e, t, a) {
			i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
		}),
		(i.r = function(e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(i.t = function(e, t) {
			if ((1 & t && (e = i(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var a = Object.create(null);
			if (
				(i.r(a),
				Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var n in e)
					i.d(
						a,
						n,
						function(t) {
							return e[t];
						}.bind(null, n)
					);
			return a;
		}),
		(i.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
						}
					: function() {
							return e;
						};
			return i.d(t, 'a', t), t;
		}),
		(i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = '');
	var c = (window.webpackJsonpwebpackLibs = window.webpackJsonpwebpackLibs || []),
		l = c.push.bind(c);
	(c.push = t), (c = c.slice());
	for (var s = 0; s < c.length; s++) t(c[s]);
	var u = l;
	return r.push([ 336, 1 ]), a();
})({
	1: function(e, t) {
		e.exports = React;
	},
	111: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = (0, a(1).createContext)({ hoja_trabajo: null, update: function(e) {} });
		t.default = n;
	},
	112: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.AuthorIconLogDefaultWrapper = t.AuthorIconLogEditable = t.AuthorIconLog = void 0);
		var n = a(1),
			o = u(a(9)),
			r = u(a(56)),
			i = u(a(75)),
			c = u(a(167)),
			l = u(a(88)),
			s = u(a(163));
		function u(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function d(e) {
			return (d =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function p(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e, t, a) {
			return t && m(e.prototype, t), a && m(e, a), e;
		}
		function h(e, t) {
			return !t || ('object' !== d(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function v(e) {
			return (v = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function b(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && y(e, t);
		}
		function y(e, t) {
			return (y =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var g = (function(e) {
			function t() {
				return p(this, t), h(this, v(t).apply(this, arguments));
			}
			return (
				b(t, n.Component),
				f(t, [
					{
						key: 'render',
						value: function() {
							var e = [ 'author-icon-log' ];
							this.props.className && e.push(this.props.className),
								this.props.inline && e.push('inline'),
								(e = (0, o.default)(e, this.props.size));
							var t,
								a = React.createElement(r.default, {
									name: 'far fa-user-circle',
									size: this.props.size,
									color: 0 == _.size(this.props.log) ? null : this.props.iconColor,
									disabled: 0 == _.size(this.props.log)
								});
							if (
								(this.props.alertText &&
									(a = React.createElement(
										r.default.Group,
										null,
										a,
										React.createElement(r.default, {
											corner: 'top right',
											color: 'red',
											name: 'warning circle'
										})
									)),
								this.props.inline)
							) {
								var n = null == this.props.log ? null : this.props.log[0];
								t = React.createElement(
									'div',
									null,
									this.props.label &&
										React.createElement('span', { className: 'lb' }, this.props.label),
									a,
									this.props.alertText &&
										React.createElement(
											'span',
											{ className: 'alert-text' },
											React.createElement(r.default, { color: 'red', name: 'warning circle' }),
											' ',
											this.props.alertText
										),
									n &&
										React.createElement(
											'div',
											{ className: 'content user-info' },
											React.createElement('div', { className: 'user-sigla' }, n.User.sigla),
											React.createElement(
												'time',
												{ dateTime: Date.create(n.ts).format('{year}-{MM}-{dd}') },
												Date.create(n.ts).format('{year}-{MM}-{dd}')
											)
										)
								);
							} else
								t = React.createElement(
									'div',
									null,
									this.props.label &&
										React.createElement('span', { className: 'lb' }, this.props.label),
									a
								);
							return React.createElement(
								'div',
								{ className: e },
								React.createElement(
									l.default,
									{
										trigger: t,
										position: 'bottom center',
										className: 'author-icon-log-popup',
										pinned: !0,
										size: this.props.size
									},
									React.createElement(
										l.default.Header,
										null,
										this.props.name,
										this.props.alertText &&
											React.createElement(
												'div',
												{ className: 'alert-text' },
												React.createElement(r.default, {
													color: 'red',
													name: 'warning circle'
												}),
												' ',
												this.props.alertText
											)
									),
									React.createElement(
										l.default.Content,
										null,
										null == this.props.log
											? React.createElement('div', { className: 'label' }, 'Sin Especificar')
											: React.createElement(
													'table',
													{ className: 'table nowrap' },
													React.createElement(
														'tbody',
														null,
														this.props.log.map(function(e, t) {
															return React.createElement(
																'tr',
																{ key: t },
																React.createElement(
																	'td',
																	null,
																	a,
																	' ',
																	e.User.name,
																	' (',
																	e.User.sigla,
																	')'
																),
																React.createElement(
																	'td',
																	null,
																	React.createElement(
																		'em',
																		null,
																		Date.create(e.ts).format('{year}-{MM}-{dd}')
																	)
																)
															);
														})
													)
												)
									)
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.AuthorIconLog = g;
		var E = (function(e) {
			function t() {
				var e;
				return (
					p(this, t),
					((e = h(this, v(t).apply(this, arguments))).state = { isLoading: !1 }),
					(e.onClickEdit = function(t) {
						t.preventDefault(), e.setState({ isLoading: !0 }), e.props.onClickEdit();
					}),
					e
				);
			}
			return (
				b(t, n.Component),
				f(t, [
					{
						key: 'render',
						value: function() {
							var e = [ 'author-icon-log' ];
							this.props.className && e.push(this.props.className),
								(e = (0, o.default)(e, this.props.size));
							var t = React.createElement(r.default, {
									name: 'far fa-user-circle',
									size: this.props.size,
									color: null == this.props.log ? null : this.props.iconColor,
									disabled: null == this.props.log
								}),
								a = React.createElement(
									'div',
									{ style: { position: 'relative' } },
									React.createElement(
										s.default,
										{ inverted: !0, active: this.state.isLoading },
										React.createElement(c.default, { inverted: !0 })
									),
									this.props.label &&
										React.createElement('span', { className: 'lb' }, this.props.label),
									t,
									React.createElement(
										i.default,
										{
											className: 'action edit',
											disabled: this.props.disableEdit,
											compact: !0,
											size: 'mini',
											color: this.props.iconColor,
											onClick: this.onClickEdit
										},
										this.props.editText
									)
								);
							return React.createElement(
								'div',
								{ className: e },
								React.createElement(
									l.default,
									{ trigger: a, position: 'bottom center', pinned: !0, size: this.props.size },
									React.createElement(l.default.Header, { content: this.props.name }),
									React.createElement(
										l.default.Content,
										null,
										null == this.props.log
											? React.createElement('div', { className: 'label' }, 'Sin Especificar')
											: React.createElement(
													'table',
													{ className: 'table nowrap' },
													React.createElement(
														'tbody',
														null,
														this.props.log.map(function(e, a) {
															return React.createElement(
																'tr',
																{ key: a },
																React.createElement(
																	'td',
																	null,
																	t,
																	' ',
																	e.User.name,
																	' (',
																	e.User.sigla,
																	')'
																),
																React.createElement(
																	'td',
																	null,
																	React.createElement(
																		'em',
																		null,
																		Date.create(e.ts).format('{year}-{MM}-{dd}')
																	)
																)
															);
														})
													)
												)
									)
								)
							);
						}
					}
				]),
				t
			);
		})();
		(t.AuthorIconLogEditable = E), (E.defaultProps = { disableEdit: !1 });
		var R = (function(e) {
			function t() {
				return p(this, t), h(this, v(t).apply(this, arguments));
			}
			return (
				b(t, n.Component),
				f(t, [
					{
						key: 'render',
						value: function() {
							var e = this.props.model,
								t =
									e.fecha_completado &&
									e.fecha_revision &&
									Date.create(e.fecha_completado) > Date.create(e.fecha_revision)
										? 'Modificado despues de Revisado'
										: null;
							return React.createElement(
								'div',
								{
									className: (0, o.default)(
										'author-icon-log-wrapper',
										this.props.size,
										this.props.className
									)
								},
								React.createElement(g, {
									log: e.UpdateLog,
									name: 'Preparado por',
									label: 'P',
									iconColor: 'green',
									size: this.props.size
								}),
								React.createElement(g, {
									log: e.RevisionLog,
									name: 'Revisado por',
									label: 'R',
									iconColor: 'olive',
									size: this.props.size,
									alertText: t
								})
							);
						}
					}
				]),
				t
			);
		})();
		t.AuthorIconLogDefaultWrapper = R;
	},
	113: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.StatusDivBlock = t.StatusButtonGroupActions = t.RevisadoButtonAction = t.CompletadoButtonAction = void 0);
		var n = a(1),
			o = c(a(88)),
			r = c(a(75)),
			i = c(a(9));
		function c(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function l(e) {
			return (l =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function u(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function d(e, t, a) {
			return t && u(e.prototype, t), a && u(e, a), e;
		}
		function p(e, t) {
			return !t || ('object' !== l(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function m(e) {
			return (m = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function f(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && h(e, t);
		}
		function h(e, t) {
			return (h =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var v = (function(e) {
			function t() {
				return s(this, t), p(this, m(t).apply(this, arguments));
			}
			return (
				f(t, n.PureComponent),
				d(t, [
					{
						key: 'render',
						value: function() {
							var e = this.props.disableText;
							return React.createElement(o.default, {
								trigger: React.createElement(
									'div',
									{ className: 'button-wrapper' },
									React.createElement(
										r.default,
										{
											primary: !0,
											icon: !0,
											compact: !0,
											onClick: this.props.onClick,
											disabled: null != e
										},
										' ',
										React.createElement('i', { className: 'icon check' }),
										' Completado'
									)
								),
								content: e,
								header: 'Marcar como Completado | Opción deshabilitada',
								disabled: null == e,
								className: 'disable-text',
								on: 'hover'
							});
						}
					}
				]),
				t
			);
		})();
		t.CompletadoButtonAction = v;
		var b = (function(e) {
			function t() {
				return s(this, t), p(this, m(t).apply(this, arguments));
			}
			return (
				f(t, n.PureComponent),
				d(t, [
					{
						key: 'render',
						value: function() {
							var e,
								t = this.props.disableText;
							if (
								(null == t &&
									this.props.record &&
									!this.props.record.fecha_completado &&
									(t = 'Debe estar primero en estado COMPLETADO, para poder marcarse como REVISADO.'),
								(null !== this.props.showAlert && void 0 !== this.props.showAlert) ||
									!this.props.record)
							)
								e = this.props.showAlert;
							else {
								var a = this.props.record;
								e =
									a.fecha_completado &&
									a.fecha_revision &&
									Date.create(a.fecha_completado) > Date.create(a.fecha_revision);
							}
							var n = e
								? React.createElement(o.default, {
										trigger: React.createElement('i', { className: 'icon warning circle red' }),
										content: 'Ha recibido modificaciones después de su última revisión.'
									})
								: null;
							return React.createElement(o.default, {
								trigger: React.createElement(
									'div',
									{ className: 'button-wrapper' },
									React.createElement(
										r.default,
										{
											color: 'olive',
											icon: !0,
											compact: !0,
											onClick: this.props.onClick,
											disabled: null != t
										},
										' ',
										React.createElement('i', { className: 'icon check fitted' }),
										React.createElement('i', { className: 'icon check' }),
										' Revisado ',
										n
									)
								),
								content: t,
								header: 'Marcar como Revisado | Opción deshabilitada',
								disabled: null == t,
								className: 'disable-text',
								on: 'hover'
							});
						}
					}
				]),
				t
			);
		})();
		t.RevisadoButtonAction = b;
		var y = (function(e) {
			function t() {
				return s(this, t), p(this, m(t).apply(this, arguments));
			}
			return (
				f(t, n.PureComponent),
				d(t, [
					{
						key: 'render',
						value: function() {
							return React.createElement(
								'div',
								{ className: 'actions ab-status-actions' },
								this.props.prepend,
								user_has_role_permission(this.props.completado.permission) &&
									React.createElement(v, this.props.completado),
								user_has_role_permission(this.props.revisado.permission) &&
									React.createElement(b, this.props.revisado),
								this.props.append
							);
						}
					}
				]),
				t
			);
		})();
		t.StatusButtonGroupActions = y;
		t.StatusDivBlock = function(e) {
			return React.createElement(
				'div',
				{ className: (0, i.default)('lb-status-wrapper', e.wrapperClassName) },
				!e.hideLabel && 'Estado:',
				React.createElement(
					'div',
					{
						className: (0, i.default)(
							e.className,
							'lb-status',
							'lb-status-'.concat(_.str.dasherize(e.status.toLowerCase()))
						)
					},
					e.status || ''
				)
			);
		};
	},
	165: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = d(a(76)),
			r = a(110),
			i = d(a(207)),
			c = d(a(307)),
			l = d(a(9)),
			s = d(a(601)),
			u = a(308);
		function d(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function p(e) {
			return (p =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e, t) {
			return !t || ('object' !== p(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function h(e) {
			return (h = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function v(e, t) {
			return (v =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var b = {
				basic: {
					height: 150,
					toolbar: [
						{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic' ] },
						{
							name: 'paragraph',
							groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
							items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'TextColor' ]
						}
					],
					autoParagraph: !1,
					removePlugins: 'elementspath, uploadfile, uploadfileab, resize',
					extraPlugins: 'openlink'
				}
			},
			y = (function(e) {
				function t(e) {
					var a;
					return (
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
						((a = f(this, h(t).call(this, e))).previewRef = (0, n.createRef)()),
						(a.handleEscape = function(e) {
							i.default.getCode(e) === i.default.Escape &&
								(('undefined' != typeof CKEDITOR && null != CKEDITOR.dialog.getCurrent()) ||
									a.onClose());
						}),
						(a.onChange = function(e) {
							a.props.inline && a.props.onSave(e.editor, !1, !1),
								a._cachedEditor || (a._cachedEditor = e.editor),
								a.props.autosave &&
									(a.autosaveId || (a.autosaveId = setTimeout(a.autosave, 1e3 * t.AUTOSAVE_DELAY)));
						}),
						(a.onClickEdit = function(e) {
							e.preventDefault(), a.setState({ isModalEditOpen: !0, isLoading: !0 });
						}),
						(a.onSave = function() {
							a.autosaveId && (clearTimeout(a.autosaveId), (a.autosaveId = null)),
								$.isFunction(a.props.onSave)
									? (a.props.onSave(a.getEditor(), !0, !1, function() {
											a.setState({ isAutosaving: !1 }), a.fetchAttachments();
										}),
										a.setState({ isModalEditOpen: !1 }))
									: (a.setState({ isModalEditOpen: !1, isAutosaving: !1 }), a.fetchAttachments());
						}),
						(a.onCancel = function() {
							a.setState({ isModalEditOpen: !1 }), $.isFunction(a.props.onClose) && a.props.onClose();
						}),
						(a.onClose = function() {
							a.autosaveId && (clearInterval(a.autosaveId), (a.autosaveId = null)),
								a.setState({ isModalEditOpen: !1 }),
								$.isFunction(a.props.onClose) && a.props.onClose();
						}),
						(a.onModalMount = function() {
							r.instance.sub('keydown', a.handleEscape, { pool: 'default' }),
								null == a.state.attachments && a.fetchAttachments();
						}),
						(a.autosave = function() {
							a.setState({ isAutosaving: !0 });
							var e = a.getEditor();
							null != e &&
								(a.props.onSave(e, !1, !0, function() {
									return a.setState({ isAutosaving: !1 });
								}),
								a.fetchAttachments()),
								a.autosaveId && (clearInterval(a.autosaveId), (a.autosaveId = null));
						}),
						(a.onClickPreview = function(e) {
							a.props.onClickPreview && a.props.onClickPreview(e),
								a.props.openOnClickPreview && a.setState({ isModalEditOpen: !0 });
						}),
						(a.onUpdateAttachment = function() {
							a.fetchAttachments();
						}),
						(a.onDeleteAttachment = function(e, t) {
							a.setState({ isLoadingAttachments: !0 });
							var n = (0, u.cleanAttachmentFrom)(a.props.data, e);
							$.isFunction(t) && t();
							var o = a.getEditor();
							o && (o.setData(n), a.autosave());
						}),
						(a.state = {
							isModalEditOpen: a.props.open,
							isAutosaving: !1,
							isLoading: !0,
							attachments: null,
							isLoadingAttachments: !1
						}),
						a
					);
				}
				var a, d, p;
				return (
					(function(e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError('Super expression must either be null or a function');
						(e.prototype = Object.create(t && t.prototype, {
							constructor: { value: e, writable: !0, configurable: !0 }
						})),
							t && v(e, t);
					})(t, n.PureComponent),
					(a = t),
					(d = [
						{
							key: 'getEditor',
							value: function() {
								return null != this.ckeditorComp
									? this.ckeditorComp.editor
									: this._cachedEditor ? this._cachedEditor : null;
							}
						},
						{
							key: 'assertRequired',
							value: function() {
								if (!this.props.editable) return !1;
								if (!this.props.required) return !1;
								var e = this.getEditor();
								return (
									'' == _.trim(e.getData()) &&
									(bootbox.alert('Esta campo es requerido, por lo tanto no puede quedar vacío.'), !0)
								);
							}
						},
						{
							key: 'componentWillReceiveProps',
							value: function(e) {
								e.open && !this.state.isModalEditOpen && this.setState({ isModalEditOpen: !0 });
							}
						},
						{
							key: 'componentDidMount',
							value: function() {
								$(this.previewRef.current).find('a[href]').each(function() {
									$(this).attr('target', '_blank');
								});
							}
						},
						{
							key: 'parseCkeditorOptions',
							value: function() {
								var e = this.props.ckeditorOptions;
								if (('string' == typeof e && (e = b[e]), void 0 !== this.props.ckeditorUploadOptions)) {
									var t = 'proyecto/' + app.vars.idproyecto + '/adjunto/upload',
										a = this.props.ckeditorUploadOptions,
										n = a.url,
										o = void 0 === n ? t : n,
										r = a.model,
										i = a.modelId;
									null == i
										? (e.removePlugins = 'elementspath,uploadimage,uploadfile,uploadfileab')
										: ((e.uploadUrl = url_for(
												''.concat(o, '?model=').concat(r, '&model_id=').concat(i)
											)),
											(e.imageUploadUrl = url_for(
												''.concat(o, '?model=').concat(r, '&model_id=').concat(i)
											)),
											(e.filebrowserUploadUrl = url_for(
												''.concat(o, '?model=').concat(r, '&model_id=').concat(i, '&n=attachment')
											)));
								}
								return e;
							}
						},
						{
							key: 'fetchAttachments',
							value: function() {
								var e = this;
								if (void 0 !== this.props.ckeditorUploadOptions) {
									var t = this.props.ckeditorUploadOptions,
										a = t.model,
										n = t.modelId;
									this.setState({ isLoadingAttachments: !0 }),
										$.getJSON(url_for('proyecto/'.concat(app.vars.idproyecto, '/adjunto/json')), {
											model: a,
											model_id: n
										}).done(function(t) {
											e.setState({ attachments: t.response, isLoadingAttachments: !1 });
										});
								}
							}
						},
						{
							key: 'getCkeditorOptions',
							value: function() {
								var e = this,
									t = Object.assign(
										{
											height: 200,
											toolbar: [
												{
													name: 'clipboard',
													items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ]
												},
												{
													name: 'links',
													items: [ 'Link', 'pasolink', 'muestreolink', 'Attachments' ]
												},
												{ name: 'insert', items: [ 'Table', 'SpecialChar' ] },
												{ name: 'tools', items: [ 'Maximize' ] },
												{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline' ] },
												{
													name: 'paragraph',
													items: [
														'NumberedList',
														'BulletedList',
														'-',
														'Outdent',
														'Indent',
														'-',
														'JustifyLeft',
														'JustifyCenter',
														'JustifyRight',
														'JustifyBlock',
														'-',
														'TextColor'
													]
												},
												{ name: 'styles', items: [ 'Styles', 'Format' ] }
											],
											autoParagraph: !1,
											enterMode: CKEDITOR.ENTER_BR,
											removePlugins: 'elementspath',
											extraPlugins:
												'uploadimage,pastebase64,uploadfileab,openlink,attach,justify,colorbutton,pastefromexcel,colordialog,pasolink',
											openlink_modifier: 0,
											onAttachmentUpload: function(t, a) {
												t = t
													.replace('<pre>', '')
													.replace(
														'<pre style="word-wrap: break-word; white-space: pre-wrap;">',
														''
													)
													.replace('</pre>', '');
												var n = JSON.parse(t);
												console.log(n),
													_.forEach(n, function(e) {
														e.uploaded
															? a.insertHtml(
																	"<a href='" +
																		e.url +
																		"' target='_blank' class='proyecto-attachment' >" +
																		e.fileName +
																		'</a><br> '
																)
															: alert(e.error);
													}),
													CKEDITOR.dialog.getCurrent().hide(),
													e.props.onUpload && e.props.onUpload(),
													e.fetchAttachments();
												var o = e.getEditor();
												o && e.props.onSave(o, !1, !1);
											}
										},
										this.parseCkeditorOptions()
									);
								return (
									(t.on = Object.assign(
										{
											fileUploadRequest: function(e) {
												var t = e.data.fileLoader;
												t.on('abort', function() {
													$.unblockUI();
												}),
													t.on('error', function() {
														console.log(t), $.unblockUI();
													}),
													$.blockUI({
														message:
															'<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Cargando archivo al servidor.<br> Por favor Espere ...</h3>'
													});
											},
											fileUploadResponse: function() {
												$.unblockUI(), this.fire('change');
											},
											paste: function(e) {
												e.data.dataValue = e.data.dataValue.replace(/(min-)?width:.+?;/g, '');
											}
										},
										t.on || {}
									)),
									t
								);
							}
						},
						{
							key: 'renderFooter',
							value: function() {
								var e = this.props.footer;
								return 'AttachmentList' === e
									? React.createElement(u.AttachmentListPanel, {
											isLoading: this.state.isLoadingAttachments,
											attachments: this.state.attachments,
											onUpdateItem: this.onUpdateAttachment,
											onDeleteItem: this.onDeleteAttachment
										})
									: e;
							}
						},
						{
							key: 'renderModal',
							value: function() {
								if (this.state.isModalEditOpen) {
									var e = (0, l.default)([
										'editor-preview-modal',
										!!this.props.className && this.props.className + '-modal'
									]);
									return React.createElement(
										o.default,
										{
											className: e,
											open: !0,
											closeIcon: !0,
											closeOnDimmerClick: !1,
											dimmer: 'inverted',
											onClose: this.onClose,
											closeOnEscape: !1,
											onMount: this.onModalMount,
											size: 'large'
										},
										React.createElement(o.default.Content, null, this.renderEditor()),
										this.props.editable
											? React.createElement(
													o.default.Actions,
													null,
													this.props.leftActions,
													React.createElement(
														'button',
														{ className: 'ui button negative', onClick: this.onCancel },
														'Cancelar'
													),
													React.createElement(
														'button',
														{ className: 'ui button primary', onClick: this.onSave },
														'Guardar'
													)
												)
											: React.createElement(
													o.default.Actions,
													null,
													this.props.leftActions,
													React.createElement(
														'button',
														{ className: 'ui button negative', onClick: this.onCancel },
														'Cerrar'
													)
												)
									);
								}
							}
						},
						{
							key: 'renderEditor',
							value: function() {
								var e,
									t = this;
								return (
									(this.props.label || this.props.labelTitle) &&
										(e =
											'<div class="editor-label"> <strong class="editor-label-title">' +
											(this.props.labelTitle || '') +
											'</strong> ' +
											(this.props.label || '') +
											' </div>'),
									React.createElement(
										n.Fragment,
										null,
										e && React.createElement('div', { dangerouslySetInnerHTML: { __html: e } }),
										React.createElement(
											'div',
											{ style: { minHeight: '200px' } },
											React.createElement(
												'div',
												{ className: 'loading' },
												React.createElement(
													'div',
													{ className: this.state.isAutosaving ? '' : 'ui-helper-hidden' },
													React.createElement('span', { className: 'ajax-loader-snake' }),
													' Guardando...'
												)
											),
											React.createElement(
												'div',
												{
													className: (0, l.default)('ui dimmer inverted', {
														active: this.state.isLoading
													})
												},
												React.createElement('div', { className: 'ui loader' }, 'Cargando...')
											),
											React.createElement(c.default, {
												ref: function(e) {
													return (t.ckeditorComp = e);
												},
												data: this.props.data,
												config: this.getCkeditorOptions(),
												onChange: this.onChange,
												onInstanceReady: function() {
													return t.setState({ isLoading: !1 });
												},
												readOnly: !this.props.editable
											})
										),
										this.renderFooter()
									)
								);
							}
						},
						{
							key: 'render',
							value: function() {
								if (this.props.inline)
									return React.createElement(
										'div',
										{ className: 'editor-inline' },
										' ',
										this.renderEditor()
									);
								var e = null == this.props.preview ? this.props.data || '' : this.props.preview,
									t = (0, l.default)([
										'editor-preview',
										this.props.className,
										e ? 'text-non-empty' : 'text-empty'
									]);
								return (
									this.props.prefixPreview &&
										(e =
											'<strong class="editor-preview-title" >' +
											this.props.prefixPreview +
											'</strong> ' +
											e),
									(e = e.replace(/(min-)?width:.+?;/g, '')),
									React.createElement(
										n.Fragment,
										null,
										React.createElement(
											'div',
											{
												className: (0, l.default)(
													'editor-preview-wrapper',
													this.props.wrapperClassName
												),
												onClick: this.onClickPreview
											},
											React.createElement('div', {
												ref: this.previewRef,
												className: t,
												dangerouslySetInnerHTML: { __html: e },
												style: this.props.previewStyle
											}),
											this.props.editable &&
												React.createElement(
													'div',
													{ className: 'action-list' },
													React.createElement(s.default, { onClick: this.onClickEdit })
												)
										),
										this.renderModal()
									)
								);
							}
						}
					]) && m(a.prototype, d),
					p && m(a, p),
					t
				);
			})();
		(t.default = y),
			(y.AUTOSAVE_DELAY = 60),
			(y.defaultProps = {
				open: !1,
				autosave: !1,
				required: !1,
				editable: !0,
				openOnClickPreview: !0,
				ckeditorOptions: {}
			});
	},
	168: function(e, t, a) {
		'use strict';
		var n, o;
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.HojaTrabajoUpdateUtils = t.HojaTrabajoUtils = void 0),
			(t.HojaTrabajoUtils = n),
			(function(e) {
				e.getAllVisitasAfter = function(e, t) {
					var a = [],
						n = !1;
					return (
						_.forEach(e.visitas, function(e) {
							n ? a.push(e) : e.id == t.id && (n = !0);
						}),
						a
					);
				};
			})(n || (t.HojaTrabajoUtils = n = {})),
			(t.HojaTrabajoUpdateUtils = o),
			(function(e) {
				function t(e, t, a) {
					var n = Object.assign({}, e);
					return (
						(n.visitas = _.mapValues(n.visitas, function(e) {
							return e.id == t.id && (e = Object.assign({}, e, a)), e;
						})),
						n
					);
				}
				(e.updateVisita = t),
					(e.updateVisitas = function(e, a) {
						return (
							_.forEach(a, function(a, n) {
								var o = _.findWhere(e.visitas, { id_visita: n });
								e = t(e, o, a);
							}),
							e
						);
					}),
					(e.updateField = function(e, t, a) {
						var n = Object.assign({}, e);
						return (n[t] = Object.assign({}, n[t], a)), n;
					});
			})(o || (t.HojaTrabajoUpdateUtils = o = {}));
	},
	170: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.MenuItemNewHeader = t.MenuItemNew = void 0);
		var n,
			o = a(1),
			r = (n = a(76)) && n.__esModule ? n : { default: n },
			i = a(112);
		function c(e) {
			return (c =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function l(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function s(e, t) {
			return !t || ('object' !== c(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function u(e) {
			return (u = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function d(e, t) {
			return (d =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var p = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = s(this, u(t).apply(this, arguments))).state = { modalOpen: !1 }),
					(e.onClick = function() {
						e.setState({ modalOpen: !0 });
					}),
					(e.onCloseModal = function() {
						e.setState({ modalOpen: !1 });
					}),
					(e.onSave = function(t) {
						e.props.onSave(t).then(function() {
							e.onCloseModal();
						});
					}),
					e
				);
			}
			var a, n, i;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && d(e, t);
				})(t, o.PureComponent),
				(a = t),
				(n = [
					{
						key: 'render',
						value: function() {
							if (this.props.isEditable) {
								var e = this.props.contentAs;
								return React.createElement(
									'div',
									{ className: '_a-center' },
									React.createElement(
										'button',
										{
											className: 'button ui right tiny compact plain green rounded',
											onClick: this.onClick
										},
										this.props.buttonText,
										' ',
										React.createElement('i', { className: 'icon plus' })
									),
									this.state.modalOpen &&
										React.createElement(
											r.default,
											{
												open: !0,
												dimmer: 'inverted',
												className: 'modal-ab modal-sidebarmenuitem',
												size: 'large',
												closeIcon: !0,
												closeOnDimmerClick: !1,
												closeOnEscape: !1,
												onClose: this.onCloseModal
											},
											React.createElement(r.default.Header, null, this.props.headerText),
											React.createElement(e, {
												onSave: this.onSave,
												moduleParams: this.props.moduleParams,
												isEditable: this.props.isEditable,
												item: this.props.item
											})
										)
								);
							}
						}
					}
				]) && l(a.prototype, n),
				i && l(a, i),
				t
			);
		})();
		t.MenuItemNew = p;
		t.MenuItemNewHeader = function(e) {
			var t = e.item.status || 'EN PROCESO';
			return React.createElement(
				'div',
				{ className: 'ui grid padded', style: { marginBottom: 0 } },
				React.createElement(
					'div',
					{ className: 'row', style: { paddingTop: 0 } },
					React.createElement(
						'div',
						{ className: 'column four wide' },
						React.createElement('strong', { style: { fontWeight: 600 } }, e.item.label)
					),
					React.createElement(
						'div',
						{ className: 'column four wide' },
						React.createElement('span', null, 'Estado: '),
						React.createElement(
							'div',
							{ className: 'lb-status-wrapper' },
							React.createElement(
								'div',
								{ className: 'lb-status lb-status-'.concat(_.str.dasherize(t.toLowerCase())) },
								t
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'column four wide' },
						React.createElement(i.AuthorIconLogDefaultWrapper, { model: e.item })
					)
				)
			);
		};
	},
	213: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.default = function(e) {
				void 0 !== (e = Object.assign({}, e, i)).value && _.size(e.value) > 0 && (e.value = +e.value);
				return void 0 === e.isEditable || e.isEditable
					? React.createElement(n.default, e)
					: React.createElement(
							'span',
							{ className: 'autonumeric non-editable value' },
							o.default.format(e.value, e)
						);
			});
		var n = r(a(656)),
			o = r(a(320));
		function r(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var i = {
			decimalPlaces: 2,
			decimalCharacter: ',',
			decimalCharacterAlternative: '.',
			digitGroupSeparator: '.',
			allowDecimalPadding: !1,
			selectOnFocus: !1
		};
	},
	214: function(e, t, a) {
		'use strict';
		var n;
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.HallazgoUtils = void 0),
			(t.HallazgoUtils = n),
			(function(e) {
				e.formatName = function(e) {
					return ('' + e).match(/^\d+$/) ? 'Hallazgo #' + e : e;
				};
			})(n || (t.HallazgoUtils = n = {}));
	},
	302: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.PasoVisitaAssoc = t.PasoVisitaStatusActions = t.PasoObjetivoPane = t.AppVisitaDefaultTab = void 0);
		var n = a(1),
			o = b(a(87)),
			r = b(a(88)),
			i = b(a(75)),
			c = b(a(56)),
			l = b(a(76)),
			s = b(a(165)),
			u = a(112),
			d = b(a(111)),
			p = a(168),
			m = b(a(606)),
			f = b(a(607)),
			h = b(a(608)),
			v = b(a(315));
		function b(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function y(e) {
			return (y =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function g(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function E(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function R(e, t, a) {
			return t && E(e.prototype, t), a && E(e, a), e;
		}
		function j(e, t) {
			return !t || ('object' !== y(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function C(e) {
			return (C = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function O(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && k(e, t);
		}
		function k(e, t) {
			return (k =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var S = (function(e) {
			function t() {
				return g(this, t), j(this, C(t).apply(this, arguments));
			}
			return (
				O(t, n.Component),
				R(t, [
					{
						key: 'getStatusLabel',
						value: function() {
							var e = this.props.visita,
								t = null;
							return (
								e.status &&
									(t = React.createElement(
										o.default,
										{
											style: { backgroundColor: e.status_color },
											className: 'visita-status visita-status-'.concat(
												_.str.underscored(e.status)
											),
											size: 'mini'
										},
										e.status
									)),
								t
							);
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this.props.visita;
							return React.createElement(
								n.Fragment,
								null,
								React.createElement('span', { className: 'tabname', title: e.label }, e.label),
								React.createElement(u.AuthorIconLogDefaultWrapper, { model: e }),
								this.getStatusLabel()
							);
						}
					}
				]),
				t
			);
		})();
		t.AppVisitaDefaultTab = S;
		var N = (function(e) {
			function t() {
				var e;
				return (
					g(this, t),
					((e = j(this, C(t).apply(this, arguments))).onChangeValue = function(t) {
						var a = t.getData(),
							n = e.context,
							o = n.hoja_trabajo,
							r = n.update;
						$.blockUI(create_blockUI_loading_message('Guardando Cambios'));
						var i = url_for(
							'proyecto/'.concat(o.proyecto.id, '/master_data/paso/').concat(o.paso.id, '/objetivo')
						);
						$.ajax(i, { type: 'POST', data: { objetivo: a }, dataType: 'json' }).done(function() {
							var e = p.HojaTrabajoUpdateUtils.updateField(o, 'paso', { objetivo: a });
							r(e), $.unblockUI();
						});
					}),
					e
				);
			}
			return (
				O(t, n.Component),
				R(t, [
					{
						key: 'render',
						value: function() {
							var e = this.context.hoja_trabajo;
							return React.createElement(
								'div',
								{ className: 'hoja-trabajo-objetivo hoverable-actions' },
								React.createElement(s.default, {
									className: 'objetivo-text-editor',
									ckeditorOptions: {
										height: 150,
										toolbar: [
											{
												name: 'basicstyles',
												groups: [ 'basicstyles', 'cleanup' ],
												items: [ 'Bold', 'Italic' ]
											},
											{
												name: 'paragraph',
												groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
												items: [
													'NumberedList',
													'BulletedList',
													'-',
													'Outdent',
													'Indent',
													'-',
													'TextColor'
												]
											}
										],
										autoParagraph: !1,
										removePlugins: 'elementspath, uploadfile, resize',
										extraPlugins: 'openlink'
									},
									prefixPreview: 'Objetivo:',
									label: ' ',
									labelTitle: 'Objetivo: ',
									data: e.paso.objetivo,
									editable: this.props.isEditable && user_has_role_permission('paso_objetivo_edit'),
									onSave: this.onChangeValue
								})
							);
						}
					}
				]),
				t
			);
		})();
		(t.PasoObjetivoPane = N), (N.contextType = d.default), (N.defaultProps = { isEditable: !1 });
		var w = (function(e) {
			function t() {
				var e;
				return (
					g(this, t),
					((e = j(this, C(t).apply(this, arguments))).onClickCompletado = function() {
						var t = e.context.hoja_trabajo,
							a = url_for(
								'proyecto/'
									.concat(t.proyecto.id, '/hoja-trabajo/paso/')
									.concat(t.paso.id, '/visita/')
									.concat(e.props.visita.id_visita, '/save')
							);
						$.blockUI(create_blockUI_loading_message('Marcando como Completado...')),
							$.ajax(a, { type: 'POST', data: { op: 'c' }, dataType: 'json' }).done(function(t) {
								t.hasErrors
									? ($.unblockUI(), bootbox.alert(t.message))
									: (e.updateVisita(t.response.record), $.unblockUI());
							});
					}),
					(e.onClickRevisado = function() {
						var t = e.context.hoja_trabajo,
							a = url_for(
								'proyecto/'
									.concat(t.proyecto.id, '/hoja-trabajo/paso/')
									.concat(t.paso.id, '/visita/')
									.concat(e.props.visita.id_visita, '/save')
							);
						$.blockUI(create_blockUI_loading_message('Marcando como Revisado...')),
							$.ajax(a, { type: 'POST', data: { op: 'r' }, dataType: 'json' }).done(function(t) {
								t.hasErrors
									? ($.unblockUI(), bootbox.alert(t.message))
									: (e.updateVisita(t.response.record), $.unblockUI());
							});
					}),
					e
				);
			}
			return (
				O(t, n.Component),
				R(t, [
					{
						key: 'getRevisadoDisabledText',
						value: function() {
							return _.include([ '1', '2', '3' ], this.props.visita.id_status) ||
							this.props.completadoDisabledText
								? 'Esta visita debe estar primero en estado COMPLETADO, para poder marcar esta hoja de trabajo como REVISADA.'
								: _.include([ '6' ], this.props.visita.id_status)
									? 'Esta visita  tiene Notas de Revisión que deben primero ser atendidas para poder marcar esta hoja de trabajo como REVISADA.'
									: this.props.visita.additionals.revisiones > 0
										? 'Esta visita tiene Notas de Revisión pendientes por revisar que deben primero ser revisadas para poder marcar esta hoja de trabajo como REVISADA.'
										: this.props.revisadoDisabledText;
						}
					},
					{
						key: 'updateVisita',
						value: function(e) {
							var t = this.context,
								a = t.hoja_trabajo;
							(0, t.update)(p.HojaTrabajoUpdateUtils.updateVisita(a, this.props.visita, e));
						}
					},
					{
						key: 'render',
						value: function() {
							var e,
								t = this.props.visita,
								a = this.getRevisadoDisabledText();
							return (
								t.fecha_revision &&
									((t.fecha_completado &&
										Date.create(t.fecha_completado) > Date.create(t.fecha_revision)) ||
										!_.includes([ '5', '6' ], '' + t.id_status)) &&
									(e = React.createElement(r.default, {
										trigger: React.createElement(c.default, {
											color: 'red',
											name: 'warning circle'
										}),
										content: 'Esta visita ha recibido modificaciones después de su última revisión.'
									})),
								React.createElement(
									'div',
									{ className: 'actions ab-status-actions' },
									user_has_role_permission('paso_completado') &&
										React.createElement(r.default, {
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													i.default,
													{
														primary: !0,
														icon: !0,
														compact: !0,
														onClick: this.onClickCompletado,
														disabled: null != this.props.completadoDisabledText
													},
													' ',
													React.createElement(c.default, { name: 'check' }),
													' Completado'
												)
											),
											content: this.props.completadoDisabledText,
											header: 'Marcar como Completado | Opción deshabilitada',
											disabled: null == this.props.completadoDisabledText,
											className: 'disable-text',
											on: 'hover'
										}),
									user_has_role_permission([ 'paso_revisado' ]) &&
										React.createElement(r.default, {
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													i.default,
													{
														color: 'olive',
														icon: !0,
														compact: !0,
														onClick: this.onClickRevisado,
														disabled: null != a
													},
													' ',
													React.createElement(c.default, { name: 'check', fitted: !0 }),
													React.createElement(c.default, { name: 'check' }),
													' Revisado ',
													e
												)
											),
											content: a,
											header: 'Marcar como Revisado | Opción deshabilitada',
											disabled: null == a,
											className: 'disable-text',
											on: 'hover',
											position: 'top right'
										})
								)
							);
						}
					}
				]),
				t
			);
		})();
		(t.PasoVisitaStatusActions = w), (w.contextType = d.default);
		var P = (function(e) {
			function t(e) {
				var a;
				return (
					g(this, t),
					((a = j(this, C(t).call(this, e))).state = {
						open: !1,
						newVisitaOpen: !1,
						selectedVisitas: _.filter(
							_.map(a.props.hoja_trabajo.visitas, function(e, t) {
								return e.id ? t : null;
							})
						)
					}),
					a
				);
			}
			return (
				O(t, n.Component),
				R(t, [
					{
						key: 'getModal',
						value: function() {
							var e = this;
							if (!this.state.open) return null;
							var t = {
									moveLeft: React.createElement('i', { className: 'icon angle left' }),
									moveAllLeft: React.createElement('i', { className: 'icon angle double left' }),
									moveRight: React.createElement('i', { className: 'icon angle right' }),
									moveAllRight: React.createElement('i', { className: 'icon angle double right' }),
									moveDown: React.createElement('i', { className: 'icon angle down' }),
									moveUp: React.createElement('i', { className: 'icon angle up' })
								},
								a = this.props.hoja_trabajo,
								n = a.visitas,
								o = [];
							_.forEach(n, function(e, t) {
								o.push({ value: t, label: e.label });
							});
							var r = function() {
								e.setState({ open: !1 });
							};
							return React.createElement(
								l.default,
								{
									key: 'modal-assoc',
									open: !0,
									closeIcon: !0,
									dimmer: 'inverted',
									size: 'small',
									onClose: r,
									className: 'modal-ab'
								},
								React.createElement(l.default.Header, null, ' Asociación de Visitas a este Paso'),
								React.createElement(
									l.default.Content,
									null,
									React.createElement(
										'form',
										{
											method: 'post',
											className: 'ui form',
											action: url_for(
												'proyecto/'
													.concat(a.proyecto.id, '/hoja-trabajo/paso/')
													.concat(a.paso.id, '/visita')
											)
										},
										React.createElement(
											'div',
											{ style: { marginBottom: '15px' } },
											'Asocie las visitas a relacionar con este paso: '
										),
										' ',
										React.createElement('br', null),
										React.createElement(m.default, {
											name: 'visitas',
											options: o,
											availableLabel: 'Por asociar',
											selectedLabel: 'Asociadas',
											selected: this.state.selectedVisitas,
											icons: t,
											onChange: function(t) {
												e.setState({ selectedVisitas: t });
											}
										}),
										React.createElement(f.default, { horizontal: !0 }, 'O'),
										React.createElement(
											h.default,
											null,
											React.createElement(
												h.default.Title,
												{
													active: this.state.newVisitaOpen,
													onClick: function() {
														e.setState(function(e) {
															return { newVisitaOpen: !e.newVisitaOpen };
														});
													}
												},
												React.createElement(c.default, { name: 'caret right' }),
												' Crear Nueva Visita'
											),
											React.createElement(
												h.default.Content,
												{ active: this.state.newVisitaOpen },
												React.createElement(
													v.default.Field,
													{ inline: !0 },
													React.createElement('label', null, 'Nombre de la visita'),
													React.createElement(
														'div',
														{ className: 'ui input' },
														React.createElement('input', {
															placeholder: 'Nombre de la visita',
															name: 'visita_name',
															type: 'text'
														})
													)
												)
											)
										),
										React.createElement(
											'button',
											{ className: 'primary small ui button right floated' },
											'Guardar'
										),
										React.createElement(
											'button',
											{
												className: 'negative small ui button right floated',
												type: 'button',
												onClick: r
											},
											'Cancelar'
										),
										React.createElement('div', { className: 'clearfix' })
									)
								)
							);
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this;
							return [
								React.createElement(
									'div',
									{
										key: 'trigger',
										onClick: function() {
											return e.setState({ open: !0 });
										}
									},
									this.props.trigger
								),
								this.getModal()
							];
						}
					}
				]),
				t
			);
		})();
		t.PasoVisitaAssoc = P;
	},
	308: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.cleanAttachmentFrom = function(e, t) {
				var a = public_path('uploads/proyecto_adjunto/'.concat(t.filepath), !0)
						.replace(/\./g, '.')
						.replace(/\\/g, '/'),
					n = new RegExp('<a .*href="' + a + '"(.+?)/a>\\s*(<br\\s?/?>)?', 'g');
				return e.replace(n, '');
			}),
			(t.AttachmentListPanel = t.AttachmentListItem = void 0);
		var n = a(1),
			o = u(a(64)),
			r = u(a(87)),
			i = u(a(602)),
			c = u(a(166)),
			l = u(a(163)),
			s = u(a(167));
		function u(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function d(e) {
			return (d =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function p(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e, t, a) {
			return t && m(e.prototype, t), a && m(e, a), e;
		}
		function h(e, t) {
			return !t || ('object' !== d(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function v(e) {
			return (v = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function b(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && y(e, t);
		}
		function y(e, t) {
			return (y =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var g = (function(e) {
			function t() {
				var e;
				return (
					p(this, t),
					((e = h(this, v(t).apply(this, arguments))).onRemove = function(t) {
						t.preventDefault();
						var a = url_for(
							'proyecto/'
								.concat(e.props.attachment.id_proyecto, '/adjunto/')
								.concat(e.props.attachment.id, '/remove')
						);
						bootbox.warningConfirm(
							'¿Esta seguro de querer borrar este archivo?<br><br>Tenga en cuenta que el sistema intentará borrar automáticamente los enlaces existentes a este archivo.',
							'Cancelar',
							'Aceptar',
							function(t) {
								t &&
									($.blockUI({
										message:
											'<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Borrando archivo.<br> Por favor Espere ...</h3>'
									}),
									$.ajax(a, { type: 'POST', data: {}, dataType: 'json' })
										.done(function() {
											e.props.onDelete(e.props.attachment, function() {
												return $.unblockUI();
											});
										})
										.fail(function() {
											$.pnotify({ text: 'El archivo no pudo ser borrado.', type: 'error' }),
												$.unblockUI();
										}));
							}
						);
					}),
					e
				);
			}
			return (
				b(t, n.Component),
				f(
					t,
					[
						{
							key: 'changeStatus',
							value: function(e, t) {
								var a = this;
								e.preventDefault();
								var n = url_for(
									'proyecto/'
										.concat(this.props.attachment.id_proyecto, '/adjunto/')
										.concat(this.props.attachment.id, '/')
										.concat(t)
								);
								$.blockUI({
									message:
										'<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Marcando archivo como ' +
										_.str.capitalize(t) +
										'.<br> Por favor Espere ...</h3>'
								}),
									$.ajax(n, { type: 'POST', data: {}, dataType: 'json' })
										.done(function(e) {
											a.props.onUpdate(e.response.record), $.unblockUI();
										})
										.fail(function() {
											$.pnotify({ text: 'El archivo no pudo ser actualizado.', type: 'error' }),
												$.unblockUI();
										});
							}
						},
						{
							key: 'render',
							value: function() {
								var e,
									a,
									n,
									r = this,
									i = this.props.attachment;
								return (
									i.fecha_completado &&
										(e = React.createElement(
											'div',
											{ style: { display: 'inline-block' } },
											React.createElement('strong', { className: 'title' }, '(P) '),
											React.createElement(
												'div',
												{
													style: {
														display: 'inline-block',
														minWidth: 20,
														textAlign: 'center',
														marginRight: 2
													},
													title: 'Preparado por: '.concat(i.UpdateLog[0].User.name)
												},
												i.UpdateLog[0].User.sigla,
												' '
											),
											React.createElement(
												'div',
												{ style: { display: 'inline-block' }, title: i.fecha_completado },
												React.createElement('span', { className: 'icon-moon-calendar' }),
												' ',
												Date.create(i.fecha_completado).format('{year}-{MM}-{dd}')
											)
										)),
									i.fecha_revisado &&
										(a = React.createElement(
											'div',
											{ style: { display: 'inline-block' } },
											React.createElement('strong', { className: 'title' }, '(R) '),
											React.createElement(
												'div',
												{
													style: {
														display: 'inline-block',
														minWidth: 20,
														textAlign: 'center',
														marginRight: 2
													},
													title: 'Revisado por: '.concat(i.RevisionLog[0].User.name)
												},
												i.RevisionLog[0].User.sigla,
												' '
											),
											React.createElement(
												'div',
												{ style: { display: 'inline-block' }, title: i.fecha_revisado },
												React.createElement('span', { className: 'icon-moon-calendar' }),
												' ',
												Date.create(i.fecha_revisado).format('{year}-{MM}-{dd}')
											)
										)),
									user_has_role([ 'PM', 'SR' ]) &&
										(n = i.fecha_completado
											? React.createElement(
													'button',
													{
														style: { marginLeft: '8px' },
														onClick: function(e) {
															return r.changeStatus(e, 'revisado');
														},
														className: 'act'
													},
													React.createElement('span', { className: 'icon-moon-checkmark-8' }),
													' Revisar'
												)
											: React.createElement(c.default, {
													trigger: React.createElement(
														'div',
														{ className: 'button-wrapper' },
														React.createElement(
															'button',
															{ style: { marginLeft: '8px' }, className: 'act disabled' },
															React.createElement('span', {
																className: 'icon-moon-checkmark-8'
															}),
															' Revisar'
														)
													),
													content:
														'Esta archivo adjunto debe estar primero en estado COMPLETADO, para poder ser marcado como REVISADO',
													header: 'Marcar como Revisado | Opción deshabilitada',
													className: 'disable-text',
													on: 'hover'
												})),
									React.createElement(
										'li',
										{ key: i.id, style: { marginBottom: 2 } },
										React.createElement(
											'div',
											{
												style: {
													background: '#f5f9f8',
													borderRadius: 6,
													border: '1px solid #aecec7'
												}
											},
											React.createElement(
												'div',
												{
													className: 'col-md-1',
													style: { marginTop: 5, borderRight: '1px inset #d7e1e2' }
												},
												React.createElement('img', {
													src: t.getFileIconUrl(i.filename),
													alt: 'Icono'
												})
											),
											React.createElement(
												'div',
												{ className: 'col-md-11', style: { padding: '3px 10px' } },
												React.createElement(
													'div',
													{
														className: 'noqtip',
														title: i.filename,
														style: {
															fontWeight: 'bold',
															fontSize: '12px',
															maxWidth: 400,
															whiteSpace: 'nowrap',
															overflow: 'hidden',
															textOverflow: 'ellipsis'
														}
													},
													i.filename
												),
												React.createElement(
													'div',
													{ style: { fontSize: '12px' } },
													React.createElement(
														'span',
														{
															style: { fontStyle: 'italic' },
															className: 'noqtip',
															title: 'Peso del archivo: '.concat(i.filesize_human)
														},
														i.filesize_human
													),
													' ',
													'|',
													React.createElement(
														'div',
														{ className: 'attachment-actionsbar' },
														React.createElement(
															'div',
															{ className: 'section-a' },
															React.createElement(
																'a',
																{
																	href: public_path(
																		'uploads/proyecto_adjunto/'.concat(i.filepath)
																	),
																	target: '_blank',
																	className: 'act',
																	style: { color: '#777' }
																},
																React.createElement('span', {
																	className: 'icon-moon-download',
																	style: { fontSize: '10px' }
																}),
																' Descargar'
															)
														),
														user_has_role([ 'PM', 'SR', 'JR' ]) &&
															React.createElement(
																'div',
																{ className: 'section-a' },
																React.createElement(
																	'a',
																	{
																		href: '#',
																		className: 'act',
																		onClick: this.onRemove
																	},
																	React.createElement('span', {
																		className: 'icon-tc-trash'
																	}),
																	' Borrar'
																)
															),
														React.createElement(
															'div',
															{ className: 'section-a', style: { minWidth: 100 } },
															i.fecha_completado
																? React.createElement(
																		c.default,
																		{ trigger: e, position: 'bottom center' },
																		React.createElement(c.default.Header, {
																			content: 'Preparado por'
																		}),
																		React.createElement(
																			c.default.Content,
																			null,
																			React.createElement(
																				'table',
																				{ className: 'table nowrap' },
																				React.createElement(
																					'tbody',
																					null,
																					i.UpdateLog.map(function(e, t) {
																						return React.createElement(
																							'tr',
																							{ key: t },
																							React.createElement(
																								'td',
																								null,
																								React.createElement(
																									o.default,
																									{
																										name:
																											'far fa-user-circle',
																										color: 'green'
																									}
																								),
																								' ',
																								e.User.name,
																								' (',
																								e.User.sigla,
																								')'
																							),
																							React.createElement(
																								'td',
																								null,
																								React.createElement(
																									'em',
																									null,
																									Date.create(
																										e.ts
																									).format(
																										'{year}-{MM}-{dd}'
																									)
																								)
																							)
																						);
																					})
																				)
																			)
																		)
																	)
																: user_has_role([ 'PM', 'SR', 'JR' ]) &&
																	React.createElement(
																		'button',
																		{
																			style: { marginLeft: '8px' },
																			onClick: function(e) {
																				return r.changeStatus(e, 'completado');
																			},
																			className: 'act'
																		},
																		React.createElement('span', {
																			className: 'icon-moon-checkmark-8'
																		}),
																		' Completar'
																	)
														),
														React.createElement(
															'div',
															{ className: 'section-a' },
															i.fecha_revisado &&
																React.createElement(
																	c.default,
																	{ trigger: a, position: 'bottom center' },
																	React.createElement(c.default.Header, {
																		content: 'Revisado por'
																	}),
																	React.createElement(
																		c.default.Content,
																		null,
																		React.createElement(
																			'table',
																			{ className: 'table nowrap' },
																			React.createElement(
																				'tbody',
																				null,
																				i.RevisionLog.map(function(e, t) {
																					return React.createElement(
																						'tr',
																						{ key: t },
																						React.createElement(
																							'td',
																							null,
																							React.createElement(
																								o.default,
																								{
																									name: 'far fa-user-circle',
																									color: 'olive'
																								}
																							),
																							' ',
																							e.User.name,
																							' (',
																							e.User.sigla,
																							')'
																						),
																						React.createElement(
																							'td',
																							null,
																							React.createElement(
																								'em',
																								null,
																								Date.create(
																									e.ts
																								).format(
																									'{year}-{MM}-{dd}'
																								)
																							)
																						)
																					);
																				})
																			)
																		)
																	)
																),
															n
														)
													)
												),
												React.createElement('div', null)
											),
											React.createElement('div', { className: 'clearfix' })
										)
									)
								);
							}
						}
					],
					[
						{
							key: 'getFileExtension',
							value: function(e) {
								return e.split('.').pop();
							}
						},
						{
							key: 'getFileIconUrl',
							value: function(e) {
								var a = t.getFileExtension(e);
								return public_path(
									'images/file_icons/'.concat(
										(function() {
											switch (a) {
												case 'xls':
												case 'xlsx':
												case 'xlsm':
												case 'xlsxm':
													return 'excel';
												case 'doc':
												case 'docx':
													return 'word';
												case 'pdf':
													return 'pdf';
												case 'png':
												case 'jpg':
												case 'jpeg':
												case 'bmp':
												case 'gif':
													return 'image';
												case 'zip':
												case 'rar':
													return 'zip';
												default:
													return 'default';
											}
										})(),
										'.png'
									)
								);
							}
						}
					]
				),
				t
			);
		})();
		t.AttachmentListItem = g;
		var E = (function(e) {
			function t() {
				return p(this, t), h(this, v(t).apply(this, arguments));
			}
			return (
				b(t, n.Component),
				f(t, [
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props,
								a = t.isLoading,
								n = t.attachments;
							return React.createElement(
								'div',
								{ className: 'attachment-list-panel dimmable', style: { minHeight: 40 } },
								a &&
									React.createElement(
										l.default,
										{ inverted: !0, active: !0 },
										React.createElement(s.default, {
											inverted: !0,
											active: !0,
											className: 'elastic grey'
										})
									),
								React.createElement(
									'h3',
									{ className: 'panel-title' },
									'Adjuntos:',
									React.createElement(r.default, { circular: !0, color: 'green' }, _.size(n))
								),
								_.size(n) > 0 &&
									React.createElement(
										i.default,
										{ divided: !0, className: 'attachment-list' },
										_.map(n, function(t, a) {
											return React.createElement(g, {
												key: t.id,
												attachment: t,
												onUpdate: e.props.onUpdateItem,
												onDelete: e.props.onDeleteItem
											});
										})
									)
							);
						}
					}
				]),
				t
			);
		})();
		(t.AttachmentListPanel = E), (E.defaultProps = { isLoading: !1 });
	},
	319: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.AjusteModal = void 0);
		var n = a(1),
			o = a(170),
			r = f(a(165)),
			i = f(a(213)),
			c = f(a(321)),
			l = f(a(657)),
			s = a(322),
			u = f(a(166)),
			d = a(113),
			p = f(a(9)),
			m = a(323);
		function f(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function h(e) {
			return (h =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function v(e) {
			return (
				(function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
						return a;
					}
				})(e) ||
				(function(e) {
					if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
						return Array.from(e);
				})(e) ||
				(function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance');
				})()
			);
		}
		function b(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function y(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function g(e, t, a) {
			return t && y(e.prototype, t), a && y(e, a), e;
		}
		function E(e, t) {
			return !t || ('object' !== h(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function R(e) {
			return (R = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function j(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && C(e, t);
		}
		function C(e, t) {
			return (C =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var O = (function(e) {
			function t(e) {
				var a;
				return (
					b(this, t),
					((a = E(this, R(t).call(this, e))).onChangeAplicado = function(e) {
						a.setState({ aplicado: e.target.value }),
							a.isNewItem() || a.props.onSave({ aplicado: e.target.value });
					}),
					(a.onChangeDescripcion = function(e) {
						a.setState({ descripcion: e.getData() }),
							a.isNewItem() || a.props.onSave({ descripcion: e.getData() });
					}),
					(a.onAddItem = function() {
						a.setState(function(e) {
							return { items: [].concat(v(e.items), [ N() ]) };
						});
					}),
					(a.onDeleteItem = function(e, t) {
						a.setState(
							function(e) {
								return {
									items: _.reject(e.items, function(e, a) {
										return a == t;
									})
								};
							},
							function() {
								a.isNewItem() || a.props.onSave({ items: a.state.items });
							}
						);
					}),
					(a.onUpdateItem = function(e, t) {
						var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						a.setState(
							function(a) {
								var n;
								return (
									void 0 === a.items[t]
										? (n = v(a.items)).push(e)
										: (n = _.map(a.items, function(a, n) {
												return n == t ? Object.assign({}, a, e) : a;
											})),
									{ items: n }
								);
							},
							function() {
								if (n && !a.isNewItem()) {
									var e = _.any(a.state.items, function(e) {
										return !e.id;
									})
										? 'Guardando cambios'
										: null;
									a.props.onSave({ items: a.state.items }, e);
								}
							}
						);
					}),
					(a.onCreate = function() {
						a._onCreate({ status: 'EN PROCESO' }, 'Creando Ajuste');
					}),
					(a.onCreateAndCompletado = function() {
						a._onCreate({ status: 'COMPLETADO' }, 'Creando Ajuste');
					}),
					(a.onCompletado = function() {
						a.props.onSave({ status: 'COMPLETADO' }, 'Marcando como COMPLETADO');
					}),
					(a.onRevisado = function() {
						a.props.onSave({ status: 'REVISADO' }, 'Marcando como REVISASO');
					}),
					(a.state = {
						descripcion: e.item.descripcion,
						items: e.item.items || [],
						status: e.item.status,
						aplicado: e.item.aplicado
					}),
					a
				);
			}
			return (
				j(t, n.PureComponent),
				g(t, [
					{
						key: 'isNewItem',
						value: function() {
							return !this.props.item.idx;
						}
					},
					{
						key: 'esPlanillaDescuadrada',
						value: function() {
							var e = this.state.items;
							return (
								!!e &&
								_.reduce(
									e,
									function(e, t) {
										return S(t.debe) + e;
									},
									0
								) !=
									_.reduce(
										e,
										function(e, t) {
											return S(t.haber) + e;
										},
										0
									)
							);
						}
					},
					{
						key: 'validateItems',
						value: function() {
							return (
								_.size(this.state.items) > 0 &&
								!_.any(this.state.items, function(e) {
									return '' == e.cuenta || '' == e.nombre_cuenta || (!e.debe && !e.haber);
								})
							);
						}
					},
					{
						key: '_onCreate',
						value: function(e, t) {
							this.validateItems()
								? this.props.onSave(Object.assign({}, this.state, e), t)
								: bootbox.alert(
										'Ingrese el codigo de la cuenta y valor del ajuste para cada una de las filas del ajuste contable.'
									);
						}
					},
					{
						key: 'renderItemHeader',
						value: function() {
							var e = Object.assign(
								{
									label: this.props.item.idx ? 'Ajuste #'.concat(this.props.item.idx) : 'Ajuste Nuevo'
								},
								this.props.item
							);
							return React.createElement(o.MenuItemNewHeader, { item: e });
						}
					},
					{
						key: 'renderRows',
						value: function() {
							var e = this,
								t = this.state.items;
							return React.createElement(
								n.Fragment,
								null,
								React.createElement(c.default.Consumer, null, function(a) {
									return _.map(t, function(n, o) {
										return React.createElement(k, {
											item: n,
											key: o,
											itemIndex: o,
											cuentas: a,
											isEditable: e.props.isEditable,
											canRemove: _.size(t) > 1,
											onUpdate: e.onUpdateItem,
											onClickDelete: e.onDeleteItem
										});
									});
								})
							);
						}
					},
					{
						key: 'renderActions',
						value: function() {
							var e = this.props.item,
								t = this.esPlanillaDescuadrada(),
								a = null;
							t
								? (a =
										'No es posible guardar los cambios realizados en este ajuste mientras la planilla esté descuadrada.')
								: e.fecha_completado ||
									(a = 'Debe estar primero en estado COMPLETADO, para poder marcarse como REVISADO.');
							var o =
								!this.isNewItem() &&
								React.createElement(
									'button',
									{
										className: 'ui button compact negative left floated',
										onClick: this.props.onClickDelete
									},
									React.createElement('i', { className: 'icon trash' }),
									' Eliminar'
								);
							return this.isNewItem()
								? React.createElement(
										'div',
										{ className: 'actions ab-status-actions' },
										React.createElement(u.default, {
											content:
												'No es posible guardar este ajuste mientras la planilla esté descuadrada.',
											disabled: !t,
											className: 'disable-text',
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													'button',
													{
														className: 'ui button compact green',
														onClick: this.onCreate,
														disabled: t
													},
													'Crear'
												)
											)
										}),
										React.createElement(u.default, {
											content:
												'No es posible guardar este ajuste mientras la planilla esté descuadrada.',
											disabled: !t,
											className: 'disable-text',
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													'button',
													{
														className: 'ui button compact green',
														onClick: this.onCreateAndCompletado,
														disabled: t
													},
													'Crear y Completar'
												)
											)
										})
									)
								: React.createElement(
										n.Fragment,
										null,
										o,
										React.createElement(d.StatusButtonGroupActions, {
											completado: {
												permission: 'hallazgo_completado',
												onClick: this.onCompletado,
												disableText: t
													? 'No es posible guardar los cambios realizados en este ajuste mientras la planilla esté descuadrada.'
													: null
											},
											revisado: {
												permission: 'hallazgo_revisado',
												onClick: this.onRevisado,
												record: e,
												disableText: a
											}
										})
									);
						}
					},
					{
						key: 'render',
						value: function() {
							return React.createElement(
								n.Fragment,
								null,
								React.createElement(
									'div',
									{ className: 'content' },
									this.renderItemHeader(),
									React.createElement(
										'table',
										{ className: 'ui table compact' },
										React.createElement(
											'thead',
											null,
											React.createElement(
												'tr',
												null,
												React.createElement('th', null, 'Código de la Cuenta'),
												React.createElement('th', null, 'Nombre de la Cuenta'),
												React.createElement('th', null, 'Debe'),
												React.createElement('th', null, 'Haber'),
												React.createElement('th', null)
											)
										),
										React.createElement(
											'tbody',
											null,
											this.renderRows(),
											this.props.isEditable &&
												React.createElement(
													'tr',
													null,
													React.createElement(
														'td',
														{ colSpan: 5 },
														React.createElement(
															'button',
															{
																type: 'button',
																className: 'ui button olive fluid icon',
																onClick: this.onAddItem
															},
															'Añadir Fila ',
															React.createElement('i', { className: 'icon plus' })
														)
													)
												)
										)
									),
									this.esPlanillaDescuadrada() &&
										React.createElement(
											'div',
											{ className: 'ui red tiny message _a-center m1 ' },
											React.createElement('i', { className: 'icon exclamation triangle yellow' }),
											' Alerta: Planilla descuadrada'
										),
									React.createElement(
										'div',
										{ className: 'ui segment' },
										React.createElement(r.default, {
											prefixPreview: 'Descripción del Ajuste',
											labelTitle: 'Descripción del Ajuste',
											ckeditorOptions: 'basic',
											editable: this.props.isEditable,
											data: this.state.descripcion,
											onSave: this.onChangeDescripcion
										})
									),
									React.createElement(
										'div',
										{ className: 'ui segment basic nopad pull-left', style: { marginTop: 5 } },
										React.createElement(
											'label',
											{ style: { marginRight: 10, display: 'inline-block', fontWeight: 600 } },
											'Error Tolerable:'
										),
										accounting.formatNumber(
											app.vars.error_tolerable[this.props.moduleParams.id_visita]
										)
									),
									React.createElement(
										'div',
										{ className: 'ui right aligned segment basic nopad' },
										React.createElement(
											'label',
											{ style: { marginRight: 10, display: 'inline-block', fontWeight: 600 } },
											'¿Ajuste Registrado? ',
											React.createElement(m.GenericTooltip, {
												text: '@tooltip.ajustes.aplicado'
											}),
											' :'
										),
										React.createElement(
											'select',
											{
												className: 'raw-select',
												value: '' + this.state.aplicado == '1' ? '1' : '0',
												onChange: this.onChangeAplicado
											},
											React.createElement('option', { value: '1' }, 'Sí'),
											React.createElement('option', { value: '0' }, 'No')
										)
									)
								),
								React.createElement(
									'div',
									{ className: 'actions' },
									this.renderActions(),
									React.createElement('div', { className: 'clearfix' })
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.AjusteModal = O;
		var k = (function(e) {
				function t(e) {
					var a;
					return (
						b(this, t),
						((a = E(this, R(t).call(this, e))).onClickDelete = function(e) {
							e.preventDefault(),
								a.props.canRemove &&
									bootbox.confirm(
										'¿Desea eliminar esta fila de su ajuste contable?',
										'Cancelar',
										'Sí, eliminar fila',
										function(e) {
											e && a.props.onClickDelete(a.props.item, a.props.itemIndex);
										}
									);
						}),
						(a.onSelectCuenta = function(e, t) {
							a.setState({ cuenta: t.cuenta, nombre_cuenta: t.nombre_cuenta }, function() {
								a.notifyUpdate();
							});
						}),
						(a.onChangeCuenta = function(e, t) {
							a.setState({ cuenta: t, nombre_cuenta: '' });
						}),
						(a.onChangeNombreCuenta = function(e, t) {
							a.setState({ nombre_cuenta: t, cuenta: '' });
						}),
						(a.onBlurCuenta = function() {
							var e = a.props.cuentas;
							a.setState(
								function(t) {
									if ('' == t.cuenta && '' == t.nombre_cuenta) return null;
									if ('' != t.cuenta && '' != t.nombre_cuenta) return null;
									if ('' != t.cuenta) {
										var a = (0, s.getNombreCuenta)(e, t.cuenta);
										return { cuenta: t.cuenta, nombre_cuenta: a };
									}
									if ('' != t.nombre_cuenta) {
										var n = _.find(e, function(e) {
											return e.nombre_cuenta.toUpperCase() == t.nombre_cuenta.toUpperCase();
										});
										return { cuenta: n ? n.cuenta : '', nombre_cuenta: t.nombre_cuenta };
									}
								},
								function() {
									return a.notifyUpdate();
								}
							);
						}),
						(a.onChangeInput = function(e, t, n) {
							'debe' == e
								? a.setState({ debe: t }, function() {
										return a.notifyUpdate(n);
									})
								: a.setState({ haber: t }, function() {
										return a.notifyUpdate(n);
									});
						}),
						(a.state = {
							cuenta: e.item.cuenta,
							nombre_cuenta: e.item.nombre_cuenta,
							debe: e.item.debe,
							haber: e.item.haber
						}),
						a
					);
				}
				return (
					j(t, n.PureComponent),
					g(t, [
						{
							key: 'notifyUpdate',
							value: function() {
								var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
									t = Object.assign({}, this.props.item, this.state);
								'' != t.cuenta &&
									'' != t.nombre_cuenta &&
									(t.debe || t.haber) &&
									this.props.onUpdate(t, this.props.itemIndex, e);
							}
						},
						{
							key: 'render',
							value: function() {
								var e = this;
								return React.createElement(
									'tr',
									null,
									React.createElement(
										'td',
										null,
										React.createElement(l.default, {
											items: this.props.cuentas,
											getItemValue: function(e) {
												return e.cuenta;
											},
											renderItem: function(e, t) {
												return React.createElement(
													'div',
													{ key: e.id, className: 'item ' + (t ? 'item-highlighted' : '') },
													React.createElement('div', null, e.cuenta),
													React.createElement(
														'div',
														{ className: 'description' },
														e.nombre_cuenta
													)
												);
											},
											value: this.state.cuenta,
											onChange: this.onChangeCuenta,
											onSelect: this.onSelectCuenta,
											inputProps: {
												type: 'text',
												spellCheck: !1,
												required: !0,
												onBlur: this.onBlurCuenta
											},
											shouldItemRender: function(e, t) {
												return e.cuenta.replace(/\D/g, '').startsWith(t.replace(/\D/g, ''));
											},
											renderMenu: function(e) {
												return React.createElement('div', {
													className: 'autocomplete-menu',
													style: { position: 'absolute', zIndex: 1002 },
													children: e
												});
											},
											wrapperProps: { className: (0, p.default)({ error: !this.state.cuenta }) },
											wrapperStyle: { display: 'inline-block', position: 'relative' }
										}),
										!this.state.cuenta &&
											React.createElement(
												'div',
												{ className: 'ui pointing above prompt mini label' },
												'Requerido'
											)
									),
									React.createElement(
										'td',
										null,
										React.createElement(l.default, {
											items: this.props.cuentas,
											getItemValue: function(e) {
												return e.nombre_cuenta;
											},
											renderItem: function(e, t) {
												return React.createElement(
													'div',
													{ key: e.id, className: 'item ' + (t ? 'item-highlighted' : '') },
													React.createElement('div', null, e.nombre_cuenta),
													React.createElement('div', { className: 'description' }, e.cuenta)
												);
											},
											value: this.state.nombre_cuenta,
											onChange: this.onChangeNombreCuenta,
											onSelect: this.onSelectCuenta,
											inputProps: { type: 'text', spellCheck: !1, required: !0 },
											shouldItemRender: function(e, t) {
												var a = e.nombre_cuenta
													.normalize('NFD')
													.replace(/[\u0300-\u036f]/g, '')
													.toUpperCase();
												return _.str.contains(
													a,
													t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()
												);
											},
											renderMenu: function(e) {
												return React.createElement('div', {
													className: 'autocomplete-menu',
													style: { position: 'absolute', zIndex: 1002 },
													children: e
												});
											},
											wrapperProps: {
												className: (0, p.default)({ error: !this.state.nombre_cuenta })
											},
											wrapperStyle: { display: 'inline-block', position: 'relative' }
										}),
										!this.state.nombre_cuenta &&
											React.createElement(
												'div',
												{ className: 'ui pointing above prompt mini label' },
												'Requerido'
											)
									),
									React.createElement(
										'td',
										null,
										React.createElement(
											'div',
											{
												className: (0, p.default)({
													error: !this.state.debe && !this.state.haber
												})
											},
											React.createElement(i.default, {
												isEditable: this.props.isEditable,
												value: this.state.debe,
												disabled: !!this.state.haber,
												onChange: function(t, a) {
													return e.onChangeInput('debe', a, !1);
												},
												onBlur: function(t, a) {
													return e.onChangeInput('debe', a, !0);
												}
											})
										),
										!this.state.debe &&
											!this.state.haber &&
											React.createElement(
												'div',
												{ className: 'ui pointing above prompt mini label' },
												'Requerido'
											)
									),
									React.createElement(
										'td',
										null,
										React.createElement(
											'div',
											{
												className: (0, p.default)({
													error: !this.state.haber && !this.state.debe
												})
											},
											React.createElement(i.default, {
												isEditable: this.props.isEditable,
												value: this.state.haber,
												disabled: !!this.state.debe,
												onChange: function(t, a) {
													return e.onChangeInput('haber', a, !1);
												},
												onBlur: function(t, a) {
													return e.onChangeInput('haber', a, !0);
												}
											})
										),
										!this.state.haber &&
											!this.state.debe &&
											React.createElement(
												'div',
												{ className: 'ui pointing above prompt mini label' },
												'Requerido'
											)
									),
									React.createElement(
										'td',
										null,
										this.props.isEditable &&
											React.createElement(u.default, {
												disabled: this.props.canRemove,
												content:
													'Todo ajuste contable debe tener un mínimo de 1 cuenta (fila).',
												trigger: React.createElement(
													'a',
													{ href: '#', onClick: this.onClickDelete, title: 'Eliminar Fila' },
													React.createElement('i', { className: 'icon cancel red' })
												),
												header: 'Eliminar fila | Opción deshabilitada',
												className: 'disable-text'
											})
									)
								);
							}
						}
					]),
					t
				);
			})(),
			S = function(e) {
				var t = parseFloat(e);
				return isNaN(t) ? 0 : t;
			},
			N = function() {
				return { cuenta: '', debe: null, haber: null, nombre_cuenta: '' };
			};
	},
	321: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = (0, a(1).createContext)([]);
		t.default = n;
	},
	322: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.getNombreCuenta = void 0);
		t.getNombreCuenta = function(e, t) {
			var a = _.findWhere(e, { cuenta: t });
			if (a) return a.nombre_cuenta;
			var n = function(e) {
				return e.replace(/\D/g, '');
			};
			return (a = _.findWhere(
				_.map(e, function(e) {
					return { cuenta: n(e.cuenta), cuenta_real: e.cuenta_real, nombre_cuenta: e.nombre_cuenta };
				}),
				{ cuenta: n(t) }
			))
				? a.nombre_cuenta
				: '';
		};
	},
	323: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.GenericTooltip = void 0);
		var n = i(a(88)),
			o = i(a(56)),
			r = i(a(661));
		function i(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function c(e) {
			return (c =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		var l = function(e) {
			var t;
			if ('object' == c(e.text)) t = React.createElement('div', { className: 'content' }, e.text);
			else if ('string' == typeof e.text) {
				if (!(t = '@' == e.text.substr(0, 1) ? (0, r.default)(app.vars.texts, e.text.substr(1)) : e.text))
					return null;
				t = React.createElement('div', { dangerouslySetInnerHTML: { __html: t } });
			}
			return React.createElement(n.default, {
				size: 'tiny',
				wide: e.wide,
				trigger: React.createElement(o.default, {
					color: e.iconColor,
					size: e.iconSize,
					name: 'question circle',
					className: 'tooltip-icon'
				}),
				header: e.title,
				content: t
			});
		};
		(t.GenericTooltip = l), (l.defaultProps = { iconColor: 'blue', iconSize: 'small', wide: !1 });
	},
	324: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.cleanSpacesFromHtml = r),
			(t.truncateText = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
				if (null == e) return e;
				e = (e = r(e)).replace(/<table.*\/table>/g, '<img src="/images/icon_tabular.png" title="Tabla" />');
				var a = (0, o.default)('' + e, t, { keepImageTag: !0 });
				return (a = (a = (a = a.replace(/(min-)?width:.+?;/g, '')).replace(/(min-)?height:.+?;/g, '')).replace(
					/style=".+?"/g,
					''
				)).trim();
			});
		var n,
			o = (n = a(663)) && n.__esModule ? n : { default: n };
		function r(e) {
			return null == e
				? e
				: (e = (e = (e = e.trim().replace(/\r?\n|\r/g, '')).replace(/>\s+</g, '><')).replace(/\s{2,}/g, ' '));
		}
	},
	325: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.HallazgoModal = void 0);
		var n = f(a(1)),
			o = m(a(165)),
			r = a(113),
			i = f(a(667)),
			c = m(a(670)),
			l = a(694),
			s = a(695),
			u = a(214),
			d = m(a(9)),
			p = a(170);
		function m(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function f(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var a in e)
					if (Object.prototype.hasOwnProperty.call(e, a)) {
						var n =
							Object.defineProperty && Object.getOwnPropertyDescriptor
								? Object.getOwnPropertyDescriptor(e, a)
								: {};
						n.get || n.set ? Object.defineProperty(t, a, n) : (t[a] = e[a]);
					}
			return (t.default = e), t;
		}
		function h(e) {
			return (h =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function v() {
			return (v =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
					}
					return e;
				}).apply(this, arguments);
		}
		function b(e, t, a) {
			return (
				t in e
					? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
					: (e[t] = a),
				e
			);
		}
		function y(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function g(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function E(e, t, a) {
			return t && g(e.prototype, t), a && g(e, a), e;
		}
		function R(e, t) {
			return !t || ('object' !== h(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function j(e) {
			return (j = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function C(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && O(e, t);
		}
		function O(e, t) {
			return (O =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		(0, i.registerLocale)('es', c.default);
		var k = (function(e) {
			function t(e) {
				var a;
				return (
					y(this, t),
					((a = R(this, j(t).call(this, e))).handlers = {}),
					(a.onCreate = function() {
						a._onCreate({ status: 'EN PROCESO' });
					}),
					(a.onCreateAndCompletado = function() {
						a._onCreate({ status: 'COMPLETADO' });
					}),
					(a.onCompletado = function() {
						a.props.onSave({ status: 'COMPLETADO' });
					}),
					(a.onRevisado = function() {
						a.props.onSave({ status: 'REVISADO' });
					}),
					(a.onEditorChange = function(e) {
						return a.attachHandler(e, function(t, n, o, r) {
							var i = t.getData();
							'hallazgo' != e || a.isNewItem() || 0 != _.size(_.str.trim(i))
								? (a.updateModel(b({}, e, i)), $.isFunction(r) && r())
								: bootbox.alert('La descripción del hallazgo NO puede ser un campo vacío.');
						});
					}),
					(a.onInputChange = function(e) {
						return a.attachHandler(e, function(t) {
							a.updateModel(b({}, e, t.target.value));
						});
					}),
					(a.onDateChange = function(e) {
						return a.attachHandler(e, function(t) {
							a.updateModel(b({}, e, (0, l.format)(t, 'yyyy-MM-dd')));
						});
					}),
					(a.onValueChange = function(e) {
						return a.attachHandler(e, function(t) {
							a.updateModel(b({}, e, t));
						});
					}),
					(a.onClickDelete = function(e) {
						$.isFunction(a.props.onClickDelete) && a.props.onClickDelete(e);
					}),
					(a.state = { value: e.item }),
					a
				);
			}
			return (
				C(t, n.PureComponent),
				E(t, [
					{
						key: 'attachHandler',
						value: function(e, t) {
							return this.handlers[e] || (this.handlers[e] = t), this.handlers[e];
						}
					},
					{
						key: 'isNewItem',
						value: function() {
							return null == this.props.item.id;
						}
					},
					{
						key: 'updateModel',
						value: function(e) {
							this.setState(function(t) {
								return { value: Object.assign({}, t.value, e) };
							}),
								this.isNewItem() || this.props.onSave(e);
						}
					},
					{
						key: 'getDate',
						value: function(e) {
							if (!e) return null;
							var t = (0, l.parseISO)(e);
							return (0, l.isValid)(t) ? t : null;
						}
					},
					{
						key: 'formatImplementadoChoice',
						value: function(e) {
							return null === e || '' === e ? '' : !0 === e || '1' === e ? '1' : '0';
						}
					},
					{
						key: '_onCreate',
						value: function(e) {
							_.isEmpty(this.state.value.hallazgo)
								? bootbox.alert('La descripción del hallazgo NO puede ser un campo vacío.')
								: this.props.onSave(Object.assign({}, this.state.value, e));
						}
					},
					{
						key: 'renderActions',
						value: function() {
							var e = this.props.item,
								t =
									null !== e.id &&
									n.default.createElement(
										'button',
										{
											className: 'ui button compact negative left floated',
											onClick: this.onClickDelete
										},
										n.default.createElement('i', { className: 'icon trash' }),
										' Eliminar'
									);
							return null === e.id
								? n.default.createElement(
										'div',
										{ className: 'actions ab-status-actions' },
										n.default.createElement(
											'button',
											{ className: 'ui button compact green', onClick: this.onCreate },
											'Crear'
										),
										n.default.createElement(
											'button',
											{ className: 'ui button compact green', onClick: this.onCreateAndCompletado },
											'Crear y Completar'
										)
									)
								: n.default.createElement(
										n.Fragment,
										null,
										t,
										n.default.createElement(r.StatusButtonGroupActions, {
											completado: { permission: 'hallazgo_completado', onClick: this.onCompletado },
											revisado: {
												permission: 'hallazgo_revisado',
												onClick: this.onRevisado,
												record: e
											}
										})
									);
						}
					},
					{
						key: 'renderItemHeader',
						value: function() {
							var e = Object.assign(
								{
									label: this.props.item.id
										? u.HallazgoUtils.formatName(this.props.item.name)
										: 'Hallazgo Nuevo'
								},
								this.props.item
							);
							return n.default.createElement(p.MenuItemNewHeader, { item: e });
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this.props.item,
								t = this.state.value;
							return n.default.createElement(
								n.Fragment,
								null,
								n.default.createElement(
									'div',
									{ className: 'content' },
									this.renderItemHeader(),
									e.id &&
										n.default.createElement(
											'div',
											{ className: 'description-text' },
											n.default.createElement('strong', null, 'NOTA:'),
											' El hallazgo debe describir la situación actual, causa, impacto y recomendación.'
										),
									n.default.createElement(o.default, {
										className: 'editor-preview-hallazgo',
										wrapperClassName: (0, d.default)(!e.id || 'ui segment'),
										data: t.hallazgo,
										inline: null == e.id,
										ckeditorOptions: {
											attach_disableText:
												'Esta opción (adjuntar archivos) sólo estará disponible una vez haya guardado este hallazgo.',
											height: e.id ? 300 : 150
										},
										ckeditorUploadOptions: {
											model: ''.concat(this.props.moduleParams.model, '__hallazgo'),
											modelId: e.id
										},
										footer: 'AttachmentList',
										onSave: this.onEditorChange('hallazgo'),
										previewStyle: { overflowY: 'auto', maxHeight: 200, width: '100%' },
										label:
											'<div class="description-text"><strong>NOTA:</strong> El hallazgo debe describir la situación actual, causa, impacto y recomendación</div>'
									}),
									n.default.createElement('hr', null),
									n.default.createElement(
										'div',
										{ className: 'ui segment' },
										n.default.createElement(o.default, {
											data: t.plan_accion,
											prefixPreview: 'Descripción Plan de Acción: ',
											labelTitle: 'Descripción Plan de Acción:',
											ckeditorOptions: {
												attach_disableText:
													'Esta opción (adjuntar archivos) sólo estará disponible una vez haya guardado este hallazgo.'
											},
											ckeditorUploadOptions: {
												model: ''.concat(this.props.moduleParams.model, '__plan_accion'),
												modelId: e.id
											},
											footer: 'AttachmentList',
											onSave: this.onEditorChange('plan_accion')
										})
									),
									n.default.createElement(
										'div',
										{ className: 'ui three column grid' },
										n.default.createElement(
											'div',
											{ className: 'column' },
											n.default.createElement(
												'label',
												{ htmlFor: 'hallazgo_modal__responsable' },
												'Responsable del Plan Acción: '
											),
											n.default.createElement(S, {
												value: t.responsable,
												onChange: this.onValueChange('responsable'),
												attrs: {
													placeholder: 'Escriba el Nombre',
													style: { display: 'inline-block' }
												}
											})
										),
										n.default.createElement(
											'div',
											{ className: 'column' },
											n.default.createElement(
												'label',
												{ htmlFor: 'hallazgo_modal__fecha_implementado' },
												'Fecha Implementación: '
											),
											n.default.createElement(i.default, {
												id: 'hallazgo_modal__fecha_implementado',
												dateFormat: 'yyyy-MM-dd',
												locale: 'es',
												fixedHeight: !0,
												placeholderText: 'AAAA-mm-dd',
												className: 'react-datepicker--input',
												selected: this.getDate(t.fecha_implementado),
												onChange: this.onDateChange('fecha_implementado')
											})
										),
										n.default.createElement(
											'div',
											{ className: 'column right aligned' },
											n.default.createElement(
												'label',
												{ htmlFor: 'hallazgo_modal__implementado' },
												'Estado Implementación: '
											),
											n.default.createElement(
												'select',
												{
													id: 'hallazgo_modal__implementado',
													value: this.formatImplementadoChoice(t.implementado),
													onChange: this.onInputChange('implementado')
												},
												n.default.createElement('option', { value: '' }, 'Pendiente'),
												n.default.createElement('option', { value: '0' }, 'En Proceso'),
												n.default.createElement('option', { value: '1' }, 'Hecho')
											)
										)
									)
								),
								n.default.createElement(
									'div',
									{ className: 'actions' },
									this.renderActions(),
									n.default.createElement('div', { className: 'clearfix' })
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.HallazgoModal = k;
		var S = (function(e) {
			function t(e) {
				var a;
				return (
					y(this, t),
					((a = R(this, j(t).call(this, e))).mentionStyle = {
						display: 'inline-block',
						minWidth: '200px',
						suggestions: {
							list: { backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.15)', fontSize: 14 },
							item: {
								padding: '5px 15px',
								borderBottom: '1px solid rgba(0,0,0,0.15)',
								'&focused': { backgroundColor: '#cee4e5' }
							}
						}
					}),
					(a.onChange = function(e, t, n, o) {
						a.setState({ value: t }), a.props.onChange(t);
					}),
					(a.state = { value: e.value }),
					(a.users = _.map(app.vars.proyecto_equipo, function(e) {
						return { id: e.user_id, display: e.name };
					})),
					a
				);
			}
			return (
				C(t, n.PureComponent),
				E(t, [
					{
						key: 'render',
						value: function() {
							return n.default.createElement(
								s.MentionsInput,
								v(
									{
										singleLine: !0,
										type: 'text',
										value: null == this.state.value ? '' : this.state.value,
										onChange: this.onChange,
										allowSpaceInQuery: !0
									},
									this.props.attrs,
									{ className: 'mentions-input', style: this.mentionStyle }
								),
								n.default.createElement(s.Mention, {
									trigger: '@',
									data: this.users,
									appendSpaceOnAdd: !0
								})
							);
						}
					}
				]),
				t
			);
		})();
	},
	332: function(e, t, a) {
		'use strict';
		var n, o;
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.MaterialidadUtils = t.MaterialidadEnums = void 0),
			(t.MaterialidadEnums = n),
			(function(e) {
				(e.factores = [
					'Ingresos brutos',
					'Resultado del Ejercicio',
					'Patrimonio',
					'Activos Netos',
					'Gastos',
					'Otro'
				]),
					(e.niveles = [ 'Alto', 'Moderado', 'Bajo' ]);
			})(n || (t.MaterialidadEnums = n = {})),
			(t.MaterialidadUtils = o),
			(function(e) {
				function t(a, n, o, r) {
					if ((!1 === o && (o = n.factor), !1 === r && (r = n.nivel), !o || !r || void 0 === n.montos[o]))
						return 0;
					var i = e.getNivel(r);
					if ('porc_general' == a) {
						var c = n.montos[o].valor,
							l = n.montos[o][i];
						return null == l && (l = e.getDefaulPorcMG(o, r)), +Math.abs(Math.round(c * l)) / 100;
					}
					var s = t('porc_general', n, o, r),
						u = n[a];
					return +Math.abs(Math.round(s * u)) / 100;
				}
				(e.getNivel = function(e) {
					switch ('' + e) {
						case '1':
							return 'max';
						case '2':
							return 'med';
						case '3':
							return 'min';
					}
				}),
					(e.getDefaulPorcMG = function(e, t) {
						if (!e || !t) return null;
						switch ('monto'.concat(e, '_').concat(t)) {
							case 'monto1_3':
							case 'monto3_3':
							case 'monto4_3':
							case 'monto5_3':
							case 'monto6_3':
								return 0.5;
							case 'monto2_3':
								return 3;
							case 'monto1_2':
								return 0.75;
							case 'monto2_2':
								return 5;
							case 'monto3_2':
							case 'monto4_2':
							case 'monto5_2':
							case 'monto6_2':
							case 'monto1_1':
								return 1;
							case 'monto2_1':
								return 7;
							case 'monto3_1':
							case 'monto4_1':
							case 'monto5_1':
							case 'monto6_1':
								return 2;
						}
					}),
					(e.calculateTotal = t),
					(e.sendToServer = function(e, a, n, o, r) {
						var i, c, l;
						n = Object.assign(
							{},
							n,
							((i = {}),
							(c = a.field),
							(l = a.value),
							c in i
								? Object.defineProperty(i, c, {
										value: l,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (i[c] = l),
							i)
						);
						var s = url_for('proyecto/'.concat(app.vars.idproyecto, '/materialidad/').concat(e, '/update')),
							u = [ a ];
						'factor_justificacion' != a.field &&
							(u.push({ field: 'total', value: t('porc_general', n, !1, !1) }),
							u.push({ field: 'total_planeacion', value: t('porc', n, !1, !1) }),
							u.push({ field: 'total_error', value: t('porc_error', n, !1, !1) })),
							$.post(s, _.merge(o, { changes: u })).done(function(e) {
								$.isFunction(r) && r(e);
							});
					});
			})(o || (t.MaterialidadUtils = o = {}));
	},
	336: function(e, t, a) {
		'use strict';
		var n,
			o = a(40),
			r = (n = a(337)) && n.__esModule ? n : { default: n };
		(0, o.render)(
			React.createElement(r.default, { hoja_trabajo: app.vars.hoja_trabajo }),
			document.getElementById('root')
		);
	},
	337: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = s(a(338)),
			r = s(a(545)),
			i = s(a(111)),
			c = a(302),
			l = s(a(646));
		function s(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function u(e) {
			return (u =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function d(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function p(e, t) {
			return !t || ('object' !== u(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function m(e) {
			return (m = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function f(e, t) {
			return (f =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var h = (function(e) {
			function t(e) {
				var a;
				!(function(e, t) {
					if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
				})(this, t),
					((a = p(this, m(t).call(this, e))).panes = []),
					(a.handleClick = function(e, t) {
						var n = t.index;
						a.setState({ activeIndex: n });
						var o = _.find(a.state.hoja_trabajo.visitas, { index: n });
						(app.vars.current_idvisita = o.id_visita), (window.location.hash = '#!visita-' + n);
					}),
					(a.update = function(e) {
						a.setState(function(t) {
							return { hoja_trabajo: Object.assign({}, t.hoja_trabajo, e) };
						});
					});
				var n = _.find(a.props.hoja_trabajo.visitas, { is_current: !0 }),
					o = n ? n.index : null;
				return (
					n && (app.vars.current_idvisita = n.id_visita),
					(a.state = { activeIndex: o, hoja_trabajo: a.props.hoja_trabajo }),
					a
				);
			}
			var a, s, u;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && f(e, t);
				})(t, n.Component),
				(a = t),
				(s = [
					{
						key: 'componentDidMount',
						value: function() {
							var e =
								(this.state.hoja_trabajo.proyecto.isOpen &&
								user_has_role_permission('hoja_trabajo_edit')
									? 100: 98) / _.size(_.filter(this.panes, { type: 'sheet' }));
							$('#visita-tabs').find('.menu>a.visita-tab').css({ width: e + '%' });
							var t = location.hash.replace(/^#!visita-/, '');
							if (t) {
								this.setState({ activeIndex: +t });
								var a = _.find(this.state.hoja_trabajo.visitas, { activeIndex: t });
								a && (app.vars.current_idvisita = a.id_visita);
							}
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this;
							this.panes = [];
							var t = this.state.activeIndex,
								a = _.values(this.state.hoja_trabajo.visitas);
							return (
								(a = _.sortBy(a, 'position')),
								_.forEach(a, function(a) {
									a.id &&
										((a.HojaTrabajo = e.state.hoja_trabajo),
										e.panes.push({
											type: 'sheet',
											menuItem: function() {
												return React.createElement(
													r.default.Item,
													{
														key: a.id,
														index: a.index,
														className: 'tab-nav-item visita-tab',
														name: a.label,
														onClick: e.handleClick,
														active: t == a.index
													},
													React.createElement(c.AppVisitaDefaultTab, { visita: a })
												);
											},
											pane: function() {
												return React.createElement(l.default, {
													key: a.id,
													active: t == a.index,
													visita: a,
													isEditable:
														e.state.hoja_trabajo.proyecto.isOpen &&
														user_has_role_permission('hoja_trabajo_edit')
												});
											}
										}));
								}),
								0 == this.panes.length
									? React.createElement(
											'div',
											{ className: 'alert alert-block nocontent' },
											React.createElement('h3', null, 'Sin visitas'),
											React.createElement(
												'p',
												null,
												React.createElement('span', { className: 'icon-warning-sign' }),
												'Este proyecto no tiene visitas creadas.'
											)
										)
									: React.createElement(
											i.default.Provider,
											{ value: { hoja_trabajo: this.state.hoja_trabajo, update: this.update } },
											React.createElement(
												'div',
												{
													id: 'visita-tabs',
													className: 'paso-code-'.concat(
														this.state.hoja_trabajo.paso.code,
														'  paso-default'
													)
												},
												React.createElement(o.default, {
													panes: this.panes,
													activeIndex: t,
													renderActiveOnly: !1
												})
											)
										)
							);
						}
					}
				]) && d(a.prototype, s),
				u && d(a, u),
				t
			);
		})();
		t.default = h;
	},
	40: function(e, t) {
		e.exports = ReactDOM;
	},
	601: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = i(a(164)),
			o = i(a(56)),
			r = i(a(9));
		function i(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function c() {
			return (c =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
					}
					return e;
				}).apply(this, arguments);
		}
		var l = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
						t.indexOf(n[o]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
							(a[n[o]] = e[n[o]]);
				}
				return a;
			},
			s = function(e) {
				var t = e.children,
					a = l(e, [ 'children' ]);
				return (
					(a.className = (0, r.default)(a.className, 'action')),
					(a = Object.assign({ icon: !0, basic: !0, compact: !0, size: 'mini', title: 'Editar' }, a)),
					void 0 === t &&
						// change icon: (t = React.createElement(o.default, { name: 'pencil square', color: 'green', size: 'large' })),
						(t = React.createElement(o.default, { name: 'icon-svg editar', color: 'green', size: 'large' })),
					React.createElement(n.default, c({}, a, { type: 'button' }), t)
				);
			};
		t.default = s;
	},
	646: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = s(a(240)),
			r = s(a(647)),
			i = a(302),
			c = s(a(690)),
			l = s(a(693));
		function s(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function u(e) {
			return (u =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function d(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function p(e, t) {
			return !t || ('object' !== u(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function m(e) {
			return (m = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function f(e, t) {
			return (f =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var h = (function(e) {
			function t() {
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					p(this, m(t).apply(this, arguments))
				);
			}
			var a, s, u;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && f(e, t);
				})(t, n.Component),
				(a = t),
				(s = [
					{
						key: 'getCompletadoDisabledText',
						value: function() {
							var e = this.props.visita.materialidad;
							return e.factor
								? e.nivel
									? void 0 !== e.montos[e.factor] && e.montos[e.factor].valor
										? e.montos[e.factor][{ 1: 'max', 2: 'med', 3: 'min' }[e.nivel]]
											? e.porc
												? e.porc_error
													? e.factor_justificacion
														? this.props.visita.additionals.revisiones > 0
															? 'Esta visita tiene Notas de Revisión pendientes por revisar que deben primero ser revisadas para poder marcar esta hoja de trabajo como COMPLETADA.'
															: void 0
														: 'La razón de la selección del Factor y Nivel de Confianza aun no ha sido ingresada.'
													: 'El porcentaje de Error Tolerable aun no ha sido ingresado.'
												: 'El porcentaje de Materialidad de Planeación aun no ha sido ingresado.'
											: 'El porcentaje de Materialidad General aun no ha sido ingresado.'
										: 'El monto del factor seleccionado aun no ha sido ingresado.'
									: 'El nivel de confianza aún no ha sido seleccionado.'
								: 'El factor para el cálculo de la Materialidad General aún no ha sido seleccionado.';
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this.props.visita.materialidad;
							return (
								(e.Visita = this.props.visita),
								React.createElement(
									o.default.Pane,
									{ active: this.props.active },
									React.createElement(r.default, {
										visita: this.props.visita,
										actionItems: { _ajustes: !1, _muestreo: !1 }
									}),
									React.createElement(
										'div',
										{ id: 'materialidadformwrapper' },
										React.createElement(i.PasoObjetivoPane, { isEditable: this.props.isEditable }),
										React.createElement(c.default, {
											materialidad: e,
											isEditable: this.props.isEditable
										}),
										React.createElement(
											'div',
											{ className: 'footer-actions' },
											React.createElement(l.default, {
												materialidad: e,
												isEditable: this.props.isEditable
											}),
											React.createElement(i.PasoVisitaStatusActions, {
												visita: this.props.visita,
												completadoDisabledText: this.getCompletadoDisabledText()
											})
										)
									)
								)
							);
						}
					}
				]) && d(a.prototype, s),
				u && d(a, u),
				t
			);
		})();
		t.default = h;
	},
	647: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = v(a(162)),
			r = v(a(204)),
			i = v(a(205)),
			c = v(a(56)),
			l = a(648),
			s = v(a(111)),
			u = a(168),
			d = a(651),
			p = a(664),
			m = a(687),
			f = a(689),
			h = v(a(9));
		function v(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function b(e) {
			return (b =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function y() {
			return (y =
				Object.assign ||
				function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
					}
					return e;
				}).apply(this, arguments);
		}
		function g(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function E(e, t) {
			return !t || ('object' !== b(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function R(e) {
			return (R = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function j(e, t) {
			return (j =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var C = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = E(this, R(t).apply(this, arguments))).state = {
						panelOpen: null,
						openAsignarUsuarioModal: !1
					}),
					(e.onItemOpen = function(t) {
						e.setState({ panelOpen: t });
					}),
					(e.closeAllPanel = function() {
						e.setState({ panelOpen: null });
					}),
					e
				);
			}
			var a, s, v;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && j(e, t);
				})(t, n.Component),
				(a = t),
				(s = [
					{
						key: 'isActionItemEnabled',
						value: function(e) {
							return (
								void 0 === this.props.actionItems['_'.concat(e)] ||
								this.props.actionItems['_'.concat(e)]
							);
						}
					},
					{
						key: 'renderAsignUserModal',
						value: function() {
							var e = this;
							if (this.state.openAsignarUsuarioModal) {
								var t = this.context,
									a = t.hoja_trabajo,
									n = t.update;
								return React.createElement(l.HojaTrabajoAsignarVisitaModal, {
									visita: this.props.visita,
									onSave: function(t) {
										var o = url_for(
											'proyecto/'
												.concat(a.proyecto.id, '/hoja-trabajo/paso/')
												.concat(a.paso.id, '/visita/')
												.concat(e.props.visita.id_visita, '/save')
										);
										$.blockUI(create_blockUI_loading_message('Guardando asignado...')),
											$.ajax(o, {
												type: 'POST',
												data: { op: 'a', paso_id_usuario: t },
												dataType: 'json'
											}).done(function(t) {
												var o = u.HojaTrabajoUpdateUtils.updateVisita(
													a,
													e.props.visita,
													t.response.record
												);
												n(o), $.unblockUI();
											}),
											e.setState({ openAsignarUsuarioModal: !1 });
									},
									onClose: function() {
										return e.setState({ openAsignarUsuarioModal: !1 });
									}
								});
							}
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props.visita.HojaTrabajo.proyecto.id,
								a = this.props.visita.HojaTrabajo.paso.id,
								s = this.props.visita.id_visita,
								u = null != this.props.visita.HojaTrabajo.proyecto.id_parent,
								v = 'proyecto/'.concat(t, '/paso/').concat(a, '/visita/').concat(s, '/'),
								b = this.props.visita.additionals,
								g = public_path('images/sidebar_right/');
							return React.createElement(
								n.Fragment,
								null,
								React.createElement('div', {
									className: (0, h.default)('sidebar-fixed-overlay ui page dimmer inverted', {
										active: null != this.state.panelOpen
									}),
									onClick: function() {
										return e.closeAllPanel();
									}
								}),
								React.createElement(
									r.default,
									{
										fixed: 'right',
										vertical: !0,
										compact: !0,
										icon: !0,
										className: 'visita-sidebar right-sidebar',
										id: 'app-right-sidebar'
									},
									React.createElement(
										r.default.Menu,
										null,
										_.map(this.props.actionItems, function(t, a) {
											if ('_' == a.substr(0, 1) || null === t) return null;
											var n = t.onClick;
											return (
												(t.onClick = function(t, a) {
													e.closeAllPanel(), n(t, a);
												}),
												React.createElement(r.default.Item, y({ key: a }, t))
											);
										}),
										this.props.visita.HojaTrabajo.proyecto.isOpen &&
											user_has_role_permission('paso_asignar_usuario') &&
											this.isActionItemEnabled('assign_user') &&
											React.createElement(
												r.default.Item,
												{
													link: !0,
													title: 'Asignar usuario a esta visita',
													onClick: function(t) {
														e.closeAllPanel(), e.setState({ openAsignarUsuarioModal: !0 });
													}
												},

                      //change icon
										  //	React.createElement(
											//		c.default.Group,
											//		{ size: 'large' },
											//		React.createElement(c.default, { name: 'user outline' }),
											//		React.createElement(c.default, { corner: !0, name: 'plus' })
										  //		)

													React.createElement(
													c.default.Group,
													{ size: 'icon-svg asignar_usuario' })


											),
										this.renderAsignUserModal(),
										u &&
											this.isActionItemEnabled('history') &&
											React.createElement(l.HojaTrabajoHistoryModal, {
												trigger: React.createElement(r.default.Item, {
													title: 'Hoja Trabajo Año Anterior ',
													icon: { name: 'history', size: 'large' },
													onClick: this.closeAllPanel
												}),
												url: url_for(v + 'prev')
											})
									),
									React.createElement(
										r.default.Menu,
										null,
										this.isActionItemEnabled('ajustes') &&
											React.createElement(d.MenuItemAjuste, {
												counter: b.ajustes,
												moduleParams: { id_paso: a, id_visita: s, model: 'ajuste' },
												open: 'ajuste' == this.state.panelOpen,
												onOpen: this.onItemOpen,
												modelManager: null
											}),
										this.isActionItemEnabled('hallazgo') &&
											React.createElement(p.MenuItemHallazgo, {
												modelManager: f.HallazgoHojaTrabajoModelManager.getInstance(),
												counter: b.hallazgos,
												moduleParams: { id_paso: a, id_visita: s, model: 'hallazgo' },
												open: 'hallazgo' == this.state.panelOpen,
												onOpen: this.onItemOpen
											}),
										this.isActionItemEnabled('muestreo') &&
											React.createElement(
												r.default.Item,
												{
													as: 'a',
													className: 'badged',
													href: url_for(v + 'muestreo'),
													title: 'Muestreo',
													onClick: this.closeAllPanel
												},
												React.createElement(i.default, {
													src: g + 'muestreo.svg',
													size: 'large'
												}),
												' ',
												' ',
												React.createElement(o.default, {
													size: 'mini',
													className: 'right',
													floating: !0,
													circular: !0,
													content: b.muestreos,
													color: 0 == b.muestreos ? 'green' : 'red'
												})
											),
										this.isActionItemEnabled('revision') &&
											React.createElement(m.MenuItemRevision, {
												counter: b.revisiones,
												moduleParams: { id_paso: a, id_visita: s, model: 'revision' },
												modelManager: f.RevisionHojaTrabajoModelManager.getInstance(
													this.context
												),
												open: 'revision' == this.state.panelOpen,
												onOpen: this.onItemOpen
											})
									),
									this.isActionItemEnabled('pdf') &&
										React.createElement(
											r.default.Menu,
											null,
											React.createElement(r.default.Item, {
												as: 'a',
												href: url_for(v + 'pdf.pdf'),
												target: '_blank',
												title: 'Exportar como PDF',
												content: React.createElement(i.default, {
													src: g + 'exportar_pdf.svg',
													size: 'large'
												})
											})
										)
								)
							);
						}
					}
				]) && g(a.prototype, s),
				v && g(a, v),
				t
			);
		})();
		(t.default = C), (C.contextType = s.default), (C.defaultProps = { actionItems: {} });
	},
	648: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.HojaTrabajoAsignarVisitaModal = t.HojaTrabajoHistoryModal = void 0);
		var n = a(1),
			o = s(a(307)),
			r = s(a(75)),
			i = s(a(649)),
			c = s(a(650)),
			l = s(a(169));
		function s(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function u(e) {
			return (u =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function d(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function p(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function m(e, t, a) {
			return t && p(e.prototype, t), a && p(e, a), e;
		}
		function f(e, t) {
			return !t || ('object' !== u(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function h(e) {
			return (h = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function v(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && b(e, t);
		}
		function b(e, t) {
			return (b =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var y = (function(e) {
			function t() {
				var e;
				return (
					d(this, t),
					((e = f(this, h(t).apply(this, arguments))).state = { content: '' }),
					(e.onOpen = function() {
						if ('' == e.state.content) {
							var t = { height: 350, removePlugins: 'elementspath, uploadfile', toolbar: [ {} ] };
							e.setState({ content: React.createElement(i.default, { active: !0 }) }),
								$.ajax(e.props.url, { dataType: 'json' }).done(function(a) {
									if (a.hasErrors)
										e.setState({
											content: React.createElement(
												'div',
												{
													style: {
														color: 'red',
														textAlign: 'center',
														fontSize: '18px',
														fontWeight: 'bold',
														marginTop: 25
													}
												},
												'Hoja de Trabajo NO disponible'
											)
										});
									else {
										var n = "&nbsp;<div class='watermark-text' style='color:#08828a33; font-size:70px; font-weight: bold; transform:rotate(340deg); -webkit-transform:rotate(340deg); left: 35%; position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;  '>Hoja Trabajo<br>Año Anterior</div>\n          <div class='watermarked-content' style='position:absolute; z-index:1;  margin-right: 20px; '>".concat(
											a.response.content,
											'</div>&nbsp;'
										);
										e.setState({
											content: React.createElement(o.default, {
												data: n,
												readOnly: !0,
												config: t
											})
										});
									}
								});
						}
					}),
					e
				);
			}
			return (
				v(t, n.Component),
				m(t, [
					{
						key: 'render',
						value: function() {
							return React.createElement(c.default, {
								closeIcon: !0,
								trigger: this.props.trigger,
								content: this.state.content,
								header: 'Hoja de Trabajo - Año Anterior',
								closeOnDimmerClick: !1,
								onOpen: this.onOpen,
								size: 'fullscreen',
								dimmer: 'inverted',
								style: { minHeight: 400 },
								className: 'modal-ab'
							});
						}
					}
				]),
				t
			);
		})();
		t.HojaTrabajoHistoryModal = y;
		var g = (function(e) {
			function t(e) {
				var a;
				return (
					d(this, t),
					((a = f(this, h(t).call(this, e))).onChange = function(e, t) {
						a.setState({ id_asignado: t.value });
					}),
					(a.onSave = function() {
						a.props.onSave(a.state.id_asignado), a.props.onClose();
					}),
					(a.onClose = function() {
						a.props.onClose();
					}),
					(a.state = { id_asignado: e.visita.id_usuario_asignado }),
					a
				);
			}
			return (
				v(t, n.Component),
				m(t, [
					{
						key: 'render',
						value: function() {
							var e = this.props.visita,
								t = _.filter(e.HojaTrabajo.equipo, function(e) {
									return e.rol.is_assignable;
								}),
								a = _.map(t, function(e) {
									return {
										key: e.user_id,
										text: e.name,
										value: e.user_id,
										description: e.rol.name,
										label: { content: e.sigla, circular: !0, color: 'green' }
									};
								});
							return React.createElement(
								c.default,
								{
									closeIcon: !0,
									open: !0,
									closeOnDimmerClick: !1,
									size: 'tiny',
									dimmer: 'inverted',
									className: 'modal-ab',
									onClose: this.onClose
								},
								React.createElement(c.default.Header, null, 'Asignar/Reasignar visita a usuario'),
								React.createElement(
									c.default.Content,
									null,
									React.createElement(
										'blockquote',
										null,
										React.createElement('strong', null, 'Visita: '),
										' ',
										e.label
									),
									React.createElement(l.default, {
										placeholder: 'Seleccione el usuario',
										defaultValue: e.id_usuario_asignado,
										selection: !0,
										clearable: !0,
										fluid: !0,
										options: a,
										onChange: this.onChange
									})
								),
								React.createElement(
									c.default.Actions,
									null,
									React.createElement(r.default, {
										primary: !0,
										content: 'Aceptar',
										onClick: this.onSave
									})
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.HojaTrabajoAsignarVisitaModal = g;
	},
	651: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.MenuItemAjuste = void 0);
		var n,
			o = a(1),
			r = a(89),
			i = a(170),
			c = a(319),
			l = a(662),
			s = (n = a(321)) && n.__esModule ? n : { default: n },
			u = a(322);
		function d(e) {
			return (d =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function p(e) {
			return (
				(function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
						return a;
					}
				})(e) ||
				(function(e) {
					if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
						return Array.from(e);
				})(e) ||
				(function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance');
				})()
			);
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e) {
			return (f = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function h(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e;
		}
		function v(e, t) {
			return (v =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var b = (function(e) {
			function t() {
				var e, a, n;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					(a = this),
					(n = f(t).apply(this, arguments)),
					((e = !n || ('object' !== d(n) && 'function' != typeof n) ? h(a) : n).cuentas = null),
					(e.state = { items: null }),
					(e.parseAjustes = function(t) {
						var a = h(e),
							n = _.groupBy(t, 'idx');
						return _.map(n, function(e, t) {
							var n = _.map(e, function(e) {
								return {
									id: e.id,
									cuenta: e.cuenta,
									debe: 'DEBE' == e.col ? e.valor : '',
									haber: 'HABER' == e.col ? e.valor : '',
									nombre_cuenta: a.getNombreCuenta(e.cuenta)
								};
							});
							return Object.assign(
								{},
								{
									idx: t,
									items: n,
									status: e[0].status,
									descripcion: e[0].description,
									id_visita: e[0].id_proyecto_visita
								},
								_.pick(e[0], [
									'fecha_completado',
									'aplicado',
									'fecha_revision',
									'UpdateLog',
									'RevisionLog'
								])
							);
						});
					}),
					(e.onCreateItem = function(t) {
						return new Promise(function(a) {
							$.blockUI(create_blockUI_loading_message('Creando ajuste'));
							var n = e.props.moduleParams,
								o = n.id_visita,
								r = n.id_paso;
							$.post(
								url_for('proyecto/'.concat(app.vars.idproyecto, '/visita/').concat(o, '/cifra-ajuste')),
								{ changes: t, id_paso: r, v: 2 }
							).done(function(t) {
								e.setState(function(a) {
									var n = p(a.items);
									return n.push(e.parseAjustes(t.response.ajustes)[0]), { items: n };
								}),
									$.unblockUI(),
									a();
							});
						});
					}),
					(e.onMountPanel = function() {
						if (null === e.state.items) {
							var t = e.props.moduleParams.id_visita;
							$.getJSON(
								url_for('proyecto/'.concat(app.vars.idproyecto, '/visita/').concat(t, '/cifra-ajuste'))
							).done(function(a) {
								(e.cuentas = _.isEmpty(a.response.cuentas) ? [] : a.response.cuentas),
									(app.vars.error_tolerable[t] = a.response.error_tolerable),
									e.setState({
										items: _.isEmpty(a.response.ajustes) ? [] : e.parseAjustes(a.response.ajustes)
									});
							});
						}
					}),
					(e.onSaveItem = function(t, a, n) {
						return new Promise(function(o) {
							var r = e.props.moduleParams,
								i = r.id_visita,
								c = r.id_paso;
							n &&
								setTimeout(function() {
									return $.blockUI(create_blockUI_loading_message(n));
								}, 100),
								$.post(
									url_for(
										'proyecto/'.concat(app.vars.idproyecto, '/visita/').concat(i, '/cifra-ajuste')
									),
									{ idx: t.idx, changes: a, id_paso: c, v: 2 }
								).done(function(t) {
									var a = e.parseAjustes(t.response.ajustes);
									e.setState(function(e) {
										return {
											items: _.map(e.items, function(e) {
												return e.idx == a[0].idx ? a[0] : e;
											})
										};
									}),
										n && $.unblockUI(),
										o(a[0]);
								});
						});
					}),
					(e.onClickDeleteItem = function(t) {
						bootbox.warningConfirm(
							'¿Desea eliminar el <strong>Ajuste #'
								.concat(t.idx, '</strong>,\n      el cual contiene un total de ')
								.concat(_.size(t.items), ' registros contables?'),
							'No',
							'Sí, Eliminar',
							function(a) {
								if (a) {
									var n = e.props.moduleParams.id_visita;
									$.blockUI(create_blockUI_loading_message('Eliminando ajustes')),
										$.ajax(
											url_for(
												'proyecto/'
													.concat(app.vars.idproyecto, '/visita/')
													.concat(n, '/cifra-ajuste/')
													.concat(t.idx)
											),
											{ type: 'delete' }
										).done(function(a) {
											e.setState(function(e) {
												return { items: _.reject(e.items, { idx: t.idx }) };
											}),
												$.unblockUI();
										});
								}
							}
						);
					}),
					e
				);
			}
			var a, n, b;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && v(e, t);
				})(t, o.PureComponent),
				(a = t),
				(n = [
					{
						key: 'getNombreCuenta',
						value: function(e) {
							return (0, u.getNombreCuenta)(this.cuentas, e);
						}
					},
					{
						key: 'renderContent',
						value: function() {
							var e = {
								idx: null,
								status: 'NUEVO',
								descripcion: '',
								id_visita: this.props.moduleParams.id_visita,
								items: _.fill(
									new Array(2),
									{ cuenta: '', debe: null, haber: null, nombre_cuenta: '' },
									0,
									2
								)
							};
							return React.createElement(
								'div',
								{ className: 'content' },
								_.size(this.cuentas) > 0 &&
									React.createElement(i.MenuItemNew, {
										moduleParams: this.props.moduleParams,
										buttonText: 'Crear Ajuste',
										headerText: 'Nuevo Ajuste',
										isEditable: user_has_role_permission('ajustes_edit'),
										onSave: this.onCreateItem,
										item: e,
										contentAs: c.AjusteModal
									}),
								_.isArray(this.cuentas) && 0 == _.size(this.cuentas)
									? React.createElement(
											'div',
											{ className: 'ui message error', style: { marginTop: 40 } },
											React.createElement('i', { className: 'icon warning sign' }),
											React.createElement('strong', null, 'Advertencia: '),
											' Al parecer aún no se han cargado sumarias a esta visita.'
										)
									: React.createElement(l.AjusteList, {
											items: this.state.items,
											moduleParams: this.props.moduleParams,
											isEditable:
												es_proyecto_editable() && user_has_role_permission('ajustes_edit'),
											onSaveItem: this.onSaveItem,
											onClickDeleteItem: this.onClickDeleteItem
										})
							);
						}
					},
					{
						key: 'render',
						value: function() {
							return React.createElement(
								r.BaseMenuElement,
								{
									name: 'ajuste',
									counter: null === this.state.items ? this.props.counter : _.size(this.state.items),
									icon: 'ajustes',
									title: 'Ajustes',
									open: this.props.open,
									onToggle: this.props.onOpen,
									onMountPanel: this.onMountPanel
								},
								React.createElement(s.default.Provider, { value: this.cuentas }, this.renderContent())
							);
						}
					}
				]) && m(a.prototype, n),
				b && m(a, b),
				t
			);
		})();
		t.MenuItemAjuste = b;
	},
	654: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.SidebarPanelHeader = void 0);
		var n,
			o = (n = a(18)) && n.__esModule ? n : { default: n },
			r = a(1);
		function i(e) {
			return (i =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function c(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function l(e, t) {
			return !t || ('object' !== i(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function s(e) {
			return (s = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function u(e, t) {
			return (u =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var d = (function(e) {
			function t() {
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					l(this, s(t).apply(this, arguments))
				);
			}
			var a, n, i;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && u(e, t);
				})(t, r.PureComponent),
				(a = t),
				(n = [
					{
						key: 'componentDidMount',
						value: function() {
							(0, o.default)(this.props, 'onMount');
						}
					},
					{
						key: 'render',
						value: function() {
							return React.createElement(
								'header',
								null,
								React.createElement(
									'a',
									{ href: '#', className: 'close-link', onClick: this.props.onClose },
									React.createElement('i', { className: 'ui icon close green' })
								),
								React.createElement('div', { className: 'title' }, this.props.title)
							);
						}
					}
				]) && c(a.prototype, n),
				i && c(a, i),
				t
			);
		})();
		t.SidebarPanelHeader = d;
	},
	655: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.DefaultErrorHandler = void 0);
		var n = a(1);
		function o(e) {
			return (o =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function r(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function i(e, t) {
			return !t || ('object' !== o(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function c(e) {
			return (c = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function l(e, t) {
			return (l =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var s = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = i(this, c(t).apply(this, arguments))).state = { hasError: !1 }),
					e
				);
			}
			var a, o, s;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && l(e, t);
				})(t, n.Component),
				(a = t),
				(s = [
					{
						key: 'getDerivedStateFromError',
						value: function(e) {
							return { hasError: !0 };
						}
					}
				]),
				(o = [
					{
						key: 'componentDidCatch',
						value: function(e, t) {
							this.isLocalhost() && alert('ERROR: ' + e.message);
						}
					},
					{
						key: 'isLocalhost',
						value: function() {
							return 'auditbrain.local' === window.location.host;
						}
					},
					{
						key: 'render',
						value: function() {
							return this.state.hasError ? this.props.errorMessage : this.props.children;
						}
					}
				]) && r(a.prototype, o),
				s && r(a, s),
				t
			);
		})();
		(t.DefaultErrorHandler = s), (s.defaultProps = { errorMessage: null });
	},
	662: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.AjusteList = void 0);
		var n = a(1),
			o = d(a(76)),
			r = a(89),
			i = a(319),
			c = a(112),
			l = a(113),
			s = d(a(88)),
			u = a(324);
		function d(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function p(e) {
			return (p =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function m(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function f(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function h(e, t, a) {
			return t && f(e.prototype, t), a && f(e, a), e;
		}
		function v(e, t) {
			return !t || ('object' !== p(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function b(e) {
			return (b = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function y(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && g(e, t);
		}
		function g(e, t) {
			return (g =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var E = (function(e) {
			function t() {
				return m(this, t), v(this, b(t).apply(this, arguments));
			}
			return (
				y(t, n.PureComponent),
				h(t, [
					{
						key: 'render',
						value: function() {
							var e = this;
							if (null === this.props.items)
								return React.createElement(
									'div',
									{ style: { height: 300, position: 'relative' } },
									React.createElement(
										'div',
										{ className: 'ui active inverted text loader elastic olive' },
										'Cargando Listado de Ajustes'
									)
								);
							if (0 == _.size(this.props.items))
								return React.createElement('div', { className: 'empty nocontent' }, '0 Ajustes');
							var t = this.props.items;
							return React.createElement(
								r.MenuElementListPanel,
								{ className: 'ajustes-list' },
								_.map(t, function(t) {
									return React.createElement(
										'div',
										{ key: t.idx, className: 'listitem ajuste-listitem' },
										React.createElement(R, {
											item: t,
											isEditable: e.props.isEditable,
											onSave: e.props.onSaveItem,
											onClickDelete: e.props.onClickDeleteItem
										})
									);
								})
							);
						}
					}
				]),
				t
			);
		})();
		t.AjusteList = E;
		var R = (function(e) {
				function t() {
					var e;
					return (
						m(this, t),
						((e = v(this, b(t).apply(this, arguments))).state = { isModalEdit: !1 }),
						(e.onClickDelete = function(t) {
							t.preventDefault(), e.props.onClickDelete(e.props.item);
						}),
						(e.onClickEdit = function(t) {
							t.preventDefault(), e.setState({ isModalEdit: !0 });
						}),
						(e.onCloseEdit = function() {
							e.setState({ isModalEdit: !1 });
						}),
						(e.onSave = function(t, a, n) {
							e.props.onSave(t, a, n);
						}),
						e
					);
				}
				return (
					y(t, n.PureComponent),
					h(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props.item;
								return React.createElement(
									'div',
									null,
									this.props.isEditable &&
										React.createElement(r.MenuElementListActions, {
											actions: {
												edit: {
													label: 'Editar',
													callback: this.onClickEdit,
													permission: 'ajustes_edit'
												},
												delete: {
													label: 'Eliminar',
													callback: this.onClickDelete,
													permission: 'ajustes_delete'
												}
											}
										}),
									React.createElement(
										'div',
										{ onClick: this.onClickEdit },
										React.createElement(
											'div',
											{ className: 'row r1' },
											React.createElement(
												'div',
												{ className: 'pull-left r1_1' },
												React.createElement(
													'span',
													{ className: 'title-h1' },
													' Ajuste #',
													e.idx
												),
												React.createElement(c.AuthorIconLogDefaultWrapper, {
													model: e,
													size: 'small'
												}),
												React.createElement(
													'div',
													{ className: 'r1_2' },
													React.createElement('strong', null, 'Ajuste Registrado: '),
													' ',
													'' + e.aplicado == '1' ? 'Sí' : 'No'
												)
											),
											React.createElement(l.StatusDivBlock, {
												wrapperClassName: 'pull-right text-mini',
												status: e.status || 'EN PROCESO',
												className: 'mini',
												hideLabel: !0
											})
										),
										React.createElement(
											'table',
											{
												className:
													'ui compact very basic celled striped small table table-ajustes'
											},
											React.createElement(
												'thead',
												null,
												React.createElement(
													'tr',
													null,
													React.createElement('th', null, 'Cuenta'),
													React.createElement('th', null, 'Debe'),
													React.createElement('th', null, 'Haber')
												)
											),
											React.createElement(
												'tbody',
												null,
												_.map(e.items, function(e) {
													return React.createElement(
														n.Fragment,
														{ key: e.id },
														!C(e.debe) &&
															React.createElement(
																'tr',
																null,
																React.createElement(
																	'td',
																	null,
																	React.createElement(s.default, {
																		trigger: React.createElement(
																			'span',
																			null,
																			e.cuenta
																		),
																		content: e.nombre_cuenta,
																		header: e.cuenta,
																		size: 'mini'
																	})
																),
																React.createElement(
																	'td',
																	{ className: 'right aligned' },
																	accounting.formatNumber(e.debe)
																),
																React.createElement('td', null, ' ')
															),
														!C(e.haber) &&
															React.createElement(
																'tr',
																null,
																React.createElement(
																	'td',
																	null,
																	React.createElement(s.default, {
																		trigger: React.createElement(
																			'span',
																			null,
																			e.cuenta
																		),
																		content: e.nombre_cuenta,
																		header: e.cuenta,
																		size: 'mini'
																	})
																),
																React.createElement('td', null, ' '),
																React.createElement(
																	'td',
																	{ className: 'right aligned' },
																	accounting.formatNumber(e.haber)
																)
															)
													);
												})
											)
										),
										e.descripcion &&
											React.createElement(
												'div',
												{ className: 'item-description' },
												React.createElement('div', {
													className: 'editor-preview',
													dangerouslySetInnerHTML: {
														__html: (0, u.truncateText)(e.descripcion)
													}
												})
											)
									),
									this.state.isModalEdit &&
										React.createElement(j, {
											item: e,
											onSave: this.onSave,
											onClickDelete: this.onClickDelete,
											onClose: this.onCloseEdit,
											isEditable: this.props.isEditable
										})
								);
							}
						}
					]),
					t
				);
			})(),
			j = (function(e) {
				function t() {
					var e;
					return (
						m(this, t),
						((e = v(this, b(t).apply(this, arguments))).onSave = function(t, a) {
							e.props.onSave(e.props.item, t, a);
						}),
						e
					);
				}
				return (
					y(t, n.PureComponent),
					h(t, [
						{
							key: 'render',
							value: function() {
								return React.createElement(
									o.default,
									{
										open: !0,
										dimmer: 'inverted',
										className: 'modal-ab modal-sidebarmenuitem',
										size: 'large',
										closeIcon: !0,
										onClose: this.props.onClose,
										closeOnEscape: !1,
										closeOnDimmerClick: !1
									},
									React.createElement(o.default.Header, null, 'Editar Ajuste'),
									React.createElement(i.AjusteModal, {
										moduleParams: { id_visita: this.props.item.id_visita, model: 'ajuste' },
										item: this.props.item,
										isEditable: this.props.isEditable,
										onSave: this.onSave,
										onClickDelete: this.props.onClickDelete
									})
								);
							}
						}
					]),
					t
				);
			})(),
			C = function(e) {
				return !_.isNumber(e) && 0 == _.size(e);
			};
	},
	664: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.MenuItemHallazgo = void 0);
		var n = (function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var a in e)
						if (Object.prototype.hasOwnProperty.call(e, a)) {
							var n =
								Object.defineProperty && Object.getOwnPropertyDescriptor
									? Object.getOwnPropertyDescriptor(e, a)
									: {};
							n.get || n.set ? Object.defineProperty(t, a, n) : (t[a] = e[a]);
						}
				return (t.default = e), t;
			})(a(1)),
			o = a(89),
			r = a(170),
			i = a(665),
			c = a(214),
			l = a(325);
		function s(e) {
			return (s =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function u(e) {
			return (
				(function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
						return a;
					}
				})(e) ||
				(function(e) {
					if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
						return Array.from(e);
				})(e) ||
				(function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance');
				})()
			);
		}
		function d(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function p(e, t) {
			return !t || ('object' !== s(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function m(e) {
			return (m = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function f(e, t) {
			return (f =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var h = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = p(this, m(t).apply(this, arguments))).state = { items: null }),
					(e.onMountPanel = function() {
						null === e.state.items &&
							e.props.modelManager.getJson(e.props).then(function(t) {
								e.setState({ items: t });
							});
					}),
					(e.onCreateItem = function(t) {
						return new Promise(function(a) {
							$.blockUI(create_blockUI_loading_message('Creando Hallazgo')),
								e.props.modelManager.createItem(e.props, t).then(function(t) {
									e.addItem(t), $.unblockUI(), a();
								});
						});
					}),
					(e.onSaveItem = function(t, a, n) {
						return new Promise(function(o) {
							n ? $.blockUI(create_blockUI_loading_message(n)) : e.updateItem(t, a),
								e.props.modelManager.saveItem(e.props, t, a).then(function(a) {
									e.updateItem(t, a), n && $.unblockUI(), o(a);
								});
						});
					}),
					(e.onClickDeleteItem = function(t) {
						bootbox.warningConfirm(
							'¿Desea eliminar el hallazgo <strong>'.concat(
								c.HallazgoUtils.formatName(t.name),
								'</strong> ?'
							),
							'No',
							'Sí, Eliminar',
							function(a) {
								a &&
									($.blockUI(create_blockUI_loading_message('Eliminando Hallazgo')),
									e.props.modelManager.deleteItem(e.props, t).then(function() {
										e.deleteItem(t), $.unblockUI();
									}));
							}
						);
					}),
					e
				);
			}
			var a, s, h;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && f(e, t);
				})(t, n.PureComponent),
				(a = t),
				(s = [
					{
						key: 'addItem',
						value: function(e) {
							this.setState(function(t) {
								return { items: [].concat(u(t.items), [ e ]) };
							});
						}
					},
					{
						key: 'updateItem',
						value: function(e, t) {
							this.setState(function(a) {
								return {
									items: _.map(a.items, function(a) {
										return a.id == e.id ? Object.assign({}, a, t) : a;
									})
								};
							});
						}
					},
					{
						key: 'deleteItem',
						value: function(e) {
							this.setState(function(t) {
								return { items: _.reject(t.items, { id: e.id }) };
							});
						}
					},
					{
						key: 'render',
						value: function() {
							return n.default.createElement(
								o.BaseMenuElement,
								{
									name: 'hallazgo',
									counter: null === this.state.items ? this.props.counter : _.size(this.state.items),
									icon: 'hallazgos',
									title: 'Hallazgos',
									open: this.props.open,
									onToggle: this.props.onOpen,
									onMountPanel: this.onMountPanel
								},
								n.default.createElement(
									'div',
									{ className: 'content' },
									n.default.createElement(r.MenuItemNew, {
										moduleParams: this.props.moduleParams,
										buttonText: 'Crear Hallazgo',
										headerText: 'Nuevo Hallazgo',
										isEditable:
											es_proyecto_editable() && user_has_role_permission('hallazgo_create'),
										item: {
											id: null,
											status: 'NUEVO',
											implementado: null,
											hallazgo: '',
											RevisionLog: [],
											UpdateLog: []
										},
										onSave: this.onCreateItem,
										contentAs: l.HallazgoModal
									}),
									n.default.createElement(i.HallazgoList, {
										isEditable: es_proyecto_editable() && user_has_role_permission('hallazgo_edit'),
										moduleParams: this.props.moduleParams,
										items: this.state.items,
										onSaveItem: this.onSaveItem,
										onClickDeleteItem: this.onClickDeleteItem
									})
								)
							);
						}
					}
				]) && d(a.prototype, s),
				h && d(a, h),
				t
			);
		})();
		t.MenuItemHallazgo = h;
	},
	665: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.HallazgoListItem = t.HallazgoList = void 0);
		var n = a(1),
			o = a(214),
			r = a(112),
			i = a(666),
			c = a(89),
			l = a(113),
			s = a(324);
		function u(e) {
			return (u =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function d(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function p(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function m(e, t, a) {
			return t && p(e.prototype, t), a && p(e, a), e;
		}
		function f(e, t) {
			return !t || ('object' !== u(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function h(e) {
			return (h = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function v(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && b(e, t);
		}
		function b(e, t) {
			return (b =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var y = (function(e) {
			function t() {
				return d(this, t), f(this, h(t).apply(this, arguments));
			}
			return (
				v(t, n.PureComponent),
				m(t, [
					{
						key: 'render',
						value: function() {
							var e = this;
							if (null === this.props.items)
								return React.createElement(
									'div',
									{ style: { height: 300, position: 'relative' } },
									React.createElement(
										'div',
										{ className: 'ui active inverted text loader elastic olive' },
										'Cargando Listado de Hallazgos'
									)
								);
							if (0 == _.size(this.props.items))
								return React.createElement('div', { className: 'empty nocontent' }, '0 Hallazgos');
							var t = this.props.items;
							return React.createElement(
								c.MenuElementListPanel,
								null,
								_.map(t, function(t) {
									return React.createElement(
										'div',
										{ key: t.id, className: 'listitem hallazgo-listitem' },
										React.createElement(g, {
											item: t,
											moduleParams: e.props.moduleParams,
											onSave: e.props.onSaveItem,
											onClickDelete: e.props.onClickDeleteItem
										})
									);
								})
							);
						}
					}
				]),
				t
			);
		})();
		t.HallazgoList = y;
		var g = (function(e) {
			function t() {
				var e;
				return (
					d(this, t),
					((e = f(this, h(t).apply(this, arguments))).state = { isModalEdit: !1 }),
					(e.onClickEdit = function(t) {
						t.preventDefault(), e.setState({ isModalEdit: !0 });
					}),
					(e.onCloseEdit = function() {
						e.setState({ isModalEdit: !1 });
					}),
					(e.onClickDelete = function(t) {
						t.preventDefault(), e.props.onClickDelete(e.props.item);
					}),
					(e.onSave = function(t, a) {
						var n = null;
						_.isEqual(a, { status: 'COMPLETADO' })
							? (n = 'Marcando como COMPLETADO')
							: _.isEqual(a, { status: 'REVISADO' }) && (n = 'Marcando como REVISADO'),
							e.props.onSave(t, a, n);
					}),
					e
				);
			}
			return (
				v(t, n.PureComponent),
				m(t, [
					{
						key: 'renderDescripcion',
						value: function() {
							var e = this.props.item,
								t = (0, s.truncateText)(e.hallazgo);
							return React.createElement('div', { dangerouslySetInnerHTML: { __html: t } });
						}
					},
					{
						key: 'renderEstadoImplementacion',
						value: function() {
							var e = this.props.item;
							return null == e.implementado || '' + e.implementado == ''
								? 'Pendiente'
								: '0' == e.implementado ? 'En Proceso' : 'Hecho';
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this,
								t = this.props.item;
							return React.createElement(
								'div',
								null,
								React.createElement(c.MenuElementListActions, {
									actions: {
										edit: {
											label: 'Editar',
											callback: this.onClickEdit,
											permission: 'hallazgo_edit'
										},
										delete: {
											label: 'Eliminar',
											callback: this.onClickDelete,
											permission: 'hallazgo_delete'
										}
									}
								}),
								React.createElement(
									'div',
									{
										onClick: function() {
											return e.setState({ isModalEdit: !0 });
										}
									},
									React.createElement(
										'div',
										{ className: 'row r1' },
										React.createElement(
											'div',
											{ className: 'pull-left r1_1' },
											React.createElement(
												'span',
												{ className: 'title-h1' },
												o.HallazgoUtils.formatName(t.name)
											),
											React.createElement(r.AuthorIconLogDefaultWrapper, {
												model: t,
												size: 'small'
											}),
											React.createElement(
												'div',
												{ className: 'r1_2' },
												React.createElement('strong', null, 'Implementación: '),
												' ',
												this.renderEstadoImplementacion()
											)
										),
										React.createElement(l.StatusDivBlock, {
											wrapperClassName: 'pull-right text-mini',
											status: t.status,
											className: 'mini',
											hideLabel: !0
										})
									),
									React.createElement(
										'div',
										{ className: 'row' },
										React.createElement(
											'div',
											{ className: 'editor-preview' },
											this.renderDescripcion()
										)
									),
									React.createElement('div', { className: 'row' })
								),
								this.state.isModalEdit &&
									React.createElement(i.HallazgoModalEdit, {
										item: t,
										moduleParams: this.props.moduleParams,
										onSave: this.onSave,
										onClickDelete: this.onClickDelete,
										onClose: this.onCloseEdit
									})
							);
						}
					}
				]),
				t
			);
		})();
		t.HallazgoListItem = g;
	},
	666: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.HallazgoModalEdit = void 0);
		var n,
			o = a(1),
			r = (n = a(76)) && n.__esModule ? n : { default: n },
			i = a(325);
		function c(e) {
			return (c =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function l(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function s(e, t) {
			return !t || ('object' !== c(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function u(e) {
			return (u = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function d(e, t) {
			return (d =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var p = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = s(this, u(t).apply(this, arguments))).onSave = function(t) {
						e.props.onSave(e.props.item, t);
					}),
					e
				);
			}
			var a, n, c;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && d(e, t);
				})(t, o.PureComponent),
				(a = t),
				(n = [
					{
						key: 'render',
						value: function() {
							return React.createElement(
								r.default,
								{
									open: !0,
									dimmer: 'inverted',
									className: 'modal-ab modal-sidebarmenuitem',
									size: 'large',
									closeIcon: !0,
									onClose: this.props.onClose
								},
								React.createElement(r.default.Header, null, 'Editar Hallazgo'),
								React.createElement(i.HallazgoModal, {
									moduleParams: this.props.moduleParams,
									item: this.props.item,
									isEditable: user_has_role_permission('hallazgo_edit'),
									onSave: this.onSave,
									onClickDelete: this.props.onClickDelete
								})
							);
						}
					}
				]) && l(a.prototype, n),
				c && l(a, c),
				t
			);
		})();
		t.HallazgoModalEdit = p;
	},
	687: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.MenuItemRevision = void 0);
		var n = a(1),
			o = a(89),
			r = c(a(688)),
			i = c(a(333));
		function c(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function l(e) {
			return (l =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function s(e) {
			return (
				(function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
						return a;
					}
				})(e) ||
				(function(e) {
					if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
						return Array.from(e);
				})(e) ||
				(function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance');
				})()
			);
		}
		function u(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function d(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function p(e, t, a) {
			return t && d(e.prototype, t), a && d(e, a), e;
		}
		function m(e, t) {
			return !t || ('object' !== l(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function f(e) {
			return (f = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function h(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && v(e, t);
		}
		function v(e, t) {
			return (v =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var b = (function(e) {
			function t() {
				var e;
				return (
					u(this, t),
					((e = m(this, f(t).apply(this, arguments))).state = { items: null }),
					(e.parseItems = function(e) {
						return e;
					}),
					(e.onMountPanel = function() {
						null === e.state.items &&
							e.props.modelManager.getJson(e.props).then(function(t) {
								e.setState({ items: t });
							});
					}),
					(e.onCreateItem = function(t, a) {
						$.blockUI(create_blockUI_loading_message('Creando Nota de Revisión')),
							e.props.modelManager
								.createItem(e.props, { revision_text: t.text, op: t.status })
								.then(function(t) {
									e.setState(function(e) {
										var a = s(e.items);
										return a.push(t), { items: a };
									}),
										a(),
										$.unblockUI();
								});
					}),
					(e.onSaveItem = function(t, a, n) {
						return new Promise(function(o) {
							n &&
								setTimeout(function() {
									return $.blockUI(create_blockUI_loading_message(n));
								}, 100),
								e.props.modelManager.saveItem(e.props, t, a).then(function(t) {
									e.setState(function(e) {
										return {
											items: _.map(e.items, function(e) {
												return e.id == t.id ? t : e;
											})
										};
									}),
										n && $.unblockUI(),
										o(t);
								});
						});
					}),
					(e.onClickDeleteItem = function(t) {
						bootbox.warningConfirm(
							'¿Desea eliminar esta Nota de Revisión <b>#'.concat(t.name, '</b> ?'),
							'No',
							'Sí, Eliminar',
							function(a) {
								a &&
									($.blockUI(create_blockUI_loading_message('Eliminando Nota de Revisión')),
									e.props.modelManager.deleteItem(e.props, t).then(function() {
										e.setState(function(e) {
											return { items: _.reject(e.items, { id: t.id }) };
										}),
											$.unblockUI();
									}));
							}
						);
					}),
					e
				);
			}
			return (
				h(t, n.PureComponent),
				p(t, [
					{
						key: 'renderContent',
						value: function() {
							return React.createElement(
								'div',
								{ className: 'content' },
								React.createElement(y, { onSubmit: this.onCreateItem }),
								React.createElement(r.default, {
									items: this.state.items,
									moduleParams: this.props.moduleParams,
									isEditable: es_proyecto_editable() && user_has_role_permission('revision_edit'),
									onSaveItem: this.onSaveItem,
									onClickDeleteItem: this.onClickDeleteItem
								})
							);
						}
					},
					{
						key: 'render',
						value: function() {
							return React.createElement(
								o.BaseMenuElement,
								{
									name: 'revision',
									counter:
										null === this.state.items
											? this.props.counter
											: _.size(_.reject(this.state.items, { status: 'REVISADO' })),
									icon: 'notas_de_revision',
									title: 'Notas de Revisión',
									open: this.props.open,
									onToggle: this.props.onOpen,
									onMountPanel: this.onMountPanel
								},
								this.renderContent()
							);
						}
					}
				]),
				t
			);
		})();
		t.MenuItemRevision = b;
		var y = (function(e) {
			function t() {
				var e;
				return (
					u(this, t),
					((e = m(this, f(t).apply(this, arguments))).state = { text: '', isEditMode: !1 }),
					(e.onChange = function(t) {
						e.setState({ text: t.target.value });
					}),
					(e.onTextareaKeyDown = function(t) {
						27 == t.keyCode && e.onCancel(),
							(!t.ctrlKey && !t.metaKey) || (13 != t.keyCode && 10 != t.keyCode) || e.onSubmit('NUEVO');
					}),
					(e.onClickNew = function() {
						e.setState({ isEditMode: !0 });
					}),
					(e.onCancel = function() {
						e.setState({ isEditMode: !1, text: '' });
					}),
					(e.onSubmit = function(t) {
						'' != _.str.trim(e.state.text)
							? e.props.onSubmit({ text: _.str.trim(e.state.text), status: t }, function() {
									e.setState({ text: '', isEditMode: !1 });
								})
							: bootbox.alertError('La Nota de Revisión no puede estar vacía.');
					}),
					e
				);
			}
			return (
				h(t, n.PureComponent),
				p(t, [
					{
						key: 'render',
						value: function() {
							var e = this;
							return es_proyecto_editable() && user_has_role_permission('revision_edit')
								? this.state.isEditMode
									? React.createElement(
											'div',
											null,
											React.createElement(i.default, {
												minRows: 2,
												maxRows: 8,
												autoFocus: !0,
												onChange: this.onChange,
												value: this.state.text,
												style: { width: '98%' },
												onKeyDown: this.onTextareaKeyDown,
												placeholder: 'Escriba aquí su Nota de Revisión'
											}),
											React.createElement(
												'div',
												{ style: { marginTop: 8, textAlign: 'right' } },
												React.createElement(
													'button',
													{
														className: 'ui button negative mini compact',
														onClick: this.onCancel
													},
													'Cancelar'
												),
												React.createElement(
													'button',
													{
														className: 'ui button primary mini compact',
														onClick: function() {
															return e.onSubmit('NUEVO');
														}
													},
													'Guardar'
												)
											)
										)
									: React.createElement(
											'div',
											{ style: { textAlign: 'center' } },
											React.createElement(
												'button',
												{ 
												// change button: className: 'ui button primary mini compact', onClick: this.onClickNew }, */
												   className: 'ui button primary compact', onClick: this.onClickNew },
												'Crear Nota'
											)
										)
								: null;
						}
					}
				]),
				t
			);
		})();
	},
	688: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = a(89),
			r = a(112),
			i = a(113),
			c = u(a(333)),
			l = u(a(9)),
			s = u(a(166));
		function u(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function d(e) {
			return (d =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function p(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e, t, a) {
			return t && m(e.prototype, t), a && m(e, a), e;
		}
		function h(e, t) {
			return !t || ('object' !== d(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function v(e) {
			return (v = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function b(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && y(e, t);
		}
		function y(e, t) {
			return (y =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var g = (function(e) {
			function t() {
				return p(this, t), h(this, v(t).apply(this, arguments));
			}
			return (
				b(t, n.PureComponent),
				f(t, [
					{
						key: 'render',
						value: function() {
							var e = this;
							if (null === this.props.items)
								return React.createElement(
									'div',
									{ style: { height: 300, position: 'relative' } },
									React.createElement(
										'div',
										{ className: 'ui active inverted text loader elastic olive' },
										'Cargando Notas de Revisión'
									)
								);
							if (0 == _.size(this.props.items))
								return React.createElement(
									'div',
									{ className: 'empty nocontent' },
									'0 Notas de Revisión'
								);
							var t = this.props.items,
								a = _.reject(t, { status: 'REVISADO' }),
								n = _.filter(t, { status: 'REVISADO' });
							return React.createElement(
								o.MenuElementListPanel,
								{ className: 'revision-list' },
								0 == _.size(a)
									? React.createElement(
											'div',
											{ className: 'empty nocontent' },
											'0 Notas de Revisión Abiertas'
										)
									: _.map(a, function(t) {
											return React.createElement(
												'div',
												{ key: t.id, className: 'listitem revision-listitem' },
												React.createElement(R, {
													item: t,
													isEditable: e.props.isEditable,
													onSave: e.props.onSaveItem,
													onClickDelete: e.props.onClickDeleteItem
												})
											);
										}),
								_.size(n) > 0 && React.createElement(E, { items: n })
							);
						}
					}
				]),
				t
			);
		})();
		t.default = g;
		var E = (function(e) {
				function t() {
					var e;
					return (
						p(this, t),
						((e = h(this, v(t).apply(this, arguments))).state = { collapsed: !0 }),
						(e.toggle = function() {
							e.setState(function(e) {
								return { collapsed: !e.collapsed };
							});
						}),
						e
					);
				}
				return (
					b(t, n.PureComponent),
					f(t, [
						{
							key: 'render',
							value: function() {
								var e = this.props.items;
								return React.createElement(
									'div',
									{ style: { marginTop: 20, marginBottom: 20, padding: '0 10px' } },
									React.createElement(
										'h4',
										{ className: 'row clickable', onClick: this.toggle },
										React.createElement('i', {
											className: (0, l.default)(
												'icon caret',
												this.state.collapsed ? 'right' : 'down'
											)
										}),
										' Notas Revisadas',
										React.createElement(
											'span',
											{ className: 'toggle-action' },
											'[',
											this.state.collapsed ? 'Mostrar' : 'Ocultar',
											']'
										),
										React.createElement(
											'span',
											{ className: 'ui mini circular green label pull-right' },
											_.size(e)
										)
									),
									!this.state.collapsed &&
										React.createElement(
											'div',
											{ className: 'revision-list-closed' },
											_.map(e, function(e) {
												return React.createElement(
													'div',
													{ key: e.id, className: 'listitem revision-listitem' },
													React.createElement(R, { item: e, isEditable: !1 })
												);
											})
										)
								);
							}
						}
					]),
					t
				);
			})(),
			R = (function(e) {
				function t() {
					var e;
					return (
						p(this, t),
						((e = h(this, v(t).apply(this, arguments))).state = { isEditMode: !1, isThreadOpen: !1 }),
						(e.onClickEdit = function() {
							e.setState({ isEditMode: !0 });
						}),
						(e.onClickDelete = function(t) {
							t.preventDefault(), e.props.onClickDelete(e.props.item);
						}),
						(e.onClickNewComment = function() {
							e.props.isEditable && e.setState({ isThreadOpen: !0 });
						}),
						(e.onCancelNewComment = function() {
							e.setState({ isThreadOpen: !1 });
						}),
						(e.onChange = function(t) {
							e.props.onSave(e.props.item, t, 'Guardando cambios...').then(function() {
								e.setState({ isEditMode: !1 });
							});
						}),
						(e.onClickChangeStatus = function(t) {
							e.props.onSave(e.props.item, { op: t }, 'Marcando como ' + t + '...');
						}),
						(e.onAddComment = function(t) {
							var a = { comment: t.text };
							t.status && (a.op = t.status),
								e.props.onSave(e.props.item, a, 'Guardando comentario...').then(function() {
									e.setState({ isThreadOpen: !1 });
								});
						}),
						e
					);
				}
				return (
					b(t, n.PureComponent),
					f(t, [
						{
							key: 'render',
							value: function() {
								var e = this,
									t = this.props.item;
								return React.createElement(
									'div',
									null,
									this.props.isEditable &&
										React.createElement(o.MenuElementListActions, {
											actions: {
												delete: {
													label: 'Eliminar',
													callback: this.onClickDelete,
													permission: 'revision_delete'
												}
											}
										}),
									React.createElement(
										'div',
										{ className: 'row header-item' },
										React.createElement(
											'div',
											{ className: 'pull-left' },
											React.createElement('span', { className: 'title-h1' }, 'Nota #', t.name),
											React.createElement(r.AuthorIconLogDefaultWrapper, {
												model: t,
												size: 'small'
											})
										),
										React.createElement(i.StatusDivBlock, {
											wrapperClassName: 'pull-right text-mini',
											status: t.status || 'EN PROCESO',
											className: 'mini',
											hideLabel: !0
										})
									),
									React.createElement(
										'div',
										{ className: 'author-info' },
										React.createElement('i', {
											'aria-hidden': 'true',
											className: 'far fa-user-circle olive',
											style: { float: 'left' }
										}),
										React.createElement(
											'div',
											{ className: 'content' },
											React.createElement(
												'div',
												{ className: 'header' },
												t.Creator.User.name,
												React.createElement(
													'div',
													{ className: 'pull-right description' },
													Date.create(t.Creator.ts).format('{d} {Mon} {year} {h}:{mm} {tt}')
												)
											)
										)
									),
									this.props.isEditable && this.state.isEditMode
										? React.createElement(j, { item: t, onSubmit: this.onChange })
										: React.createElement(
												n.Fragment,
												null,
												React.createElement('p', {
													onClick: this.onClickNewComment,
													style: { lineHeight: '1em' },
													dangerouslySetInnerHTML: {
														__html: t.description.replace(/\n/g, '<br/>')
													}
												}),
												React.createElement(
													'div',
													{
														className: (0, l.default)('threadlist ui threaded comments', {
															empty: 0 == _.size(t.Comments)
														})
													},
													this.state.isThreadOpen &&
														React.createElement(
															'h5',
															{
																className: (0, l.default)('ui header', {
																	dividing: 0 == _.size(t.Comments)
																})
															},
															'Comentarios'
														),
													_.map(t.Comments, function(t) {
														return React.createElement(
															'div',
															{
																className: 'comment',
																key: t.id,
																onClick: e.onClickNewComment
															},
															React.createElement(
																'div',
																{ className: 'avatar' },
																React.createElement('i', {
																	className: (0, l.default)('far fa-user-circle', {
																		green: 'COMPLETADO' == t.status,
																		olive: 'REVISADO' == t.status
																	})
																})
															),
															React.createElement(
																'div',
																{ className: 'content' },
																React.createElement(
																	'div',
																	{ className: 'author' },
																	t.Creator.User.name
																),
																React.createElement(
																	'div',
																	{ className: 'metadata' },
																	Date.create(t.Creator.ts).format(
																		'{d} {Mon} {year}  {h}:{mm} {tt}'
																	)
																),
																React.createElement(
																	'div',
																	{ className: 'text' },
																	React.createElement('p', {
																		dangerouslySetInnerHTML: { __html: t.comentario }
																	})
																)
															)
														);
													})
												),
												this.state.isThreadOpen && this.props.isEditable
													? React.createElement(C, {
															parentItem: t,
															onSave: this.onAddComment,
															onCancel: this.onCancelNewComment
														})
													: this.props.isEditable &&
														React.createElement(
															'div',
															{ className: 'actions-wrapper' },
															React.createElement(
																'div',
																{ className: 'actions' },
																React.createElement(
																	'div',
																	{ className: 'group-actions' },
																	React.createElement(
																		'button',
																		{
																			className: 'ui button icon blue mini compact',
																			onClick: this.onClickNewComment
																		},
																		'Responder'
																	)
																),
																React.createElement(
																	'div',
																	{ className: 'group-actions right-actions' },
																	React.createElement(
																		'button',
																		{
																			className:
																				'ui button icon primary mini compact',
																			onClick: function() {
																				return e.onClickChangeStatus('COMPLETADO');
																			}
																		},
																		React.createElement('i', {
																			className: 'icon check'
																		}),
																		' Completar'
																	),
																	React.createElement(s.default, {
																		disabled: null != t.fecha_completado,
																		className: 'disable-text',
																		on: 'hover',
																		basic: !0,
																		content:
																			'Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.',
																		trigger: React.createElement(
																			'div',
																			{ className: 'button-wrapper' },
																			React.createElement(
																				'button',
																				{
																					className:
																						'ui button mini compact olive',
																					disabled: null == t.fecha_completado,
																					onClick: function() {
																						return null == t.fecha_completado
																							? void 0
																							: e.onClickChangeStatus(
																									'REVISADO'
																								);
																					}
																				},
																				React.createElement('i', {
																					className: 'icon check fitted'
																				}),
																				React.createElement('i', {
																					className: 'icon check'
																				}),
																				' Revisado'
																			)
																		)
																	})
																)
															)
														)
											)
								);
							}
						}
					]),
					t
				);
			})(),
			j = (function(e) {
				function t(e) {
					var a;
					return (
						p(this, t),
						((a = h(this, v(t).call(this, e))).onChange = function(e) {
							a.setState({ value: e.target.value });
						}),
						(a.onSubmit = function(e) {
							if ('' != _.str.trim(a.state.value)) {
								var t = { revision_text: _.str.trim(a.state.value) };
								e && (t.op = e), a.props.onSubmit(t);
							} else bootbox.alertError('La Nota de Revisión no puede estar vacía.');
						}),
						(a.state = { value: a.props.item.description }),
						a
					);
				}
				return (
					b(t, n.PureComponent),
					f(t, [
						{
							key: 'render',
							value: function() {
								var e = this;
								return React.createElement(
									n.Fragment,
									null,
									React.createElement(c.default, {
										minRows: 2,
										maxRows: 8,
										onChange: this.onChange,
										value: this.state.value,
										style: { width: '98%' },
										placeholder: 'Escriba aquí su Nota de Revisión'
									}),
									React.createElement(
										'div',
										{ style: { marginTop: 8, textAlign: 'right' } },
										React.createElement(
											'button',
											{
												className: 'ui button icon primary mini compact',
												onClick: function() {
													return e.onSubmit();
												}
											},
											'Guardar'
										),
										React.createElement(
											'button',
											{
												className: 'ui button icon primary mini compact',
												onClick: function() {
													return e.onSubmit('COMPLETADO');
												}
											},
											React.createElement('i', { className: 'icon check' }),
											' Completar'
										),
										React.createElement(s.default, {
											disabled: null != this.props.item.fecha_completado,
											className: 'disable-text',
											on: 'hover',
											basic: !0,
											content:
												'Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.',
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													'button',
													{
														className: 'ui button mini compact olive',
														disabled: null == this.props.item.fecha_completado,
														onClick: function() {
															return null == e.props.item.fecha_completado
																? void 0
																: e.onSubmit('REVISADO');
														}
													},
													React.createElement('i', { className: 'icon check fitted' }),
													React.createElement('i', { className: 'icon check' }),
													' Revisado'
												)
											)
										})
									)
								);
							}
						}
					]),
					t
				);
			})(),
			C = (function(e) {
				function t() {
					var e;
					return (
						p(this, t),
						((e = h(this, v(t).apply(this, arguments))).cancelTimeout = null),
						(e.state = { value: '' }),
						(e.onChange = function(t) {
							e.setState({ value: t.target.value });
						}),
						(e.onTextareaKeyDown = function(t) {
							27 == t.keyCode && (e.props.onCancel(), (e.cancelTimeout = null)),
								(!t.ctrlKey && !t.metaKey) || (13 != t.keyCode && 10 != t.keyCode) || e.onSubmit();
						}),
						(e.onSubmit = function(t) {
							('' != _.str.trim(e.state.value) || t) &&
								(null != e.cancelTimeout &&
									(window.clearTimeout(e.cancelTimeout), (e.cancelTimeout = null)),
								e.props.onSave({ text: _.str.trim(e.state.value), status: t }));
						}),
						(e.onBlur = function() {
							e.cancelTimeout = window.setTimeout(function() {
								e.props.onCancel();
							}, 500);
						}),
						e
					);
				}
				return (
					b(t, n.PureComponent),
					f(t, [
						{
							key: 'render',
							value: function() {
								var e = this;
								return React.createElement(
									'div',
									{ style: { marginBottom: 30 } },
									React.createElement(c.default, {
										minRows: 2,
										maxRows: 5,
										autoFocus: !0,
										value: this.state.value,
										onChange: this.onChange,
										onKeyDown: this.onTextareaKeyDown,
										placeholder: 'Escriba aquí su comentario',
										style: { width: '95%' },
										onBlur: function() {
											return e.onBlur();
										}
									}),
									React.createElement(
										'div',
										{ style: { textAlign: 'right', marginTop: 5 } },
										React.createElement(
											'button',
											{
												className: 'ui button icon blue mini compact pull-left',
												onClick: function() {
													return e.onSubmit();
												}
											},
											'Enviar'
										),
										React.createElement(
											'button',
											{
												//change button: className: 'ui button icon primary mini compact',
												className: 'ui button icon primary compact',
												onClick: function() {
													return e.onSubmit('COMPLETADO');
												}
											},
											React.createElement('i', { className: 'icon check' }),
											' Completar'
										),
										React.createElement(s.default, {
											disabled: null != this.props.parentItem.fecha_completado,
											className: 'disable-text',
											on: 'hover',
											basic: !0,
											content:
												'Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.',
											trigger: React.createElement(
												'div',
												{ className: 'button-wrapper' },
												React.createElement(
													'button',
													{
														className: 'ui button mini compact olive',
														disabled: null == this.props.parentItem.fecha_completado,
														onClick: function() {
															return null == e.props.parentItem.fecha_completado
																? void 0
																: e.onSubmit('REVISADO');
														}
													},
													React.createElement('i', { className: 'icon check fitted' }),
													React.createElement('i', { className: 'icon check' }),
													' Revisado'
												)
											)
										})
									)
								);
							}
						}
					]),
					t
				);
			})();
	},
	689: function(e, t, a) {
		'use strict';
		function n(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function o(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function r(e, t, a) {
			return t && o(e.prototype, t), a && o(e, a), e;
		}
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.RevisionHojaTrabajoModelManager = t.HallazgoHojaTrabajoModelManager = void 0);
		var i = (function() {
			function e() {
				n(this, e);
			}
			return (
				r(
					e,
					[
						{
							key: 'getJson',
							value: function(e) {
								var t = e.moduleParams,
									a = t.id_paso,
									n = t.id_visita;
								return new Promise(function(e) {
									$.getJSON(
										url_for2(
											'proyecto/:id_proyecto/paso/'
												.concat(a, '/visita/')
												.concat(n, '/hallazgo/json')
										)
									).done(function(t) {
										e(_.isEmpty(t.response) ? [] : t.response);
									});
								});
							}
						},
						{
							key: 'createItem',
							value: function(e, t) {
								var a = e.moduleParams,
									n = a.id_paso,
									o = a.id_visita,
									r = url_for2(
										'proyecto/:id_proyecto/paso/'.concat(n, '/visita/').concat(o, '/hallazgo')
									);
								return new Promise(function(e) {
									$.post(r, { data: t }).done(function(t) {
										e(t.response.record);
									});
								});
							}
						},
						{
							key: 'saveItem',
							value: function(e, t, a) {
								var n;
								n = _.isEqual(a, { status: 'COMPLETADO' })
									? 'proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id/c'
									: _.isEqual(a, { status: 'REVISADO' })
										? 'proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id/r'
										: 'proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id';
								var o = e.moduleParams,
									r = o.id_paso,
									i = o.id_visita;
								return new Promise(function(e) {
									$.post(url_for2(n, { id_paso: r, id_visita: i, id: t.id }), {
										data: a
									}).done(function(t) {
										e(t.response.record);
									});
								});
							}
						},
						{
							key: 'deleteItem',
							value: function(e, t) {
								var a = e.moduleParams,
									n = a.id_paso,
									o = a.id_visita;
								return new Promise(function(e) {
									$.ajax({
										url: url_for2(
											'proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id',
											{ id_paso: n, id_visita: o, id: t.id }
										),
										type: 'DELETE'
									}).done(function(t) {
										1 == t.status && e();
									});
								});
							}
						},
						{
							key: 'parseItems',
							value: function(e) {
								return e;
							}
						}
					],
					[
						{
							key: 'getInstance',
							value: function() {
								return e.instance || (e.instance = new this()), e.instance;
							}
						}
					]
				),
				e
			);
		})();
		t.HallazgoHojaTrabajoModelManager = i;
		var c = (function() {
			function e() {
				n(this, e);
			}
			return (
				r(
					e,
					[
						{
							key: 'getJson',
							value: function(e) {
								var t = this,
									a = e.moduleParams,
									n = a.id_paso,
									o = a.id_visita;
								return new Promise(function(e) {
									$.getJSON(
										url_for2(
											'proyecto/:id_proyecto/paso/'.concat(n, '/visita/').concat(o, '/revision')
										)
									).done(function(a) {
										e(_.isEmpty(a.response.revisiones) ? [] : t.parseItems(a.response.revisiones));
									});
								});
							}
						},
						{
							key: 'createItem',
							value: function(e, t) {
								var a = this,
									n = e.moduleParams,
									o = n.id_paso,
									r = n.id_visita,
									i = url_for2(
										'proyecto/:id_proyecto/paso/'.concat(o, '/visita/').concat(r, '/revision')
									);
								return new Promise(function(e) {
									$.post(i, t).done(function(t) {
										e(t.response.revision), a.updateVisita(r, t.response.paso_visita);
									});
								});
							}
						},
						{
							key: 'saveItem',
							value: function(e, t, a) {
								var n = this,
									o = e.moduleParams,
									r = o.id_visita,
									i = o.id_paso,
									c = url_for2(
										'proyecto/:id_proyecto/paso/'
											.concat(i, '/visita/')
											.concat(r, '/revision/')
											.concat(t.id)
									);
								return new Promise(function(e) {
									$.post(c, a).done(function(t) {
										e(t.response.revision), n.updateVisita(r, t.response.paso_visita);
									});
								});
							}
						},
						{
							key: 'deleteItem',
							value: function(e, t) {
								var a = this,
									n = e.moduleParams,
									o = n.id_paso,
									r = n.id_visita;
								return new Promise(function(e) {
									$.ajax({
										url: url_for2(
											'proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/revision/:item_id',
											{ id_paso: o, id_visita: r, item_id: t.id }
										),
										type: 'DELETE'
									}).done(function(t) {
										e(), a.updateVisita(r, t.response.paso_visita);
									});
								});
							}
						},
						{
							key: 'parseItems',
							value: function(e) {
								return e;
							}
						},
						{
							key: 'updateVisita',
							value: function(e, t) {
								var a = this.hojaTrabajoContext,
									n = a.hoja_trabajo,
									o = a.update,
									r = Object.assign({}, n);
								(r.visitas = _.mapValues(r.visitas, function(a) {
									return a.id_visita == e && (a = Object.assign({}, a, t)), a;
								})),
									o(r);
							}
						}
					],
					[
						{
							key: 'getInstance',
							value: function(t) {
								return (
									e.instance || ((e.instance = new this()), (e.instance.hojaTrabajoContext = t)),
									e.instance
								);
							}
						}
					]
				),
				e
			);
		})();
		t.RevisionHojaTrabajoModelManager = c;
	},
	690: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = f(a(691)),
			r = f(a(317)),
			i = f(a(166)),
			c = f(a(9)),
			l = a(323),
			s = f(a(213)),
			u = a(332),
			d = f(a(111)),
			p = a(168),
			m = f(a(692));
		function f(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function h(e) {
			return (h =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function v(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function b(e, t) {
			return !t || ('object' !== h(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function y(e) {
			return (y = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function g(e, t) {
			return (g =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		(accounting.settings.currency.decimal = ','),
			(accounting.settings.currency.thousand = '.'),
			(accounting.settings.currency.format = '%s %v'),
			(accounting.settings.currency.precision = 0);
		var E = function(e) {
				return React.createElement(
					'div',
					{ className: 'box-total '.concat(e.width ? e.width : 'ten', ' wide column') },
					React.createElement(
						'div',
						{ className: 'box-content' },
						React.createElement(l.GenericTooltip, {
							title: 'Ayuda | '.concat(e.name),
							iconColor: 'olive',
							text: e.tooltip
						}),
						React.createElement(
							'div',
							{ className: 'box-inner' },
							React.createElement('div', { className: 'title' }, e.name),
							React.createElement(
								'div',
								{ className: 'value' },
								accounting.formatMoney(e.calculateTotal(e.field), '$')
							)
						)
					)
				);
			},
			R = (function(e) {
				function t(e) {
					var a;
					return (
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
						((a = b(this, y(t).call(this, e))).onChangeObservaciones = function(e, t) {
							a.setState({ factor_justificacion: e }, function() {
								a.sendToServer({ field: 'factor_justificacion', value: e }, t);
							});
						}),
						(a.onChangeAttachments = function(e) {
							a.setState({ Attachments: e }), a.updateContext();
						}),
						(a.state = {
							factor: e.materialidad ? e.materialidad.factor : null,
							nivel: e.materialidad ? e.materialidad.nivel : null,
							montos: e.materialidad ? e.materialidad.montos : {},
							porc: e.materialidad ? e.materialidad.porc : null,
							porc_error: e.materialidad ? e.materialidad.porc_error : null,
							factor_justificacion: e.materialidad ? e.materialidad.factor_justificacion : '',
							Attachments: e.materialidad ? e.materialidad.Attachments : []
						}),
						a
					);
				}
				var a, d, f;
				return (
					(function(e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError('Super expression must either be null or a function');
						(e.prototype = Object.create(t && t.prototype, {
							constructor: { value: e, writable: !0, configurable: !0 }
						})),
							t && g(e, t);
					})(t, n.Component),
					(a = t),
					(f = [
						{
							key: 'getDerivedStateFromProps',
							value: function(e, t) {
								return e.materialidad.factor != t.factor
									? { factor: e.materialidad.factor }
									: e.materialidad.nivel != t.nivel ? { nivel: e.materialidad.nivel } : null;
							}
						}
					]),
					(d = [
						{
							key: 'getFactoresAsSelectChoices',
							value: function() {
								var e = u.MaterialidadEnums.factores.map(function(e, t) {
									return { key: t + 1, value: t + 1 + '', text: e };
								});
								return e.unshift({ key: -1, value: '', text: '- Seleccionar -' }), e;
							}
						},
						{
							key: 'getNivelesAsSelectChoices',
							value: function() {
								var e = u.MaterialidadEnums.niveles.map(function(e, t) {
									return { key: t + 1, value: t + 1 + '', text: e };
								});
								return e.unshift({ key: -1, value: '', text: '- Seleccionar -' }), e;
							}
						},
						{
							key: 'getPorcMG',
							value: function() {
								var e = this.state,
									t = e.factor,
									a = e.montos,
									n = u.MaterialidadUtils.getNivel(this.state.nivel),
									o = null;
								return (
									void 0 !== a && void 0 !== a[t] && void 0 !== a[t][n] && (o = a[t][n]),
									null == o &&
										(o = u.MaterialidadUtils.getDefaulPorcMG(this.state.factor, this.state.nivel)),
									o
								);
							}
						},
						{
							key: 'isFactorInvalid',
							value: function() {
								return !this.state.factor || void 0 === this.state.montos[this.state.factor];
							}
						},
						{
							key: 'sendToServer',
							value: function(e, t) {
								var a = this;
								this.props.isEditable &&
									(u.MaterialidadUtils.sendToServer(
										this.props.materialidad.Visita.id_visita,
										e,
										this.state,
										{},
										function(e) {
											if (e && e.response.visita) {
												var n = a.context,
													o = n.hoja_trabajo,
													r = n.update,
													i = a.props.materialidad.Visita;
												r(p.HojaTrabajoUpdateUtils.updateVisita(o, i, e.response.visita));
											}
											$.isFunction(t) && t();
										}
									),
									this.updateContext());
							}
						},
						{
							key: 'updateContext',
							value: function() {
								var e = this.context,
									t = e.hoja_trabajo,
									a = e.update,
									n = Object.assign({}, this.props.materialidad, this.state);
								a(
									p.HojaTrabajoUpdateUtils.updateVisita(t, this.props.materialidad.Visita, {
										materialidad: n
									})
								);
							}
						},
						{
							key: 'onSelectChoice',
							value: function(e, t) {
								var a = this,
									n = {};
								(n[e] = t),
									this.setState(n, function() {
										a.sendToServer({ field: e, value: t }),
											$.blockUI(create_blockUI_loading_message('Aplicando cambios'));
										var o = a.context,
											r = o.hoja_trabajo,
											i = o.update,
											c = Object.assign({}, a.props.materialidad, n),
											l = p.HojaTrabajoUpdateUtils.updateVisita(r, a.props.materialidad.Visita, {
												materialidad: c
											});
										i(l);
										var s = p.HojaTrabajoUtils.getAllVisitasAfter(r, a.props.materialidad.Visita),
											d = [];
										_.forEach(s, function(a) {
											if (a.id && '1' == a.id_status) {
												var o = new Promise(function(o, r) {
													var c = Object.assign({}, a.materialidad, n);
													u.MaterialidadUtils.sendToServer(
														a.id_visita,
														{ field: e, value: t },
														c,
														{ s: 1 },
														function(e) {
															e &&
																e.response.visita &&
																((e.response.visita.materialidad = c),
																(l = p.HojaTrabajoUpdateUtils.updateVisita(
																	l,
																	a,
																	e.response.visita
																)),
																i(l)),
																o(a.id);
														}
													);
												});
												d.push(o);
											}
										}),
											Promise.all(d).then(function() {
												$.unblockUI();
											});
									});
							}
						},
						{
							key: 'onChangeNumericField',
							value: function(e, a, n) {
								var o = this,
									r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
									i = {};
								r && '' == a.target.value && ('porc' == e ? (n = 75) : 'porc_error' == e && (n = 5)),
									i[e] != n && ((i[e] = n), t.changed.add(e)),
									this.setState(i, function() {
										r &&
											t.changed.has(e) &&
											(o.sendToServer({ field: e, value: n }), t.changed.delete(e));
									});
							}
						},
						{
							key: 'calculateTotal',
							value: function(e) {
								return u.MaterialidadUtils.calculateTotal(
									e,
									this.state,
									this.state.factor,
									this.state.nivel
								);
							}
						},
						{
							key: 'onChangeMonto',
							value: function(e, a, n) {
								var o,
									r = this,
									i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
								i &&
									'' == e.target.value &&
									(a = u.MaterialidadUtils.getDefaulPorcMG(this.state.factor, this.state.nivel)),
									this.setState(
										function(e) {
											var c = e.montos,
												l = e.factor;
											if ((void 0 === c[l] && (c[l] = { valor: 0 }), n)) {
												var s = e.nivel,
													d = u.MaterialidadUtils.getNivel(s);
												(o = 'monto'.concat(l, '_').concat(d)),
													c[l][d] != a && ((c[l][d] = a), t.changed.add(o));
											} else
												(o = 'monto'.concat(l)),
													c[l].valor != a && ((c[l].valor = a), t.changed.add(o)),
													i &&
														t.changed.has(o) &&
														(r.sendToServer({ field: o, value: a }), t.changed.delete(o));
											return { montos: c };
										},
										function() {
											i &&
												t.changed.has(o) &&
												(r.sendToServer({ field: o, value: a }), t.changed.delete(o));
										}
									);
							}
						},
						{
							key: 'render',
							value: function() {
								var e = this,
									t = null;
								this.isFactorInvalid()
									? (t =
											'Estos campos se encuentran deshabilitados debido a que es necesario que primero seleccione el factor para el cálculo de la Materialidad General')
									: (this.state.nivel && '' + this.state.nivel != '0') ||
										(t =
											'Estos campos se encuentran deshabilitados debido a que es necesario que seleccione el nivel de confianza');
								var a = this.calculateTotal.bind(this),
									n = React.createElement(
										o.default.Group,
										{ className: (0, c.default)('form-group-2', t ? 'ui-state-disabled' : null) },
										React.createElement(
											o.default.Field,
											{
												width: 5,
												className: 'ui column grid compact',
												error:
													!!this.state.factor &&
													!!this.state.montos[this.state.factor] &&
													!this.state.montos[this.state.factor].valor
											},
											React.createElement(
												'div',
												{ className: 'box-input six wide column' },
												React.createElement(
													'div',
													{ className: 'box-input-inner' },
													React.createElement(
														'label',
														{
															htmlFor: 'materialidad_porc_general',
															title: '% Materialidad General',
															className: 'noqtip'
														},
														'%MG'
													),
													React.createElement(s.default, {
														value: this.getPorcMG(),
														onChange: function(t, a) {
															return e.onChangeMonto(t, a, !0, !1);
														},
														onBlur: function(t, a) {
															return e.onChangeMonto(t, a, !0, !0);
														},
														disabled: !this.state.factor,
														minimumValue: '0',
														maximumValue: '100',
														isEditable: this.props.isEditable,
														className: 'percent eight wide field',
														id: 'materialidad_porc_general'
													})
												)
											),
											React.createElement(E, {
												field: 'porc_general',
												name: 'Materialidad General',
												tooltip:
													'Monto de materialidad que resulta de la aplicación de los porcentajes minimo, moderado o  máximo de los factores.',
												calculateTotal: a
											})
										),
										React.createElement(
											o.default.Field,
											{
												width: 6,
												className: 'ui column grid compact centered',
												error: !this.state.porc
											},
											React.createElement(
												'div',
												{ className: 'box-input five wide column' },
												React.createElement(
													'div',
													{ className: 'box-input-inner' },
													React.createElement(
														'label',
														{
															htmlFor: 'materialidad_porc',
															title: '% Materialidad de Planeación',
															className: 'noqtip'
														},
														'%MP'
													),
													React.createElement(s.default, {
														value: this.state.porc,
														onChange: function(t, a) {
															return e.onChangeNumericField('porc', t, a, !1);
														},
														onBlur: function(t, a) {
															return e.onChangeNumericField('porc', t, a, !0);
														},
														disabled: !this.state.factor,
														minimumValue: '0',
														maximumValue: '100',
														isEditable: this.props.isEditable,
														className: 'percent nine wide field',
														id: 'materialidad_porc'
													})
												)
											),
											React.createElement(E, {
												field: 'porc',
												name: 'Materialidad de Planeación',
												tooltip:
													'Las partidas de los estados financieros que superen la cifra de materialidad de planeación deben ser auditadas\n            al ser consideradas las partidas de mayor riesgo de errores significativos.\n            Determinar una adecuada materialidad de planeación es importante para evitar sub auditar o sobre auditar.',
												calculateTotal: a
											})
										),
										React.createElement(
											o.default.Field,
											{ width: 5, className: 'ui column grid compact', error: !this.state.porc },
											React.createElement(
												'div',
												{ className: 'box-input six wide column right floated' },
												React.createElement(
													'div',
													{ className: 'box-input-inner' },
													React.createElement(
														'label',
														{
															htmlFor: 'materialidad_porc_error',
															title: '% Error Tolerable',
															className: 'noqtip'
														},
														'%ET'
													),
													React.createElement(s.default, {
														value: this.state.porc_error,
														onChange: function(t, a) {
															return e.onChangeNumericField('porc_error', t, a);
														},
														onBlur: function(t, a) {
															return e.onChangeNumericField('porc_error', t, a, !0);
														},
														disabled: !this.state.factor,
														minimumValue: '0',
														maximumValue: '100',
														isEditable: this.props.isEditable,
														className: 'percent eight wide field',
														id: 'materialidad_porc_error'
													})
												)
											),
											React.createElement(E, {
												field: 'porc_error',
												name: 'Error Tolerable',
												tooltip:
													'Error mínimo considero significativo para cualquier partida de los estados financieros.\n            Si las diferencias de auditoria superan el Error Tolerable se debe proponer un ajuste contable.',
												calculateTotal: a
											})
										)
									),
									u = '';
								return (
									this.state.montos[this.state.factor] &&
										null != this.state.montos[this.state.factor].valor &&
										(u = +this.state.montos[this.state.factor].valor + ''),
									React.createElement(
										o.default,
										{ id: 'materialidadform' },
										React.createElement(
											o.default.Group,
											null,
											React.createElement(
												o.default.Field,
												{ width: 5, error: !this.state.factor, className: 'fieldl' },
												React.createElement(
													'label',
													{ htmlFor: 'materialidad_factor' },
													'Factor para cálculo MG ',
													React.createElement(
														'span',
														{ className: 'required_field_mark' },
														'*'
													),
													React.createElement(l.GenericTooltip, {
														title: 'Factor seleccionado',
														iconColor: 'olive',
														wide: !0,
														text: React.createElement(
															'div',
															{ className: 'content' },
															'Seleccione el factor financiero que a juicio profesional considere apropiado: ',
															React.createElement('br', null),
															'a.) El cliente es una entidad orientada a utilidades, se aconseja el factor de resultado del ejercicio, ',
															React.createElement('br', null),
															'b.) El cliente es una entidad sin animo de lucro, se aconseja el factor de ingresos brutos, gastos operacionales o activos netos, ',
															React.createElement('br', null),
															'c.) El cliente es una entidad basada en activos, se aconseja el factor de activos netos, ',
															React.createElement('br', null),
															'd.) Los resultados del ejercicio fluctuan significativamente de un año a otro, se aconseja otros factores como el promedio de los resultados de los ultimos 3 años, ',
															React.createElement('br', null),
															'e) Cualquier otro factor considerado por el auditor.'
														)
													})
												),
												React.createElement(r.default, {
													id: 'materialiad_factor',
													options: this.getFactoresAsSelectChoices(),
													value: this.state.factor,
													disabled: !this.props.isEditable,
													selectOnNavigation: !1,
													onChange: function(t, a) {
														var n = a.value;
														return e.onSelectChoice('factor', n);
													}
												})
											),
											React.createElement(
												o.default.Field,
												{
													width: 6,
													className: this.isFactorInvalid() ? 'ui-state-disabled' : '',
													error: !!this.state.factor && !u
												},
												React.createElement(
													'label',
													{ htmlFor: 'materialidad_monto' },
													'Monto del Factor ',
													React.createElement(
														'span',
														{ className: 'required_field_mark' },
														'*'
													)
												),
												this.isFactorInvalid()
													? React.createElement(i.default, {
															trigger: React.createElement(
																'div',
																{ className: 'input-wrapper' },
																React.createElement('input', {
																	disabled: !0,
																	className: 'ui input'
																})
															),
															header: 'Campo deshabilitado',
															content:
																'Este campo se encuentra deshabilitado debido a que es necesario que primero seleccione el factor para el cálculo de la Materialidad General',
															className: 'disable-text',
															on: 'hover',
															wide: !0,
															position: 'top center'
														})
													: React.createElement(s.default, {
															value: u,
															onChange: function(t, a) {
																return e.onChangeMonto(t, a, !1, !1);
															},
															onBlur: function(t, a) {
																return e.onChangeMonto(t, a, !1, !0);
															},
															disabled: !this.state.factor,
															isEditable: this.props.isEditable,
															className: 'currency',
															id: 'materialiad_monto'
														})
											),
											React.createElement(
												o.default.Field,
												{ width: 5, error: !this.state.nivel, className: 'fieldr' },
												React.createElement(
													'label',
													{ htmlFor: 'materialidad_nivel' },
													'Nivel de Confianza ',
													React.createElement(
														'span',
														{ className: 'required_field_mark' },
														'*'
													),
													React.createElement(l.GenericTooltip, {
														title: 'Nivel de confianza',
														iconColor: 'olive',
														text: React.createElement(
															'div',
															null,
															'Elija el nivel que considere apropiado:',
															React.createElement('br', null),
															React.createElement(
																'ul',
																{
																	style: { marginLeft: 4, lineHeight: '1em' },
																	className: 'unstyled'
																},
																React.createElement(
																	'li',
																	{ style: { marginBottom: 3, marginTop: 4 } },
																	'a.) ',
																	React.createElement('strong', null, 'Nivel bajo:'),
																	' para clientes de primer año o auditorias recurrentes con ajustes frecuentes de auditoria,'
																),
																React.createElement(
																	'li',
																	{ style: { marginBottom: 3, marginTop: 4 } },
																	'b.) ',
																	React.createElement(
																		'strong',
																		null,
																		'Nivel moderado:'
																	),
																	' para auditorias recurrentes con pocos ajustes de auditoria,',
																	' '
																),
																React.createElement(
																	'li',
																	{ style: { marginBottom: 3, marginTop: 4 } },
																	'c.) ',
																	React.createElement('strong', null, 'Nivel alto:'),
																	' para auditorias recurrentes sin ajustes de auditoria.'
																)
															)
														)
													})
												),
												React.createElement(r.default, {
													id: 'materialidad_nivel',
													options: this.getNivelesAsSelectChoices(),
													value: this.state.nivel,
													disabled: !this.props.isEditable,
													selectOnNavigation: !1,
													onChange: function(t, a) {
														var n = a.value;
														return e.onSelectChoice('nivel', n);
													}
												})
											)
										),
										t
											? React.createElement(i.default, {
													trigger: n,
													content: t,
													header: 'Campos deshabilitados',
													className: 'disable-text',
													on: 'hover',
													wide: !0,
													position: 'bottom center'
												})
											: n,
										React.createElement(
											o.default.Group,
											{ className: this.state.factor_justificacion ? '' : 'error' },
											React.createElement(
												'div',
												{
													className: 'ui raised segment',
													id: 'segment-materialidad-observaciones'
												},
												React.createElement(
													o.default.Field,
													{ width: 16, className: 'ui column hoverable-actions' },
													React.createElement(
														'label',
														null,
														'Documente la Razón de la Selección del Factor y Nivel de Confianza',
														' ',
														React.createElement(
															'span',
															{ className: 'required_field_mark' },
															'*'
														)
													),
													React.createElement(m.default, {
														data: this.state.factor_justificacion,
														attachments: this.state.Attachments,
														isEditable: this.props.isEditable,
														onChangeData: this.onChangeObservaciones,
														onChangeAttachments: this.onChangeAttachments
													})
												)
											)
										)
									)
								);
							}
						}
					]) && v(a.prototype, d),
					f && v(a, f),
					t
				);
			})();
		(t.default = R), (R.contextType = d.default), (R.changed = new Set());
	},
	692: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = l(a(165)),
			r = a(308),
			i = l(a(163)),
			c = l(a(167));
		function l(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function s(e) {
			return (s =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function u(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function d(e, t) {
			return !t || ('object' !== s(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function p(e) {
			return (p = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function m(e, t) {
			return (m =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var f = (function(e) {
			function t() {
				var e;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((e = d(this, p(t).apply(this, arguments))).state = { isLoadingAttachments: !1 }),
					(e.onUpdateAttachment = function() {
						e.fetchAttachments();
					}),
					(e.onDeleteAttachment = function(t, a) {
						e.setState({ isLoadingAttachments: !0 });
						var n = public_path('uploads/proyecto_adjunto/'.concat(t.filepath), !0)
								.replace(/\./g, '.')
								.replace(/\\/g, '/'),
							o = new RegExp('<a .*href="' + n + '"(.+?)/a>s*(<br/?>)?', 'g'),
							r = e.props.data.replace(o, '');
						$.isFunction(a) && a(),
							e.props.onChangeData(r, function() {
								return e.fetchAttachments();
							});
					}),
					(e.onChangeData = function(t, a, n, o) {
						e.props.onChangeData(t.getData(), function() {
							$.isFunction(o) && o(), e.fetchAttachments();
						});
					}),
					e
				);
			}
			var a, l, s;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && m(e, t);
				})(t, n.Component),
				(a = t),
				(l = [
					{
						key: 'fetchAttachments',
						value: function() {
							var e = this,
								t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t && this.setState({ isLoadingAttachments: !0 });
							var a = url_for('proyecto/'.concat(app.vars.idproyecto, '/hoja-trabajo/attachments'));
							$.ajax(a, {
								type: 'GET',
								data: { model: 'materialidad__obs', model_id: app.vars.current_idvisita },
								dataType: 'json'
							}).done(function(t) {
								e.props.onChangeAttachments(t.response.Attachments),
									e.setState({ isLoadingAttachments: !1 });
							});
						}
					},
					{
						key: 'render',
						value: function() {
							var e = {
									uploadUrl: url_for(
										'proyecto/' +
											app.vars.idproyecto +
											'/master_data/paso/' +
											app.vars.idpaso +
											'/upload?id_visita=' +
											app.vars.current_idvisita +
											'&model=materialidad__obs&model_id=' +
											app.vars.current_idvisita
									),
									imageUploadUrl: url_for(
										'proyecto/' +
											app.vars.idproyecto +
											'/master_data/paso/' +
											app.vars.idpaso +
											'/upload?id_visita=' +
											app.vars.current_idvisita +
											'&model=materialidad__obs&model_id=' +
											app.vars.current_idvisita
									),
									filebrowserUploadUrl: url_for(
										'proyecto/' +
											app.vars.idproyecto +
											'/master_data/paso/' +
											app.vars.idpaso +
											'/upload?id_visita=' +
											app.vars.current_idvisita +
											'&n=attachment&model=materialidad__obs&model_id=' +
											app.vars.current_idvisita
									)
								},
								t = React.createElement(
									'div',
									{ style: { position: 'relative' } },
									React.createElement(
										i.default,
										{ inverted: !0, active: this.state.isLoadingAttachments },
										React.createElement(c.default, { inverted: !0 })
									),
									React.createElement(r.AttachmentListPanel, {
										attachments: this.props.attachments,
										onUpdateItem: this.onUpdateAttachment,
										onDeleteItem: this.onDeleteAttachment
									})
								);
							return React.createElement(o.default, {
								className: 'observaciones-text-editor',
								ckeditorOptions: e,
								data: this.props.data,
								required: !0,
								label: ' ',
								labelTitle: 'Documente la Razón de la Selección del Factor y Nivel de Confianza',
								autosave: !0,
								onSave: this.onChangeData,
								editable: this.props.isEditable,
								footer: t,
								openOnClickPreview: !0
							});
						}
					}
				]) && u(a.prototype, l),
				s && u(a, s),
				t
			);
		})();
		t.default = f;
	},
	693: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
		var n = a(1),
			o = d(a(9)),
			r = d(a(76)),
			i = d(a(75)),
			c = a(332),
			l = d(a(111)),
			s = a(168),
			u = d(a(213));
		function d(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function p(e) {
			return (p =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function m(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function f(e, t) {
			return !t || ('object' !== p(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function h(e) {
			return (h = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function v(e, t) {
			return (v =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var b = (function(e) {
			function t(e) {
				var a;
				return (
					(function(e, t) {
						if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
					})(this, t),
					((a = f(this, h(t).call(this, e))).state = { montos: e.materialidad ? e.materialidad.montos : {} }),
					a
				);
			}
			var a, l, d;
			return (
				(function(e, t) {
					if ('function' != typeof t && null !== t)
						throw new TypeError('Super expression must either be null or a function');
					(e.prototype = Object.create(t && t.prototype, {
						constructor: { value: e, writable: !0, configurable: !0 }
					})),
						t && v(e, t);
				})(t, n.Component),
				(a = t),
				(l = [
					{
						key: 'onChangeMonto',
						value: function(e, a, n, o, r) {
							var i,
								l = this;
							r && '' == e.target.value && (a = c.MaterialidadUtils.getDefaulPorcMG(n, o)),
								this.setState(
									function(e) {
										var r = e.montos;
										void 0 === r[n] && (r[n] = { valor: 0 });
										var l = c.MaterialidadUtils.getNivel(o);
										return (
											(i = 'monto'.concat(n, '_').concat(l)),
											r[n][l] != a && ((r[n][l] = a), t.changed.add(i)),
											(r[n][l] = a),
											{ montos: r }
										);
									},
									function() {
										r &&
											t.changed.has(i) &&
											(l.sendToServer({ field: i, value: a }), t.changed.delete(i));
									}
								);
						}
					},
					{
						key: 'sendToServer',
						value: function(e) {
							var t = this,
								a = Object.assign({}, this.props.materialidad, { montos: this.state.montos });
							c.MaterialidadUtils.sendToServer(
								this.props.materialidad.Visita.id_visita,
								e,
								a,
								{},
								function(e) {
									if (e && e.response.visita) {
										var a = t.context,
											n = a.hoja_trabajo,
											o = a.update,
											r = t.props.materialidad.Visita;
										o(s.HojaTrabajoUpdateUtils.updateVisita(n, r, e.response.visita));
									}
								}
							);
							var n = this.context,
								o = n.hoja_trabajo;
							(0, n.update)(
								s.HojaTrabajoUpdateUtils.updateVisita(o, this.props.materialidad.Visita, {
									materialidad: a
								})
							);
						}
					},
					{
						key: 'getMonto',
						value: function(e, t) {
							var a = this.state.montos[e][c.MaterialidadUtils.getNivel(t)];
							return null == a && (a = c.MaterialidadUtils.getDefaulPorcMG(e, t)), a;
						}
					},
					{
						key: 'render',
						value: function() {
							var e = this;
							return React.createElement(
								r.default,
								{
									closeIcon: !0,
									trigger: React.createElement(i.default, {
										color: 'orange',
										floated: 'left',
										compact: !0,
										icon: 'table',
										content: 'Tabla de porcentajes'
									}),
									className: 'modal-ab'
								},
								React.createElement(r.default.Header, {
									content: 'Porcentajes y Montos de Materialidades'
								}),
								React.createElement(
									r.default.Content,
									null,
									React.createElement(
										'table',
										{
											className: 'table table-striped table-condensed',
											id: 'materialidad-percent-table'
										},
										React.createElement(
											'thead',
											null,
											React.createElement(
												'tr',
												{ className: 'th1' },
												React.createElement('th', null, ' '),
												React.createElement(
													'th',
													{ colSpan: 3 },
													'Porcentajes de Materialidades'
												),
												React.createElement('th', { colSpan: 3 }, 'Montos de Materialidades')
											),
											React.createElement(
												'tr',
												{ className: 'th2' },
												React.createElement('th', null, 'Factor'),
												React.createElement('th', null, 'Máx %'),
												React.createElement('th', null, 'Moderado %'),
												React.createElement('th', null, 'Mín %'),
												React.createElement('th', null, 'Máx'),
												React.createElement('th', null, 'Moderado'),
												React.createElement('th', null, 'Mín')
											)
										),
										React.createElement(
											'tbody',
											null,
											c.MaterialidadEnums.factores.map(function(t, a) {
												return React.createElement(
													'tr',
													{
														key: 'tr-factor-'.concat(a),
														className:
															a + 1 == e.props.materialidad.factor ? 'selected' : ''
													},
													React.createElement('th', { className: 'td-factor' }, t),
													c.MaterialidadEnums.niveles.map(function(t, n) {
														return React.createElement(
															'td',
															{
																key: 'td-'.concat(a, '-').concat(n, '-1'),
																className: (0, o.default)([
																	'td-nivel',
																	n + 1 == e.props.materialidad.nivel
																		? 'selected'
																		: ''
																])
															},
															React.createElement(u.default, {
																value: e.getMonto(a + 1, n + 1),
																onChange: function(t, o) {
																	return e.onChangeMonto(t, o, a + 1, n + 1, !1);
																},
																onBlur: function(t, o) {
																	return e.onChangeMonto(t, o, a + 1, n + 1, !0);
																},
																minimumValue: '0',
																maximumValue: '100',
																className: 'percent input-mini',
																isEditable: e.props.isEditable
															})
														);
													}),
													c.MaterialidadEnums.niveles.map(function(t, n) {
														return React.createElement(
															'td',
															{
																key: 'td-'.concat(a, '-').concat(n, '-2'),
																className: (0, o.default)([
																	'td-total col-numeric',
																	n + 1 == e.props.materialidad.nivel
																		? 'selected'
																		: ''
																])
															},
															accounting.formatMoney(
																c.MaterialidadUtils.calculateTotal(
																	'porc_general',
																	e.state,
																	a + 1,
																	n + 1
																)
															)
														);
													})
												);
											})
										)
									)
								)
							);
						}
					}
				]) && m(a.prototype, l),
				d && m(a, d),
				t
			);
		})();
		(t.default = b), (b.contextType = l.default), (b.changed = new Set());
	},
	89: function(e, t, a) {
		'use strict';
		Object.defineProperty(t, '__esModule', { value: !0 }),
			(t.MenuElementListActions = t.MenuElementListPanel = t.BaseMenuElement = t.BaseMenuItem = void 0);
		var n = a(1),
			o = l(a(318)),
			r = l(a(9)),
			i = a(654),
			c = a(655);
		function l(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function s(e) {
			return (s =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function(e) {
							return typeof e;
						}
					: function(e) {
							return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
								? 'symbol'
								: typeof e;
						})(e);
		}
		function u(e, t) {
			if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
		}
		function d(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n);
			}
		}
		function p(e, t, a) {
			return t && d(e.prototype, t), a && d(e, a), e;
		}
		function m(e, t) {
			return !t || ('object' !== s(t) && 'function' != typeof t)
				? (function(e) {
						if (void 0 === e)
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e;
					})(e)
				: t;
		}
		function f(e) {
			return (f = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function(e) {
						return e.__proto__ || Object.getPrototypeOf(e);
					})(e);
		}
		function h(e, t) {
			if ('function' != typeof t && null !== t)
				throw new TypeError('Super expression must either be null or a function');
			(e.prototype = Object.create(t && t.prototype, {
				constructor: { value: e, writable: !0, configurable: !0 }
			})),
				t && v(e, t);
		}
		function v(e, t) {
			return (v =
				Object.setPrototypeOf ||
				function(e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		var b = (function(e) {
			function t() {
				return u(this, t), m(this, f(t).apply(this, arguments));
			}
			return (
				h(t, n.PureComponent),
				p(t, [
					{
						key: 'render',
						value: function() {
							var e = public_path('images/sidebar_right/');
							return React.createElement(
								'a',
								{
									className: (0, r.default)('item badged', !this.props.open || 'active'),
									title: this.props.title,
									onClick: this.props.onClick
								},
								//change icon to tag img: React.createElement('img', {
								React.createElement('i', {
									//change iconos
									//src: ''.concat(e).concat(this.props.image, '.svg'),
									//className: 'ui large image'
									className: "icon-svg "+this.props.image+""
								}),
								' ',
								' ',
								React.createElement(
									'div',
									{
										className: (0, r.default)(
											'ui mini circular floating label right',
											0 == this.props.counter ? 'green' : 'red'
										)
									},
									this.props.counter
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.BaseMenuItem = b;
		var y = (function(e) {
			function t() {
				var e;
				return (
					u(this, t),
					((e = m(this, f(t).apply(this, arguments))).onToggle = function() {
						e.props.onToggle(e.props.open ? null : e.props.name);
					}),
					(e.onClose = function(t) {
						t.preventDefault(), e.props.onToggle(null);
					}),
					e
				);
			}
			return (
				h(t, n.PureComponent),
				p(t, [
					{
						key: 'render',
						value: function() {
							return React.createElement(
								n.Fragment,
								null,
								React.createElement(
									c.DefaultErrorHandler,
									null,
									React.createElement(b, {
										counter: this.props.counter,
										open: this.props.open,
										title: this.props.title,
										image: this.props.icon,
										onClick: this.onToggle
									}),
									this.props.open &&
										React.createElement(
											o.default.Group,
											{ animation: 'slide right', duration: 1500 },
											React.createElement(
												'div',
												{
													className: 'sidebar-fixed-content ui vertical right fixed menu menu-'.concat(
														this.props.name
													),
													style: { right: 45 }
												},
												React.createElement(i.SidebarPanelHeader, {
													title: this.props.title,
													onClose: this.onClose,
													onMount: this.props.onMountPanel
												}),
												this.props.children
											)
										)
								)
							);
						}
					}
				]),
				t
			);
		})();
		t.BaseMenuElement = y;
		var g = (function(e) {
			function t() {
				var e;
				return (
					u(this, t),
					((e = m(this, f(t).apply(this, arguments))).listRef = (0, n.createRef)()),
					(e.listHeight = null),
					e
				);
			}
			return (
				h(t, n.PureComponent),
				p(t, [
					{
						key: 'componentDidMount',
						value: function() {
							this.listRef.current && this.calculateHeight();
						}
					},
					{
						key: 'componentDidUpdate',
						value: function() {
							this.listRef.current && !this.listHeight && this.calculateHeight();
						}
					},
					{
						key: 'calculateHeight',
						value: function() {
							var e = $(this.listRef.current);
							(this.listHeight = window.innerHeight - e.position().top - 30), e.height(this.listHeight);
						}
					},
					{
						key: 'render',
						value: function() {
							return React.createElement(
								'div',
								{ className: 'main-list '.concat(this.props.className), ref: this.listRef },
								this.props.children
							);
						}
					}
				]),
				t
			);
		})();
		t.MenuElementListPanel = g;
		t.MenuElementListActions = function(e) {
			return React.createElement(
				'div',
				{ className: 'pull-right sf_admin_td_actions' },
				React.createElement(
					'div',
					{ className: 'btn-group dropdown-modern' },
					React.createElement(
						'a',
						{ className: 'btn btn-mini dropdown-toggle', 'data-toggle': 'dropdown', href: '#' },
						React.createElement('span', { className: 'icon-tc-ellipsis-v' })
					),
					React.createElement(
						'ul',
						{ className: 'dropdown-menu pull-right' },
						_.map(e.actions, function(e, t) {
							return (
								user_has_role_permission(e.permission) &&
								React.createElement(
									'li',
									{ key: t },
									React.createElement('a', { href: '#', onClick: e.callback }, e.label)
								)
							);
						})
					)
				)
			);
		};
	}
});
//# sourceMappingURL=http://auditbrain.local/webapps/dist/proyecto__materialidad.js.map
