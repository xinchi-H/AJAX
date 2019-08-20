window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () { }
  nodes.html = function () { }
  return nodes
}

window.jQuery.ajax = function ({ url, method, body }) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest()
    request.open(method, url)  //配置request
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        console.log('请求响应都完毕了')
        if (request.status >= 200 && request.status < 300) {
          console.log('说明请求成功')
          resolve.call(undefined, request.responseText)
        } else if (request.status >= 400) {
          console.log('说明请求失败')
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}

myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
  }).then(
    (text) => { console.log(text) },
    (request) => { console.log(request) }
  )
})