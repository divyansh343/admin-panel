import Router from 'next/router';
import {
  toast
} from "react-hot-toast"
export const toastify = (msg) => {
  toast.success(msg);
}
export const setCookie = (value) => {
  localStorage.setItem('token', value)
  console.log('token set as cookie!!')
}

export const getCookie = () => {
  let token = localStorage.getItem('token')
  return token;
}

export const isAuth = () => {
  if (getCookie() !== null) {
    return true
  } else {
    return false
  }
}

export const signOut = () => {
  localStorage.removeItem("token");
  Router.push('/')
  toastify("user logged out")
}
