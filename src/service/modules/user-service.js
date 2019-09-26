import {Fetch} from '../https';
import URL from '../url';

// 登录
export const asyncMobileLogin = options =>
  Fetch({
    url: URL.mobile.login,
    data: {
      ...options,
    },
  });
