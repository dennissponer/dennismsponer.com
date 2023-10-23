var ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};
ready(() => {
  window.location.href = 'https://srxadvisors.com/';
  document.querySelector('.header').style.height = window.innerHeight + 'px';
});
