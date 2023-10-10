import jwtInterceptor from "src/interceptor/index";
class CountryServices {
  async get(param) {
    return await jwtInterceptor.get("settings/country", {
      params: param,
    });
  }
}
export default new CountryServices();
