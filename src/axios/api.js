import axios from "axios";

// axios.create의 입력값으로 들어가는 객체는 configuration 객체에요.
// https://axios-http.com/docs/req_config
// 위 주소를 참고해주세요!
const api = axios.create({
	baseURL: "http://13.125.62.168",
});

api.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행 
    // 헤더에 토큰넣기
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("인터넵트 응답 받았어요!");
    // 정상 응답
    return response;
  },

  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    // status code에 따른 공통 에러 처리를 해주실 수 있어요 ! 
    return Promise.reject(error);
  }
);

export default api;