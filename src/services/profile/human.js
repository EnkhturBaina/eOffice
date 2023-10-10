import jwtInterceptor from "src/interceptor/index";
class Human {
  async get() {
    return await jwtInterceptor.get("human");
  }
}
export default new Human();
