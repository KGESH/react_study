import React, { useEffect } from 'react';
import KakaoSdkInit from 'services/kakao/KakaoSdkInit';
import useExternalScript from 'hooks/useExternalScript';

const KakaoLoginButton = () => {
  const redirectUri = `http://localhost:4010/auth/kakao/KakaoCallback`;
  const REST_KEY = 'a5425f765fe84a925039fada5e2cd80c';
  const state = 'KakaoAuth';

  useEffect(() => {
    KakaoSdkInit();
  }, []);
  return (
    <button
      onClick={() => {
        window.Kakao.Auth.authorize({
          redirectUri,
          state,
        });
      }}
    >
      카카오로 로그인
    </button>

    //<a href={redirectUri}>kakao login</a>
  );
};

export default KakaoLoginButton;
