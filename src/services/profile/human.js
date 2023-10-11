import jwtInterceptor from "src/interceptor/index";
class Human {
  async get() {
    return await jwtInterceptor.get("human");
  }
  async post(data) {
    return await jwtInterceptor.post("human-resource", data);
  }
}
export default new Human();
