import jwtInterceptor from "src/interceptor/index";
class UpdateWorkerData {
  async post(data) {
    return await jwtInterceptor.post("human-resource/education", data);
  }
}
export default new UpdateWorkerData();
