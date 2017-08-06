import Rx from 'rx'
import http from './../http'

export default {
  getUser: function (params) {
    return Rx.Observable.create(function (observer) {
      http.GET(observer, 'https://jsonplaceholder.typicode.com' + '/users/'+ params.id , {id:  params.id})
      return function () {console.log('disposed')}
    })
  }
}
