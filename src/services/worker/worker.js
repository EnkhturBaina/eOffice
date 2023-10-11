import jwtInterceptor from "src/interceptor/index";
class Worker {
  async get() {
    return await jwtInterceptor.get("worker");
  }
}
export default new Worker();
