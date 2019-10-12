app.vars.user = {
  id: '42',
  name: 'Usuario Demostracion',
  sigla: 'UD',
  email: 'usuariodemostracion@yopmail.com',
  is_admin: true,
  role: { name: 'Gerente', type: 'PM' }
}

function user_has_role(roles) {
  if (!$.isArray(roles)) {
    return user_has_role([ roles ])
  }

  return _.includes(roles, app.vars.user.role.type)
}

function user_has_role_permission(permissions) {
  if (!$.isArray(permissions)) {
    return user_has_role_permission([ permissions ])
  }

  var roles_permissions = {
    close: [ 'PM' ],
    cancel: [ 'PM' ],
    diagnostico: [ 'PM', 'SR' ],
    equipo_asignar: [ 'PM', 'SR' ],
    equipo_add: [ 'PM', 'SR' ],
    equipo_edit: [ 'PM', 'SR' ],
    equipo_delete: [ 'PM', 'SR' ],
    fase_create: [ 'PM', 'SR' ],
    fase_edit: [ 'PM', 'SR' ],
    fase_delete: [ 'PM', 'SR' ],
    subfase_create: [ 'PM', 'SR', 'JR' ],
    subfase_edit: [ 'PM', 'SR', 'JR' ],
    subfase_delete: [ 'PM', 'SR' ],
    paso_edit: [ 'PM', 'SR', 'JR' ],
    paso_delete: [ 'PM', 'SR' ],
    paso_objetivo_edit: [ 'PM', 'SR', 'JR' ],
    visita_create: [ 'PM', 'SR' ],
    visita_edit: [ 'PM', 'SR' ],
    visita_delete: [ 'PM', 'SR' ],
    visita_unlink: [ 'PM', 'SR' ],
    paso_asignar_usuario: [ 'PM', 'SR' ],
    paso_asociar_visita: [ 'PM', 'SR', 'JR' ],
    paso_completado: [ 'PM', 'SR', 'JR' ],
    paso_revisado: [ 'PM', 'SR' ],
    instruccion_create: [ 'PM', 'SR' ],
    instruccion_edit: [ 'PM', 'SR' ],
    instruccion_delete: [ 'PM', 'SR' ],
    hoja_trabajo_edit: [ 'PM', 'SR', 'JR' ],
    hoja_trabajo_export: [ 'PM', 'SR', 'JR', 'RO' ],
    adjunto_revisado: [ 'PM', 'SR' ],
    ajustes_edit: [ 'PM', 'SR', 'JR' ],
    ajustes_reporte: [ 'PM', 'SR', 'JR' ],
    revision: [ 'PM', 'SR', 'JR', 'RO' ],
    revision_revisado: [ 'PM', 'SR' ],
    revision_edit: [ 'PM', 'SR', 'JR' ],
    revision_delete: [ 'PM', 'SR' ],
    hallazgo_create: [ 'PM', 'SR', 'JR' ],
    hallazgo_delete: [ 'PM', 'SR' ],
    hallazgo_revisado: [ 'PM', 'SR' ],
    hallazgo_reporte: [ 'PM', 'SR', 'JR' ],
    reporte_financiero: [ 'PM', 'SR' ],
    cifras_edit: [ 'PM', 'SR', 'JR' ],
    cifras_revision: [ 'PM', 'SR', 'JR', 'RO' ],
    cifras_revision_revisado: [ 'PM', 'SR' ],
    cifras_settings: [ 'PM', 'SR' ],
    materialidad_edit: [ 'PM', 'SR', 'JR' ],
    riesgos_edit: [ 'PM', 'SR', 'JR' ],
    riesgos_delete: [ 'PM', 'SR', 'JR' ],
    riesgos_revision: [ 'PM', 'SR', 'JR', 'RO' ],
    riesgos_revision_edit: [ 'PM', 'SR', 'JR' ],
    riesgo_revision_revisado: [ 'PM', 'SR' ],
    riesgos_settings: [ 'PM', 'SR' ],
    riesgos_hallazgo_edit: [ 'PM', 'SR', 'JR' ],
    riesgo_proceso_create: [ 'PM', 'SR', 'JR' ],
    riesgo_proceso_edit: [ 'PM', 'SR', 'JR' ],
    riesgo_proceso_delete: [ 'PM', 'SR', 'JR' ]
  }

  var roles = []
  _.forEach(permissions, function(permission) {
    if (typeof roles_permissions[permission] == 'undefined') {
      return false
    }

    roles = _.union(roles, roles_permissions[permission])
  })

  if (roles.length == 0) {
    return true
  }

  return user_has_role(roles)
}

function url_for(e) {
  return 'http://auditbrain.local/dev_cliente.php/' + e
}

function es_proyecto_editable (){
  return true;
} 

$(function() {
  bootbox.warningConfirm = function(text, c, l, cb) {
    var message
    message =
      "<div class='row-fluid'><div class='span3 alert-warning-icon'><img src='" +
      url_for('') +
      `../images/dialog-warning128x128.png' alt='warning' /></div><div class='span9 alert-warning-message'>${text}</div></div>`
    return bootbox.dialog(
      message,
      [
        {
          label: c,
          icon: null,
          class: 'btn',
          callback: function() {
            return cb(false)
          }
        },
        {
          label: l,
          icon: null,
          class: 'btn-danger',
          callback: function() {
            return cb(true)
          }
        }
      ],
      {
        onEscape: function() {
          return cb(false)
        }
      }
    )
  }

  jQuery.blockUI.defaults.message = '<div class="ajax-loader-snake-32 _a-center" style="padding: 5px"></div>'
  jQuery.blockUI.defaults.overlayCSS.backgroundColor = '#fff'
  jQuery.blockUI.defaults.overlayCSS.opacity = 0.4
  jQuery.blockUI.defaults.baseZ = 1055
})
