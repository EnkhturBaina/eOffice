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
  async postTech(data) {
    return await jwtInterceptor.post("human-resource/itech", data);
  }
  async getTech(param) {
    return await jwtInterceptor.get("human-resource/itech", {
      params: param,
    });
  }
  async postTechItems(data) {
    return await jwtInterceptor.post("human-resource/itech-items", data);
  }
  async getTechItems(param) {
    return await jwtInterceptor.get("human-resource/itech-items", {
      params: param,
    });
  }
  async postDoctor(data) {
    return await jwtInterceptor.post("human-resource/doctor", data);
  }
  async getDoctor(param) {
    return await jwtInterceptor.get("human-resource/doctor", {
      params: param,
    });
  }
  async postContract(data) {
    return await jwtInterceptor.post("human-resource/contract", data);
  }
  async getContract(param) {
    return await jwtInterceptor.get("human-resource/contract", {
      params: param,
    });
  }
  async postDescription(data) {
    return await jwtInterceptor.post("human-resource/description", data);
  }
  async getDescription(param) {
    return await jwtInterceptor.get("human-resource/description", {
      params: param,
    });
  }
  async postMistakes(data) {
    return await jwtInterceptor.post("human-resource/mistakes", data);
  }
  async getMistakes(param) {
    return await jwtInterceptor.get("human-resource/mistakes", {
      params: param,
    });
  }
  async postSocials(data) {
    return await jwtInterceptor.post("human-resource/socials", data);
  }
  async getSocials(param) {
    return await jwtInterceptor.get("human-resource/socials", {
      params: param,
    });
  }
  async postVacation(data) {
    return await jwtInterceptor.post("human-resource/vacation", data);
  }
  async getVacation(param) {
    return await jwtInterceptor.get("human-resource/vacation", {
      params: param,
    });
  }
}
export default new UpdateWorkerData();
