console.log('login loaded');

let login = (username, password) => {
  if (username !== 'admin' || password !== 'things') {
    console.log('incorrect login');
  }
}

login('admin', 'other things');
