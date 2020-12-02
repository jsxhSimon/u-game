interface ValidatorResult {
  valid: boolean;
  msg?: string;
}

export const userNameValidator = (userName): ValidatorResult => {
  if (userName) {
    if (userName.length < 6) {
      return {valid: false, msg: '用户名长度不能低于6位'}
    }
  } else {
    return {valid: false, msg: '用户名不能为空'}
  }
  return {valid: true}
}

export const passWordValidator = (password): ValidatorResult => {
  if (password) {
    if (password.length < 6) {
      return {valid: false, msg: '用户名长度不能低于6位'}
    }
  } else {
    return {valid: false, msg: '密码不能为空'}
  }
  return {valid: true}
}

/**
 * 校验密码是否满足最新的规则
 * @param val 密码
 * @param username 用户名
 */
export const pwdValidator = (val, username): ValidatorResult => {
  if (val) {
    let str = ['012345', '123456', '234567', '345678', '456789', '567890', '098767', '987654', '876543', '765432', '654321', '543210']
    if (username && val === username) {
      return {valid: false, msg: '密码不能与用户名相同'}
    }
    if (str.some(item => val.indexOf(item) !== -1)) {
      return {valid: false, msg: '密码中不能包含连续的6位数字'}
    }
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    if (reg.test(val)) {
      return {valid: true}
    } else {
      return {valid: false, msg: '密码由6-20位的字母和数字组成'}
    }
  } else {
    return {valid: false, msg: '密码不能为空'}
  }
}