import axios from 'axios'

let config = {auth: ''}
export default {
  GET   : function (observer, url, params, headers) {
    headers  = headers || {}
    let http = axios.create({
      headers: Object.assign({'Authorization': config.auth}, headers)
    })
    delete params['headers']
    http.get(url, {
      params: params
    })
      .then(function (response) {
        observer.onNext(response.data)
      })
      .catch(function (error) {
        observer.onError(error)
      })
  },
  POST  : function (observer, url, params, headers) {
    headers  = headers || {}
    let http = axios.create({
      headers: Object.assign({'Authorization': config.auth}, headers)
    })
    delete params['headers']
    http.post(url, params)
      .then(function (response) {
        console.log(response)
        observer.onNext(response.data)
      })
      .catch(function (error) {
        observer.onError(error)
      })
  },
  PUT   : function (observer, url, params, headers) {
    headers  = headers || {}
    let http = axios.create({
      headers: Object.assign({'Authorization': config.auth}, headers)
    })
    delete params['headers']
    http.put(url, params)
      .then(function (response) {
        console.log(response)
        observer.onNext(response.data)
      })
      .catch(function (error) {
        observer.onError(error)
      })
  },
  DELETE: function (observer, url, params, headers) {
    headers  = headers || {}
    let http = axios.create({
      headers: Object.assign({'Authorization': config.auth}, headers)
    })
    delete params['headers']
    http.delete(url, {
      params: params
    })
      .then(function (response) {
        console.log(response)
        observer.onNext(response.data)
      })
      .catch(function (error) {
        observer.onError(error)
      })
  }
}
