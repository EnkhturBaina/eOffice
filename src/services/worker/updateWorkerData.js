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
  async postWork(data) {
    return await jwtInterceptor.post("human-resource/experience", data);
  }
  async getWork(param) {
    return await jwtInterceptor.get("human-resource/experience", {
      params: param,
    });
  }
  async postFamily(data) {
    return await jwtInterceptor.post("human-resource/family", data);
  }
  async getFamily(param) {
    return await jwtInterceptor.get("human-resource/family", {
      params: param,
    });
  }
}
export default new UpdateWorkerData();
