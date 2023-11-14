import jwtInterceptor from "src/interceptor/index";
class ReferenceService {
  async removeUploadImage(id) {
    return await jwtInterceptor.delete("local-files/" + id);
  }
  async getImage(id) {
    return await jwtInterceptor.get("local-files/" + id, {
      responseType: "blob",
    });
  }
}
export default new ReferenceService();
