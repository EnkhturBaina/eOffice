import jwtInterceptor from "src/interceptor/index";
class Company {
  async postCompany(data) {
    return await jwtInterceptor.post("settings/companies", data);
  }
  async getCompany(param) {
    return await jwtInterceptor.get("settings/companies", {
      params: param,
    });
  }
  async postTree(data) {
    return await jwtInterceptor.post("settings/tree", data);
  }
  async getTree(param) {
    return await jwtInterceptor.get("settings/tree", {
      params: param,
    });
  }
}
export default new Company();
