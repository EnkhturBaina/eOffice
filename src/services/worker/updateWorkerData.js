import jwtInterceptor from "src/interceptor/index";
class UpdateWorkerData {
  async postEdu(data) {
    return await jwtInterceptor.post("human-resource/education", data);
  }
  async getEdu(param) {
    return await jwtInterceptor.get("human-resource/education", {
      params: param,
    });
  }
  async postSkill(data) {
    return await jwtInterceptor.post("human-resource/aptitude", data);
  }
  async getSkill(param) {
    return await jwtInterceptor.get("human-resource/aptitude", {
      params: param,
    });
  }
}
export default new UpdateWorkerData();
