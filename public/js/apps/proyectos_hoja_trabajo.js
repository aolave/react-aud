(function() {
    'use strict';

    var app = angular.module('WorkSheet', [])

    app.value('HOJA_TRABAJO', hojaTrabajo);
    app.controller('WorkSheetController', WorkSheetController);

    app.directive('floatingEditor', function() {
        return {
            'restrict': 'A',
            'link': function(scope, elem, attrs) {
                var wysiwygeditor = $(elem).wysiwyg({
                    'position': 'selection',
                    'buttons': {
                        'bold': { 'title': 'Negrilla (Ctrl+B)', 'hotkey': 'b', 'image': '\uf032' },
                        'italic': { 'title': 'Cursiva (Ctrl+I)', 'hotkey': 'i', 'image': '\uf033' },
                        'underline': { 'title': 'Subrayado (Ctrl+U)', 'hotkey': 'u', 'image': '\uf0cd' },
                        'forecolor': { 'title': 'Color de texto', 'image': '\uf043' },
                        'alignleft': { 'title': 'Alineado a la izquierda', 'image': '\uf036' },
                        'aligncenter': { 'title': 'Centrado', 'image': '\uf037' },
                        'alignright': { 'title': 'Alineado a la derecha', 'image': '\uf038' },
                        'alignjustify': { 'title': 'Justificado', 'image': '\uf039' },
                        'indent': { 'title': 'Aumentar indentación', 'image': '\uf03c' },
                        'outdent': { 'title': 'Disminuir indentación', 'image': '\uf03b' },
                        'orderedList': { 'title': 'Numeración', 'image': '\uf0cb' },
                        'unorderedList': { 'title': 'Viñeta', 'image': '\uf0ca' },
                    }
                });
            }
        }
    })

    app.filter('trustAsHtml', function($sce) {
        return function(html) {
            return $sce.trustAsHtml(html);
        };
    });


    function WorkSheetController($scope, HOJA_TRABAJO) {
        /*
         * PROPIEDADES
         */
        var workSheet = this;
        workSheet.data = HOJA_TRABAJO

        $scope.ckeditorOptions = {
            'height': 200,
            'toolbar': [
                { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'] },
                { name: 'links', items: ['Link', 'pasolink', 'Attachments'] },
                { name: 'insert', items: ['Table', 'SpecialChar'] },
                { name: 'tools', items: ['Maximize'] },
                { name: 'document', groups: ['mode', 'document', 'doctools'], items: [] },
                { name: 'others', items: ['-'] },
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'TextColor'] },
                { name: 'styles', items: ['Styles', 'Format'] }
            ],
            'removePlugins': 'elementspath',
            'extraPlugins': 'uploadimage,pastebase64,uploadfile,openlink,attach,colorbutton,pastefromexcel,colordialog,pasolink',
            'uploadUrl': url_for('proyecto/' + workSheet.data.proyecto.id + '/master_data/paso/' + workSheet.data.paso.id + '/upload?id_visita=' + workSheet.data.id_visita),
            'imageUploadUrl': url_for('proyecto/' + workSheet.data.proyecto.id + '/master_data/paso/' + workSheet.data.paso.id + '/upload?id_visita=' + workSheet.data.id_visita),
            'filebrowserUploadUrl': url_for('proyecto/' + workSheet.data.proyecto.id + '/master_data/paso/' + workSheet.data.paso.id + '/upload?id_visita=' + workSheet.data.id_visita + '&n=attachment'),
            'openlink_modifier': 0,
            'link_to_muestreo_enabled': true,
            'onAttachmentUpload': function(response, editor) {
                response = response.replace('<pre>', '').replace('<pre style="word-wrap: break-word; white-space: pre-wrap;">', '').replace('</pre>', '')
                var rs = JSON.parse(response)
                _.forEach(rs, function(r) {
                    if (r.uploaded) {
                        editor.insertHtml("<a href='" + r.url + "' target='_blank' class='proyecto-attachment' >" + r.fileName + "</a><br> ")
                    } else {
                        alert(r.error)
                    }
                })
                CKEDITOR.dialog.getCurrent().hide();
            }
        };

        workSheet.tab = _.find(workSheet.data.visitas, { is_current: true }).id_visita;

        workSheet.instruction = null;

        /*
         * METODOS
         */

        var generateRandomId = function(){
            return new Date().valueOf() + Math.random().toString(16).substr(2, 9);
        }

        var findCurrentVisita = function(){
            return _.findWhere(workSheet.data.visitas, { is_current: true })
        }


        workSheet.showTab = function(index) {
            if (workSheet.tab != index) {
                workSheet.data.visitas[index].is_current = !workSheet.data.visitas[index].is_current;
            }
        }


        workSheet.setTab = function(newTab) {
            workSheet.tab = newTab;
        };

        workSheet.isSet = function(tabNum) {
            return workSheet.tab === tabNum;
        };


        workSheet.editInstruction = function(instruction) {
            workSheet.instruction = instruction;

            CKEDITOR.replace('instruccion_editor', $scope.ckeditorOptions);

            $('#modal_visita_observations').modal('show');
        }

        workSheet.updateStatus = function(instruction, visita) {
            //console.log(instruction.action)
            if (instruction.action != "") {
                instruction.done = true;
                workSheet.updateProgress(visita);
            } else {
                instruction.done = false;
                workSheet.updateProgress(visita);
            }
        }

        workSheet.updateProgress = function(visita) {
            if (visita.instructions != null) {
                var total = visita.instructions.length
                var terminados = _.filter(visita.instructions, { done: true }).length;
                visita.progress = Math.floor(terminados * 100 / total)
            }
        }

        workSheet.disabledCheckbox = function(instruction) {
            if (instruction.action != "" || instruction.observations != "") {
                return false
            } else if (!instruction.done) {
                return true
            } else {
                return false
            }
        }

        workSheet.autoWidthTab = function() {
            var tabsActives = _.filter(workSheet.data.visitas, { is_current: true }).length;
            var tabWidth = 100 / tabsActives
            return { 'width': tabWidth + '%' }
        }

        workSheet.agregarInstruccion = function() {
            var visita = findCurrentVisita()
            visita.instructions.push({'id': generateRandomId() });
            setTimeout(function(){ $('.table-pasos').tableDnDUpdate(); }, 300);
            workSheet.updateProgress(visita)

        }


        workSheet.extractInstructionObservations = function(instruction){
            var observaciones = instruction.observations || ""
            observaciones = observaciones.trim();
            if( observaciones == "" ){
                return "";
            }

            var hasTables = /<table/.test(observaciones);
            var hasImages = /<img/.test(observaciones);

            var cleanHtml = observaciones.replace(/<img.*?>/gs, '')
            cleanHtml = cleanHtml.replace(/<table.*?\/table>/gs, '')
            cleanHtml = cleanHtml.replace(/<figure.*?\/figure>/gs, '')
            cleanHtml = cleanHtml.replace(/<\/p>/g, '<br>')
            cleanHtml = cleanHtml.replace(/<\/h\d>/g, '<br>')
            cleanHtml = cleanHtml.replace(/&nbsp;/g, '')

            cleanHtml = cleanHtml.replace(/<(?!br\s*\/?)[^>]+>/gs, '');
            cleanHtml = cleanHtml.replace(/<br>\s*<br>/gs, '<br>');

            return cleanHtml;
        }

        workSheet.init = function() {
            workSheet.updateProgress(workSheet.data.visitas[workSheet.tab]);

            $('#modal_visita_observations').on('hidden', function(){
                workSheet.instruction.observations = CKEDITOR.instances.instruccion_editor.getData();
                CKEDITOR.instances.instruccion_editor.destroy();
                $scope.$apply()
            });
        }

    }



})();

jQuery(document).ready(function() {

    $('.table-pasos').tableDnD();

})
