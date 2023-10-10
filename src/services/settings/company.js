import jwtInterceptor from "src/interceptor/index";
class CompanyServices {
  async get() {
    return await jwtInterceptor.get("settings/companies");
  }
}
export default new CompanyServices();
