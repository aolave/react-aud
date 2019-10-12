
declare var mxGraph :any, mxUtils :any, mxCodec :any, mxClient :any;
declare interface JQueryStatic { blockUI(options?:any):void, unblockUI(options?:any):void }

const DRAW_IFRAME_URL = 'https://www.draw.io/?embed=1&proto=json&lang=es';

var graph :any = null;
var xml :any = null;
var doc = document.documentElement.outerHTML;

function edit(target :string){
  $.blockUI();
  setTimeout(function(){ $.unblockUI() }, 3000)

  var border = 0;
  var iframe = document.createElement('iframe');
  iframe.style.zIndex = '9999';
  iframe.style.position = 'absolute';
  iframe.style.top = border + 'px';
  iframe.style.left = border + 'px';

  if (border == 0)
  {
    iframe.setAttribute('frameborder', '0');
  }

  var close = function()
  {
    window.removeEventListener('message', receive);
    document.body.removeChild(iframe);
  };

  var resize = function()
  {
    iframe.setAttribute('width', ""+(document.body.clientWidth - 2 * border));
    iframe.setAttribute('height', ""+(document.body.clientHeight - 2 * border));
  };

  window.addEventListener('resize', resize);
  resize();

  var receive = function(evt :any)
  {
    if (evt.data.length > 0)
    {
      var msg = JSON.parse(evt.data);

      if(msg.event == "init")
      {
        let imgdata = ''
        if($(`#procesoimgcontainer-${target} img`).length > 0){
          imgdata = $(`#procesoimgcontainer-${target} img`).attr('src')
        }
        iframe.contentWindow.postMessage(JSON.stringify({action: 'load', autosave: 1, xmlpng: imgdata}), '*');
        resize();
      }
      else if (msg.event == 'export')
      {
        $(`#procesoimg-${target}`).val(msg.data)
        $(`#procesoimgcontainer-${target}`).html(`<img src="${msg.data}" />`)

        let form = $(`#procesoimg-${target}`).closest('form')
        form.find('button').show()
        form.addClass('changed')
      }
      else if (msg.event == 'autosave' || msg.event == "save")
      {
        iframe.contentWindow.postMessage(JSON.stringify({action: 'export', format: 'xmlpng', xml: msg.xml }), '*');
      }
      else if (msg.event == 'exit')
      {
        close();
      }
    }
  };

  window.addEventListener('message', receive);
  iframe.setAttribute('src', DRAW_IFRAME_URL);
  document.body.appendChild(iframe);
}


$('#tabpane-procesos').on('click', '.btn-edit-procesomap', function(){
  edit($(this).attr('data-href').substr(1));
})

$('#tabpane-procesos').on('click', '.btn-submit', function(){
  $(this).closest('form').removeClass('changed')
})
