
export function checkError(input, state, props) {
  // error = { name: '', phone: '', email: '' }
  let error = { ...state.error }

  // validate the inputs
  if (input === 'name' || input === 'all') {
    if (!state.name) {
      error.name = '請輸入姓名';
    } else {
      error.name = '';
    }
  }
  if (input === 'phone' || input === 'all') {
    const number = /^[\d-]+$/;
    if (state.phone && !state.phone.match(number)) {
      error.phone = '請輸入數字';
    } else {
      error.phone = '';
    }
  }
  if (input === 'email' || input === 'all') {
    const valid = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (!state.email) {
      error.email = '請輸入電子信箱';
    } else if (!state.email.match(valid)) {
      error.email = '請輸入有效的電子信箱';
    } else {
      error.email = '';
    }
  }
  // return error Object
  return error;
}