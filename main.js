window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.jQuery.ajax = function ({ url, method, body, success, fail }) {
  let request = new XMLHttpRequest()
  request.open(method, url)  //配置request
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      console.log('请求响应都完毕了')
      if (request.status >= 200 && request.status < 300) {
        console.log('说明请求成功')
        success.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        console.log('说明请求失败')
        fail.call(undefined, request)
      }
    }
  }
  request.send(body)
}

myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    success: (x) => {
      console.log(x)
    },
    fail: (x) => {
      console.log(x)
    }
  })
})