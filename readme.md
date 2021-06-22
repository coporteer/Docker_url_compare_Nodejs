## 목차

- [목차](#목차)
- [빠른_시작](#빠른_시작)
- [주의할_점](#주의할_점)
- [참고한_자료들](#참고한_자료들)

## 빠른_시작

 ```bash
 docker pull swoho0325/url-compare
 ```

 ```bash
 docker run -i --rm -e url1="https://www.google.com" -e url2="https://www.google.com" swoho0325/url-compare
 ```

 이렇게 -e 명령어로 url을 지정해주면 받은 2개의 URL을 비교해서 알려준다.  

 HTML에서 차이가 있을경우:

 ```bash
 ## docker run -i --rm -e url1="https://www.google.com" -e url2="https://www.google.com" swoho0325/url-compare
 
 HTML fragments are different, changes:
In node html > head:
        Removed:  <script nonce="PTJ5/ijqSwO4qRiLPqv/jg==">...</script>
In node html > head:
        Added:    <script nonce="oMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > head:
        Removed:  <script nonce="PTJ5/ijqSwO4qRiLPqv/jg==">...</script>
In node html > head:
        Added:    <script nonce="oMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > div#mngb > div#gb:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">window.gbar&&gbar.eli&&gbar.eli()</script>
In node html > body > div#mngb > div#gb > div#gbw > div#gbz > ol#gbzc > li.gbt:nth-of-type(9):
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > div#mngb > div#gb > div#gbw > div#gbz > ol#gbzc > li.gbt:nth-of-type(9) > div#gbd > div#gbmmb > ol#gbmm > li.gbmtc:nth-of-type(10):
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > div#mngb > div#gb > div#gbw > div#gbg > ol.gbtc > li.gbt:nth-of-type(3):
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > div#mngb > div#gb:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">window.gbar&&gbar.elp&&gbar.elp()</script>
In node html > body > center > form > table > tr > td:nth-of-type(2) > div.ds > div:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > center > form > table > tr > td:nth-of-type(2) > span.ds:nth-of-type(2) > span.lsbb:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > center > form > table > tr > td:nth-of-type(2) > span.ds:nth-of-type(2) > span.lsbb:
        Modified: <input value="AINFCbYAAAAAYMrB9BxXB6KEXud0enWVnphN1r_VgGiEAINFCbYAAAAAYMrB9Xe4iNzGs_foZDJFJ6VgU7L5zkIV" name="iflsig" type="hidden">
In node html > body > center > form:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body > center > span#footer > div > div#WqQANb:
        Modified: <a href="https://www.google.com/setprefdomain?prefdom=KR&amp;prev=https://www.google.co.kr/&amp;sig=K_MhAZ_yydx8JNvgqOAa4cFdzYbWIK_AHT7LVbMGJjag_3ls_Mh1VFZZS0%3D">Google.co.kr</a>
In node html > body:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">...</script>
In node html > body:
        Modified: <script nonce="PTJ5/ijqSwO4qRiLPqv/jgoMLWBL4DGH2psoaMW1zr8Q==">(function(){google.xjs={ck:'',cs:'',excm:[],pml:false};})();</script>
In node html > body:
        Removed:  <script nonce="PTJ5/ijqSwO4qRiLPqv/jg==">...</script>
In node html > body:
        Added:    <script nonce="oMLWBL4DGH2psoaMW1zr8Q==">...</script>
 ```

 HTML이 같을 경우:

 ```bash
 ## docker run -i --rm --name url-compare -e url1="https://ehtls.lge.co.kr/dt/deliveryTracking/DeliveryTrackingDtl.do;jsessionid=68H2hvAfVyy3qr+Utf2ZPTIh.node_htls_13?devStatusType=order&typeAbsence=&originSeqNo=DE435C805CF389C0116EA2053BB75017%7CTALK&talkSendType=R&devStatusNm=%EC%A3%BC%EB%AC%B8%EC%99%84%EB%A3%8C&ordNo=1073011386-1.1.2&originOrdNo=1073011386-1.1.2&originShpSubNo=1&modelSuffixCd=OLED55BXFNA&shpSubNo=1&shpQty=1&delivWishYmd=&arriveExpectTime=&storeFullnm=LG%EC%A0%84%EC%9E%90+%EA%B3%B5%EC%8B%9D%ED%8C%90%EB%A7%A4%EC%A0%90+%EC%8B%A0%EC%98%81&imgPath=%2Ficon-television.png&prodType=TV&ordStatusNm=%EC%A3%BC%EB%AC%B8%EC%9D%B4+%EC%A0%91%EC%88%98%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4." -e url2="https://ehtls.lge.co.kr/dt/deliveryTracking/DeliveryTrackingDtl.do;jsessionid=68H2hvAfVyy3qr+Utf2ZPTIh.node_htls_13?devStatusType=order&typeAbsence=&originSeqNo=DE435C805CF389C0116EA2053BB75017%7CTALK&talkSendType=R&devStatusNm=%EC%A3%BC%EB%AC%B8%EC%99%84%EB%A3%8C&ordNo=1073011386-1.1.2&originOrdNo=1073011386-1.1.2&originShpSubNo=1&modelSuffixCd=OLED55BXFNA&shpSubNo=1&shpQty=1&delivWishYmd=&arriveExpectTime=&storeFullnm=LG%EC%A0%84%EC%9E%90+%EA%B3%B5%EC%8B%9D%ED%8C%90%EB%A7%A4%EC%A0%90+%EC%8B%A0%EC%98%81&imgPath=%2Ficon-television.png&prodType=TV&ordStatusNm=%EC%A3%BC%EB%AC%B8%EC%9D%B4+%EC%A0%91%EC%88%98%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4." swoho0325/url-compare

 No changes found.
 ```

## 주의할_점

 1. URL에 반드시 ```http(s)://```가 들어가야한다. 원래는 미리 변수에 추가해놓을까도 싶었지만 생각보다 ssl을 지원하지않는 사이트들이 많아서 아예 http부터 입력하도록 만들었다.
 2. parent 관련 오류는 사이트 주소가 맞지않거나 http 등이 입력되지않아서 발생한다. 주소를 2번 확인해야한다.
 3. 위에 구글주소처럼 약간의 차이(광고 등)로도 HTML이 다르다고 판단한다. 그래서 단순한 HTML 비교용으로 사용하는 것이 최선일 것 같다.
 4. 주기적으로 HTML을 비교하기위해 사용하려면 리눅스의 cron이나 윈도우의 스케줄러에 bat을 등록해서 사용하자

## 참고한_자료들
 
 1. https://stackoverflow.com/questions/27749515/cannot-read-property-parent-of-undefined-node-js/29311032
 2. https://stackoverflow.com/questions/37800561/node-js-return-html-as-a-variable
 3. https://stackoverflow.com/questions/6968448/where-is-body-in-a-nodejs-http-get-response
 4. https://stackoverflow.com/questions/26721994/return-json-body-in-request-nodejs
 5. https://stackoverflow.com/questions/25140364/how-make-multiple-requests-in-node-js