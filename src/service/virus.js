import axios from "./axios.service";
import config from "../commons/config";
import AuthService from "./auth.service";

async function getVirus() {
  let typeReq = 'get'
  let service = '/virus'
  let serviceName = "GETUSERS";
  console.log('SERVICE: '+serviceName);
  let response = {data: {err: 0, status: 200, data: 'no error'}};
  try {
    response = await axios.get(config.urlAPI + service);
  } catch (err) {
    /* There are numerous reasons for the above request to fail:
       - no jwt token sent
       - invalid jwt token
       - invalid/malformed request
       - server/bdd is down
       . etc.
       All these cases are processed within method AuthService.handleRequestErrorService()
     */
    response = await AuthService.handleRequestErrorService(serviceName, err, typeReq, service, "");
  }
  return response.data;
}

export default {
  getVirus,
}