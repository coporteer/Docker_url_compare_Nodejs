/*
이 코드는 docker run -e url1="주소" , url2 = "주소"로 주어지는 두개의 URL을 비교하고 결과값을 출력합니다. 원래 목표는 택배등 배송추척할때 추척 사이트에 변화가 생기면 쉽게 알 수 있도록 하는 것이었습니다. 
하지만 광고 등에도 반응하다보니 단순한 HTML 비교용으로 쓰거나 시간마다 사이트의 변화내용을 보는데 사용하는 것이 좋을 것 같습니다.
*/

var request = require('request');
var hiff = require('hiff');

var url1 = process.env.url1; // docker run -e url1에서 변수를 받아옵니다. 주소에 반드시 http(s)://가 포함되어야합니다!
var url2 = process.env.url2; // docker run -e url2에서 변수를 받아옵니다. 주소에 반드시 http(s)://가 포함되어야합니다!

// 콜백으로 각각의 주소에서 HTML을 받아옵니다. 원래는 한개로 합치고 싶었지만 에러가 넘 많아서 2개로 나누어서 진행합니다.
var get_html1 = function(callback) {
  
    request.get(url1,function(error, response, body){
      var body1 = body;
      return callback(body1); 
    });
};
var get_html2 = function(callback) {
  
  request.get(url2,function(error, response, body){
    var body2 = body;
    return callback(body2); 
  });
};

// 각각의 request에서 받아온 HTML을 비교합니다. 원래는 request에서 각가의 URL의 HTML을 전역변수로 넘겨주는 방식을 쓰고 싶었지만 
// Callback을 잘 못 다뤄서인지, 쉽게 되지않아서 2개의 콜백을 동시에 걸고 비교를 했습니다.
// url1 -> get_html1 -> body1 / url2 -> get_html2 -> body2

get_html1(function(body1){

  get_html2(function(body2){

    var result = hiff.compare(body1, body2);

    if (result.different) {
        console.log("HTML fragments are different, changes:");
        result.changes.map(function(change) {
        console.log("In node " + change.before.parentPath + ":\n\t" + change.message);
        });
      } else {
        console.log("No changes found.");
  }
  });
});

// 혹시 Callback이 잘 넘어가지 않을때는 아래 콘솔로 찍어내서 확인해보시는 것이 좋습니다.

/*
get_html1(function(body1){
  console.log(body1);
});
*/

//테스트 명령어: docker run -i --rm -e url1="https://www.google.com" -e url2="https://www.google.com" url-compare
//위 처럼하면 두개의 url이 다르다고 나오는데 정상입니다!