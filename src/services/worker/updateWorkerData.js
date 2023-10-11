import jwtInterceptor from "src/interceptor/index";
class UpdateWorkerData {
  async post(data) {
    return await jwtInterceptor.post("human-resource/education", data);
  }
  async get(param) {
    return await jwtInterceptor.get("human-resource/education", {
      params: param,
    });
  }
}
export default new UpdateWorkerData();
