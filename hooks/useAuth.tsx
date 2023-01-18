import React from 'react'
import { RegisterType } from '../types'
import axios from "axios";
import { REGİSTER_URL } from '../constant/urls';

const useAuth = () => {
  const register = async (registerInfo: RegisterType) => {
    try {
      const {data} =await axios.post(REGİSTER_URL, registerInfo)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }


  return ()
}

export default useAuth