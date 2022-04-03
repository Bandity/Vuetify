import axios from "./axios.service";
import config from "../commons/config.js";
import {ERR_UNDEFINED, ERR_NETWORK} from "../commons/errors";


async function handleRequestErrorService(serviceName, err) {

  if (err.response) {
    console.log("ERROR while calling SERVICE " + serviceName + ": " + JSON.stringify(err.response));
    return err.response; // pass the whole object from server
  }
  else if (err.request) {
    console.log("NETWORK ERROR while calling SERVICE "+serviceName+ ": " + JSON.stringify(err.request));
    return {
      data: {
        err: ERR_NETWORK,
        status: 404,
        data: 'Le serveur est injoignable ou l\'URL demandée n\'existe pas'
      }
    };
  }
  else {
    console.log("UNKNOWN ERROR while calling SERVICE "+serviceName);
    return {
      data: {
        err: ERR_UNDEFINED,
        status: 404,
        data: 'Erreur inconnue'
      }
    };
  }
}

function authHeader() {
  // get the token in the browser local storage
  // it could be from the vuex store, but in this case, we must import it.
  let userdata = JSON.parse(localStorage.getItem('userdata'));

  if (userdata && userdata.xsrfToken) {
    // for Node.js Express back-end
    return {'x-xsrf-token': userdata.xsrfToken};
  } else {
    return {};
  }
}

async function loginService(user) {
  //let typeReq = 'post'
  let service = '/auth/signin'
  let serviceName = "LOGIN";
  console.log('SERVICE: '+serviceName);
  let response = {data: {err: 0, status: 200, data: 'no error'}};
  try {
    response = await axios.post(config.urlAPI + service, user);
  } catch (err) {
    response = await handleRequestErrorService(serviceName, err)
  }
  return response.data;
}

export default {
  authHeader,
  loginService,
  handleRequestErrorService,
}