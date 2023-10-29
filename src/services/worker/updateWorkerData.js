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
  async postContact(data) {
    return await jwtInterceptor.post("human-resource/contact", data);
  }
  async getContact(param) {
    return await jwtInterceptor.get("human-resource/contact", {
      params: param,
    });
  }
  async postAptitude(data) {
    return await jwtInterceptor.post("human-resource/aptitude", data);
  }
  async getAptitude(param) {
    return await jwtInterceptor.get("human-resource/aptitude", {
      params: param,
    });
  }
  async postAward(data) {
    return await jwtInterceptor.post("human-resource/award", data);
  }
  async getAward(param) {
    return await jwtInterceptor.get("human-resource/award", {
      params: param,
    });
  }
  async postLanguage(data) {
    return await jwtInterceptor.post("human-resource/language", data);
  }
  async getLanguage(param) {
    return await jwtInterceptor.get("human-resource/language", {
      params: param,
    });
  }
  async postTraining(data) {
    return await jwtInterceptor.post("human-resource/training", data);
  }
  async getTraining(param) {
    return await jwtInterceptor.get("human-resource/training", {
      params: param,
    });
  }
}
export default new UpdateWorkerData();
