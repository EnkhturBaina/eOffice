import jwtInterceptor from 'src/interceptor/index';
class Test {
   async get() {
      return await jwtInterceptor.get('test');
   }
}
export default new Test();
